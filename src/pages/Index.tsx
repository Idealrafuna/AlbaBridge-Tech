import { Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 md:py-32">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-center">
          AlbaBridge Tech SH.P.K.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl text-center">
          Software and technology services
        </p>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 md:py-24 bg-secondary/30">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            About Us
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            AlbaBridge Tech SH.P.K. is a software and technology services company based in Prishtina, Kosovo. 
            We specialize in developing innovative digital solutions for businesses worldwide. 
            Our team is dedicated to delivering high-quality software that meets the evolving needs of our clients.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Contact
          </h2>
          <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-12">
            <a 
              href="mailto:contact@example.com" 
              className="flex items-center gap-3 text-muted-foreground hover:text-accent-blue transition-colors"
            >
              <Mail className="h-5 w-5 text-accent-blue" />
              <span>contact@example.com</span>
            </a>
            <a 
              href="tel:+383XXXXXXXX" 
              className="flex items-center gap-3 text-muted-foreground hover:text-accent-blue transition-colors"
            >
              <Phone className="h-5 w-5 text-accent-blue" />
              <span>+383 XX XXX XXX</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-accent-blue" />
              <span>Prishtina, Kosovo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AlbaBridge Tech SH.P.K. · Prishtina, Kosovo
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
