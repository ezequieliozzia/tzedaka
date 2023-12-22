import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/programs",
    "/form",
    "/programs/details/(.*)",
    "/api/events",
    "/api/beneficiaries",
    "/signInPage"
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
