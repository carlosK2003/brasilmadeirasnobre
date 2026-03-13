import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import pisosImg from "@/assets/product-pisos.jpg";
import decksImg from "@/assets/product-decks.jpg";
import forrosImg from "@/assets/product-forros.jpg";
import s4sImg from "@/assets/product-s4s.jpg";

type Segment = {
  name: string;
  description: string;
  species: string[];
  benefits: string[];
  image: string;
};

type Category = {
  id: string;
  title: string;
  segments: Segment[];
};

const categories: Category[] = [
  {
    id: "pisos",
    title: "Pisos",
    segments: [
      {
        name: "Piso Maciço",
        description: "Peça inteira de madeira nobre, oferecendo máxima autenticidade e durabilidade por gerações. O piso maciço é o padrão ouro em revestimentos de madeira.",
        species: ["Ipê", "Jatobá", "Cumaru", "Muiracatiara", "Tauari"],
        benefits: ["Durabilidade excepcional", "Pode ser lixado múltiplas vezes", "Valoriza o imóvel", "Beleza natural única"],
        image: pisosImg,
      },
      {
        name: "Piso Engenheirado",
        description: "Camada superior de madeira nobre sobre base estabilizada, combinando a beleza natural com maior estabilidade dimensional e facilidade de instalação.",
        species: ["Ipê", "Jatobá", "Cumaru", "Amendoim", "Sucupira"],
        benefits: ["Estabilidade dimensional", "Instalação versátil", "Compatível com piso aquecido", "Custo-benefício superior"],
        image: pisosImg,
      },
    ],
  },
  {
    id: "decks",
    title: "Decks",
    segments: [
      {
        name: "Deck para Piscina",
        description: "Madeiras de altíssima resistência à umidade e intempéries, ideais para bordas de piscina e áreas molhadas.",
        species: ["Ipê", "Cumaru", "Garapa", "Itaúba"],
        benefits: ["Resistente à umidade", "Antiderrapante natural", "Alta durabilidade", "Baixa manutenção"],
        image: decksImg,
      },
      {
        name: "Deck para Varanda",
        description: "Transforme varandas e terraços em espaços de convivência acolhedores com a beleza das madeiras nobres.",
        species: ["Cumaru", "Garapa", "Ipê", "Tauari"],
        benefits: ["Conforto térmico", "Estética premium", "Resistente ao sol", "Fácil instalação"],
        image: decksImg,
      },
    ],
  },
  {
    id: "forros",
    title: "Forros",
    segments: [
      {
        name: "Forro de Madeira Nobre",
        description: "Painéis de madeira nobre para tetos que agregam sofisticação, conforto acústico e térmico aos ambientes.",
        species: ["Cedrinho", "Tauari", "Cumaru", "Jatobá"],
        benefits: ["Isolamento acústico", "Conforto térmico", "Estética sofisticada", "Fácil manutenção"],
        image: forrosImg,
      },
    ],
  },
  {
    id: "s4s",
    title: "Madeiras S4S",
    segments: [
      {
        name: "S4S Premium",
        description: "Peças aplainadas nos quatro lados (S4S – Surfaced Four Sides), prontas para uso em marcenaria, projetos arquitetônicos e acabamentos de alto padrão.",
        species: ["Ipê", "Jatobá", "Cumaru", "Muiracatiara", "Garapa"],
        benefits: ["Pronto para uso", "Acabamento preciso", "Versatilidade", "Padrão de qualidade superior"],
        image: s4sImg,
      },
    ],
  },
];

const SegmentationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("pisos");
  const [activeSegment, setActiveSegment] = useState(0);

  const current = categories.find((c) => c.id === activeCategory)!;
  const segment = current.segments[activeSegment];

  return (
    <section id="segmentacoes" className="py-24 lg:py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-12 h-[2px] bg-accent mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossas <span className="text-accent italic">Segmentações</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Explore nossas linhas de produtos segmentadas por tipo e aplicação.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setActiveSegment(0); }}
              className={`px-6 py-3 rounded-sm font-sans text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Segment Tabs */}
        {current.segments.length > 1 && (
          <div className="flex justify-center gap-2 mb-10">
            {current.segments.map((seg, i) => (
              <button
                key={seg.name}
                onClick={() => setActiveSegment(i)}
                className={`px-5 py-2 rounded-sm font-sans text-xs font-medium uppercase tracking-wider transition-all duration-300 border ${
                  activeSegment === i
                    ? "border-accent text-accent bg-accent/5"
                    : "border-border text-muted-foreground hover:border-accent/50"
                }`}
              >
                {seg.name}
              </button>
            ))}
          </div>
        )}

        {/* Segment Detail */}
        <motion.div
          key={segment.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="overflow-hidden rounded-sm">
            <img
              src={segment.image}
              alt={segment.name}
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              {segment.name}
            </h3>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              {segment.description}
            </p>

            <div className="mb-8">
              <h4 className="font-sans text-xs uppercase tracking-widest text-accent font-semibold mb-3">
                Espécies Disponíveis
              </h4>
              <div className="flex flex-wrap gap-2">
                {segment.species.map((sp) => (
                  <span
                    key={sp}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-sans font-medium rounded-sm"
                  >
                    {sp}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest text-accent font-semibold mb-3">
                Benefícios
              </h4>
              <ul className="grid grid-cols-2 gap-2">
                {segment.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SegmentationsSection;
