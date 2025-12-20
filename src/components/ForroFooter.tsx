import { Facebook, Instagram, Mail, Twitter, Globe } from "lucide-react";
import { config } from "../config";

interface ForroFooterProps {
  onNavigate: (page: string) => void;
  t: any;
}

export function ForroFooter({ onNavigate, t }: ForroFooterProps) {
  return (
    <footer className="border-stone-200 border-t py-16 bg-white backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Brand */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-70 transition-opacity group animate-fade-in"
          >
            <img 
              src="/ICON/icon.png" 
              alt="ForroVivo Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl text-stone-900 tracking-tight">ForroVivo</span>
          </button>

          <p className="flex items-center justify-center gap-2 text-sm text-stone-600 max-w-md leading-relaxed animate-fade-in" style={{ animationDelay: '100ms' }}>
            {t.footerTagline}
            <Globe className="h-4 w-4 text-[#12AD2B]" />
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <a 
              href={config.externalLinks.social.facebook}
              className="p-2.5 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-[#12AD2B] transition-all hover:scale-110"
              aria-label="Visit our Facebook page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a 
              href={config.externalLinks.social.instagram}
              className="p-2.5 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-[#12AD2B] transition-all hover:scale-110"
              aria-label="Visit our Instagram page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a 
              href={config.externalLinks.social.twitter}
              className="p-2.5 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-[#12AD2B] transition-all hover:scale-110"
              aria-label="Visit our Twitter page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" aria-hidden="true" />
            </a>
            <a 
              href={`mailto:${config.contact.email.general}`}
              className="p-2.5 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-[#12AD2B] transition-all hover:scale-110"
              aria-label="Send us an email"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8 text-sm text-stone-600 animate-fade-in" style={{ animationDelay: '300ms' }} aria-label="Footer navigation">
            <button 
              onClick={() => onNavigate('learn-more')}
              className="hover:text-[#12AD2B] transition-colors"
              aria-label="Learn more about Forro languages"
            >
              Learn More
            </button>
            <div className="h-1 w-1 rounded-full bg-stone-300" aria-hidden="true"></div>
            <button 
              onClick={() => onNavigate('privacy')}
              className="hover:text-[#12AD2B] transition-colors"
              aria-label="View privacy policy"
            >
              {t.privacyLink}
            </button>
            <div className="h-1 w-1 rounded-full bg-stone-300" aria-hidden="true"></div>
            <button 
              onClick={() => onNavigate('terms')}
              className="hover:text-[#12AD2B] transition-colors"
              aria-label="View terms of service"
            >
              {t.termsLink}
            </button>
            <div className="h-1 w-1 rounded-full bg-stone-300" aria-hidden="true"></div>
            <button 
              onClick={() => onNavigate('contact')}
              className="hover:text-[#12AD2B] transition-colors"
              aria-label="Contact us"
            >
              {t.contactLink}
            </button>
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-stone-200 animate-fade-in" style={{ animationDelay: '400ms' }}></div>

          <div className="text-xs text-stone-500 animate-fade-in" style={{ animationDelay: '500ms' }}>
            {t.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}