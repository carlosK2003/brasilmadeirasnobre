import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import img1 from "@/assets/inspiration-1.jpg";
import img2 from "@/assets/inspiration-2.jpg";
import img3 from "@/assets/inspiration-3.jpg";
import img4 from "@/assets/inspiration-4.jpg";

const images = [
  { src: img1, alt: "Área comercial com piso e forro de madeira nobre BMN", label: "Área Comercial" },
  { src: img2, alt: "Quarto com piso e painel de madeira", label: "Quarto" },
  { src: img3, alt: "Terraço com deck de madeira ao pôr do sol", label: "Terraço" },
  { src: img4, alt: "Cozinha moderna com piso de madeira", label: "Cozinha" },
];

const InspirationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section id="inspiracao" className="py-24 lg:py-32 bg-background" ref={ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-12 h-[2px] bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Transformações que <span className="text-accent italic">Encantam</span>
            </h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              Projetos reais que mostram o poder da madeira nobre em transformar ambientes.
            </p>
          </motion.div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                  i === 0 ? "row-span-2" : ""
                }`}
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i === 0 ? "h-full min-h-[400px]" : "h-64 lg:h-full"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-wood-dark/0 group-hover:bg-wood-dark/40 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-serif text-lg text-cream font-medium">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-wood-dark/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelected(null)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
          />
        </div>
      )}
    </>
  );
};

export default InspirationSection;
