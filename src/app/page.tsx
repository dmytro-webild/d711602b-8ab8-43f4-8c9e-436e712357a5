"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Calculator, Users, Building, ShieldCheck, TrendingUp } from 'lucide-react';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Chi Siamo", id: "about" },
        { name: "Servizi", id: "services" },
        { name: "Tariffe", id: "pricing" },
        { name: "Contatti", id: "contact" },
      ]}
      brandName="Studio Forte Massucci"
      button={{ text: "Contattaci", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "gradient-bars" }}
      title="Studio Forte Massucci. "
      description="Studio Forte Massucci offre assistenza pluriennale per la tua contabilità, gestione societaria e revisione legale. Soluzioni su misura nel cuore di Roma."
      leftCarouselItems={[]}
      rightCarouselItems={[]}
      buttons={[{ text: "Contattaci", href: "#contact" }]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Esperienza al servizio del tuo business"
      description="Situati in Via Luigi Lilio 22 all'Eur, mettiamo a disposizione anni di esperienza per supportare professionisti e aziende nella gestione fiscale e lavorativa."
      bulletPoints={[
        { title: "Consulenza Fiscale", description: "Gestione accurata delle imposte." },
        { title: "Gestione Lavoro", description: "Supporto completo paghe e contributi." },
        { title: "Revisione Legale", description: "Revisione puntuale e certificata." },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Contabilità Fiscale", description: "Dichiarazioni, bilanci e adempimenti.", buttonIcon: Calculator },
        { title: "Consulenza Lavoro", description: "Gestione personale, buste paga.", buttonIcon: Users },
        { title: "Consulenza Societaria", description: "Costituzione e modifiche societarie.", buttonIcon: Building },
        { title: "Revisione Legale", description: "Revisione bilanci per enti e imprese.", buttonIcon: ShieldCheck },
        { title: "Pianificazione Fiscale", description: "Strategie su misura per il risparmio.", buttonIcon: TrendingUp },
      ]}
      title="I nostri Servizi"
      description="Copriamo ogni aspetto amministrativo della tua attività professionale."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "forfait", name: "Contabilità Forfettaria", price: "€50/mese", features: ["Dichiarazione redditi", "Assistenza base", "Gestione scadenzario"], buttons: [{ text: "Scegli", href: "#contact" }] },
        { id: "base", name: "Contabilità Base", price: "€150/mese", features: ["Contabilità completa", "Bilancio periodico", "Consulenza dedicata"], buttons: [{ text: "Scegli", href: "#contact" }] },
        { id: "pro", name: "Consulenza Business", price: "€300/mese", features: ["Analisi strategica", "Pianificazione finanziaria", "Supporto dedicato"], buttons: [{ text: "Scegli", href: "#contact" }] },
      ]}
      title="Tariffe trasparenti"
      description="Soluzioni di abbonamento mensile per ogni esigenza."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Numeri del nostro studio"
      tag="Eccellenza"
      metrics={[
        { id: "m1", value: "15+", description: "Anni di esperienza" },
        { id: "m2", value: "200+", description: "Clienti attivi" },
        { id: "m3", value: "100%", description: "Precisione garantita" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Dove si trova lo studio?", content: "Siamo in Via Luigi Lilio 22, all'Eur, Roma." },
        { id: "q2", title: "Come posso richiedere un preventivo?", content: "Contattaci tramite il modulo qui sotto." },
        { id: "q3", title: "Offrite consulenza online?", content: "Sì, supportiamo incontri remoti via call." },
      ]}
      sideTitle="Domande Frequenti"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", title: "Eccellenti", quote: "Studio professionale e molto disponibile.", name: "Mario R.", role: "Imprenditore" },
        { id: "2", title: "Puntuali", quote: "Gestione fiscale impeccabile per la mia attività.", name: "Giulia S.", role: "Professionista" },
        { id: "3", title: "Competenti", quote: "Consigli validissimi per il mio lavoro.", name: "Luca V.", role: "Commerciante" },
        { id: "4", title: "Consigliato", quote: "Molto precisi con le scadenze.", name: "Anna P.", role: "Libera Professionista" },
        { id: "5", title: "Servizio Ottimo", quote: "Supporto completo e affidabile.", name: "Roberto D.", role: "Responsabile" },
      ]}
      title="Cosa dicono i clienti"
      description="La soddisfazione dei nostri assistiti è la nostra priorità."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "rotated-rays-static" }}
      tag="Contatti"
      title="Parliamo del tuo business"
      description="Scrivici per prenotare un appuntamento presso lo studio all'Eur."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Studio Forte Massucci"
      columns={[
        { title: "Contatti", items: [{ label: "Via Luigi Lilio 22, Eur", href: "#" }, { label: "info@forte-massucci.it", href: "mailto:info@forte-massucci.it" }] },
        { title: "Servizi", items: [{ label: "Fiscale", href: "#services" }, { label: "Lavoro", href: "#services" }, { label: "Societario", href: "#services" }] },
      ]}
      copyrightText="© 2024 Studio Forte Massucci. Tutti i diritti riservati."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}