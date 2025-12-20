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

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

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
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "23 Wren House",
          "addressLocality": "London",
          "addressRegion": "Westminster",
          "postalCode": "SW1V 3QD",
          "addressCountry": "GB"
        }
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