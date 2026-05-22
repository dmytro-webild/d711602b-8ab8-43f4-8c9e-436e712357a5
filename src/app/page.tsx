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
      leftCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-wearing-spectacles-holding-newspaper-caf_23-2147876735.jpg?_wi=1", imageAlt: "Studio Forte Massucci Eur" },
        { imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-office-worker-woman-standing-office-desk-with-documents-using-computer-with-confident-serious-expression-face-working-office_141793-21295.jpg?_wi=1", imageAlt: "Portrait of young office worker woman standing at office desk with documents" },
        { imageSrc: "http://img.b2bpic.net/free-photo/corporate-employee-looking-smartphone-screen-while-working-business-planning-with-computer-charts-company-office-businesswoman-using-mobile-phone-brainstorming-ideas_482257-33458.jpg?_wi=1", imageAlt: "Corporate employee looking at smartphone screen" },
        { imageSrc: "http://img.b2bpic.net/free-photo/portrait-businesswoman-with-newspaper_23-2147876730.jpg?_wi=1", imageAlt: "Portrait of a businesswoman with newspaper" },
        { imageSrc: "http://img.b2bpic.net/free-photo/portrait-engineer-using-computer-charts-design-desk-businesswoman-looking-camera-working-with-monitor-project-planning-person-with-corporate-job-company-office_482257-28209.jpg", imageAlt: "Portrait of engineer using computer for charts design" },
      ]}
      rightCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/portrait-project-manager-sitting-office-desk-work-business-growth-with-financial-charts-sales-statistics-marketing-consultant-analyzing-e-commerce-diagrams-computer_482257-41123.jpg", imageAlt: "Consulenza professionale" },
        { imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-office-worker-woman-standing-office-desk-with-documents-using-computer-with-confident-serious-expression-face-working-office_141793-21294.jpg", imageAlt: "Portrait of young office worker woman standing at office desk" },
        { imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-office-worker-woman-standing-office-desk-with-documents-using-computer-with-confident-serious-expression-face-working-office_141793-21295.jpg?_wi=2", imageAlt: "Portrait of young office worker woman standing at office desk with documents" },
        { imageSrc: "http://img.b2bpic.net/free-photo/corporate-employee-looking-smartphone-screen-while-working-business-planning-with-computer-charts-company-office-businesswoman-using-mobile-phone-brainstorming-ideas_482257-33458.jpg?_wi=2", imageAlt: "Corporate employee looking at smartphone screen" },
        { imageSrc: "http://img.b2bpic.net/free-photo/portrait-businesswoman-with-newspaper_23-2147876730.jpg?_wi=2", imageAlt: "Portrait of a businesswoman with newspaper" },
      ]}
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
      imageSrc="http://img.b2bpic.net/free-photo/happy-business-man-working-laptop-lobby_1262-5095.jpg?_wi=1"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Contabilità Fiscale", description: "Dichiarazioni, bilanci e adempimenti.", buttonIcon: Calculator, imageSrc: "http://img.b2bpic.net/free-photo/businessman-examining-document_1098-22046.jpg", imageAlt: "Businessman examining document" },
        { title: "Consulenza Lavoro", description: "Gestione personale, buste paga.", buttonIcon: Users, imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-wearing-spectacles-holding-newspaper-caf_23-2147876735.jpg?_wi=2", imageAlt: "Businessman examining document" },
        { title: "Consulenza Societaria", description: "Costituzione e modifiche societarie.", buttonIcon: Building, imageSrc: "http://img.b2bpic.net/free-photo/happy-business-man-working-laptop-lobby_1262-5095.jpg?_wi=2", imageAlt: "Businessman examining document" },
        { title: "Revisione Legale", description: "Revisione bilanci per enti e imprese.", buttonIcon: ShieldCheck, imageSrc: "http://img.b2bpic.net/free-photo/friendly-handsome-business-leader-cafe_1262-3537.jpg?_wi=1", imageAlt: "Businessman examining document" },
        { title: "Pianificazione Fiscale", description: "Strategie su misura per il risparmio.", buttonIcon: TrendingUp, imageSrc: "http://img.b2bpic.net/free-photo/business-lady-looking-copyspace-with-interest_1262-2957.jpg?_wi=1", imageAlt: "Businessman examining document" },
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
        { id: "1", title: "Eccellenti", quote: "Studio professionale e molto disponibile.", name: "Mario R.", role: "Imprenditore", imageSrc: "http://img.b2bpic.net/free-photo/friendly-handsome-business-leader-cafe_1262-3537.jpg?_wi=2" },
        { id: "2", title: "Puntuali", quote: "Gestione fiscale impeccabile per la mia attività.", name: "Giulia S.", role: "Professionista", imageSrc: "http://img.b2bpic.net/free-photo/business-lady-looking-copyspace-with-interest_1262-2957.jpg?_wi=2" },
        { id: "3", title: "Competenti", quote: "Consigli validissimi per il mio lavoro.", name: "Luca V.", role: "Commerciante", imageSrc: "http://img.b2bpic.net/free-photo/close-up-positive-businesswoman_1098-3531.jpg" },
        { id: "4", title: "Consigliato", quote: "Molto precisi con le scadenze.", name: "Anna P.", role: "Libera Professionista", imageSrc: "http://img.b2bpic.net/free-photo/portrait-brutal-bearded-macho-male-dressed-suit-dark-grey-background_613910-1524.jpg" },
        { id: "5", title: "Servizio Ottimo", quote: "Supporto completo e affidabile.", name: "Roberto D.", role: "Responsabile", imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg" },
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