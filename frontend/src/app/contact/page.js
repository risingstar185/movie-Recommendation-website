"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Film } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form:", form);

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-[-180px] w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-[130px] pointer-events-none" />

      <div className="absolute bottom-20 right-[-180px] w-[420px] h-[420px] rounded-full bg-pink-500/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-16">

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
              href="/"
              className="hover:text-purple-500 transition-colors"
            >
              Home
            </a>

            <a
              href="/about"
              className="hover:text-purple-500 transition-colors"
            >
              About us
            </a>

            <a
              href="/contact"
              className="text-purple-500"
            >
              Contact
            </a>
          </nav>

        </div>

        {/* Hero */}
        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-600 dark:text-purple-400 text-xs font-semibold tracking-wide mb-5 uppercase">
            💬 Get In Touch
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Contact{" "}
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Us
            </span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question, suggestion, or feedback? We&apos;d love to hear
            from you.
          </p>

        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-5 gap-8">

          {/* Contact Information */}
          <div className="lg:col-span-2 rounded-3xl border border-border bg-card/40 backdrop-blur-xl p-8 shadow-2xl">

            <h2 className="text-2xl font-bold mb-3">
              Let&apos;s talk
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you found a bug, have an idea for CineMatch, or simply
              want to say hello, feel free to reach out.
            </p>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-500" />
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    support@cinematch.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-pink-500/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-pink-500" />
                </div>

                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-500" />
                </div>

                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    India
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Message */}
            <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/10">
              <p className="text-sm text-muted-foreground">
                🎬 Your feedback helps us make movie discovery better.
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 rounded-3xl border border-border bg-card/40 backdrop-blur-xl p-8 shadow-2xl">

            <h2 className="text-2xl font-bold mb-7">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className="w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={6}
                  required
                  className="w-full resize-none rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 px-6 py-3.5 font-bold text-white shadow-lg shadow-purple-500/20 hover:scale-[1.01] active:scale-[0.98] transition-all"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Footer Text */}
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground">
            © 2026 CineMatch. Made for movie lovers 🎬
          </p>
        </div>

      </div>
    </main>
  );
}