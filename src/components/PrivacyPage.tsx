interface PrivacyPageProps {
  t: any;
}

export function PrivacyPage({ t }: PrivacyPageProps) {
  return (
    <div className="py-24 bg-[#fefefe] min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl mb-4 text-stone-900 tracking-tight">{t.privacyTitle}</h1>
          <p className="text-lg text-stone-600">{t.lastUpdated}</p>
        </div>
        
        <div className="space-y-10 text-stone-700">
          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.privacyIntroTitle}</h2>
            <p className="leading-relaxed">
              {t.privacyIntro}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.privacyCollectTitle}</h2>
            <p className="mb-4 leading-relaxed">{t.privacyCollectDesc}</p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-[#12AD2B] mt-1.5">•</span>
                <span>{t.privacyCollect1}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#12AD2B] mt-1.5">•</span>
                <span>{t.privacyCollect2}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#12AD2B] mt-1.5">•</span>
                <span>{t.privacyCollect3}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#12AD2B] mt-1.5">•</span>
                <span>{t.privacyCollect4}</span>
              </li>
            </ul>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.privacyUseTitle}</h2>
            <p className="mb-4 leading-relaxed">{t.privacyUseDesc}</p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-[#FFCE00] mt-1.5">•</span>
                <span>{t.privacyUse1}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FFCE00] mt-1.5">•</span>
                <span>{t.privacyUse2}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FFCE00] mt-1.5">•</span>
                <span>{t.privacyUse3}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FFCE00] mt-1.5">•</span>
                <span>{t.privacyUse4}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FFCE00] mt-1.5">•</span>
                <span>{t.privacyUse5}</span>
              </li>
            </ul>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.privacySharingTitle}</h2>
            <p className="leading-relaxed">
              {t.privacySharing}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.privacyRightsTitle}</h2>
            <p className="mb-4 leading-relaxed">{t.privacyRightsDesc}</p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-[#D21034] mt-1.5">•</span>
                <span>{t.privacyRight1}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D21034] mt-1.5">•</span>
                <span>{t.privacyRight2}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D21034] mt-1.5">•</span>
                <span>{t.privacyRight3}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D21034] mt-1.5">•</span>
                <span>{t.privacyRight4}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D21034] mt-1.5">•</span>
                <span>{t.privacyRight5}</span>
              </li>
            </ul>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '550ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.privacySecurityTitle}</h2>
            <p className="leading-relaxed">
              {t.privacySecurityDesc}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.privacyRetentionTitle}</h2>
            <p className="leading-relaxed">
              {t.privacyRetentionDesc}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '650ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.privacyChildrenTitle}</h2>
            <p className="leading-relaxed">
              {t.privacyChildrenDesc}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.privacyInternationalTitle}</h2>
            <p className="leading-relaxed">
              {t.privacyInternationalDesc}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '750ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.privacyChangesTitle}</h2>
            <p className="leading-relaxed">
              {t.privacyChangesDesc}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.privacyContactTitle}</h2>
            <p className="mb-4 leading-relaxed">
              {t.privacyContact}
            </p>
            <div className="space-y-2">
              <p className="leading-relaxed">
                <span className="font-medium">Privacy Questions:</span>{" "}
                <a href="mailto:privacy@forrovivo.com" className="text-[#12AD2B] hover:underline hover:text-[#0f9124] transition-colors">
                  {t.privacyContactEmail}
                </a>
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Data Protection Officer:</span>{" "}
                <a href="mailto:dpo@forrovivo.com" className="text-[#12AD2B] hover:underline hover:text-[#0f9124] transition-colors">
                  dpo@forrovivo.com
                </a>
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Security Issues:</span>{" "}
                <a href="mailto:security@forrovivo.com" className="text-[#12AD2B] hover:underline hover:text-[#0f9124] transition-colors">
                  security@forrovivo.com
                </a>
              </p>
              <div className="mt-4 pt-4 border-t border-stone-200">
                <p className="font-medium mb-2">{t.privacyMailingAddress}</p>
                <p className="text-sm text-stone-600 whitespace-pre-line leading-relaxed">
                  {t.privacyMailingAddressText}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
