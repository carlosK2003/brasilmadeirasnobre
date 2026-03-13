import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Phone, Mail, Instagram } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", product: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}. Tenho interesse em ${formData.product}. ${formData.message}`
    );
    window.open(`https://wa.me/5541999999999?text=${msg}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-12 h-[2px] bg-accent mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Entre em <span className="text-accent italic">Contato</span>
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Solicite seu orçamento ou tire suas dúvidas. Estamos prontos para atendê-lo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Nome</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">E-mail</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Telefone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="(41) 99999-9999"
                />
              </div>
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Produto</label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Selecione...</option>
                  <option value="Pisos/Assoalhos">Pisos / Assoalhos</option>
                  <option value="Decks">Decks</option>
                  <option value="Forros">Forros</option>
                  <option value="Madeiras S4S">Madeiras S4S</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Mensagem</label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm font-sans text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Descreva seu projeto ou dúvida..."
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-4 bg-accent text-accent-foreground font-sans font-semibold text-sm uppercase tracking-widest hover:bg-gold-light transition-colors duration-300 rounded-sm flex items-center gap-3 justify-center"
            >
              <Send className="w-4 h-4" /> Enviar Mensagem
            </button>
          </motion.form>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Endereço", value: "Curitiba, Paraná – Brasil" },
                { icon: Phone, label: "WhatsApp", value: "(41) 99999-9999" },
                { icon: Mail, label: "E-mail", value: "contato@bmnmadeiras.com.br" },
                { icon: Instagram, label: "Instagram", value: "@bmn.madeiras" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-sans text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-sm overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230417.42!2d-49.38!3d-25.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35b0a4b3e3f%3A0xab69e5c0e3e3e3e3!2sCuritiba%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização BMN em Curitiba"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
