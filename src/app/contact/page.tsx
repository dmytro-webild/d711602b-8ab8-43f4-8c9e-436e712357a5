"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function ContactPage() {
  const handleSubmit = (email: string) => {
    console.log("Email submitted:", email);
    alert(`Grazie per il tuo messaggio! Ti risponderemo presto a ${email}.`);
  };

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
            button={{ text: "Contattaci", href: "/contact" }}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplit
            tag="Contattaci"
            title="Parliamone del tuo business"
            description="Siamo qui per aiutarti. Compila il modulo e ti risponderemo al più presto."
            background={{ variant: "plain" }}
            useInvertedBackground={false}
            inputPlaceholder="La tua email"
            buttonText="Invia Messaggio"
            termsText="Cliccando 'Invia Messaggio' accetti i nostri termini e condizioni."
            onSubmit={handleSubmit}
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