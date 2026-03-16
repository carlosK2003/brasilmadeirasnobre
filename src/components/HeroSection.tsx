import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logoBmn from "@/assets/logo-bmn.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero BMN – Deck de madeira nobre em ambiente luxuoso brasileiro à beira do lago"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/70 via-wood-dark/50 to-wood-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <img
            src={logoBmn}
            alt="BMN – Brasil Madeiras Nobre logo"
            className="w-64 md:w-80 lg:w-96 mb-6 drop-shadow-2xl -mt-24"
          />

          <p className="text-cream/90 font-sans text-base md:text-lg tracking-wide mb-12 max-w-xl">
            Explore nossa variedade para um toque de classe em cada ambiente.
          </p>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => scrollTo("#produtos")}
              className="px-8 py-4 bg-accent text-accent-foreground font-sans font-semibold text-sm uppercase tracking-widest hover:bg-gold-light transition-all duration-300 rounded-sm"
            >
              Explorar Produtos
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-cream/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
