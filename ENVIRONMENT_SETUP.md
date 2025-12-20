# Environment Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

3. **Development**
   ```bash
   npm run dev
   ```

4. **Production Build**
   ```bash
   npm run build
   ```

## Environment Variables Reference

### Download Links

Update these when your apps are published on App Store and Play Store:

```env
VITE_IOS_DOWNLOAD_URL=https://apps.apple.com/app/forrovivo
VITE_ANDROID_DOWNLOAD_URL=https://play.google.com/store/apps/details?id=com.forrovivo.app
```

### Google Analytics

To enable Google Analytics:

1. Get your GA4 Measurement ID from Google Analytics (format: `G-XXXXXXXXXX`)
2. Add to `.env`:
   ```env
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   VITE_ANALYTICS_ENABLED=true
   ```

**Note:** Analytics will only load when `VITE_ANALYTICS_ENABLED=true` and a valid Measurement ID is provided.

### External Links

Configure your social media and community links:

```env
VITE_DISCORD_URL=https://discord.gg/forrovivo
VITE_FACEBOOK_URL=https://facebook.com/forrovivo
VITE_INSTAGRAM_URL=https://instagram.com/forrovivo
VITE_TWITTER_URL=https://twitter.com/forrovivo
```

### API Configuration (Future)

For backend integration:

```env
VITE_API_BASE_URL=https://api.forrovivo.com
VITE_API_CONTACT_ENDPOINT=/api/contact
```

## Configuration File

All environment variables are accessed through `src/config.ts`. This file:
- Provides default values (fallback to `#` for links)
- Centralizes all configuration
- Makes it easy to update settings without changing code

## Important Notes

- **Never commit `.env` to git** - it's already in `.gitignore`
- **Use `.env.example` as a template** - update it when adding new variables
- **Rebuild after changing `.env`** - environment variables are baked into the build
- **Use `import.meta.env.VITE_*`** - Vite only exposes variables prefixed with `VITE_`

## Production Deployment

For production:
1. Set environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Or create a `.env.production` file (if using custom deployment)
3. Rebuild: `npm run build`
4. Deploy the `build/` directory

Most hosting platforms allow you to set environment variables through their dashboard, which is recommended over `.env` files for production.

