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
  console.log("user", user);

  if (!user || !user.role) {
    // Redirect if the token is invalid or the user has no role
    return NextResponse.redirect(new URL("/", request.url));
  }

  const { role } = user;

  const path = request.nextUrl.pathname;

  // Define role-specific access rules
  const rolePaths = {
    "super-admin": ["/dashboard/admin"],
    admin: ["/dashboard/admin"],
    customer: ["/dashboard/customer"],
  };

  // Check if the requested path matches the user's role
  const allowedPaths = rolePaths[role] || [];
  const isAuthorized = allowedPaths.some((allowedPath) =>
    path.startsWith(allowedPath)
  );

  if (!isAuthorized) {
    // Redirect if the user is not authorized to access the route

  // Check if the request is for the dashboard
  const dashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");
  // Only allow admins to access the dashboard
  if (
    dashboardRoute &&
    role !== "admin" &&
    role !== "super-admin" &&
    role !== "customer"
  ) {
    // Redirect to home if not an admin

    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow the request to proceed if validation passes
  return NextResponse.next();
}

export const config = {

  // Match all dashboard routes
  matcher: ["/dashboard/:path*"],


};
