import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

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
          alt="Interior luxuoso com piso de madeira nobre brasileira"
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
        >
          {/* Gold line */}
          <div className="w-16 h-[2px] bg-accent mx-auto mb-8" />

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight">
            BMN – Brasil{" "}
            <span className="italic text-gold-light">Madeiras Nobre</span>
          </h1>

          <p className="font-serif text-lg md:text-xl text-cream/90 mb-4 italic max-w-3xl mx-auto leading-relaxed">
            "A madeira tem o poder de transformar espaços, trazendo aconchego, harmonia e um toque de natureza para dentro de casa."
          </p>

          <p className="font-sans text-sm md:text-base text-cream/70 mb-10 max-w-2xl mx-auto tracking-wide">
            Qualidade premium, durabilidade e acabamento impecável em madeiras nobres certificadas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("#produtos")}
              className="px-8 py-4 bg-accent text-accent-foreground font-sans font-semibold text-sm uppercase tracking-widest hover:bg-gold-light transition-all duration-300 rounded-sm"
            >
              Explorar Produtos
            </button>
            <button
              onClick={() => scrollTo("#contato")}
              className="px-8 py-4 border-2 border-cream/40 text-cream font-sans font-semibold text-sm uppercase tracking-widest hover:bg-cream/10 transition-all duration-300 rounded-sm"
            >
              Solicitar Orçamento
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
