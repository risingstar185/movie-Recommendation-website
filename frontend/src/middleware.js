import { NextResponse } from "next/server";

// 1. फंक्शन का नाम हमेशा 'middleware' ही होना चाहिए
export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  console.log("🔥🔥 MIDDLEWARE RUNNING ON PATH:", pathname);

  // कुकी से टोकन निकालें
  const token = request.cookies.get("auth_token")?.value;
  console.log("🍪 TOKEN FOUND?:", token ? "YES" : "NO");

  // 2. लॉगिन और रजिस्टर पेज को संभालें (ताकि लॉगिन यूजर दोबारा लॉगिन पर न जाए)
  if (token && pathname === "/login") {
    console.log("✅ ALREADY LOGGED IN → REDIRECT TO RECOMMEND");
    return NextResponse.redirect(new URL("/recommend", request.url));
  }

  // 3. प्रोटेक्टेड पेजों को संभालें
  const isProtectedPage = ["/recommend", "/profile", "/premium"].some(path => 
    pathname.startsWith(path)
  );

  if (isProtectedPage && !token) {
    console.log("🚫 NO TOKEN → REDIRECTING TO LOGIN");
    // 'replace' स्ट्रक्चर के साथ लॉगिन पर भेजें ताकि बैक बटन दबाने पर लूप न बने
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// 4. मैचर में उन सभी पेजों को शामिल करें जहाँ मिडिलवेयर चलाना है
export const config = {
  matcher: [
    "/recommend/:path*",
    "/profile/:path*",
    "/premium/:path*",
    "/login", // लॉगिन पेज को भी यहाँ जोड़ें
  ],
};
