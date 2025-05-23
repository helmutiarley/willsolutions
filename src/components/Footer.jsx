import React from 'react';
import { motion } from 'framer-motion';
import { Wifi } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-card/50 border-t border-border/50 section-padding pb-8"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center mb-4">
            <Wifi className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold gradient-text">Will Solutions</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-md">
            Conectando você ao futuro com soluções inovadoras em infraestrutura de rede e entretenimento.
          </p>
        </div>
        
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Will Solutions. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;