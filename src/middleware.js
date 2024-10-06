import { NextResponse } from "next/server";
import { decodedToken } from "./hooks/jwt";

export async function middleware(request) {
  // Get the refresh token or access token from cookies
  const token = request.cookies.get("refreshToken")?.value;

  if (!token) {
    // If no token is found, redirect to home or login page
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Decode the token to get user information
  const user = decodedToken(token);

  // If user is not decoded properly, redirect
  if (!user || !user.role) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const { role } = user;

  // Check if the request is for the dashboard
  const dashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");
<<<<<<< HEAD
=======
  // const pricingRoute = request.nextUrl.pathname.startsWith("/pricing");
>>>>>>> 919a0f66b649ca74ab91a62ed742b58ac04f8a80

  // Only allow admins to access the dashboard
  if (dashboardRoute && role !== "admin" && role !== "super-admin") {
    // Redirect to home if not an admin
    return NextResponse.redirect(new URL("/", request.url));
  }

<<<<<<< HEAD
  // Allow the request to proceed if the role matches the required access level
  return NextResponse.next();
=======
  // Only allow users to access the pricing route

  if (pricingRoute && role !== "customer") {
    // Redirect to home if not a user
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow the request to proceed if the role matches the required access level
  return NextResponse.next();

  // if (pricingRoute && role !== "customer") {
  //   return NextResponse.redirect(new URL("/", request.url)); // Redirect to home if not a user
  // }

  // Allow the request to proceed if the role matches the required access level
  return NextResponse.next();

>>>>>>> 919a0f66b649ca74ab91a62ed742b58ac04f8a80
}

export const config = {
  // Protect both dashboard and pricing routes
  matcher: ["/dashboard/:path*"],
};
