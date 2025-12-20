import { Button } from "./ui/button";
import { Download, Apple } from "lucide-react";
import { config } from "../config";

interface ForroCTASectionProps {
  t: any;
}

export function ForroCTASection({ t }: ForroCTASectionProps) {
  return (
    <section className="py-24 bg-[#fefefe] relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#12AD2B]/20 via-[#FFCE00]/20 to-[#D21034]/20 opacity-40 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium glow effect container */}
          <div className="relative animate-fade-in-up">
            {/* Multi-layer glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-[#12AD2B] via-[#FFCE00] to-[#D21034] rounded-[2.5rem] blur-3xl opacity-[0.15]"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#12AD2B] via-[#FFCE00] to-[#D21034] rounded-[2.5rem] blur-2xl opacity-[0.12]"></div>
            
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-white to-stone-50/90 backdrop-blur-2xl border-stone-200/60 border-2 rounded-[2rem] p-12 md:p-16 shadow-2xl">
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/60 to-transparent"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl mb-6 text-stone-900 tracking-tight animate-fade-in">
                  {t.ctaTitle}
                </h2>
                
                <p className="text-xl text-stone-700 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '100ms' }}>
                  {t.ctaDescription}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <a 
                    href={config.downloadLinks.ios} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Download ForroVivo for iOS"
                  >
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto bg-[#12AD2B] hover:bg-[#0f9124] text-white rounded-full px-8 h-14 text-base shadow-xl shadow-[#12AD2B]/30 hover:shadow-2xl hover:shadow-[#12AD2B]/40 transition-all hover:scale-[1.02] group"
                    >
                      <Apple className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                      {t.downloadIOS}
                    </Button>
                  </a>
                  <a 
                    href={config.downloadLinks.android} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Download ForroVivo for Android"
                  >
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full sm:w-auto bg-white border-stone-300 text-stone-900 hover:bg-stone-50 hover:border-stone-400 rounded-full px-8 h-14 text-base shadow-lg shadow-stone-900/5 hover:shadow-xl transition-all hover:scale-[1.02] group backdrop-blur-sm"
                    >
                      <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                      {t.downloadAndroid}
                    </Button>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-2 mt-8">
                  <div className="h-1 w-1 rounded-full bg-stone-400"></div>
                  <p className="text-sm text-stone-600">
                    {t.freeForever}
                  </p>
                  <div className="h-1 w-1 rounded-full bg-stone-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
