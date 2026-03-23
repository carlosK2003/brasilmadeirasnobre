import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import forroTauari from "@/assets/forro-tauari.jpg";
import forroCumaru from "@/assets/forro-cumaru.jpg";

import fp1 from "@/assets/forro-projeto-1.jpg";
import fp2 from "@/assets/forro-projeto-2.jpg";
import fp3 from "@/assets/forro-projeto-3.jpg";
import fp4 from "@/assets/forro-projeto-4.jpg";
import fp5 from "@/assets/forro-projeto-5.jpg";
import fp6 from "@/assets/forro-projeto-6.jpg";
import fp7 from "@/assets/forro-projeto-7.jpg";
import fp8 from "@/assets/forro-projeto-8.jpg";

const forroSpecies = [
  { name: "Tauari", image: forroTauari, desc: "Cor clara e uniforme, conforto térmico e acústico. Ideal para forros internos com visual clean e moderno." },
  { name: "Cumaru", image: forroCumaru, desc: "Tonalidade dourada quente com veios marcantes. Transforma tetos em elementos de design sofisticado e acolhedor." },
];

const projetos = [fp1, fp2, fp3, fp4, fp5, fp6, fp7, fp8];

/* Carousel */
const ProductCarousel = ({ items, title }: { items: typeof forroSpecies; title: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const [resetKey, setResetKey] = useState(0);
  const next = useCallback(() => { setDirection(1); setCurrent((p) => (p + 1) % items.length); }, [items.length]);
  const prevSlide = useCallback(() => { setDirection(-1); setCurrent((p) => (p - 1 + items.length) % items.length); }, [items.length]);
  const goTo = useCallback((i: number) => { setDirection(i > current ? 1 : -1); setCurrent(i); setResetKey((k) => k + 1); }, [current]);
  const handleNext = useCallback(() => { next(); setResetKey((k) => k + 1); }, [next]);
  const handlePrev = useCallback(() => { prevSlide(); setResetKey((k) => k + 1); }, [prevSlide]);

  useEffect(() => { const t = setInterval(next, 5000); return () => clearInterval(t); }, [next, resetKey]);

  const item = items[current];
  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div ref={ref}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-10">
        <div className="w-12 h-[2px] bg-accent mx-auto mb-6" />
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">{title}</h2>
      </motion.div>

      <div className="max-w-2xl mx-auto relative">
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:border-accent transition-colors z-10" aria-label="Anterior">
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:border-accent transition-colors z-10" aria-label="Próximo">
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>

        <motion.div key={current} custom={direction} variants={variants} initial="enter" animate="center" transition={{ duration: 0.45, ease: "easeOut" }} className="bg-card rounded-sm border border-border overflow-hidden">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="p-6 text-center">
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.name}</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>

        <div className="flex gap-2 justify-center mt-6">
          {items.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-accent w-6" : "bg-border hover:bg-muted-foreground"}`} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

/* Marquee */
const Marquee = () => {
  const doubled = [...projetos, ...projetos];
  return (
    <div className="overflow-hidden">
      <motion.div className="flex gap-4" animate={{ x: [0, -(projetos.length * 308)] }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}>
        {doubled.map((img, i) => (
          <div key={i} className="flex-shrink-0 w-[300px] h-[200px] rounded-sm overflow-hidden">
            <img src={img} alt={`Projeto forro ${(i % projetos.length) + 1}`} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Forros = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const projetosRef = useRef(null);
  const projetosInView = useInView(projetosRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-20" />

      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ProductCarousel items={forroSpecies} title="Qual forro dará vida ao seu ambiente?" />
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-card" ref={projetosRef}>
        <div className="container mx-auto px-4 lg:px-8 mb-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={projetosInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center">
            <div className="w-12 h-[2px] bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Projetos e o Poder da <span className="text-accent italic">Madeira Nobre</span>
            </h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">Tetos que ganham vida e personalidade com forros de madeira nobre BMN.</p>
          </motion.div>
        </div>
        <Marquee />
      </section>

      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <a href="/#produtos" className="px-8 py-4 bg-accent text-accent-foreground font-sans font-semibold text-sm uppercase tracking-widest hover:bg-gold-light transition-all duration-300 rounded-sm inline-block">
            VOLTAR AO CATÁLOGO
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Forros;
