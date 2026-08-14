"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Film,
  User,
  Mail,
  Camera,
  LogOut,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  // ================= GET USER =================

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch user");
        }

        setUser({
          name: data.user.name || "",
          email: data.user.email || "",
        });

        // Agar backend future me profileImage bheje
        if (data.user.profileImage) {
          setProfileImage(data.user.profileImage);
        }
      } catch (error) {
        console.error("User fetch error:", error);

        toast.error(error.message || "Unable to load profile");

        // User authenticated nahi hai
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [router]);

  // ================= IMAGE =================

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // 5MB limit
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be less than 5MB");
      return;
    }

    // Check image
    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image");
      return;
    }

    // Local preview
    const imageURL = URL.createObjectURL(file);

    setProfileImage(imageURL);

    toast.success("Profile picture selected");

    // NOTE:
    // Ye sirf frontend preview hai.
    // Permanent save ke liye backend upload API chahiye.
  };

  // ================= LOGOUT =================

  const handleLogout = async () => {
    setLoggingOut(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Logout failed");
      }

      toast.success("Logged out successfully 👋");

      // Cookie backend se clear hone ke baad
      router.replace("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);

      toast.error(error.message || "Logout failed");
    } finally {
      setLoggingOut(false);
    }
  };

  // ================= INITIALS =================

  const getInitials = () => {
    if (!user.name) return "U";

    return user.name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20 animate-pulse">
            <Film className="w-6 h-6 text-white" />
          </div>

          <p className="text-sm text-muted-foreground">
            Loading your profile...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-8 sm:py-12 relative overflow-hidden">
      
      {/* ================= BACKGROUND ================= */}

      <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

      <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] rounded-full bg-pink-500/10 blur-[140px] pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ================= HEADER ================= */}

        <header className="flex items-center justify-between mb-10">

          <Link href="/" className="flex items-center gap-2 group">

            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
              <Film className="w-5 h-5 text-white" />
            </div>

            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              CineMatch
            </span>

          </Link>

          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-sm font-medium text-muted-foreground hover:text-foreground hover:border-purple-500/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>

        </header>

        {/* ================= PROFILE CARD ================= */}

        <div className="max-w-2xl mx-auto">

          <div className="rounded-[2rem] border border-border bg-card/40 backdrop-blur-2xl shadow-2xl overflow-hidden">

            {/* Top Banner */}

            <div className="relative h-36 sm:h-44 overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-purple-500/10 to-pink-500/30" />

              <div className="absolute -top-20 -right-10 w-60 h-60 rounded-full bg-purple-500/20 blur-3xl" />

              <div className="absolute -bottom-24 -left-10 w-60 h-60 rounded-full bg-pink-500/20 blur-3xl" />

              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-8 left-10 text-4xl">🎬</div>
                <div className="absolute top-20 right-20 text-3xl">🍿</div>
                <div className="absolute bottom-5 left-1/2 text-3xl">✨</div>
              </div>

            </div>

            <div className="px-5 sm:px-10 pb-10">

              {/* ================= PROFILE IMAGE ================= */}

              <div className="relative -mt-16 sm:-mt-20 mb-6 flex justify-center">

                <div className="relative">

                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-[5px] border-background shadow-2xl"
                    />
                  ) : (
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-[5px] border-background bg-gradient-to-tr from-purple-600 via-purple-500 to-pink-500 flex items-center justify-center text-4xl font-extrabold text-white shadow-2xl">
                      {getInitials()}
                    </div>
                  )}

                  {/* Camera */}

                  <label
                    htmlFor="profile-image"
                    className="absolute bottom-1 right-1 w-11 h-11 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center cursor-pointer shadow-xl border-4 border-background transition-all hover:scale-110"
                  >
                    <Camera className="w-5 h-5" />

                    <input
                      id="profile-image"
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>

                </div>

              </div>

              {/* ================= HEADING ================= */}

              <div className="text-center mb-9">

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-500 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  My Profile
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {user.name || "Movie Lover"}
                </h1>

                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  Manage your CineMatch account
                </p>

              </div>

              {/* ================= USER INFO ================= */}

              <div className="space-y-4">

                {/* NAME */}

                <div className="group rounded-2xl border border-border bg-background/40 hover:bg-background/70 p-5 transition-all">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <User className="w-5 h-5 text-purple-500" />
                    </div>

                    <div className="min-w-0">

                      <p className="text-xs text-muted-foreground mb-1">
                        Full Name
                      </p>

                      <p className="font-semibold text-base truncate">
                        {user.name || "Not available"}
                      </p>

                    </div>

                  </div>

                </div>

                {/* EMAIL */}

                <div className="group rounded-2xl border border-border bg-background/40 hover:bg-background/70 p-5 transition-all">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5 text-pink-500" />
                    </div>

                    <div className="min-w-0">

                      <p className="text-xs text-muted-foreground mb-1">
                        Email Address
                      </p>

                      <p className="font-semibold text-base truncate">
                        {user.email || "Not available"}
                      </p>

                    </div>

                  </div>

                </div>

                {/* ACCOUNT STATUS */}

                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    </div>

                    <div>

                      <p className="text-xs text-muted-foreground mb-1">
                        Account Status
                      </p>

                      <div className="flex items-center gap-2">

                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

                        <p className="font-semibold text-emerald-500">
                          Active
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* IMAGE INFO */}

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Camera className="w-3.5 h-3.5" />
                Click the camera icon to change your profile picture.
              </div>

              {/* ================= LOGOUT ================= */}

              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="mt-8 w-full flex items-center justify-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 text-red-500 px-6 py-3.5 font-bold transition-all hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loggingOut ? (
                  <>
                    <span className="w-5 h-5 rounded-full border-2 border-red-500/30 border-t-red-500 animate-spin" />
                    Logging out...
                  </>
                ) : (
                  <>
                    <LogOut className="w-5 h-5" />
                    Logout
                  </>
                )}
              </button>

            </div>
          </div>

          {/* FOOTER */}

          <p className="text-center text-xs text-muted-foreground mt-8">
            © 2026 CineMatch · Made for movie lovers 🎬
          </p>

        </div>

      </div>
    </main>
  );
}