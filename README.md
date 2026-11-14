# Akayuki Codes – Next.js website

Production-oriented starter for **https://akayuki.codes**. Built with Next.js App Router, TypeScript, responsive CSS, metadata, Open Graph, JSON-LD, sitemap and robots routes.

## Requirements
- Node.js 20.9+ (recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
```

This creates the deployable static site in `out/`, including `index.html`, page directories, and assets. The code search and checker run in the browser. Preview the export with a static file server; `next start` does not serve static exports.

## Deploy to Netlify
1. Import this repository into Netlify.
2. Keep the repository root as the base directory. The included `netlify.toml` sets the build command to `npm run build` and the publish directory to `out`.
3. Next.js exports the pages, assets, robots file, and sitemap as static files. Netlify serves `out/index.html` at `/` and each exported page at its own URL without a server runtime. Do not publish `.next` or the repository root, or add a catch-all rewrite to `index.html`.
4. After deployment, verify `/`, `/codes/`, `/code-checker/`, `/guides/`, `/robots.txt`, and `/sitemap.xml`.
5. To use `akayuki.codes`, add it under domain management and follow Netlify's DNS instructions.

## Deploy to Vercel
1. Create a Git repository and push this project.
2. Import the repository into Vercel.
3. Add `akayuki.codes` and `www.akayuki.codes` in Project → Settings → Domains.
4. Set the DNS records exactly as Vercel instructs. Usually the apex uses an A record and `www` uses a CNAME; use the values shown in your Vercel dashboard rather than guessing.
5. Choose one canonical host (recommended: `https://akayuki.codes`) and redirect the other host to it.
6. After DNS and SSL are active, verify `/robots.txt` and `/sitemap.xml` and submit the sitemap in Google Search Console.

## Code database
Edit `lib/codes.ts`. Current sample entries are deliberately labelled `unverified`. Do not mark a code active unless it has been tested in the live game or supported by reliable, dated evidence. The checker searches this local dataset only; it does not query Roblox.

For production content operations, move this array into a database such as Supabase and add an admin-only interface. Never expose service-role keys in client-side code.

## Before launch checklist
- Confirm game identity, codes, rewards, menu labels, and all gameplay claims in the live experience.
- Replace the generic editorial attribution with the actual site operator or editorial process.
- Add a monitored contact method.
- Expand the privacy policy to match actual analytics, ads, cookies, consent tooling, and applicable jurisdictions.
- Configure a compliant consent-management platform before enabling personalised advertising where required.
- Apply for AdSense only after the site has substantial original, useful content and all policy pages are complete.
- Add real author/reviewer details and cite primary sources for game mechanics and code updates.
- Test mobile layouts, keyboard navigation, clipboard permissions, Core Web Vitals, and broken links.

## Routes
- `/` Homepage
- `/codes/` Searchable code database
- `/code-checker/` Local code lookup tool
- `/guides/` Guide directory
- `/guides/how-to-redeem/` Redemption guide
- `/guides/beginner-guide/` Beginner guide
- `/about/`, `/contact/`, `/privacy/`
- `/sitemap.xml`, `/robots.txt`

## Notes
- Domain metadata is configured for `https://akayuki.codes` in `lib/site.ts`.
- This project does not include Google Analytics or AdSense scripts. Add them only after configuring consent and privacy requirements.
