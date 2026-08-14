# 🎬 CineMatch — AI-Powered Movie Recommendation Platform

CineMatch is a full-stack **AI-powered movie recommendation platform** built with **Next.js, Node.js, Python, and Machine Learning**.

The application combines a modern web interface with a Machine Learning recommendation engine to provide personalized movie recommendations.

## ✨ Features

* 🎬 Browse and discover movies
* 🔍 Search for movies
* 🤖 **Machine Learning-based movie recommendations**
* 🎯 Personalized recommendations
* 👤 User registration and authentication
* 🔐 Protected routes
* 👨‍💻 User profile
* 💎 Premium features
* 💳 Online subscription/payment integration
* 📱 Responsive UI
* ⚡ Modern Next.js frontend
* 🐍 Python-based ML server
* 🔗 REST API communication between frontend, backend and ML service

## 🧠 Machine Learning

The recommendation system is powered by a **Python Machine Learning service**.

The ML service is responsible for processing movie data and generating movie recommendations based on the recommendation algorithm.

### ML Pipeline

```text
Movie Dataset
     ↓
Data Preprocessing
     ↓
Feature Extraction
     ↓
Machine Learning Algorithm
     ↓
Recommendation Engine
     ↓
Python API Server
     ↓
Node.js Backend
     ↓
Next.js Frontend
     ↓
Recommended Movies
```

## 🛠️ Tech Stack

### Frontend

* Next.js
* React
* JavaScript
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* REST API
* JWT / Cookies

### Machine Learning

* Python
* Pandas
* NumPy
* Scikit-learn
* Machine Learning Recommendation Algorithm
* Movie Dataset

### ML API Server

* Python
* FastAPI / Flask
* REST API
* JSON-based communication

### Payment

* Razorpay

### Movie Data

* TMDB API

## 🏗️ System Architecture

```text
                   ┌──────────────────┐
                   │   Next.js App    │
                   │    Frontend      │
                   └────────┬─────────┘
                            │
                            │ REST API
                            ↓
                   ┌──────────────────┐
                   │   Node.js +      │
                   │   Express.js     │
                   └───────┬─────┬────┘
                           │     │
                  ┌────────┘     └─────────┐
                  ↓                        ↓
          ┌──────────────┐         ┌──────────────┐
          │   MongoDB    │         │ Python ML    │
          │   Database   │         │    Server    │
          └──────────────┘         └──────┬───────┘
                                          │
                                          ↓
                                  ┌──────────────┐
                                  │ ML Model /   │
                                  │ Recommendation│
                                  │    Engine    │
                                  └──────────────┘
```

## 📂 Project Structure

```text
CineMatch/
│
├── frontend/                 # Next.js application
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── lib/
│   └── package.json
│
├── backend/                  # Node.js + Express server
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── ml-service/               # Python ML service
│   ├── model/
│   ├── dataset/
│   ├── preprocessing/
│   ├── recommender.py
│   ├── app.py
│   └── requirements.txt
│
├── README.md
└── .gitignore
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd CineMatch
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```text
http://localhost:3000
```

### 3. Node.js Backend Setup

```bash
cd backend
npm install
npm run dev
```

Example backend URL:

```text
http://localhost:8000
```

### 4. Python ML Server Setup

Navigate to the ML service:

```bash
cd ml-service
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the Python server:

```bash
uvicorn app:app --reload
```

Example ML server:

```text
http://localhost:8001
```

## 🔐 Environment Variables

Create a `.env.local` file for the Next.js application:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_ML_API_URL=http://localhost:8001
```

Backend environment variables may include:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ML_SERVICE_URL=http://localhost:8001
```

> ⚠️ Never commit `.env`, `.env.local`, API keys, database credentials, or other secrets to GitHub.

## 🔄 Recommendation Flow

When a user requests movie recommendations:

```text
User
 ↓
Next.js Frontend
 ↓
Node.js Backend
 ↓
Python ML API
 ↓
Recommendation Algorithm
 ↓
Recommended Movie IDs
 ↓
Node.js Backend
 ↓
Next.js Frontend
 ↓
Movie Recommendations
```

## 🧪 Running the Complete Application

Run all three services:

### Frontend

```bash
npm run dev
```

### Node.js Backend

```bash
npm run dev
```

### Python ML Server

```bash
uvicorn app:app --reload
```

The complete architecture consists of:

```text
Next.js
   ↓
Node.js / Express
   ↓
Python ML API
   ↓
Machine Learning Model
```

## 🏭 Production

For production deployment, the application can be deployed as separate services:

```text
Next.js        → Frontend hosting
Node.js        → Backend server
Python         → ML API server
MongoDB        → Database
```

Docker can also be used to containerize the frontend, backend, and ML service.

## 📚 Technologies Used

| Category       | Technologies                             |
| -------------- | ---------------------------------------- |
| Frontend       | Next.js, React, JavaScript, Tailwind CSS |
| Backend        | Node.js, Express.js                      |
| Database       | MongoDB                                  |
| ML             | Python, Pandas, NumPy, Scikit-learn      |
| ML Server      | FastAPI / Flask                          |
| Authentication | JWT, Cookies                             |
| Payments       | Razorpay                                 |
| Movie API      | TMDB                                     |
| Deployment     | Docker, Cloud Hosting                    |

## 🔗 Resources

* [Next.js Documentation](https://nextjs.org/docs?utm_source=chatgpt.com)
* [Python Documentation](https://docs.python.org/3/?utm_source=chatgpt.com)
* [Scikit-learn Documentation](https://scikit-learn.org/stable/?utm_source=chatgpt.com)
* [FastAPI Documentation](https://fastapi.tiangolo.com/?utm_source=chatgpt.com)
* [Docker Documentation](https://docs.docker.com/?utm_source=chatgpt.com)

## 👨‍💻 Author

**Ayush Patel**

⭐ If you like this project, consider giving the repository a star!
