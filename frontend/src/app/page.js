
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Film,
  Sparkles,
  Search,
  Star,
  Brain,
  TrendingUp,
  Play,
  ArrowRight,
  ArrowUpRight,
  Clapperboard,
  Heart,
} from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Replace with actual auth state later
  const user = null;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">

      {/* Decorative blurred spots */}
      <div className="absolute top-20 left-[-150px] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[500px] right-[-150px] w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/5 backdrop-blur-md bg-background/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Film className="w-5.5 h-5.5 text-white" />
            </div>

            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              CineMatch
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a
              href="#features"
              className="hover:text-foreground transition-colors"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="hover:text-foreground transition-colors"
            >
              How It Works
            </a>

            <a
              href="#discover"
              className="hover:text-foreground transition-colors"
            >
              Discover
            </a>
          </nav>

          {/* Auth */}
          <div className="flex items-center gap-4">

            {user ? (
              <button
                onClick={() => router.push("/recommend")}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl shadow-md transition-all"
              >
                Explore Movies
                <ArrowUpRight className="w-4 h-4" />
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-semibold text-foreground hover:text-purple-500 transition-colors"
                >
                  Log In
                </Link>

                <Link
                  href="/register"
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl shadow-md hover:shadow-purple-500/10 transition-all"
                >
                  Get Started
                </Link>
              </>
            )}

          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center text-center max-w-7xl mx-auto px-6 py-20 relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-500 dark:text-purple-400 text-xs font-semibold tracking-wide mb-6 uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          AI-Powered Movie Discovery
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-tight">

          Discover Your Next{" "}

          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            Favorite Movie
          </span>

          {" "}with AI
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Stop scrolling endlessly. Select a movie you love and let our
          intelligent recommendation engine discover movies that match your
          taste, mood, and interests.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">

          <Link
            href="/recommend"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-2xl shadow-lg shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Find My Movies
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold border border-border bg-card/40 hover:bg-card/80 rounded-2xl transition-all"
          >
            Explore Features
          </a>

        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 md:gap-20">

          <div>
            <p className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              5+
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Recommendations
            </p>
          </div>

          <div>
            <p className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Recommendation Engine
            </p>
          </div>

          <div>
            <p className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              24/7
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Movie Discovery
            </p>
          </div>

        </div>

        {/* Features */}
        <section
          id="features"
          className="w-full mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        >

          {/* Feature 1 */}
          <div className="p-6 rounded-3xl border border-border bg-card/30 glass hover:scale-[1.03] transition-transform duration-300">

            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-5">
              <Brain className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold">
              AI Recommendations
            </h3>

            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Our machine learning model analyzes movie similarity and
              recommends titles that match your selected movie.
            </p>

          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-3xl border border-border bg-card/30 glass hover:scale-[1.03] transition-transform duration-300">

            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500 mb-5">
              <Search className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold">
              Smart Discovery
            </h3>

            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Choose from a large collection of movies and instantly discover
              similar titles without endless searching.
            </p>

          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-3xl border border-border bg-card/30 glass hover:scale-[1.03] transition-transform duration-300">

            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500 mb-5">
              <Star className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold">
              Personalized Picks
            </h3>

            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Get movie suggestions based on the style, genre, and similarity
              patterns of movies you already enjoy.
            </p>

          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-3xl border border-border bg-card/30 glass hover:scale-[1.03] transition-transform duration-300">

            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-500 mb-5">
              <TrendingUp className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold">
              Instant Results
            </h3>

            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Get your top movie recommendations in seconds through our
              lightweight and fast recommendation API.
            </p>

          </div>

        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="w-full mt-32 border-t border-border/40 pt-20"
        >

          <div className="text-center mb-14">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-500 text-xs font-semibold uppercase tracking-wide">
              <Clapperboard className="w-3.5 h-3.5" />
              Simple & Fast
            </div>

            <h2 className="mt-5 text-2xl md:text-3xl font-extrabold">
              How CineMatch Works
            </h2>

            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Finding your next favorite movie takes only three simple steps.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Step 1 */}
            <div className="relative p-8 rounded-3xl border border-border bg-card/30 text-center">

              <div className="mx-auto w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <Search className="w-6 h-6" />
              </div>

              <div className="mt-6 text-xs font-bold text-purple-500 uppercase tracking-widest">
                Step 01
              </div>

              <h3 className="mt-2 text-xl font-bold">
                Choose a Movie
              </h3>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Select a movie from our collection that you already love.
              </p>

            </div>

            {/* Step 2 */}
            <div className="relative p-8 rounded-3xl border border-border bg-card/30 text-center">

              <div className="mx-auto w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500">
                <Brain className="w-6 h-6" />
              </div>

              <div className="mt-6 text-xs font-bold text-pink-500 uppercase tracking-widest">
                Step 02
              </div>

              <h3 className="mt-2 text-xl font-bold">
                AI Analyzes
              </h3>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Our recommendation algorithm calculates movie similarity using
                your selected title.
              </p>

            </div>

            {/* Step 3 */}
            <div className="relative p-8 rounded-3xl border border-border bg-card/30 text-center">

              <div className="mx-auto w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                <Play className="w-6 h-6" />
              </div>

              <div className="mt-6 text-xs font-bold text-rose-500 uppercase tracking-widest">
                Step 03
              </div>

              <h3 className="mt-2 text-xl font-bold">
                Start Watching
              </h3>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Explore your personalized recommendations and find something
                worth watching.
              </p>

            </div>

          </div>

        </section>

        {/* Discover Section */}
        <section
          id="discover"
          className="w-full mt-32 border-t border-border/40 pt-20"
        >

          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Discover Movies You'll Love
          </h2>

          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            From action-packed adventures to emotional dramas, let our
            recommendation engine help you find your next watch.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            {[
              "Action",
              "Adventure",
              "Comedy",
              "Drama",
              "Sci-Fi",
              "Thriller",
              "Romance",
              "Fantasy",
            ].map((genre) => (

              <span
                key={genre}
                className="px-5 py-2.5 rounded-2xl border border-purple-500/10 bg-purple-500/5 text-purple-500 dark:text-purple-400 font-semibold text-sm"
              >
                🎬 {genre}
              </span>

            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="w-full mt-32">

          <div className="relative overflow-hidden rounded-[2rem] border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent p-10 md:p-16">

            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full" />

            <div className="relative z-10">

              <div className="mx-auto w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <Heart className="w-7 h-7" />
              </div>

              <h2 className="mt-6 text-3xl md:text-4xl font-extrabold">
                Ready to Find Your Next Favorite?
              </h2>

              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Pick a movie you love and let CineMatch find your next
                obsession.
              </p>

              <Link
                href="/recommend"
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold shadow-lg shadow-purple-500/20 transition-all hover:scale-[1.02]"
              >
                Start Discovering
                <ArrowRight className="w-5 h-5" />
              </Link>

            </div>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 bg-card/20 text-center text-xs text-muted-foreground">

        <p>
          © {new Date().getFullYear()} CineMatch. AI-powered movie discovery
          for everyone.
        </p>

      </footer>

    </div>
  );
}

