import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Arquiteto, Curitiba",
    text: "A qualidade das madeiras da BMN é incomparável. O piso de Ipê que instalamos no projeto superou todas as expectativas do cliente. Acabamento perfeito.",
  },
  {
    name: "Ana Paula Ferreira",
    role: "Designer de Interiores",
    text: "Trabalho com a BMN há anos e a consistência na qualidade é impressionante. O deck de Cumaru que especificamos ficou deslumbrante e resistiu lindamente ao tempo.",
  },
  {
    name: "Carlos Eduardo Silva",
    role: "Proprietário Residencial",
    text: "Transformamos toda a casa com pisos da BMN. A sensação de caminhar sobre madeira nobre é única. Depois de 5 anos, continua perfeito como no primeiro dia.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="py-14 lg:py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-12 h-[2px] bg-accent mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O que dizem nossos <span className="text-accent italic">clientes</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Arrows */}
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

          {/* Card */}
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="bg-background rounded-sm p-8 md:p-10 border border-border text-center"
          >
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8 text-base italic">
              "{t.text}"
            </p>
            <p className="font-serif font-semibold text-foreground text-lg">{t.name}</p>
            <p className="font-sans text-xs text-muted-foreground mt-1">{t.role}</p>
          </motion.div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-accent w-6" : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
