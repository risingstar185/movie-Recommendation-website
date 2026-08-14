"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password check
   if (password !== confirmPassword) {
  toast.error("Passwords do not match");
  return;
}

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      console.log("Registration successful:", data);

     toast.success("Account created successfully!");
setName("")
setPassword("")
setEmail("")
      // Optional
     window.location.href = "/login";

    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-purple-500/10 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">

        {/* Logo / Heading */}
        <div className="text-center mb-8">

          <h1 className="text-3xl font-extrabold text-gray-900">
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Create your account to get started
          </p>

        </div>

        {/* Register Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>

              <div className="relative">

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 pr-20 rounded-xl border border-gray-300 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-600 hover:text-black"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm Password
              </label>

              <div className="relative">

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  required
                  className="w-full px-4 py-3 pr-20 rounded-xl border border-gray-300 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-600 hover:text-black"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>

              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">

              <input
                id="terms"
                type="checkbox"
                required
                className="w-4 h-4 mt-0.5 accent-black"
              />

              <label
                htmlFor="terms"
                className="text-sm text-gray-600"
              >
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="font-medium text-black hover:underline"
                >
                  Terms & Conditions
                </Link>
              </label>

            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-black text-white font-semibold transition hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading
                ? "Creating account..."
                : "Create Account"}
            </button>

          </form>

          {/* Login */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}

            <Link
              href="/login"
              className="font-semibold text-black hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © 2026 Your App. All rights reserved.
        </p>

      </div>
    </main>
  );
}