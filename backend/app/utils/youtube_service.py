import logging
import re
import os
from googleapiclient.discovery import build
from dotenv import load_dotenv

# logger = logging.getLogger(__name__)
# logger.debug("Raw response %s",response)
# logger.debug("items in response: %s",response["items"])

load_dotenv()
API_KEY = os.getenv("YOUTUBE_API_KEY")

def get_youtube_comments(video_url, max_results=20):
    #regular expression to find the video id from url
    try:
        matches = re.findall("(?<=v=)[a-zA-Z0-9]+(?=&|$)", video_url)
        if not matches:
            raise ValueError("Video ID not found in URL.")
        video_id = matches[0]
    except Exception as e:
        return {"error": "Invalid video URL. Could not extract video ID."}
    
    
    #creates youtube service object
    try:
        youtube = build("youtube", "v3", developerKey=API_KEY)
    except Exception as e:
        return {"error": "Failed to build YouTube client."}
    
        
    comments = []
    video_data = {
        "video_title": "",
        "channel": "",
        "comments": []
    }
    
    
    try:
        video_response = youtube.videos().list(
            part="snippet",
            id=video_id
        ).execute()
        if not video_response.get("items"):
            return {"error": "Video not found or is unavailable."}
            
        video_snippet = video_response["items"][0]["snippet"]
        video_data["video_title"] = video_snippet["title"]
        video_data["channel"] = video_snippet["channelTitle"]
    except Exception as e:
        return {"error": "Unable to retrieve video information from youtube api."}
    

    #API Request for a list of comments of size max results
    try:
        response = youtube.commentThreads().list(
            part="snippet",
            videoId=video_id,
            maxResults=min(max_results, 100),
            order="relevance",
            textFormat="plainText"
        ).execute()    
    
        for item in response["items"]: 
            top_comment_snippet = item["snippet"]["topLevelComment"]["snippet"] #need to go in multiple levels to fetch the actual comment data
            top_comment = top_comment_snippet["textOriginal"]
            author_name = top_comment_snippet["authorDisplayName"]
            author_icon_url = top_comment_snippet["authorProfileImageUrl"]
            comments.append({"text": top_comment,
                                "author_name": author_name,
                                "author_icon": author_icon_url})                 
    except Exception as e:
        return {"error": "Unable to retrieve comments from youtube api."}
        
    video_data["comments"] = comments

    return video_data


