# app/models/classifier.py
import pickle
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences

MODEL_PATH = 'app/models/comment_classifier.h5'
#using pickle, we can convert python objects into a byte stream, and then save that stream to a file
#byte stream is a sequence of bytes that programs to read and write information
TOKENIZER_PATH = 'app/models/tokenizer.pkl'

model = load_model(MODEL_PATH)

with open(TOKENIZER_PATH, 'rb') as f:
    tokenizer = pickle.load(f)

classes = ["toxic", "severe_toxic", "obscene", "threat", "insult", "identity_hate", "positive"]

def classify_comment(comment_text, max_length=250):
    #maps each word to an integer
    sequence = tokenizer.texts_to_sequences([comment_text])
    
    #adds padding of zeros at the end of the sequence
    padded_sequence = pad_sequences(sequence, maxlen=max_length, padding='post')
    
    # Model prediction => shape: (1, 6)
    try:
        prediction = model.predict(padded_sequence)[0]  # Now shape: (6,)
    except Exception as e:
        return {"error": "Error with predicting"}

    prob_dict = {
        cls: float(prob) for cls, prob in zip(classes, prediction)
    }

    # Best label shows the class that describes the best:
    best_label_index = np.argmax(prediction) if np.max(prediction) > 0.8 else 6
    best_label = classes[best_label_index]

    return {
        "probabilities": prob_dict,
        "best_label": best_label
    }