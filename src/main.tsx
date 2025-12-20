
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  // Register Service Worker for PWA support
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration.scope);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }

  // Initialize Google Analytics if enabled
  if (import.meta.env.VITE_ANALYTICS_ENABLED === 'true' && import.meta.env.VITE_GA_MEASUREMENT_ID) {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${import.meta.env.VITE_GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(script2);
  }

  createRoot(document.getElementById("root")!).render(<App />);
  