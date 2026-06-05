"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm'; // New import

export default function ContactPage() {
  const handleSubmit = (data: Record<string, string>) => {
    console.log("Form data submitted:", data);
    const email = data.email || 'N/A';
    const message = data.message || 'N/A';
    alert(`Grazie per il tuo messaggio da ${email}!\nMessaggio: \"${message}\"\nTi risponderemo presto. Il tuo messaggio sarà inviato a studiofortemassucci@gmail.com.`);
    // In a real application, you would send this data to a backend service.
  };

  const commonNavbarProps = {
    brandName: "Studio Forte Massucci",    navItems: [
      { name: "Home", id: "/" },
      { name: "Chi Siamo", id: "/#about" },
      { name: "Servizi", id: "/#services" },
      { name: "Tariffe", id: "/#pricing" }
    ],
    button: { text: "Contattaci", href: "/contact" }
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
          <NavbarLayoutFloatingInline {...commonNavbarProps} />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            title="Parliamone del tuo business"
            description="Siamo qui per aiutarti. Compila il modulo e ti risponderemo al più presto."
            useInvertedBackground={false}
            inputs={[
              { name: "name", type: "text", placeholder: "Il tuo nome", required: true },
              { name: "email", type: "email", placeholder: "La tua email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Il tuo messaggio", rows: 5, required: true }}
            buttonText="Invia Messaggio"
            onSubmit={handleSubmit}
            imageSrc="https://images.unsplash.com/photo-1542359649-31e03cd4d91b?w=800&h=600&q=80" // Adding a placeholder image for ContactSplitForm, as it is recommended.
            imageAlt="Contact form background image"
            mediaPosition="right"
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