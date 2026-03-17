import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import pisosImg from "@/assets/product-pisos.jpg";
import decksImg from "@/assets/product-decks.jpg";
import forrosImg from "@/assets/product-forros.jpg";
import s4sImg from "@/assets/product-s4s.jpg";
import escadasImg from "@/assets/product-escadas.jpg";

const products = [
  {
    title: "Pisos & Assoalhos",
    description: "Pisos maciços e engenheirados em madeiras nobres nacionais e importadas para ambientes sofisticados.",
    image: pisosImg,
    alt: "Piso de madeira nobre brasileira",
  },
  {
    title: "Decks",
    description: "Decks em madeiras de alta resistência para áreas externas, piscinas e varandas.",
    image: decksImg,
    alt: "Deck de madeira nobre ao redor de piscina",
  },
  {
    title: "Forros",
    description: "Forros de madeira que transformam tetos em elementos de design e aconchego.",
    image: forrosImg,
    alt: "Forro de madeira nobre em ambiente moderno",
  },
  {
    title: "Madeiras S4S",
    description: "Peças aplainadas nos quatro lados, prontas para projetos sob medida e marcenaria.",
    image: s4sImg,
    alt: "Madeira S4S aplainada premium",
  },
  {
    title: "Escadas",
    description: "Escadas em madeiras nobres com acabamento impecável, unindo segurança, durabilidade e elegância aos seus ambientes.",
    image: escadasImg,
    alt: "Escada de madeira nobre com design moderno",
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="produtos" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-12 h-[2px] bg-accent mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-accent italic">Produtos</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Madeiras nobres nacionais e importadas selecionadas com rigor, oferecendo beleza natural e durabilidade incomparável.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/90 via-wood-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl font-bold text-cream mb-2">{product.title}</h3>
                <p className="font-sans text-sm text-cream/80 mb-4 max-w-sm">{product.description}</p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-sans font-medium uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                  Ver detalhes <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
