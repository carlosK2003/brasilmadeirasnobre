import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import ep1 from "@/assets/escada-projeto-1.jpg";
import ep2 from "@/assets/escada-projeto-2.jpg";
import ep3 from "@/assets/escada-projeto-3.jpg";
import ep4 from "@/assets/escada-projeto-4.jpg";
import ep5 from "@/assets/escada-projeto-5.jpg";
import ep6 from "@/assets/escada-projeto-6.jpg";
import ep7 from "@/assets/escada-projeto-7.jpg";
import ep8 from "@/assets/escada-projeto-8.jpg";

const projetos = [ep1, ep2, ep3, ep4, ep5, ep6, ep7, ep8];

const Marquee = () => {
  const doubled = [...projetos, ...projetos];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: [0, -(projetos.length * 308)] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((img, i) => (
          <div key={i} className="flex-shrink-0 w-[300px] h-[200px] rounded-sm overflow-hidden">
            <img src={img} alt={`Projeto escada ${(i % projetos.length) + 1}`} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Escadas = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-20" />

      <section className="py-14 lg:py-20" ref={ref}>
        <div className="container mx-auto px-4 lg:px-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-12 h-[2px] bg-accent mx-auto mb-6" />
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Escadas <span className="text-accent italic">BMN</span>
            </h1>
            <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground mb-2">
              Cada degrau pode dizer muito sobre o seu estilo.
            </h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              Escadas em madeiras nobres que unem segurança, durabilidade e elegância aos seus ambientes.
            </p>
          </motion.div>
        </div>
        <Marquee />
      </section>

      <section className="py-14 lg:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <a
            href="/#produtos"
            className="px-8 py-4 bg-accent text-accent-foreground font-sans font-semibold text-sm uppercase tracking-widest hover:bg-gold-light transition-all duration-300 rounded-sm inline-block"
          >
            VOLTAR AO CATÁLOGO
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Escadas;
