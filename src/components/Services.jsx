import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Wifi, Network, Tv, Server, MessageCircle } from 'lucide-react';

const servicesData = [
  {
    icon: <Wifi className="h-12 w-12 text-primary mb-4" />,
    title: 'Infraestrutura de Internet',
    description: 'Projetamos e implementamos redes de internet de alta velocidade e confiabilidade, personalizadas para as necessidades da sua empresa.',
    details: ['Redes Wi-Fi corporativas', 'Fibra óptica', 'Soluções de redundância'],
    animation: "animate-slide-in-left"
  },
  {
    icon: <Network className="h-12 w-12 text-accent mb-4" />,
    title: 'Cabeamento Estruturado',
    description: 'Organização e instalação profissional de cabeamento para dados e voz, garantindo performance e escalabilidade para sua infraestrutura.',
    details: ['Certificação de pontos', 'Organização de racks', 'Manutenção preventiva'],
    animation: "animate-slide-in-right"
  },
  {
    icon: <Tv className="h-12 w-12 text-primary mb-4" />,
    title: 'Soluções de TV Corporativa',
    description: 'Oferecemos uma vasta gama de canais e pacotes de TV para empresas, hotéis, hospitais e outros estabelecimentos, com qualidade de imagem superior.',
    details: ['Pacotes personalizáveis', 'Canais HD e 4K', 'Suporte técnico especializado'],
    animation: "animate-slide-in-left"
  },
   {
    icon: <Server className="h-12 w-12 text-primary mb-4" />,
    title: 'Consultoria e Projetos',
    description: 'Nossa equipe de especialistas está pronta para analisar suas necessidades e propor as melhores soluções em tecnologia de rede e comunicação.',
    details: ['Análise de viabilidade', 'Otimização de infraestrutura', 'Projetos de expansão'],
    animation: "animate-slide-in-right"
  }
];

const Services = () => {
  const whatsappNumber = "+558596101073"; // Definindo o número de WhatsApp aqui

  const handleWhatsAppRedirect = (serviceTitle) => {
    const message = encodeURIComponent(`Olá! Gostaria de mais informações sobre o serviço de ${serviceTitle}.`);
    const url = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nossos <span className="gradient-text">Serviços</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta para impulsionar o seu negócio. Conheça nossas especialidades.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="h-full w-full flex flex-col glassmorphism-card hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-center md:justify-start">{service.icon}</div>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardDescription className="text-muted-foreground mb-4">{service.description}</CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-foreground">
                        <Network className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full bg-transparent hover:bg-primary/10 border-primary/50 text-primary hover:text-primary/90"
                      onClick={() => handleWhatsAppRedirect(service.title)}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Mais Informações
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;