<div align="center" id="user-content-toc">
    <ul align="center" style="list-style: none;">
      <summary>
      <h2 align="center">Youtube Comment Classifier</h2>
      </summary>
  </ul>
  
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

This is a full-stack application that fetches YouTube comments for any youtube url, runs them through an [LSTM-based sentiment/toxicity classifier](https://github.com/emailherds/Comment-Classifier), and presents the results in an intuitive frontend UI. It’s useful for content creators or moderators who want to quickly flag potentially harmful comments and understand overall sentiment.

## Features

<details>
  <summary><strong>Comment Retrieval</strong></summary>
  <p>
    • Fetch comments from any public YouTube video via the YouTube Data API.<br />
    • Display video details on the interface.
  </p>
</details>

<details>
  <summary><strong>Sentiment/Toxicity Classification</strong></summary>
  <p>
    • Use an bidirection LSTM model to label comments on six categories (Toxic, Obscene, Insult, Identity Hate, Threat, Severe Toxic).<br />
    • Return confidence scores in a percentage for each category to show how sure a model is of a prediction.<br />
  </p>
</details>

<details>
  <summary><strong>Interactive UI & Filtering</strong></summary>
  <p>
    • Intuitive interface that allows for quick retrieval of comment sentiment.<br />
    • Enable searching within comments and filtering by label, confidence, date, or likes.<br />
  </p>
</details>

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

1. **Input**: User provides a YouTube video URL
2. **Data Collection**: Backend fetches video metadata and comments via YouTube API
3. **Processing**: Comments are analyzed by the LSTM model for sentiment classification
4. **Visualization**: Results are displayed showing sentiment probabilities for each comment

## Demo
<div>
      <img src="frontend/public/youtube_comment_classifier_demo.gif" alt="Logo" width="700" height="400"/>
</div>

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
