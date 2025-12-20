import { Globe } from "lucide-react";

interface ForroMissionSectionProps {
  t: any;
}

export function ForroMissionSection({ t }: ForroMissionSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-[#fefefe] via-white to-stone-50 relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#FFCE00] via-[#12AD2B] to-[#D21034] opacity-[0.06] blur-[160px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 bg-stone-100 backdrop-blur-xl border-stone-200/50 border rounded-full text-sm text-stone-700 shadow-sm">
              {t.missionTag}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-10 text-stone-900 tracking-tight animate-fade-in-up">
            {t.missionTitle}
          </h2>
          
          <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
            <p className="bg-white/50 backdrop-blur-sm border-stone-200/30 border rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              {t.missionParagraph1}
            </p>
            <p className="bg-white/50 backdrop-blur-sm border-stone-200/30 border rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {t.missionParagraph2}
            </p>
            <p className="flex items-center justify-center gap-2 text-stone-900 text-xl mt-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
              {t.missionParagraph3}
              <Globe className="h-5 w-5 text-[#12AD2B]" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
