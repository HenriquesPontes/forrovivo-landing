import { Card, CardContent } from "./ui/card";
import { BookOpen, Sparkles, MessageCircle, Music, Trophy, Users } from "lucide-react";

interface ForroFeaturesSectionProps {
  t: any;
}

export function ForroFeaturesSection({ t }: ForroFeaturesSectionProps) {
  const features = [
    {
      icon: BookOpen,
      title: t.featureDictionary,
      description: t.featureDictionaryDesc,
      color: "text-[#12AD2B]",
      bg: "bg-[#12AD2B]/5",
    },
    {
      icon: Sparkles,
      title: t.featureLessons,
      description: t.featureLessonsDesc,
      color: "text-[#FFCE00]",
      bg: "bg-[#FFCE00]/5",
    },
    {
      icon: MessageCircle,
      title: t.featureAI,
      description: t.featureAIDesc,
      color: "text-[#D21034]",
      bg: "bg-[#D21034]/5",
    },
    {
      icon: Music,
      title: t.featureCulture,
      description: t.featureCultureDesc,
      color: "text-[#12AD2B]",
      bg: "bg-[#12AD2B]/5",
    },
    {
      icon: Trophy,
      title: t.featureGamified,
      description: t.featureGamifiedDesc,
      color: "text-[#FFCE00]",
      bg: "bg-[#FFCE00]/5",
    },
    {
      icon: Users,
      title: t.featureCommunity,
      description: t.featureCommunityDesc,
      color: "text-[#D21034]",
      bg: "bg-[#D21034]/5",
    }
  ];

  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Subtle gradient accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#12AD2B] to-transparent opacity-[0.04] blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#D21034] to-transparent opacity-[0.04] blur-[140px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl mb-4 text-stone-900 tracking-tight">
            {t.featuresTitle}
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            {t.featuresDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              style={{ animationDelay: `${index * 100}ms` }}
              className={`group cursor-pointer transition-all duration-300 animate-fade-in-up ${
                index === 0 || index === 3 || index === 5 
                  ? 'bg-white/80'
                  : 'bg-white/60'
              } backdrop-blur-xl border-stone-200/50 hover:border-stone-300 hover:bg-white hover:shadow-xl hover:shadow-stone-900/10 hover:-translate-y-1`}
            >
              <CardContent className="pt-6">
                <div className={`h-12 w-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl mb-2 text-stone-900">{feature.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
