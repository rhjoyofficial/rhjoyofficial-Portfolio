# Rakibul Hasan Joy Portfolio

Personal portfolio for **Rakibul Hasan Joy** (`@rhjoyofficial`), built with Next.js, React, TypeScript, Tailwind CSS, MDX blog content, and a Node.js contact API.

Production domain for this deployment:

```text
https://rhjoy.endbrackets.com
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| Blog | MDX |
| Email API | Resend |
| Hosting mode | Node.js app on shared hosting |

## Important Files

| File or folder | Purpose |
|----------------|---------|
| `app/` | Next.js pages, layout, API routes, sitemap, robots |
| `components/` | UI and section components |
| `content/blog/` | MDX blog posts |
| `data/` | Projects, skills, services, FAQ data |
| `public/` | Public images and static assets |
| `server.js` | Startup file for the hosting Node.js app |
| `package.json` | Scripts and dependencies |

## Image Files To Add

Place your generated images in these exact paths:

| Image | Path |
|-------|------|
| Favicon PNG | `app/favicon.png` |
| Profile photo | `public/photo.jpg` |
| Static OG image, optional | `public/og-image.png` |
| InvoiceAI cover | `public/projects/invoiceai-cover.png` |
| TycoonBD cover | `public/projects/tycoonbd-cover.png` |

Create this folder if it does not exist:

```bash
mkdir -p public/projects
```

Note: project cover images are not displayed yet unless `ProjectCard.tsx` is updated to use the `image` field from `data/projects.ts`.

## Local Development

Run locally:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Build locally:

```bash
npm run build
```

## Fresh Shared Hosting Deployment

Use this section after uploading and unzipping all project files inside:

```text
~/rhjoy.endbrackets.com
```

### 1. Create Node.js App In Hosting Panel

In the Node.js app screen, use:

| Field | Value |
|-------|-------|
| Node.js version | `24.16.0` |
| Application mode | `Production` |
| Application root | `rhjoy.endbrackets.com` |
| Application URL | `rhjoy.endbrackets.com` |
| Application startup file | `server.js` |

If the panel gives a different Node 24 folder name, use the one shown by your hosting panel.

### 2. Open Terminal

You will usually start at:

```bash
[endbrack@s2969 ~]$
```

First activate the Node.js environment:

```bash
source ~/nodevenv/rhjoy.endbrackets.com/24/bin/activate
```

Your prompt should change and show something like:

```bash
[rhjoy.endbrackets.com (24)] [endbrack@s2969 ~]$
```

Check Node and npm:

```bash
node -v
npm -v
```

Expected examples:

```text
v24.16.0
11.x.x
```

### 3. Go To The Project Folder

After activating Node, you are still in `~`. Go to the project folder:

```bash
cd ~/rhjoy.endbrackets.com
```

Confirm you are in the right folder:

```bash
pwd
ls
```

`pwd` should show:

```text
/home/endbrack/rhjoy.endbrackets.com
```

`ls` must show:

```text
package.json
server.js
app
components
public
```

If `package.json` is missing, find it:

```bash
find ~/rhjoy.endbrackets.com -name package.json
```

Then `cd` into the folder that contains `package.json`.

### 4. Install Dependencies

Run:

```bash
npm install --include=dev
```

Why `--include=dev` is needed:

Next.js needs `typescript`, Tailwind, ESLint config, and type packages during build. On some shared hosting servers, normal `npm install` skips dev dependencies in production mode.

Do not run this unless you know what changed:

```bash
npm audit fix --force
```

It can upgrade packages with breaking changes.

### 5. Build The Website

Run:

```bash
npm run build
```

If the build is successful, you should see routes like:

```text
/
/about
/blog
/projects
/contact
/sitemap.xml
/robots.txt
```

### 6. Restart Node.js App

Go back to the hosting Node.js panel and click:

```text
Restart
```

Then open:

```text
https://rhjoy.endbrackets.com
```

## Full Server Command Sequence

Use this from a fresh terminal:

```bash
source ~/nodevenv/rhjoy.endbrackets.com/24/bin/activate
cd ~/rhjoy.endbrackets.com
pwd
ls
npm install --include=dev
npm run build
```

After that, restart the Node.js app from the hosting panel.

## Contact Form Setup

The contact form uses Resend in:

```text
app/api/contact/route.ts
```

Add this environment variable in the hosting Node.js panel:

```text
RESEND_API_KEY=your_resend_api_key_here
```

Without this key, the site will load, but the contact form will return:

```text
Email not configured
```

## Common Errors

### `bash: npm: command not found`

Node.js environment is not activated.

Fix:

```bash
source ~/nodevenv/rhjoy.endbrackets.com/24/bin/activate
```

Then check:

```bash
node -v
npm -v
```

### `Could not read package.json`

You are in the wrong folder.

Fix:

```bash
cd ~/rhjoy.endbrackets.com
ls
```

Make sure `package.json` is visible.

### `Cannot find module 'typescript'`

Dev dependencies were not installed.

Fix:

```bash
cd ~/rhjoy.endbrackets.com
npm install --include=dev
npm run build
```

If needed:

```bash
npm install -D typescript @types/node @types/react @types/react-dom
npm run build
```

## Domain SEO Update

Before final launch, replace old domain values:

```text
https://rakibulhasanjoy.com
```

with:

```text
https://rhjoy.endbrackets.com
```

Check these files:

```text
app/layout.tsx
app/sitemap.ts
app/robots.ts
lib/schemas.ts
README.md
```

Then rebuild:

```bash
npm run build
```

## Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start local development server |
| `npm run build` | Create production build |
| `npm run start` | Start Next.js with default Next server |
| `npm run lint` | Run ESLint |

On shared hosting, the app starts with:

```text
server.js
```
