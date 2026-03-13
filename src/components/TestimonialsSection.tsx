import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

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

  return (
    <section className="py-24 lg:py-32 bg-card" ref={ref}>
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-background rounded-sm p-8 border border-border hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6 text-sm italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-serif font-semibold text-foreground">{t.name}</p>
                <p className="font-sans text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
