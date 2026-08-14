"use client";

import {
  Film,
  Sparkles,
  Brain,
  Target,
  Heart,
  Users,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-[-180px] w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-[130px] pointer-events-none" />

      <div className="absolute bottom-20 right-[-180px] w-[420px] h-[420px] rounded-full bg-pink-500/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Navbar */}
        <header className="flex items-center justify-between mb-20">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Film className="w-5 h-5 text-white" />
            </div>

            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              CineMatch
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a
              href="/"
              className="hover:text-purple-500 transition-colors"
            >
              Home
            </a>
            <a
              href="/profile"
              className="hover:text-purple-500 transition-colors"
            >
              Profile
            </a>

            <a
              href="/about"
              className="text-purple-500"
            >
              About
            </a>

            <a
              href="/contact"
              className="hover:text-purple-500 transition-colors"
            >
              Contact
            </a>
          </nav>

        </header>

        {/* Hero */}
        <section className="text-center mb-20">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-600 dark:text-purple-400 text-xs font-semibold tracking-wide mb-5 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            About CineMatch
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Discover Movies{" "}
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              You&apos;ll Love
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            CineMatch is an AI-powered movie discovery platform designed to
            help you find your next favorite movie without spending hours
            searching.
          </p>

        </section>

        {/* Mission */}
        <section className="grid lg:grid-cols-2 gap-8 items-center mb-20">

          <div className="rounded-3xl border border-border bg-card/40 backdrop-blur-xl p-8 md:p-10 shadow-2xl">

            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-purple-500" />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Our mission is simple: make movie discovery smarter, faster,
              and more enjoyable. Instead of scrolling through thousands of
              movies, CineMatch uses intelligent recommendations to connect
              you with movies that match your interests.
            </p>

          </div>

          <div className="relative rounded-3xl overflow-hidden min-h-[300px] border border-border bg-gradient-to-br from-purple-600/20 via-background to-pink-500/20 flex items-center justify-center">

            <div className="text-center">

              <div className="mx-auto w-24 h-24 rounded-3xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/30">
                <Film className="w-12 h-12 text-white" />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Movie Discovery,
              </h3>

              <p className="text-lg bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">
                Reimagined.
              </p>

            </div>

          </div>

        </section>

        {/* Features */}
        <section className="mb-20">

          <div className="text-center mb-12">

            <p className="text-sm font-semibold text-purple-500 uppercase tracking-wider">
              Why CineMatch?
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
              Built for Movie Lovers
            </h2>

            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Everything you need to discover movies that fit your taste.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* AI */}
            <div className="group rounded-3xl border border-border bg-card/40 backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10">

              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-5">
                <Brain className="w-6 h-6 text-purple-500" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                AI Powered
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Our recommendation engine analyzes movie similarities to
                suggest titles that match what you already enjoy.
              </p>

            </div>

            {/* Simple */}
            <div className="group rounded-3xl border border-border bg-card/40 backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:shadow-xl hover:shadow-pink-500/10">

              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6 text-pink-500" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Simple & Fast
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Select one movie and instantly get recommendations without
                complicated filters or endless searching.
              </p>

            </div>

            {/* Community */}
            <div className="group rounded-3xl border border-border bg-card/40 backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10">

              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-5">
                <Heart className="w-6 h-6 text-purple-500" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Made for You
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                CineMatch focuses on helping you spend less time searching
                and more time enjoying great movies.
              </p>

            </div>

          </div>

        </section>

        {/* How It Works */}
        <section className="mb-20">

          <div className="rounded-3xl border border-border bg-card/40 backdrop-blur-xl p-8 md:p-12">

            <div className="text-center mb-12">

              <h2 className="text-3xl md:text-4xl font-extrabold">
                How CineMatch Works
              </h2>

              <p className="mt-4 text-muted-foreground">
                Finding your next movie is as easy as 1-2-3.
              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-10">

              {/* Step 1 */}
              <div className="text-center">

                <div className="mx-auto w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center text-xl font-bold">
                  01
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  Choose a Movie
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Select a movie that you already enjoy from our collection.
                </p>

              </div>

              {/* Step 2 */}
              <div className="text-center">

                <div className="mx-auto w-14 h-14 rounded-2xl bg-pink-500/10 text-pink-500 flex items-center justify-center text-xl font-bold">
                  02
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  AI Finds Similar Movies
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Our recommendation engine analyzes the selected movie.
                </p>

              </div>

              {/* Step 3 */}
              <div className="text-center">

                <div className="mx-auto w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center text-xl font-bold">
                  03
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  Discover & Enjoy
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Explore your recommendations and find your next favorite.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="text-center rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 via-background to-pink-500/10 p-10 md:p-14">

          <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center mb-6">
            <Users className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to Find Your Next Favorite Movie?
          </h2>

          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Stop scrolling endlessly. Let CineMatch help you discover
            something you&apos;ll love.
          </p>

          <a
            href="/recommend"
            className="inline-flex items-center gap-2 mt-7 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 px-7 py-3.5 font-bold text-white shadow-lg shadow-purple-500/20 transition-all hover:scale-[1.02]"
          >
            <Film className="w-4 h-4" />
            Start Discovering
          </a>

        </section>

        {/* Footer */}
        <div className="text-center mt-14">

          <p className="text-sm text-muted-foreground">
            © 2026 CineMatch. Made for movie lovers 🎬
          </p>

        </div>

      </div>
    </main>
  );
}