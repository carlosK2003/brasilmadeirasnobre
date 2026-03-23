import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname === "/") {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + id);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-2">BMN</h3>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">
              Brasil Madeiras Nobre
            </p>
            <p className="font-sans text-sm text-primary-foreground/70 leading-relaxed">
              Madeiras nobres nacionais e importadas premium com qualidade certificada, transformando espaços com elegância e durabilidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-primary-foreground/50 mb-4 font-semibold">
              Links Rápidos
            </h4>
            <nav className="space-y-2">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre Nós", href: "#sobre" },
                { label: "Produtos", href: "#produtos" },
                { label: "Inspiração", href: "#inspiracao" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block font-sans text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-primary-foreground/50 mb-4 font-semibold">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="font-sans text-sm text-primary-foreground/70">R. Frederico Maurer, 421 - Hauer, Curitiba - PR, 81630-020, Brasil</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="https://wa.me/5541996249714" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  (41) 99624-9714
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="font-sans text-sm text-primary-foreground/70">contato@bmnmadeiras.com.br</span>
              </div>
              <a href="https://www.instagram.com/bmn.madeiras/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Instagram className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="font-sans text-sm text-primary-foreground/70 hover:text-accent transition-colors">@bmn.madeiras</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-primary-foreground/50">
            © 2026 BMN Brasil Madeiras Nobre. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/bmn.madeiras/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
