import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react'; // Using MessageCircle as a placeholder for WhatsApp icon

const WhatsAppButton = ({ phoneNumber }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
};

export default WhatsAppButton;