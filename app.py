from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import pickle
import gdown
import os
import uvicorn

app = FastAPI()

# CORS: "*" allow kiya taaki production/Render par frontend block na ho
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Google Drive file IDs
movie_file_id = "14_4grek2uoO7EWUijASraYbq9M4YcpMd"
similarity_file_id = "1BOOIlVtkWnvYnr_FzAv6Hg-ZJyyL9skO"

movie_path = "movie.pkl"
similarity_path = "similarity.pkl"

# Download files if not present
if not os.path.exists(movie_path):
    gdown.download(
        f"https://drive.google.com/uc?id={movie_file_id}",
        movie_path,
        quiet=False
    )

if not os.path.exists(similarity_path):
    gdown.download(
        f"https://drive.google.com/uc?id={similarity_file_id}",
        similarity_path,
        quiet=False
    )

# Load data
movies = pickle.load(open(movie_path, "rb"))
similarity = pickle.load(open(similarity_path, "rb"))

# Request model
class MovieRequest(BaseModel):
    movie: str

# Recommendation function
def recommend(movie):
    movie_index = movies[movies["title"] == movie].index[0]
    distances = similarity[movie_index]
    movies_list = sorted(
        list(enumerate(distances)),
        reverse=True,
        key=lambda x: x[1]
    )[1:6]
    recommended_movies = [
        movies.iloc[i[0]].title
        for i in movies_list
    ]
    return recommended_movies

# Get all movies
@app.get("/movies")
def get_movies():
    return {
        "movies": movies["title"].tolist()
    }

# Recommendation API
@app.post("/recommend")
def get_recommendation(request: MovieRequest):
    recommendations = recommend(request.movie)
    return {
        "selected_movie": request.movie,
        "recommendations": recommendations
    }

# Health Check Route: "HEAD" aur "GET" dono methods allow kiye hain
@app.get("/", methods=["GET", "HEAD"])
def home():
    return {
        "message": "Movie Recommendation API is running"
    }

# Render Deployment ke liye mandatory host aur port binding block
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port)
