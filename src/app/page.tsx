"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Calculator, Users, Building, ShieldCheck, TrendingUp } from 'lucide-react';
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
        { name: "Home", id: "/" },
        { name: "Chi Siamo", id: "/#about" },
        { name: "Servizi", id: "/#services" },
        { name: "Tariffe", id: "/#pricing" }
      ]}
      brandName="Studio Forte Massucci"
      button={{ text: "Contattaci", href: "/#footer" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "gradient-bars" }}
      title="Studio Forte Massucci. "
      description="Studio Forte Massucci offre assistenza pluriennale per la tua contabilità, gestione societaria e revisione legale. Soluzioni su misura nel cuore di Roma."
      leftCarouselItems={[{ imageSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&q=80", imageAlt: "Studio Ambiente" }, { imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&q=80", imageAlt: "Consulenza Professionale" }]}
      rightCarouselItems={[{ imageSrc: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&q=80", imageAlt: "Team Lavoro" }, { imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&q=80", imageAlt: "Business Roma" }]}
      
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
        { title: "Revisione Legale", description: "Revisione puntuale e certificata." }
      ]}
      imageSrc="https://img.b2bpic.net/premium-photo/businesswoman-shaking-hands-with-businessman-desk-office_265022-112864.jpg?id=416438581"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Contabilità Fiscale", description: "Dichiarazioni, bilanci e adempimenti.", imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&q=80", buttonIcon: Calculator },
        { title: "Consulenza Lavoro", description: "Gestione personale, buste paga.", imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&q=80", buttonIcon: Users },
        { title: "Consulenza Societaria", description: "Costituzione e modifiche societarie.", imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&q=80", buttonIcon: Building },
        { title: "Revisione Legale", description: "Revisione bilanci per enti e imprese.", imageSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&q=80", buttonIcon: ShieldCheck },
        { title: "Pianificazione Fiscale", description: "Strategie su misura per il risparmio.", imageSrc: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&q=80", buttonIcon: TrendingUp }
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
        { id: "forfait", name: "Contabilità Forfettaria", price: "€50/mese", features: ["Dichiarazione redditi", "Assistenza base", "Gestione scadenzario"], buttons: [{ text: "Seleziona Piano", href: "/#pricing" }] },
        { id: "base", name: "Contabilità Base", price: "€150/mese", features: ["Contabilità completa", "Bilancio periodico", "Consulenza dedicata"], buttons: [{ text: "Seleziona Piano", href: "/#pricing" }] },
        { id: "pro", name: "Consulenza Business", price: "€300/mese", features: ["Analisi strategica", "Pianificazione finanziaria", "Supporto dedicato"], buttons: [{ text: "Seleziona Piano", href: "/#pricing" }] }
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
        { id: "m1", value: "25", description: "Anni di esperienza" },
        { id: "m3", value: "100%", description: "Precisione garantita" }
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
        { id: "q3", title: "Offrite consulenza online?", content: "Sì, supportiamo incontri remoti via call." }
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
        { id: "1", title: "Eccellenti", quote: "Studio professionale e molto disponibile.", name: "Mario R.", role: "Imprenditore", imageSrc: "https://via.placeholder.com/150" },
        { id: "2", title: "Puntuali", quote: "Gestione fiscale impeccabile per la mia attività.", name: "Giulia S.", role: "Professionista", imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&q=80" },
        { id: "3", title: "Competenti", quote: "Consigli validissimi per il mio lavoro.", name: "Luca V.", role: "Commerciante", imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&q=80" },
        { id: "4", title: "Consigliato", quote: "Molto precisi con le scadenze.", name: "Anna P.", role: "Libera Professionista", imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&q=80" },
        { id: "5", title: "Servizio Ottimo", quote: "Supporto completo e affidabile.", name: "Roberto D.", role: "Responsabile", imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&q=80" },
        { "id": "6", "title": "Affidabile", "quote": "Sempre disponibili e professionali.", "name": "Sofia G.", "role": "Impiegata" }
      ]}
      title="Cosa dicono i clienti"
      description="La soddisfazione dei nostri assistiti è la nostra priorità."
    />
  </div>

  

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Studio Forte Massucci"
      columns={[
        { title: "Contatti", items: [{ label: "Via Luigi Lilio 22, Eur", href: "#" }, { label: "studiofortemassucci@gmail.com", href: "mailto:studiofortemassucci@gmail.com" }, { label: "065037814", href: "tel:065037814" }] },
        { title: "Servizi", items: [{ label: "Fiscale", href: "/#services" }, { label: "Lavoro", href: "/#services" }, { label: "Societario", href: "/#services" }] }
      ]}
      copyrightText="© 2024 Studio Forte Massucci. Tutti i diritti riservati."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}