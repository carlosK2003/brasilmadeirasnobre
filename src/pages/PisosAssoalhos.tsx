import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Pisos Maciços
import macicoCumaruChampagne from "@/assets/piso-macico-cumaru-champagne.jpg";
import macicoCumaruFerro from "@/assets/piso-macico-cumaru-ferro.jpg";
import macicoGarapeira from "@/assets/piso-macico-garapeira.jpg";
import macicoPeroba from "@/assets/piso-macico-peroba.jpg";
import macicoSucupira from "@/assets/piso-macico-sucupira.jpg";
import macicoTauari from "@/assets/piso-macico-tauari.jpg";

// Pisos Engenheirados
import engCarvalhoPrime from "@/assets/piso-eng-carvalho-prime.jpg";
import engTauariPrime from "@/assets/piso-eng-tauari-prime.jpg";

// Projetos
import projeto1 from "@/assets/projeto-1.jpg";
import projeto2 from "@/assets/projeto-2.jpg";
import projeto3 from "@/assets/projeto-3.jpg";
import projeto4 from "@/assets/projeto-4.jpg";
import projeto5 from "@/assets/projeto-5.jpg";
import projeto6 from "@/assets/projeto-6.jpg";
import projeto7 from "@/assets/projeto-7.jpg";
import projeto8 from "@/assets/projeto-8.jpg";

const pisosMacicos = [
  { name: "Cumaru Champagne", image: macicoCumaruChampagne, desc: "Tonalidade dourada clara com veios suaves e elegantes. Resistência excepcional e beleza luminosa para ambientes sofisticados." },
  { name: "Cumaru Ferro", image: macicoCumaruFerro, desc: "Tom escuro e profundo com densidade superior. Uma das madeiras mais resistentes do mundo, ideal para alto tráfego." },
  { name: "Garapeira", image: macicoGarapeira, desc: "Coloração amarelo-dourada uniforme com excelente durabilidade natural. Versátil e elegante para qualquer ambiente." },
  { name: "Peroba", image: macicoPeroba, desc: "Coloração quente e variada, fibras entrelaçadas únicas. Tradição e charme em cada tábua instalada." },
  { name: "Sucupira", image: macicoSucupira, desc: "Tom marrom-chocolate intenso com veios marcantes. Alta resistência mecânica e beleza atemporal." },
  { name: "Tauari", image: macicoTauari, desc: "Tom claro e uniforme, excelente estabilidade dimensional. Ideal para ambientes modernos e minimalistas." },
];

const pisosEngenheirados = [
  { name: "Carvalho Prime Escovado", image: engCarvalhoPrime, desc: "Elegância europeia com textura escovada que realça os veios naturais. Acabamento premium para ambientes contemporâneos." },
  { name: "Tauari Prime", image: engTauariPrime, desc: "Leveza e sofisticação em base engenheirada de alta estabilidade. Perfeito para grandes áreas e projetos refinados." },
];

const projetos = [projeto1, projeto2, projeto3, projeto4, projeto5, projeto6, projeto7, projeto8];

/* ── Carousel Component ── */
interface CarouselSlide {
  name: string;
  image: string;
  desc: string;
}

const ProductCarousel = ({ items, title }: { items: CarouselSlide[]; title: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const item = items[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <div className="w-12 h-[2px] bg-accent mx-auto mb-6" />
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          {title}
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto relative">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:border-accent transition-colors z-10"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:border-accent transition-colors z-10"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>

        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="bg-card rounded-sm border border-border overflow-hidden"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.name}</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>

        <div className="flex gap-2 justify-center mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-accent w-6" : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Marquee Component ── */
const Marquee = () => {
  const doubled = [...projetos, ...projetos];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: [0, -(projetos.length * 308)] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((img, i) => (
          <div key={i} className="flex-shrink-0 w-[300px] h-[200px] rounded-sm overflow-hidden">
            <img src={img} alt={`Projeto ${(i % projetos.length) + 1}`} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* ── Page ── */
const PisosAssoalhos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projetosRef = useRef(null);
  const projetosInView = useInView(projetosRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Pisos Maciços */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ProductCarousel items={pisosMacicos} title="Pisos Maciços" />
        </div>
      </section>

      {/* Pisos Engenheirados */}
      <section className="py-14 lg:py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <ProductCarousel items={pisosEngenheirados} title="Pisos Engenheirados" />
        </div>
      </section>

      {/* Projetos Marquee */}
      <section className="py-14 lg:py-20" ref={projetosRef}>
        <div className="container mx-auto px-4 lg:px-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projetosInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-12 h-[2px] bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Projetos e o Poder da <span className="text-accent italic">Madeira Nobre</span>
            </h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              Ambientes transformados pela elegância e autenticidade dos pisos BMN.
            </p>
          </motion.div>
        </div>
        <Marquee />
      </section>

      {/* CTA */}
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

export default PisosAssoalhos;
