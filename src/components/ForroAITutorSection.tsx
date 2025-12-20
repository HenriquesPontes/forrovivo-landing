import { BookOpen, Globe2, Sparkles, CheckCircle } from "lucide-react";

interface ForroAITutorSectionProps {
  t: any;
}

export function ForroAITutorSection({ t }: ForroAITutorSectionProps) {
  const features = [
    {
      icon: BookOpen,
      title: t.aiTutorFeature1,
      description: t.aiTutorFeature1Desc,
      color: "text-[#12AD2B]",
      bg: "bg-[#12AD2B]/5",
    },
    {
      icon: Globe2,
      title: t.aiTutorFeature2,
      description: t.aiTutorFeature2Desc,
      color: "text-[#FFCE00]",
      bg: "bg-[#FFCE00]/5",
    },
    {
      icon: Sparkles,
      title: t.aiTutorFeature3,
      description: t.aiTutorFeature3Desc,
      color: "text-[#D21034]",
      bg: "bg-[#D21034]/5",
    },
    {
      icon: CheckCircle,
      title: t.aiTutorFeature4,
      description: t.aiTutorFeature4Desc,
      color: "text-[#12AD2B]",
      bg: "bg-[#12AD2B]/5",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#12AD2B] to-[#0f9124] opacity-[0.06] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFCE00] to-[#e6b800] opacity-[0.05] blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl mb-4 text-stone-900 tracking-tight">
              {t.aiTutorTitle}
            </h2>
            <p className="text-xl text-stone-600 mb-6">
              {t.aiTutorSubtitle}
            </p>
            <p className="text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">
              {t.aiTutorDescription}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm border-stone-200/60 border rounded-2xl p-8 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.bg} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-7 w-7 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

