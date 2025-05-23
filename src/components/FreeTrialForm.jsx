import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FreeTrialForm = ({ whatsappNumber }) => {
  const predefinedMessage = "Olá! Gostaria de solicitar um teste gratuito dos serviços da Will Solutions.";
  const whatsappUrl = `https://wa.me/${whatsappNumber ? whatsappNumber.replace(/\D/g, '') : ''}?text=${encodeURIComponent(predefinedMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <Card className="max-w-2xl mx-auto glassmorphism-card shadow-2xl border-primary/50">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl gradient-text">Experimente Nossos Serviços Gratuitamente!</CardTitle>
          <CardDescription className="text-muted-foreground">
            Interessado em testar nossa qualidade? Clique no botão abaixo para falar conosco diretamente pelo WhatsApp e solicitar seu teste. É rápido e fácil!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center mt-4">
            <Button 
              type="button" 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="w-full max-w-xs bg-green-500 hover:bg-green-600 text-white shadow-lg transform transition-all duration-300 hover:shadow-green-500/40 py-3 px-4 text-base"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Solicitar Teste via WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FreeTrialForm;