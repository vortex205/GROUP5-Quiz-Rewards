# GROUP5 Quiz & Rewards

This repository contains a Next.js (App Router) scaffold for the "GROUP5 Quiz & Rewards" gamified quiz app. It uses Supabase for auth & database and Tailwind CSS for styling.

Important files:
- app/* — Next.js app pages
- components/* — shared UI components
- pages/api/* — API endpoints (seed, generate questions)
- scripts/seed-supabase.ts — Node script to create the 10 seeded users in Supabase (requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY)

Environment variables to set in Vercel:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- OPENAI_API_KEY (optional — for question generation)

Seed users: run `npm install` then `npm run seed` locally with SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in env.
