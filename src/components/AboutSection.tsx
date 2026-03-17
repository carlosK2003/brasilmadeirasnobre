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
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="w-12 h-[2px] bg-accent mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Sobre a <span className="text-accent italic">BMN</span>
          </h2>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <img
            src={aboutImg}
            alt="Textura de madeira nobre brasileira"
            className="w-full h-[400px] lg:h-[500px] object-cover rounded-sm"
            loading="lazy"
          />
        </motion.div>

        {/* Text + Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-muted-foreground font-sans leading-relaxed mb-6 text-base">
            A BMN – Brasil Madeiras Nobre nasceu da paixão pelas madeiras nobres nacionais e importadas e do compromisso com a excelência. Sediada em Curitiba-PR, somos especialistas em selecionar, beneficiar e entregar as mais belas espécies de madeiras do Brasil.
          </p>
          <p className="text-muted-foreground font-sans leading-relaxed mb-10 text-base">
            Madeiras nobres nacionais e importadas selecionadas com rigor, oferecendo beleza natural e durabilidade incomparável.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
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
    </section>
  );
};

export default AboutSection;
