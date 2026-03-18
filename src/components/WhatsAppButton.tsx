import { motion } from "framer-motion";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5541996249714?text=Olá! Gostaria de saber mais sobre as madeiras nobres da BMN."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center"
      aria-label="Contato via WhatsApp"
      initial={{ scale: 0 }}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        scale: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-14 h-14 drop-shadow-xl" />
    </motion.a>
  );
};

export default WhatsAppButton;
