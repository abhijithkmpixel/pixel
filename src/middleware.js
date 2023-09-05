/** @format */
import { NextResponse } from "next/server";
export async function middleware(req) {
  // Fetch redirects array from API
  const res = await fetch("https://example.com/api/redirects");
  //   const redirects = await res.json();
  const redirects = [
    // { source: "/about-us", destination: "/about" },
    { source: "/google", destination: "/about-us" },
  ];
  /* Assuming the returned `redirects` array would have the following structure:
      [
        { source: '/about-us', destination: '/about' },
        { source: '/google', destination: 'https://google.com' }
      ]
    */

  // Find the matching redirect object
  const redirect = redirects.find(
    (redirect) => req.nextUrl.pathname === redirect.source
  );

  if (redirect) {
    if (redirect.destination.startsWith("http")) {
      // Handle external URL redirects
      return NextResponse.redirect(new URL(redirect.destination));
    }
    // Handle internal URL redirects
    return NextResponse.redirect(new URL(redirect.destination, req.url));
  }

  // Continue if no matching redirect is found
  return NextResponse.next();
}
