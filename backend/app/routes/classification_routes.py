# classification_routes.py
from flask import Blueprint, request, jsonify
from app.models.classifier import classify_comment
from app.utils.youtube_service import get_youtube_comments


classification_bp = Blueprint('classification_bp', __name__)


@classification_bp.route('/classify', methods=['POST'])
def classify():
    data = request.get_json()
    comment_text = data.get('comments')
    
    if not isinstance(comment_text, list):
        return jsonify({"error": "comments should be a list"}), 400
    
    if not comment_text:
        return jsonify({"error": "No comment provided"}), 400
    classification = {}
    
    for comment in comment_text:
        classification[comment] = classify_comment(comment)
    return jsonify({"classification": classification})


@classification_bp.route('/classify_video', methods=['POST'])
def classify_video():
    data = request.get_json()
    url = data.get('video_url')
        
    if not url:
        return jsonify({"status":"error", "data": {"error": "No video_id provided"}}), 400

    # Fetch comments from the YouTube API
    yt_response = get_youtube_comments(url, 30)
    
    # Check if error in fetching comments from api
    if isinstance(yt_response, dict) and "error" in yt_response:
        return jsonify({"status": "error", "data": yt_response}), 400

    # Classify each comment
    commentsList = []
    comments = yt_response["comments"]
    
    for i in range(len(comments)):
        comment = comments[i]
        classification_result = classify_comment(comment["text"])
    
        commentsList.append({
            "comment_id": i,
            "comment": comment["text"],
            "comment_author": comment["author_name"],
            "comment_author_icon": comment["author_icon"],
            "classification": classification_result
        })
        
    result_response = {
        "video_id": url,
        "video_title": yt_response["video_title"],
        "channel": yt_response["channel"],
        "commentsList": commentsList
    }

    return jsonify({"status": "success", "data": result_response})