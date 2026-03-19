import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import r1 from "@/assets/insp-residencial-1.jpg";
import r2 from "@/assets/insp-residencial-2.jpg";
import r3 from "@/assets/insp-residencial-3.jpg";
import r4 from "@/assets/insp-residencial-4.jpg";
import r5 from "@/assets/insp-residencial-5.jpg";
import r6 from "@/assets/insp-residencial-6.jpg";
import r7 from "@/assets/insp-residencial-7.jpg";
import r8 from "@/assets/insp-residencial-8.jpg";

import c1 from "@/assets/insp-comercial-1.jpg";
import c2 from "@/assets/insp-comercial-2.jpg";
import c3 from "@/assets/insp-comercial-3.jpg";
import c4 from "@/assets/insp-comercial-4.jpg";
import c5 from "@/assets/insp-comercial-5.jpg";
import c6 from "@/assets/insp-comercial-6.jpg";
import c7 from "@/assets/insp-comercial-7.jpg";
import c8 from "@/assets/insp-comercial-8.jpg";

import h1 from "@/assets/insp-hotel-1.jpg";
import h2 from "@/assets/insp-hotel-2.jpg";
import h3 from "@/assets/insp-hotel-3.jpg";
import h4 from "@/assets/insp-hotel-4.jpg";
import h5 from "@/assets/insp-hotel-5.jpg";
import h6 from "@/assets/insp-hotel-6.jpg";
import h7 from "@/assets/insp-hotel-7.jpg";
import h8 from "@/assets/insp-hotel-8.jpg";

import p1 from "@/assets/insp-premiado-1.jpg";
import p2 from "@/assets/insp-premiado-2.jpg";
import p3 from "@/assets/insp-premiado-3.jpg";
import p4 from "@/assets/insp-premiado-4.jpg";
import p5 from "@/assets/insp-premiado-5.jpg";
import p6 from "@/assets/insp-premiado-6.jpg";
import p7 from "@/assets/insp-premiado-7.jpg";
import p8 from "@/assets/insp-premiado-8.jpg";

const sections = [
  { title: "Área Residencial", subtitle: "Ambientes que acolhem com elegância e calor natural.", images: [r1, r2, r3, r4, r5, r6, r7, r8] },
  { title: "Área Comercial", subtitle: "Espaços corporativos que impressionam e inspiram confiança.", images: [c1, c2, c3, c4, c5, c6, c7, c8] },
  { title: "Hotéis", subtitle: "Hospitalidade elevada pela nobreza da madeira brasileira.", images: [h1, h2, h3, h4, h5, h6, h7, h8] },
  { title: "Ambientes Premiados", subtitle: "Projetos de alto padrão reconhecidos pela excelência em design.", images: [p1, p2, p3, p4, p5, p6, p7, p8] },
];

const Marquee = ({ images, alt }: { images: string[]; alt: string }) => {
  const doubled = [...images, ...images];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: [0, -(images.length * 308)] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((img, i) => (
          <div key={i} className="flex-shrink-0 w-[300px] h-[200px] rounded-sm overflow-hidden">
            <img src={img} alt={`${alt} ${(i % images.length) + 1}`} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const InspSection = ({ title, subtitle, images, index }: { title: string; subtitle: string; images: string[]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={`py-14 lg:py-20 ${index % 2 === 1 ? "bg-card" : "bg-background"}`} ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="w-12 h-[2px] bg-accent mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            {title}
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
      </div>
      <Marquee images={images} alt={title} />
    </section>
  );
};

const Inspiracoes = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="h-20" />

      <section className="py-14 lg:py-20" ref={ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-12 h-[2px] bg-accent mx-auto mb-6" />
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Inspirações <span className="text-accent italic">BMN</span>
            </h1>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              Descubra como a madeira nobre brasileira transforma os mais diversos ambientes em espaços únicos e memoráveis.
            </p>
          </motion.div>
        </div>
      </section>

      {sections.map((s, i) => (
        <InspSection key={s.title} {...s} index={i} />
      ))}

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

export default Inspiracoes;
