interface TermsPageProps {
  t: any;
}

export function TermsPage({ t }: TermsPageProps) {
  return (
    <div className="py-24 bg-[#fefefe] min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl mb-4 text-stone-900 tracking-tight">{t.termsTitle}</h1>
          <p className="text-lg text-stone-600">{t.lastUpdated}</p>
        </div>
        
        <div className="space-y-10 text-stone-700">
          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.termsAgreementTitle}</h2>
            <p className="leading-relaxed">
              {t.termsAgreement}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.termsServiceTitle}</h2>
            <p className="leading-relaxed">
              {t.termsServiceDesc}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '250ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.termsUseTitle}</h2>
            <p className="mb-4 leading-relaxed">{t.termsUseDesc}</p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-[#12AD2B] mt-1.5">•</span>
                <span>{t.termsUse1}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#12AD2B] mt-1.5">•</span>
                <span>{t.termsUse2}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#12AD2B] mt-1.5">•</span>
                <span>{t.termsUse3}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#12AD2B] mt-1.5">•</span>
                <span>{t.termsUse4}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#12AD2B] mt-1.5">•</span>
                <span>{t.termsUse5}</span>
              </li>
            </ul>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.termsAccountTitle}</h2>
            <p className="leading-relaxed">
              {t.termsAccount}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.termsIPTitle}</h2>
            <p className="leading-relaxed">
              {t.termsIP}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.termsUGCTitle}</h2>
            <p className="leading-relaxed">
              {t.termsUGC}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.termsSubscriptionTitle}</h2>
            <p className="leading-relaxed">
              {t.termsSubscriptionDesc}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '550ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.termsConductTitle}</h2>
            <p className="leading-relaxed">
              {t.termsConductDesc}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.termsAITitle}</h2>
            <p className="leading-relaxed">
              {t.termsAIDesc}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '650ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.termsWarrantyTitle}</h2>
            <p className="leading-relaxed">
              {t.termsWarranty}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.termsLiabilityTitle}</h2>
            <p className="leading-relaxed">
              {t.termsLiability}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '850ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.termsDisputeTitle}</h2>
            <p className="leading-relaxed">
              {t.termsDisputeDesc}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.termsChangesTitle}</h2>
            <p className="leading-relaxed">
              {t.termsChanges}
            </p>
          </section>

          <section className="bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '950ms' }}>
            <h2 className="text-2xl text-stone-900 mb-4">{t.termsContactTitle}</h2>
            <p className="mb-4 leading-relaxed">
              {t.termsContact}
            </p>
            <div className="space-y-2">
              <p className="leading-relaxed">
                <span className="font-medium">Legal Inquiries:</span>{" "}
                <a href="mailto:legal@forrovivo.com" className="text-[#12AD2B] hover:underline hover:text-[#0f9124] transition-colors">
                  {t.termsContactEmail}
                </a>
              </p>
              <p className="leading-relaxed">
                {t.termsSupport.split(": ")[0]}:{" "}
                <a href="mailto:support@forrovivo.com" className="text-[#12AD2B] hover:underline hover:text-[#0f9124] transition-colors">
                  support@forrovivo.com
                </a>
              </p>
              <p className="leading-relaxed">
                {t.termsBilling.split(": ")[0]}:{" "}
                <a href="mailto:billing@forrovivo.com" className="text-[#12AD2B] hover:underline hover:text-[#0f9124] transition-colors">
                  billing@forrovivo.com
                </a>
              </p>
              <div className="mt-4 pt-4 border-t border-stone-200">
                <p className="font-medium mb-2">{t.termsMailingAddress}</p>
                <p className="text-sm text-stone-600 whitespace-pre-line leading-relaxed">
                  {t.termsMailingAddressText}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
