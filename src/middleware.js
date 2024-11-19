import { NextResponse } from "next/server";
import { decodedToken } from "./hooks/jwt";

export async function middleware(request) {
  const url = request.nextUrl.clone(); // Clone the URL to manipulate redirects

  // Get the refresh token or access token from cookies
  const token = request.cookies.get("refreshToken")?.value;

  if (!token) {
    // If no token is found, redirect to home or login page
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  let user;
  try {
    // Decode the token to get user information
    user = decodedToken(token);
  } catch (error) {
    console.error("Error decoding token:", error);
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (!user || !user.role) {
    // Redirect if the token is invalid or the user has no role
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  const { role } = user;
  const path = request.nextUrl.pathname;

  // Define role-specific access rules
  const rolePaths = {
    "super-admin": ["/dashboard/admin"],
    admin: ["/dashboard/admin"],
    customer: ["/dashboard/customers"],
  };

  // Check if the requested path matches the user's role
  const allowedPaths = rolePaths[role] || [];
  const isAuthorized = allowedPaths.some((allowedPath) =>
    path.startsWith(allowedPath)
  );

  if (!isAuthorized) {
    // Redirect if the user is not authorized to access the route
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Allow the request to proceed if validation passes
  return NextResponse.next();
}

export const config = {
  // Match all dashboard routes
  matcher: ["/dashboard/:path*"],
};
