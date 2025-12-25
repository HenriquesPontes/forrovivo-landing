import { useState, useEffect } from "react";
import { ForroHeader } from "./components/ForroHeader";
import { ForroHeroSection } from "./components/ForroHeroSection";
import { ForroFeaturesSection } from "./components/ForroFeaturesSection";
import { ForroAITutorSection } from "./components/ForroAITutorSection";
import { ForroMissionSection } from "./components/ForroMissionSection";
import { ForroCTASection } from "./components/ForroCTASection";
import { ForroFooter } from "./components/ForroFooter";
import { PrivacyPage } from "./components/PrivacyPage";
import { TermsPage } from "./components/TermsPage";
import { ContactPage } from "./components/ContactPage";
import { LearnMorePage } from "./components/LearnMorePage";
import { translations, Language } from "./translations";

// Map page names to URL paths
const pageToPath: Record<string, string> = {
  'home': '/',
  'privacy': '/Privacy',
  'terms': '/Terms',
  'contact': '/Contact',
  'learn-more': '/LearnMore',
};

// Map URL paths to page names
const pathToPage: Record<string, string> = {
  '/': 'home',
  '/Privacy': 'privacy',
  '/Terms': 'terms',
  '/Contact': 'contact',
  '/LearnMore': 'learn-more',
};

// Normalize path (remove trailing slash, handle base path)
const normalizePath = (path: string): string => {
  // Remove trailing slash except for root
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  return path;
};

// Get page name from current URL path
const getPageFromPath = (): string => {
  const path = normalizePath(window.location.pathname);
  return pathToPage[path] || 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromPath());
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  const handleNavigate = (page: string) => {
    const path = pageToPath[page] || '/';
    window.history.pushState({ page }, '', path);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  // Initialize history state and handle browser back/forward navigation
  useEffect(() => {
    // Sync history state with current URL on mount
    const currentPath = normalizePath(window.location.pathname);
    const pageFromUrl = pathToPage[currentPath] || 'home';
    const normalizedPath = pageToPath[pageFromUrl] || '/';
    window.history.replaceState({ page: pageFromUrl }, '', normalizedPath);

    const handlePopState = (event: PopStateEvent) => {
      const page = event.state?.page || getPageFromPath();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Update document title and language based on current page and language
  useEffect(() => {
    const titles: Record<string, string> = {
      'home': t.pageTitleHome,
      'learn-more': t.pageTitleLearnMore,
      'privacy': t.pageTitlePrivacy,
      'terms': t.pageTitleTerms,
      'contact': t.pageTitleContact,
    };
    
    document.title = titles[currentPage] || t.pageTitleHome;
    document.documentElement.lang = language;
  }, [currentPage, language, t]);

  // Add structured data (JSON-LD) for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "ForroVivo",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "The world's first culture app for learning Forro languages of São Tomé and Príncipe. Help keep cultural heritage alive.",
      "publisher": {
        "@type": "Organization",
        "name": "Livlu Technologies Ltd",
        "legalName": "Livlu Technologies Ltd",
      },
      "inLanguage": ["en", "pt", "cri-ST"]
    };

    // Remove existing structured data if any
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [currentPage]);

  return (
    <div className="min-h-screen">
      <ForroHeader 
        onNavigate={handleNavigate} 
        language={language}
        onLanguageChange={handleLanguageChange}
        t={t}
      />
      <main className="animate-fade-in">
        {currentPage === 'home' && (
          <>
            <ForroHeroSection t={t} onNavigate={handleNavigate} />
            <ForroFeaturesSection t={t} />
            <ForroAITutorSection t={t} />
            <ForroMissionSection t={t} />
            <ForroCTASection t={t} />
          </>
        )}
        {currentPage === 'learn-more' && <LearnMorePage t={t} />}
        {currentPage === 'privacy' && <PrivacyPage t={t} />}
        {currentPage === 'terms' && <TermsPage t={t} />}
        {currentPage === 'contact' && <ContactPage t={t} />}
      </main>
      <ForroFooter onNavigate={handleNavigate} t={t} />
    </div>
  );
}