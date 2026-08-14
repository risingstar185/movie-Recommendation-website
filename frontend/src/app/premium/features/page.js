"use client";

import {
  Film,
  Crown,
  Sparkles,
  Infinity,
  Brain,
  List,
  BarChart3,
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function PremiumFeaturesPage() {
  const router = useRouter();

  const features = [
    {
      icon: Infinity,
      title: "Unlimited Recommendations",
      description:
        "Get as many movie recommendations as you want without daily limits.",
    },
    {
      icon: Brain,
      title: "Advanced AI",
      description:
        "Get smarter recommendations based on movie similarity and your preferences.",
    },
    {
      icon: List,
      title: "Personalized Lists",
      description:
        "Create and maintain your own personalized movie collections.",
    },
    {
      icon: BarChart3,
      title: "Movie Insights",
      description:
        "Explore detailed insights and information about your recommended movies.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12 relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-20 left-[-180px] w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-[130px] pointer-events-none" />

      <div className="absolute bottom-20 right-[-180px] w-[420px] h-[420px] rounded-full bg-pink-500/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <header className="flex items-center justify-between mb-16">

          <div className="flex items-center gap-2">

            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center">
              <Film className="w-5 h-5 text-white" />
            </div>

            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              CineMatch
            </span>

          </div>

          <button
            onClick={() => router.push("/recommend")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Movies
          </button>

        </header>

        {/* Hero */}
        <section className="text-center mb-16">

          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-xl shadow-purple-500/20">
            <Crown className="w-8 h-8 text-white" />
          </div>

          <h1 className="mt-7 text-4xl md:text-5xl font-extrabold">
            Premium Features
          </h1>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Your CineMatch Premium membership gives you access to a smarter
            and more powerful movie discovery experience.
          </p>

        </section>

        {/* Feature Grid */}
        <section className="grid md:grid-cols-2 gap-6">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-border bg-card/40 backdrop-blur-xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10"
              >

                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-purple-500" />
                </div>

                <h2 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h2>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-purple-500">
                  <Sparkles className="w-3.5 h-3.5" />
                  PREMIUM UNLOCKED
                </div>

              </div>
            );
          })}

        </section>

        {/* CTA */}
        <section className="mt-12 text-center rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 via-background to-pink-500/10 p-10">

          <h2 className="text-2xl md:text-3xl font-extrabold">
            Ready to discover something amazing?
          </h2>

          <p className="mt-3 text-muted-foreground">
            Start exploring unlimited movie recommendations.
          </p>

          <button
            onClick={() => router.push("/recommend")}
            className="mt-6 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-purple-500/20 hover:scale-[1.02] transition-all"
          >
            Start Discovering 🎬
          </button>

        </section>

      </div>
    </main>
  );
}