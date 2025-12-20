import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { BookOpen, Globe2, Mic2, Users2, FileText, Heart, AlertTriangle, Music, Scroll, TrendingDown, FileX, MapPin, Smartphone, Volume2, Map, Lightbulb, HandHeart, Share2, Mic, DollarSign } from "lucide-react";

interface LearnMorePageProps {
  t: any;
}

export function LearnMorePage({ t }: LearnMorePageProps) {
  const languages = [
    {
      title: t.forroSantomeTitle,
      description: t.forroSantomeDesc,
      status: t.forroSantomeStatus,
      icon: Globe2,
      color: "text-[#12AD2B]",
      bg: "bg-[#12AD2B]/5",
    },
    {
      title: t.angolarTitle,
      description: t.angolarDesc,
      status: t.angolarStatus,
      icon: Users2,
      color: "text-[#FFCE00]",
      bg: "bg-[#FFCE00]/5",
    },
    {
      title: t.principenseTitle,
      description: t.principenseDesc,
      status: t.principenseStatus,
      icon: AlertTriangle,
      color: "text-[#D21034]",
      bg: "bg-[#D21034]/5",
    },
    {
      title: t.fa_damboTitle,
      description: t.fa_damboDesc,
      status: t.fa_damboStatus,
      icon: MapPin,
      color: "text-[#FFCE00]",
      bg: "bg-[#FFCE00]/5",
    },
  ];

  const endangeredReasons = [
    {
      title: t.endangeredReason1Title,
      description: t.endangeredReason1,
      icon: TrendingDown,
    },
    {
      title: t.endangeredReason2Title,
      description: t.endangeredReason2,
      icon: FileX,
    },
    {
      title: t.endangeredReason3Title,
      description: t.endangeredReason3,
      icon: Users2,
    },
    {
      title: t.endangeredReason4Title,
      description: t.endangeredReason4,
      icon: Map,
    },
  ];

  const significance = [
    {
      title: t.significance1Title,
      description: t.significance1,
      icon: Scroll,
    },
    {
      title: t.significance2Title,
      description: t.significance2,
      icon: Music,
    },
    {
      title: t.significance3Title,
      description: t.significance3,
      icon: FileText,
    },
    {
      title: t.significance4Title,
      description: t.significance4,
      icon: Lightbulb,
    },
  ];

  const howWeHelp = [
    {
      title: t.help1Title,
      description: t.help1,
      icon: Smartphone,
    },
    {
      title: t.help2Title,
      description: t.help2,
      icon: Volume2,
    },
    {
      title: t.help3Title,
      description: t.help3,
      icon: Music,
    },
    {
      title: t.help4Title,
      description: t.help4,
      icon: Globe2,
    },
    {
      title: t.help5Title,
      description: t.help5,
      icon: FileText,
    },
    {
      title: t.help6Title,
      description: t.help6,
      icon: Users2,
    },
  ];

  const getInvolved = [
    {
      title: t.involve1Title,
      description: t.involve1,
      icon: BookOpen,
      color: "text-[#12AD2B]",
      bg: "bg-[#12AD2B]/5",
    },
    {
      title: t.involve2Title,
      description: t.involve2,
      icon: Share2,
      color: "text-[#FFCE00]",
      bg: "bg-[#FFCE00]/5",
    },
    {
      title: t.involve3Title,
      description: t.involve3,
      icon: Mic,
      color: "text-[#D21034]",
      bg: "bg-[#D21034]/5",
    },
    {
      title: t.involve4Title,
      description: t.involve4,
      icon: DollarSign,
      color: "text-[#12AD2B]",
      bg: "bg-[#12AD2B]/5",
    },
  ];

  return (
    <div className="py-24 bg-[#fefefe] min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-6xl mb-6 text-stone-900 tracking-tight">
            {t.learnMoreTitle}
          </h1>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto">
            {t.learnMoreSubtitle}
          </p>
        </div>

        {/* What is Forro Section */}
        <section className="mb-24 animate-fade-in-up">
          <div className="bg-white border border-stone-200 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-stone-900 tracking-tight">
              {t.whatIsForro}
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed">
              {t.whatIsForroDesc}
            </p>
          </div>
        </section>

        {/* Languages Section */}
        <section className="mb-24">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl mb-4 text-stone-900 tracking-tight">
              {t.languagesTitle}
            </h2>
            <p className="text-lg text-stone-700">
              {t.languagesIntro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <Card
                key={index}
                style={{ animationDelay: `${index * 100}ms` }}
                className="group bg-white/80 backdrop-blur-xl border-stone-200/50 hover:border-stone-300 transition-all hover:shadow-xl hover:shadow-stone-900/10 hover:-translate-y-1 animate-fade-in-up"
              >
                <CardContent className="pt-8">
                  <div className={`h-14 w-14 rounded-xl ${lang.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <lang.icon className={`h-7 w-7 ${lang.color}`} />
                  </div>
                  <h3 className="text-2xl mb-3 text-stone-900">{lang.title}</h3>
                  <p className="text-stone-700 mb-4 leading-relaxed">
                    {lang.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1.5 bg-stone-100 border-stone-200 border rounded-full text-sm text-stone-600">
                    {lang.status}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Endangered Section */}
        <section className="mb-24">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl mb-4 text-stone-900 tracking-tight">
              {t.whyEndangeredTitle}
            </h2>
            <p className="text-lg text-stone-700 max-w-3xl mx-auto">
              {t.whyEndangeredIntro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {endangeredReasons.map((reason, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 100}ms` }}
                className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#D21034]/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="h-6 w-6 text-[#D21034]" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-stone-900">{reason.title}</h3>
                    <p className="text-stone-700 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Significance Section */}
        <section className="mb-24">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl mb-4 text-stone-900 tracking-tight">
              {t.culturalSignificanceTitle}
            </h2>
            <p className="text-lg text-stone-700 max-w-3xl mx-auto">
              {t.culturalSignificanceDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {significance.map((item, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 100}ms` }}
                className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#FFCE00]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-[#FFCE00]" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-stone-900">{item.title}</h3>
                    <p className="text-stone-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How ForroVivo Helps Section */}
        <section className="mb-24">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl mb-4 text-stone-900 tracking-tight">
              {t.howWeHelpTitle}
            </h2>
            <p className="text-lg text-stone-700 max-w-3xl mx-auto">
              {t.howWeHelpDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {howWeHelp.map((item, index) => (
              <Card
                key={index}
                style={{ animationDelay: `${index * 100}ms` }}
                className="group bg-white/80 backdrop-blur-xl border-stone-200/50 hover:border-stone-300 transition-all hover:shadow-xl hover:shadow-stone-900/10 hover:-translate-y-1 animate-fade-in-up"
              >
                <CardContent className="pt-8">
                  <div className="h-12 w-12 rounded-xl bg-[#12AD2B]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-[#12AD2B]" />
                  </div>
                  <h3 className="text-xl mb-2 text-stone-900">{item.title}</h3>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl mb-4 text-stone-900 tracking-tight">
              {t.getInvolvedTitle}
            </h2>
            <p className="text-lg text-stone-700 max-w-3xl mx-auto">
              {t.getInvolvedDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {getInvolved.map((item, index) => (
              <Card
                key={index}
                style={{ animationDelay: `${index * 100}ms` }}
                className="group bg-white/80 backdrop-blur-xl border-stone-200/50 hover:border-stone-300 transition-all hover:shadow-xl hover:shadow-stone-900/10 hover:-translate-y-1 animate-fade-in-up"
              >
                <CardContent className="pt-8">
                  <div className={`h-14 w-14 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`h-7 w-7 ${item.color}`} />
                  </div>
                  <h3 className="text-2xl mb-3 text-stone-900">{item.title}</h3>
                  <p className="text-stone-700 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="relative animate-fade-in-up">
          {/* Multi-layer glow */}
          <div className="absolute -inset-8 bg-gradient-to-r from-[#12AD2B] via-[#FFCE00] to-[#D21034] rounded-[2.5rem] blur-3xl opacity-[0.15]"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-[#12AD2B] via-[#FFCE00] to-[#D21034] rounded-[2.5rem] blur-2xl opacity-[0.12]"></div>
          
          {/* Main card */}
          <div className="relative bg-gradient-to-br from-white to-stone-50/90 backdrop-blur-2xl border-stone-200/60 border-2 rounded-[2rem] p-12 md:p-16 shadow-2xl text-center">
            <div className="relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#12AD2B] to-[#0f9124] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#12AD2B]/20">
                <Heart className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl mb-6 text-stone-900 tracking-tight">
                {t.learnMoreCTA}
              </h2>
              
              <Button 
                size="lg" 
                className="bg-[#12AD2B] hover:bg-[#0f9124] text-white rounded-full px-10 h-14 text-base shadow-xl shadow-[#12AD2B]/30 hover:shadow-2xl hover:shadow-[#12AD2B]/40 transition-all hover:scale-[1.02] group"
              >
                {t.learnMoreCTAButton}
                <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
