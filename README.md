# Next.js 15 App Router: Intermittent 404 Errors with Dynamic Routes

This repository demonstrates a bug encountered in Next.js 15's App Router when using dynamic routes within the `app` directory.  Under certain conditions (potentially related to caching or client-side routing), requests to valid dynamic routes unexpectedly result in 404 errors.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/post/1` (or any other valid dynamic route).  The page should load correctly sometimes, and fail other times with a 404.

## Expected Behavior

The page should load successfully, displaying the content for the given dynamic route.

## Actual Behavior

The page intermittently fails to load, returning a 404 error.

## Solution

The solution may involve adjusting caching strategies, ensuring proper route definitions in `app/api/` (if applicable), or exploring potential conflicts with other middleware or custom routing solutions.
