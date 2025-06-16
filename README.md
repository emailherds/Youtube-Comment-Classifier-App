<div align="center" id="user-content-toc">   
     <ul align="center" style="list-style: none;">
          <summary>
              <h2 align="center">Youtube Comment Classifier</h2>
          </summary>
      </ul
  <a href="(https://github.com/emailherds/Youtube-Comment-Classifier-App)">
    <img src="frontend/public/Youtube_logo.png" alt="Logo" width="150" height="100">
  </a>
    <br />
    <br />
    <p>Easily find toxic comments</p>
</div>

## Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Demo](#demo)
- [Installation and Setup](#installation-and-setup)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)

## About

This application fetches YouTube comments for any youtube url, runs them through an [LSTM-based sentiment/toxicity classifier](https://github.com/emailherds/Comment-Classifier), and presents the results in an intuitive frontend UI. It’s useful for content creators or moderators who want to quickly flag potentially harmful comments and understand overall sentiment.

## Features

 **Comment Retrieval**  
  Fetch comments from any public YouTube video using the YouTube Data API. Show video metadata (title, channel name, thumbnail) alongside comments to give context.

 **Sentiment/Toxicity Classification**  
  Apply a bidirectional LSTM model that predicts six categories:  
  - **Toxic**: general negative or harmful language  
  - **Obscene**: profanity or explicit content  
  - **Insult**: directed attacks at a person or group  
  - **Identity Hate**: hateful language toward protected groups  
  - **Threat**: explicit threats of violence or harm  
  - **Severe Toxic**: extremely harmful or violent content  
  For each comment, display a percentage confidence score for every category so users understand how certain the model is.

 **Probability Visualization**  
  Render confidence scores visually next to each comment. Highlight comments exceeding a certain threshold (classifying as positve/negative), making it easy to spot high-risk comments at a glance.

 **Interactive UI & Filtering**  
  Provide an intuitive interface where users can:  
  - Search within comments by keywords  
  - Filter comments by predicted label, confidence threshold, date posted, or like count  
  - Sort results (e.g., highest toxicity first)  

## Demo
<div>
      <img src="frontend/public/youtube_comment_classifier_demo.gif" alt="Logo" width="700" height="400"/>
</div>

## Tech Stack

### Frontend
<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React badge"><br>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS badge"><br>
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite badge"><br>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript badge">
</p>

### Backend
<p>
  <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="React badge"><br>
  <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=TensorFlow&logoColor=white" alt="Tailwind CSS badge"><br>
  <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Vite badge"><br>
  <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white">
</p>

## How It Works

- **Input**: User provides a YouTube video URL. <br>
- **Data Collection**: Backend fetches video metadata and comments via YouTube API. <br>
- **Processing**: Comments are analyzed by the LSTM model for sentiment classification. <br>
- **Visualization**: Results are displayed showing sentiment probabilities for each comment. <br>

## Installation and Setup

### Prerequisites
- Node.js (v14+)
- Python (v3.8+)
- YouTube API key

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
# Create a .env file with your YouTube API key
echo "YOUTUBE_API_KEY=your_api_key_here" > .env

# Start the server
python app.py
```
