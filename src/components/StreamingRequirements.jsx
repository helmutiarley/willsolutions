import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card.jsx';
import { Signal, Router, Tv2, CheckCircle, DownloadCloud, WifiOff, AlertTriangle } from 'lucide-react';

const requirementsData = [
  {
    icon: <DownloadCloud className="h-10 w-10 text-primary mb-3" />,
    title: 'Internet Veloz e Estável',
    description: 'Uma conexão de banda larga confiável é crucial. Para conteúdo em alta definição (HD), recomendamos no mínimo 10 Mbps. Para 4K, o ideal é 25 Mbps ou mais.',
    details: ['Fibra óptica oferece a melhor estabilidade.', 'Evite picos de uso por outros dispositivos simultaneamente.']
  },
  {
    icon: <Router className="h-10 w-10 text-accent mb-3" />,
    title: 'Roteador Moderno',
    description: 'Um roteador dual-band (2.4GHz e 5GHz) mais recente garante melhor distribuição de sinal e menos interferência, especialmente em casas maiores.',
    details: ['Posicione o roteador em local central e elevado.', 'Mantenha o firmware do roteador atualizado.']
  },
  {
    icon: <Tv2 className="h-10 w-10 text-primary mb-3" />,
    title: 'Dispositivo Compatível',
    description: 'Utilize Smart TVs, TV Box dedicados, computadores ou videogames com capacidade de processamento adequada para streaming de vídeo.',
    details: ['Verifique as especificações do seu dispositivo.', 'Aplicativos de streaming devem estar atualizados.']
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-green-500 mb-3" />,
    title: 'Conexão Cabeada (Ethernet)',
    description: 'Para a máxima estabilidade e para evitar oscilações do Wi-Fi, conectar seu dispositivo de streaming diretamente ao roteador via cabo Ethernet é a melhor opção.',
    details: ['Minimiza latência e perda de pacotes.', 'Ideal para streaming em 4K e jogos online.']
  },
  {
    icon: <WifiOff className="h-10 w-10 text-yellow-500 mb-3" />,
    title: 'Qualidade do Sinal Wi-Fi (se usar sem fio)',
    description: 'Se a conexão cabeada não for possível, assegure-se de que o sinal Wi-Fi no dispositivo de streaming seja forte. Redes de 5GHz são preferíveis pela menor interferência.',
    details: ['Evite obstáculos físicos entre o roteador e o dispositivo.', 'Considere repetidores ou sistemas Mesh para áreas grandes.']
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-red-500 mb-3" />,
    title: 'Software e Aplicativos Atualizados',
    description: 'Mantenha o sistema operacional do seu dispositivo de streaming e os aplicativos de transmissão sempre atualizados para correções de bugs e melhorias de desempenho.',
    details: ['Verifique atualizações regularmente.', 'Reinicie os dispositivos periodicamente.']
  }
];

const StreamingRequirements = () => {
  return (
    <section id="streaming-requirements" className="section-padding bg-background dark:bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Otimize Sua <span className="gradient-text">Experiência de Transmissão</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Para garantir que você aproveite ao máximo seus serviços de entretenimento digital com qualidade de imagem e som impecáveis, alguns preparativos são essenciais.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requirementsData.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="w-full flex flex-col glassmorphism-card hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="items-center text-center">
                  {req.icon}
                  <CardTitle className="text-xl text-foreground">{req.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow text-center">
                  <CardDescription className="text-muted-foreground mb-3 text-sm">{req.description}</CardDescription>
                  <ul className="space-y-1 text-xs text-muted-foreground/80 mt-auto text-left">
                    {req.details.map((detail, i) => (
                      <li key={i} className="flex items-start justify-start">
                         <CheckCircle className="h-3 w-3 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamingRequirements;