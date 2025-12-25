/**
 * Application Configuration
 * 
 * Environment-specific settings and URLs
 */

export const config = {
  // App Information
  appName: "ForroVivo",
  companyName: "Livlu Technologies Ltd",
  companyNumber: "16799761",
  
  // Download Links (update when app is published)
  downloadLinks: {
    ios: import.meta.env.VITE_IOS_DOWNLOAD_URL || "#", // Update with App Store link
    android: import.meta.env.VITE_ANDROID_DOWNLOAD_URL || "#", // Update with Play Store link
  },
  
  // Analytics
  analytics: {
    googleAnalyticsId: import.meta.env.VITE_GA_MEASUREMENT_ID || "", // Add your GA4 Measurement ID
    enabled: import.meta.env.VITE_ANALYTICS_ENABLED === "true",
  },
  
  // Contact Information
  contact: {
    email: {
      general: "hello@forrovivo.com",
      privacy: "privacy@forrovivo.com",
      legal: "legal@forrovivo.com",
      support: "support@forrovivo.com",
      billing: "billing@forrovivo.com",
      security: "security@forrovivo.com",
      dpo: "dpo@forrovivo.com",
    },
    address: {
      street: "",
      city: "",
      region: "",
      postalCode: "",
      country: "",
      full: "",
    },
  },
  
  // External Links
  externalLinks: {
    discord: import.meta.env.VITE_DISCORD_URL || "#", // Update with Discord invite link
    social: {
      facebook: import.meta.env.VITE_FACEBOOK_URL || "#",
      instagram: import.meta.env.VITE_INSTAGRAM_URL || "#",
      twitter: import.meta.env.VITE_TWITTER_URL || "#",
    },
  },
  
  // API Configuration (for future backend integration)
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || "",
    contactEndpoint: import.meta.env.VITE_API_CONTACT_ENDPOINT || "/api/contact",
  },
};

