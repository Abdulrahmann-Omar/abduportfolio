# Deployment Guide

This guide will walk you through the process of deploying your portfolio website to various hosting platforms.

## Prerequisites

- Node.js (v16 or later)
- npm (v7 or later) or yarn
- Git
- An account on your chosen hosting platform

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production site
- `npm run preview` - Preview the production build locally
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint code with ESLint
- `npm run check` - Type-check with TypeScript

## Deployment Options

### 1. Vercel (Recommended)

[Vercel](https://vercel.com/) provides a seamless deployment experience for Astro projects with automatic deployments from your Git repository.

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Sign up or log in to [Vercel](https://vercel.com/)
3. Click "New Project" and import your repository
4. Configure the project settings (leave defaults for most options)
5. Click "Deploy"

Vercel will automatically detect Astro and configure the build settings. Your site will be deployed and you'll get a URL like `https://your-project.vercel.app`

### 2. Netlify

[Netlify](https://www.netlify.com/) is another great option for deploying Astro projects.

1. Push your code to a Git repository
2. Sign up or log in to [Netlify](https://www.netlify.com/)
3. Click "Add new site" > "Import an existing project"
4. Connect to your Git provider and select your repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### 3. GitHub Pages

To deploy to GitHub Pages:

1. Update `astro.config.mjs` with your repository name:
   ```javascript
   export default defineConfig({
     site: 'https://yourusername.github.io',
     base: '/your-repo-name', // Only if deploying to a subdirectory
   });
   ```

2. Add a deployment script to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

4. Run the deployment:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in your repository settings (Settings > Pages)

## Environment Variables

Create a `.env` file in the root of your project based on `.env.example` and fill in the required values.

For production, set these environment variables in your hosting platform's configuration:

- `SITE_TITLE` - Your site's title
- `SITE_DESCRIPTION` - Your site's description
- `SITE_URL` - Your site's URL (e.g., https://yourdomain.com)
- `PUBLIC_CONTACT_EMAIL` - Your contact email
- Any other required API keys or configuration

## Custom Domain

To use a custom domain:

1. Purchase a domain from a registrar like Namecheap, Google Domains, etc.
2. Follow your hosting provider's instructions for setting up a custom domain
3. Update your DNS settings to point to your hosting provider
4. Configure SSL/TLS (usually automatic with most providers)

## Continuous Deployment

For automatic deployments when you push to your repository:

1. Connect your Git repository to your hosting platform
2. Configure the build settings if needed
3. Enable automatic deployments on push to your main branch

## Performance Optimization

After deployment, consider:

1. Enabling compression (usually automatic on Vercel/Netlify)
2. Setting up a CDN if not included with your hosting
3. Enabling HTTP/2 and HTTP/3
4. Setting up proper caching headers

## Analytics

To add Google Analytics:

1. Sign up for Google Analytics and get your tracking ID
2. Add it to your `.env` file:
   ```
   PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Uncomment and update the Google Analytics script in `src/layouts/Layout.astro`

## Troubleshooting

- **Build fails**: Check the build logs in your hosting platform
- **Missing styles**: Ensure Tailwind is properly configured in `tailwind.config.mjs`
- **404 errors**: Check your `astro.config.mjs` for correct `site` and `base` URLs
- **Environment variables not working**: Make sure they're set in your hosting platform's configuration

## Support

For additional help, refer to:
- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
