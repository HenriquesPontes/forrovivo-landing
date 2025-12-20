import { Button } from "./ui/button";
import { ChevronRight, BookOpen, Music, Bot, Globe } from "lucide-react";

interface ForroHeroSectionProps {
  t: any;
  onNavigate: (page: string) => void;
}

export function ForroHeroSection({ t, onNavigate }: ForroHeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fefefe] text-stone-900">
      {/* Background with gradient */}
      <div className="absolute inset-0 -z-10">
        {/* Light mode gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-[#fefefe] to-stone-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,250,249,0.8),transparent_50%)]"></div>
        </div>
        
        {/* Sophisticated accent gradients using brand colors */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-br from-[#12AD2B] to-[#0f9124] opacity-[0.08] blur-[120px] rounded-full"></div>
        <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#FFCE00] to-[#e6b800] opacity-[0.05] blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#D21034] to-[#a80d2a] opacity-[0.05] blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow text */}
          <div className="mb-6 animate-fade-in">
            <p className="flex items-center justify-center gap-2 text-lg md:text-xl text-stone-600">
              <Globe className="h-5 w-5 text-[#12AD2B]" />
              {t.preservingTag}
            </p>
          </div>

          {/* Main headline - Apple style large text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-[1.05] animate-fade-in-up">
            {t.heroTitle}
            <br />
            <span className="bg-gradient-to-r from-[#12AD2B] via-[#FFCE00] to-[#D21034] bg-clip-text text-transparent">
              {t.heroTitleHighlight}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-stone-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t.heroDescription}
          </p>

          {/* CTA buttons - Apple style */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button 
              size="lg" 
              className="bg-[#12AD2B] hover:bg-[#0f9124] text-white rounded-full px-8 h-12 text-base shadow-xl shadow-[#12AD2B]/20 hover:shadow-2xl hover:shadow-[#12AD2B]/30 transition-all hover:scale-[1.02]"
            >
              {t.startLearning}
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-[#12AD2B] hover:text-[#0f9124] hover:bg-stone-100 rounded-full px-8 h-12 text-base group transition-all"
              onClick={() => onNavigate('learn-more')}
            >
              Learn more
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Product showcase area */}
          <div className="relative mt-20">
            {/* Glass card showcasing features */}
            <div className="relative max-w-4xl mx-auto">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#12AD2B] via-[#FFCE00] to-[#D21034] rounded-3xl blur-3xl opacity-[0.12]"></div>
              
              {/* Main card */}
              <div className="relative backdrop-blur-2xl border rounded-3xl p-8 md:p-12 transition-all bg-white/60 border-stone-200/50 shadow-2xl shadow-stone-900/[0.08]">
                {/* Feature grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Feature 1 */}
                  <div className="text-center space-y-3 group">
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                      <BookOpen className="h-16 w-16 text-[#12AD2B]" />
                    </div>
                    <h3 className="text-xl text-stone-900">{t.wordsLabel}</h3>
                    <p className="text-sm text-stone-600">{t.dictionaryLabel}</p>
                  </div>

                  {/* Feature 2 */}
                  <div className="text-center space-y-3 group">
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Music className="h-16 w-16 text-[#FFCE00]" />
                    </div>
                    <h3 className="text-xl text-stone-900">{t.cultureLabel}</h3>
                    <p className="text-sm text-stone-600">{t.contentLabel}</p>
                  </div>

                  {/* Feature 3 */}
                  <div className="text-center space-y-3 group">
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Bot className="h-16 w-16 text-[#D21034]" />
                    </div>
                    <h3 className="text-xl text-stone-900">{t.aiLabel}</h3>
                    <p className="text-sm text-stone-600">{t.tutorLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
        <div className="flex flex-col items-center gap-2 text-stone-400">
          <div className="w-5 h-8 border-stone-400 border-2 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-stone-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}