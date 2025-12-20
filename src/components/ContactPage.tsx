import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { config } from "../config";

interface ContactPageProps {
  t: any;
}

export function ContactPage({ t }: ContactPageProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation and future form submission logic
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Basic validation
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // For now, open mailto link (can be replaced with API call later)
    // Future: Replace with API call to config.api.baseUrl + config.api.contactEndpoint
    window.location.href = `mailto:${config.contact.email.general}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
  };

  return (
    <div className="py-24 bg-[#fefefe] min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl mb-4 text-stone-900 tracking-tight">{t.contactTitle}</h1>
          <p className="text-xl text-stone-700">
            {t.contactDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="group bg-white/80 backdrop-blur-xl border-stone-200/50 hover:border-stone-300 transition-all hover:shadow-xl hover:shadow-stone-900/10 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <CardContent className="pt-8">
              <div className="h-12 w-12 rounded-xl bg-[#12AD2B]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-[#12AD2B]" />
              </div>
              <h3 className="text-xl mb-2 text-stone-900">{t.contactEmailTitle}</h3>
              <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                {t.contactEmailDesc}
              </p>
              <a 
                href={`mailto:${config.contact.email.general}`}
                className="text-[#12AD2B] hover:text-[#0f9124] transition-colors inline-flex items-center gap-2 group/link"
              >
                {config.contact.email.general}
                <Send className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </CardContent>
          </Card>

          <Card className="group bg-white/80 backdrop-blur-xl border-stone-200/50 hover:border-stone-300 transition-all hover:shadow-xl hover:shadow-stone-900/10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <CardContent className="pt-8">
              <div className="h-12 w-12 rounded-xl bg-[#FFCE00]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="h-6 w-6 text-[#FFCE00]" />
              </div>
              <h3 className="text-xl mb-2 text-stone-900">{t.contactCommunityTitle}</h3>
              <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                {t.contactCommunityDesc}
              </p>
              <a 
                href={config.externalLinks.discord}
                className="text-[#12AD2B] hover:text-[#0f9124] transition-colors inline-flex items-center gap-2 group/link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contactJoinDiscord}
                <Send className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-xl border-stone-200/50 shadow-xl shadow-stone-900/10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <CardContent className="pt-10 pb-8">
            <h2 className="text-3xl mb-8 text-stone-900 tracking-tight">{t.contactFormTitle}</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-stone-700">
                  {t.contactNameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 border-stone-200 border rounded-xl bg-white text-stone-900 placeholder:text-stone-500 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-[#12AD2B]/20 transition-all"
                  placeholder={t.contactNamePlaceholder}
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-stone-700">
                  {t.contactEmailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border-stone-200 border rounded-xl bg-white text-stone-900 placeholder:text-stone-500 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-[#12AD2B]/20 transition-all"
                  placeholder={t.contactEmailPlaceholder}
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2 text-stone-700">
                  {t.contactSubjectLabel}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full px-4 py-3 border-stone-200 border rounded-xl bg-white text-stone-900 placeholder:text-stone-500 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-[#12AD2B]/20 transition-all"
                  placeholder={t.contactSubjectPlaceholder}
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-stone-700">
                  {t.contactMessageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border-stone-200 border rounded-xl bg-white text-stone-900 placeholder:text-stone-500 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-[#12AD2B]/20 transition-all resize-none"
                  placeholder={t.contactMessagePlaceholder}
                  aria-required="true"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#12AD2B] hover:bg-[#0f9124] text-white h-12 rounded-xl shadow-lg shadow-[#12AD2B]/20 hover:shadow-xl hover:shadow-[#12AD2B]/30 transition-all group"
                aria-label="Send contact message"
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                {t.contactSendButton}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 p-8 bg-white/60 backdrop-blur-sm border-stone-200/50 border rounded-2xl text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="h-12 w-12 rounded-xl bg-[#D21034]/10 flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-6 w-6 text-[#D21034]" />
          </div>
          <h3 className="text-xl mb-3 text-stone-900">{t.contactPartnershipTitle}</h3>
          <p className="text-stone-700 leading-relaxed max-w-2xl mx-auto">
            {t.contactPartnership}
          </p>
        </div>
      </div>
    </div>
  );
}
