"use client";

import { useEffect } from "react";
import { CheckCircle, Crown, Sparkles, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PremiumSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("premium", "true");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16 relative overflow-hidden flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute top-10 left-[-180px] w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-[130px] pointer-events-none" />

      <div className="absolute bottom-10 right-[-180px] w-[420px] h-[420px] rounded-full bg-pink-500/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-xl w-full text-center">

        {/* Success Icon */}
        <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/30">

          <CheckCircle className="w-12 h-12 text-white" />

        </div>

        {/* Content */}
        <div className="mt-8">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-500 text-xs font-semibold uppercase">
            <Crown className="w-3.5 h-3.5" />
            Premium Activated
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold">
            Payment Successful!
          </h1>

          <p className="mt-5 text-muted-foreground leading-relaxed">
            Welcome to CineMatch Premium. Your account has been upgraded and
            all premium features are now unlocked.
          </p>

        </div>

        {/* Premium Card */}
        <div className="mt-10 rounded-3xl border border-purple-500/20 bg-card/40 backdrop-blur-xl p-7 shadow-2xl">

          <div className="flex items-center justify-center gap-3">

            <Sparkles className="w-5 h-5 text-purple-500" />

            <span className="font-bold">
              You now have access to:
            </span>

          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">

            <div className="rounded-xl bg-purple-500/5 p-3">
              Unlimited Recommendations
            </div>

            <div className="rounded-xl bg-pink-500/5 p-3">
              Advanced AI
            </div>

            <div className="rounded-xl bg-purple-500/5 p-3">
              Personalized Lists
            </div>

            <div className="rounded-xl bg-pink-500/5 p-3">
              Premium Insights
            </div>

          </div>

        </div>

        {/* Button */}
        <button
          onClick={() => router.push("/premium/features")}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 px-7 py-4 font-bold text-white shadow-lg shadow-purple-500/20 transition-all hover:scale-[1.02]"
        >
          Explore Premium Features
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </main>
  );
}