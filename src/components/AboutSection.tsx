import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-wood.jpg";
import { Shield, Leaf, Award } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Shield, title: "Procedência Certificada", desc: "Madeiras com documentação legal e certificação de origem sustentável." },
    { icon: Leaf, title: "Sustentabilidade", desc: "Compromisso com o manejo florestal responsável e a preservação ambiental." },
    { icon: Award, title: "Qualidade Premium", desc: "Rigoroso controle de qualidade em cada peça, do corte ao acabamento final." },
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={aboutImg}
              alt="Textura de madeira nobre brasileira"
              className="w-full h-[500px] object-cover rounded-sm"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-accent rounded-sm hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-12 h-[2px] bg-accent mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-accent italic">BMN</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-6 text-base">
              A BMN – Brasil Madeiras Nobre nasceu da paixão pelas madeiras nobres brasileiras e do compromisso com a excelência. Sediada em Curitiba-PR, somos especialistas em selecionar, beneficiar e entregar as mais belas espécies de madeiras do Brasil.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10 text-base">
              Cada peça que passa pelas nossas mãos carrega a dedicação de quem entende que a madeira é mais que um material — é uma expressão de elegância, durabilidade e conexão com a natureza.
            </p>

            <div className="grid gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground font-sans">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
