import { Button } from "./ui/button";
import { Download, Globe } from "lucide-react";
import { Language } from "../translations";
import { config } from "../config";

interface ForroHeaderProps {
  onNavigate: (page: string) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: any;
}

export function ForroHeader({ onNavigate, language, onLanguageChange, t }: ForroHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl transition-all duration-300 border-b border-stone-200/80 bg-white/70 shadow-[0_1px_0_0_rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 hover:opacity-70 transition-opacity"
          aria-label="Go to home page"
        >
          <img 
            src="/ICON/icon.png" 
            alt="ForroVivo Logo" 
            className="h-8 w-8 object-contain"
          />
          <span className="text-xl tracking-tight text-stone-900">
            ForroVivo
          </span>
        </button>

        <nav className="flex items-center gap-2" aria-label="Main navigation">
          {/* Language Toggle */}
          <button
            onClick={() => onLanguageChange(language === 'en' ? 'pt' : 'en')}
            className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all hover:bg-stone-100 text-stone-500 hover:text-stone-900"
            aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'} language`}
            aria-pressed={language === 'en' ? false : true}
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm uppercase tracking-wide">{language === 'en' ? 'PT' : 'EN'}</span>
          </button>
          
          <a 
            href={config.downloadLinks.ios} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Download ForroVivo app"
          >
            <Button className="bg-[#12AD2B] hover:bg-[#0f9124] text-white shadow-lg shadow-[#12AD2B]/20 hover:shadow-xl hover:shadow-[#12AD2B]/30 transition-all">
              <Download className="mr-2 h-4 w-4" aria-hidden="true" />
              {t.downloadApp}
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
