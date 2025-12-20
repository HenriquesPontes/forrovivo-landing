# Deployment Guide - ForroVivo Landing Page

## Pre-Deployment Checklist

### 1. Environment Variables

Create a `.env` file from `.env.example` and configure:

```bash
# Copy the example file
cp .env.example .env

# Update with your actual values
# - Download links (when apps are published)
# - Google Analytics ID (if using analytics)
# - Social media links
# - API endpoints (if backend is ready)
```

### 2. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

### 3. Verify Build

Check that all files are generated:
- `build/index.html`
- `build/assets/` (JS and CSS bundles)
- `build/ICON/` (icon assets)
- `build/manifest.json`
- `build/robots.txt`
- `build/sitemap.xml`
- `build/sw.js` (service worker)

## Deployment Options

### Option 1: Static Hosting (Recommended)

The site is a static SPA and can be deployed to:

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect to GitHub for automatic deployments
```

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod

# Or connect to GitHub for automatic deployments
```

#### GitHub Pages (Recomendado)

**Opção A: GitHub Actions (Automático)**
1. O workflow `.github/workflows/deploy.yml` já está configurado
2. Habilite GitHub Pages em Settings > Pages > Source: GitHub Actions
3. Faça push para `main` - deploy automático acontece
4. Configure domínio personalizado em Settings > Pages

**Ver guia completo:** `GITHUB_PAGES_SETUP.md`

**Opção B: gh-pages branch (Manual)**
```bash
# Build and deploy to gh-pages branch
npm run build
git checkout --orphan gh-pages
git add build/
git commit -m "Deploy"
git push origin gh-pages
```

#### AWS S3 + CloudFront
1. Build: `npm run build`
2. Upload `build/` contents to S3 bucket
3. Configure S3 for static website hosting
4. Set up CloudFront distribution
5. Configure SPA routing (redirect all to index.html)

### Option 2: Traditional Web Server

Upload the `build/` directory contents to your web server root.

**Important:** Configure server to handle SPA routing:

#### Apache (.htaccess)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Post-Deployment Steps

### 1. Update Download Links

When the apps are published:
1. Update `.env` file with actual App Store and Play Store URLs
2. Rebuild and redeploy

### 2. Enable Google Analytics

1. Get your GA4 Measurement ID (format: `G-XXXXXXXXXX`)
2. Add to `.env`: `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
3. Set `VITE_ANALYTICS_ENABLED=true`
4. Rebuild and redeploy

### 3. Verify Functionality

- [ ] All pages load correctly
- [ ] Language switcher works
- [ ] Navigation works
- [ ] Links open correctly
- [ ] Forms work (contact form)
- [ ] Service worker registers (check in browser DevTools)
- [ ] Manifest.json loads (check Application tab in DevTools)

### 4. SEO Verification

- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Check meta tags with social media debuggers:
  - Facebook: https://developers.facebook.com/tools/debug/
  - Twitter: https://cards-dev.twitter.com/validator
- [ ] Test structured data: https://search.google.com/test/rich-results

### 5. Performance Testing

- [ ] Run Lighthouse audit (Chrome DevTools)
- [ ] Check Core Web Vitals
- [ ] Test on mobile devices
- [ ] Verify PWA installation prompt (if applicable)

## Domain Configuration

### DNS Settings

Point your domain to your hosting provider:

- **A Record** or **CNAME** to hosting IP/hostname
- **WWW subdomain** (if using): CNAME to main domain

### SSL Certificate

Ensure HTTPS is enabled:
- Most modern hosting providers include SSL automatically
- For custom servers, use Let's Encrypt

## Monitoring & Maintenance

### Analytics

Monitor:
- Page views
- User engagement
- Conversion rates (download button clicks)
- Language preferences
- Geographic data

### Updates

When updating:
1. Make changes to code
2. Test locally: `npm run dev`
3. Build: `npm run build`
4. Test build locally
5. Deploy to production

### Backup

- Keep backups of:
  - Source code (in version control)
  - Environment variables (.env - store securely, not in git)
  - Database (if backend is added)

## Troubleshooting

### Service Worker Not Registering

- Ensure site is served over HTTPS (required for service workers)
- Check browser console for errors
- Verify `sw.js` is accessible at root

### Routes Not Working

- Verify server configuration for SPA routing
- Check that all routes redirect to `index.html`

### Assets Not Loading

- Check asset paths are relative (they should be)
- Verify `ICON/` folder is copied to build
- Check network tab in browser DevTools

### Analytics Not Working

- Verify GA Measurement ID is correct
- Check `VITE_ANALYTICS_ENABLED` is set to `true`
- Use Google Analytics Debugger extension to troubleshoot

## Support

For deployment issues, check:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

