# Rao Abdur Rehman — Personal Portfolio (Full Website)

Personal portfolio website of **Rao Abdur Rehman** — **E-Commerce Expert**, Shopify & WordPress Developer and Meta Ads Specialist, based in Sargodha, Pakistan.

Plain HTML/CSS/JS — no build step. Hosted free on **GitHub Pages**.
Theme: light cream, arched doors with the open-and-step-inside animation,
Caveat script accents, Playfair Display headings.

## Pages
- `index.html` — Home: hero (E-Commerce Expert), live Sargodha clock, stats, the 4 doors (E-Commerce & Shopify, Shopify Development, WordPress Development, Meta Ads) with rooms, selected work, showcase teaser, CTA
- `about.html` — My Story, certificates, skills, journey timeline
- `services.html` — All 4 services in detail (E-Commerce & Shopify Stores, Shopify Development, WordPress Development, Meta Ads Management) + work process
- `showcase.html` — 3 doors with galleries (E-Commerce Stores, Website Themes, Meta Ads)
- `work.html` — All projects (Genz Bazzar, Perfect Pest, Diamond Plus, Best At Pest NYC, DigiSkool, DigitalBizz)
- `contact.html` — WhatsApp & email cards, next steps

## Shared files
- `style.css` — the whole theme (edit once, applies to every page)
- `script.js` — clock, rotating roles, marquee, counters, doors/rooms behaviour
- `rao.webp` — hero portrait (background-removed)

**Live at:** https://rao1125.github.io/rao-portfolio/ (repo: https://github.com/rao1125/rao-portfolio)
The custom domain was detached on purpose (2026-11-15) so this clean link works now.
To re-attach genzbazzar.com later: add a `CNAME` file containing `genzbazzar.com`
— but only after the DNS below is set.

## How to put it live on GitHub Pages
1. Create a free account at https://github.com (if you don't have one).
2. Create a new repository named `rao-portfolio` (Public).
3. Upload ALL files from this folder into the repository.
4. In the repository: **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)` → Save.
5. Wait 1–2 minutes. The site goes live at the address GitHub shows on that Pages screen.

## Connect the domain genzbazzar.com
The `CNAME` file already contains `genzbazzar.com`. After that, the domain's DNS
(managed at StackDNS / 20i, access with the seller) needs:
- 4 A records for `@` pointing to GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- 1 CNAME record for `www` pointing to `<your-github-username>.github.io`

Then in **Settings → Pages**, tick **Enforce HTTPS** once the domain shows as verified.
