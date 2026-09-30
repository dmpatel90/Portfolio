# Devkumar Patel Portfolio

Built with Next.js and Tailwind CSS. All the content is in `components/data.js`.

## Add your photo
Save a headshot as `public/profile.jpg`, in portrait orientation at about 800×1000. The site picks it up automatically. If there's no photo, a "DP" monogram shows instead.

## Run locally
    npm install
    npm run dev      # http://localhost:3000

## Deploy to Vercel
- **Option A, GitHub:** push this folder to a GitHub repo, go to vercel.com/new, import the repo and click Deploy. After that, every push redeploys the site.
- **Option B, command line:** in this folder, run `npx vercel` and log in. Accept the defaults, then run `npx vercel --prod`.
