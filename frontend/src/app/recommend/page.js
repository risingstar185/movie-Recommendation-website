"use client";

import { useEffect, useState } from "react";
import { Film, Sparkles } from "lucide-react";
import Link from "next/link";
const API_URL = "https://movie-recommendation-website-python.onrender.com";

export default function MoviesPage() {
const [movies, setMovies] = useState([]);
const [selectedMovie, setSelectedMovie] = useState("");
const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
 const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`,
          {
            credentials: "include",
          }
        );

        if (!res.ok) return;

        const data = await res.json();

        setIsPremium(data.user?.isPremium === true);
      } catch (error) {
        console.error("User fetch error:", error);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${API_URL}/movies`);

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

        const movieList = data.movies || [];

        setMovies(movieList);

        if (movieList.length > 0) {
          setSelectedMovie(movieList[0]);
        }
      } catch (error) {
        console.error("Movies error:", error);
      }
    };

    fetchMovies();
  }, []);

  const getRecommendations = async () => {
    if (!selectedMovie) return;

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/recommend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movie: selectedMovie,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get recommendations");
      }

      const data = await response.json();

      setRecommendations(data.recommendations || []);
    } catch (error) {
      console.error("Recommendation error:", error);
      setRecommendations([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16 relative overflow-hidden">

      {/* Decorative background */}
      <div className="absolute top-20 left-[-180px] w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-[130px] pointer-events-none" />

      <div className="absolute bottom-20 right-[-180px] w-[420px] h-[420px] rounded-full bg-pink-500/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Navbar */}
        <header className="flex items-center justify-between mb-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Film className="w-5 h-5 text-white" />
            </div>

            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              CineMatch
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a
              href="/contact"
              className="hover:text-purple-500 transition-colors"
            >
             Contact Us
            </a>

            <a
              href="/profile"
              className="hover:text-purple-500 transition-colors"
            >
              Profile
            </a>
           {isPremium ? (
        <Link
          href="/premium/features"
          className="hover:text-purple-500 transition-colors"
        >
          ✨ Premium Features
        </Link>
      ) : (
        <Link
          href="/premium"
          className="hover:text-purple-500 transition-colors"
        >
          Get Premium
        </Link>
      )}
            <a
               href="/about"
              className="hover:text-purple-500 transition-colors"
            >
             About Us
            </a>
          </nav>

        </header>

        {/* Hero */}
        <div className="mb-12 text-center">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-600 dark:text-purple-400 text-xs font-semibold tracking-wide mb-5 uppercase">
            🎬 AI Movie Discovery
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Find Movies You&apos;ll{" "}
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Love
            </span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose a movie you already enjoy and let our recommendation
            engine discover similar movies for you.
          </p>

        </div>

        {/* Movie Selection */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card/40 backdrop-blur-xl p-6 md:p-8 shadow-2xl">

          <label className="mb-3 block text-sm font-semibold text-foreground">
            Choose a movie
          </label>

          <div className="flex flex-col sm:flex-row gap-3">

            <select
              value={selectedMovie}
              onChange={(e) => setSelectedMovie(e.target.value)}
              className="flex-1 rounded-2xl border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            >
              {movies.length === 0 ? (
                <option value="">Loading movies...</option>
              ) : (
                movies.map((movie, index) => (
                  <option key={`${movie}-${index}`} value={movie}>
                    {movie}
                  </option>
                ))
              )}
            </select>

            <button
              onClick={getRecommendations}
              disabled={loading || !selectedMovie}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 px-6 py-3.5 font-bold text-white shadow-lg shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Finding...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Recommend
                </>
              )}
            </button>

          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            Select any movie to get personalized recommendations.
          </p>

        </div>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <section className="mt-16">

            {/* Section heading */}
            <div className="mb-8">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <span className="text-lg">🎬</span>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold">
                    Recommended For You
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Based on{" "}
                    <span className="font-semibold text-purple-500">
                      {selectedMovie}
                    </span>
                  </p>
                </div>

              </div>

            </div>

            {/* Movie Cards */}
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

              {recommendations.map((movie, index) => (

                <div
                  key={`${movie}-${index}`}
                  className="group overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10"
                >

                  {/* Poster */}
                  <div className="relative aspect-[2/3] overflow-hidden bg-muted">

                    <img
                      src={`https://via.placeholder.com/300x450?text=${encodeURIComponent(
                        movie
                      )}`}
                      alt={movie}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70" />

                    {/* Number */}
                    <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 backdrop-blur-md text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    {/* Hover play */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xl shadow-purple-500/30">
                        ▶
                      </div>

                    </div>

                  </div>

                  {/* Movie information */}
                  <div className="p-4">

                    <h3 className="line-clamp-2 font-bold text-sm md:text-base">
                      {movie}
                    </h3>

                    <div className="mt-2 flex items-center justify-between">

                      <span className="text-xs text-purple-500 font-medium">
                        AI Match
                      </span>

                      <span className="text-xs text-muted-foreground">
                        Recommended
                      </span>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>
        )}

        {/* Empty State */}
        {recommendations.length === 0 && !loading && (

          <div className="mt-20 text-center">

            <div className="mx-auto w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-3xl">
              🎥
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Your recommendations are waiting
            </h3>

            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
              Select a movie above and we&apos;ll find five movies that you
              might enjoy.
            </p>

          </div>

        )}

      </div>
    </main>
  );
}
