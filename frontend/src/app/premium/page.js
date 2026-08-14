"use client";

import { Film, Check, Crown, Sparkles, ShieldCheck } from "lucide-react";

import Script from "next/script";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function PremiumPage() {
  const router = useRouter();

const handlePayment = async () => {
  try {
    // Backend se Razorpay order create karo
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/pay/create-order`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Unable to create order");
    }

    const order = data.order;

    // Razorpay checkout
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

      amount: order.amount,

      currency: order.currency,

      name: "CineMatch",

      description: "CineMatch Premium - 30 Days",

      order_id: order.id,

      handler: async function (response) {
        try {
          // Payment verify
          const verifyRes = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/pay/verify-payment`,
            {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id:
                  response.razorpay_order_id,

                razorpay_payment_id:
                  response.razorpay_payment_id,

                razorpay_signature:
                  response.razorpay_signature,
              }),
            }
          );

          const verifyData = await verifyRes.json();

          if (!verifyRes.ok) {
            throw new Error(
              verifyData.message || "Payment verification failed"
            );
          }

          toast.success("Premium activated! 🎉");

          router.push("/premium/success");

        } catch (error) {
          console.error(error);

          toast.error(
            error.message || "Payment verification failed"
          );
        }
      },

      prefill: {
        name: "",
        email: "",
      },

      theme: {
        color: "#7c3aed",
      },

      modal: {
        ondismiss: function () {
          toast.error("Payment cancelled");
        },
      },
    };

    // Razorpay loaded hai ya nahi
    if (!window.Razorpay) {
      toast.error("Razorpay is still loading. Try again.");
      return;
    }

    const razorpay = new window.Razorpay(options);

    razorpay.open();

  } catch (error) {
    console.error("Payment Error:", error);

    toast.error(
      error.message || "Something went wrong"
    );
  }
};

  const features = [
    "Unlimited movie recommendations",
    "Advanced AI recommendations",
    "Personalized movie lists",
    "Detailed movie insights",
    "Premium-only discovery modes",
    "No recommendation limits",
  ];

  return (
    <>
    <Script
  src="https://checkout.razorpay.com/v1/checkout.js"
  strategy="afterInteractive"
/>
    <main className="min-h-screen bg-background text-foreground px-6 py-16 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-[-180px] w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-[130px] pointer-events-none" />

      <div className="absolute bottom-10 right-[-180px] w-[420px] h-[420px] rounded-full bg-pink-500/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Logo */}
        <div className="flex justify-center mb-14">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-lg">
              <Film className="w-5 h-5 text-white" />
            </div>

            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              CineMatch
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-500 text-xs font-semibold uppercase tracking-wide">
            <Crown className="w-3.5 h-3.5" />
            Premium
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold">
            Unlock the Full{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              CineMatch
            </span>
          </h1>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Get unlimited recommendations and unlock powerful AI features
            designed for serious movie lovers.
          </p>

        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">

          <div className="relative rounded-3xl border border-purple-500/30 bg-card/50 backdrop-blur-xl p-8 md:p-10 shadow-2xl shadow-purple-500/10">

            {/* Popular */}
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold shadow-lg">
                MOST POPULAR
              </span>
            </div>

            {/* Plan */}
            <div className="text-center">

              <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Crown className="w-7 h-7 text-white" />
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                CineMatch Premium
              </h2>

              <div className="mt-5 flex items-end justify-center gap-1">
                <span className="text-5xl font-extrabold">
                  ₹499
                </span>
                <span className="text-muted-foreground mb-2">
                  /month
                </span>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                Cancel anytime
              </p>

            </div>

            {/* Features */}
            <div className="mt-8 space-y-4">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-purple-500" />
                  </div>

                  <span className="text-sm">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

            {/* Payment */}
            <button
              onClick={handlePayment}
              className="mt-9 w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 px-6 py-4 font-bold text-white shadow-lg shadow-purple-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-5 h-5" />
              Upgrade to Premium
            </button>

            {/* Security */}
            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="w-4 h-4" />
              Secure payment
            </div>

          </div>

        </div>

      </div>
    </main>
        </>
  );
}