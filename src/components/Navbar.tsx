import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Segmentações", href: "#segmentacoes" },
  { label: "Inspiração", href: "#inspiracao" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + href);
    }
  };

  const goHome = () => {
    setIsOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button onClick={goHome} className="flex flex-col items-start">
          <span className="font-serif text-2xl font-bold tracking-wider text-primary">
            BMN
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-sans font-medium -mt-1">
            Brasil Madeiras Nobre
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-300 tracking-wide uppercase font-sans"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#contato")}
            className="ml-4 px-6 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-sm hover:bg-gold-light transition-colors duration-300 tracking-wide uppercase font-sans"
          >
            Orçamento
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background/80 backdrop-blur-xl shadow-xl border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left text-base font-medium text-foreground/80 hover:text-accent transition-colors py-2 tracking-wide uppercase font-sans"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleClick("#contato")}
                className="mt-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-sm tracking-wide uppercase text-sm font-sans"
              >
                Solicitar Orçamento
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
