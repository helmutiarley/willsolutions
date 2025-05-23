import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Zap, Tv2, ChevronLeft, ChevronRight, Eye, Shuffle } from 'lucide-react';

const slidesData = [
  {
    id: 'infra',
    titlePart1: 'Infraestrutura de Rede',
    titlePart2: 'Inovadora',
    description: 'Projetamos e implementamos infraestruturas de internet e cabeamento robustas, garantindo máxima performance e confiabilidade para sua empresa.',
    buttonText: 'Nossos Serviços de Infra',
    buttonIcon: <Zap className="ml-2 h-5 w-5" />,
    actionTarget: 'services',
    secondaryButtonText: 'Ver Projetos',
    secondaryButtonIcon: <Eye className="mr-2 h-5 w-5" />,
    secondaryActionTarget: 'projects', // Placeholder, can be a modal or new section
  },
  {
    id: 'tv',
    titlePart1: 'Entretenimento de',
    titlePart2: 'Alta Qualidade',
    description: 'Descubra uma vasta seleção de canais, filmes e séries com nossos planos de TV. Imagem e som de cinema no conforto do seu negócio ou lar.',
    buttonText: 'Conheça os Planos de TV',
    buttonIcon: <Tv2 className="ml-2 h-5 w-5" />,
    actionTarget: 'plans',
    secondaryButtonText: 'Comparar Planos',
    secondaryButtonIcon: <Shuffle className="mr-2 h-5 w-5" />,
    secondaryActionTarget: 'compare-plans', // Placeholder
  },
];

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 25 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 25 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8, 
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with id "${id}" not found for scrolling.`);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(1); 
      setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 7000); 
    return () => clearTimeout(timer);
  }, [currentSlide, slidesData.length]); 

  const activeSlideData = slidesData[currentSlide];

  const slideVariants = {
    initial: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    animate: {
      x: '0%',
      opacity: 1,
      transition: { type: 'spring', stiffness: 60, damping: 20, duration: 0.4 },
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: { type: 'spring', stiffness: 60, damping: 20, duration: 0.4 },
    }),
  };
  
  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const titleParts = activeSlideData.titlePart1.split(" ").concat(activeSlideData.titlePart2.split(" "));
  const gradientStartIndex = activeSlideData.titlePart1.split(" ").length;


  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center section-padding overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-6"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              {titleParts.map((word, index) => (
                <motion.span key={index} variants={wordVariants} className={index >= gradientStartIndex ? "gradient-text" : ""}>
                  {word}{index < titleParts.length -1 ? " " : ""}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
            >
              {activeSlideData.description}
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection(activeSlideData.actionTarget)} 
                  className={`${activeSlideData.id === 'infra' ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-accent hover:bg-accent/90 text-accent-foreground'} shadow-lg transform transition-all duration-300 hover:shadow-primary/40`}
                >
                  {activeSlideData.buttonText} {activeSlideData.buttonIcon}
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection(activeSlideData.secondaryActionTarget)} 
                  className="border-primary text-primary hover:bg-primary/10 shadow-md hover:shadow-primary/30"
                >
                  {activeSlideData.secondaryButtonIcon} {activeSlideData.secondaryButtonText}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button 
        onClick={handlePrev} 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/30 hover:bg-background/50 rounded-full transition-colors"
        aria-label="Slide anterior"
        whileHover={{ opacity: 0.8 }}
        whileTap={{ opacity: 0.6 }} 
      >
        <ChevronLeft className="h-8 w-8 text-foreground" />
      </motion.button>
      <motion.button 
        onClick={handleNext} 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/30 hover:bg-background/50 rounded-full transition-colors"
        aria-label="Próximo slide"
        whileHover={{ opacity: 0.8 }}
        whileTap={{ opacity: 0.6 }}
      >
        <ChevronRight className="h-8 w-8 text-foreground" />
      </motion.button>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slidesData.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-primary' : 'bg-muted-foreground/50 hover:bg-muted-foreground'}`}
            aria-label={`Ir para o slide ${index + 1}`}
            whileHover={{ scale: 1.2, opacity: currentSlide === index ? 1 : 0.7 }}
            animate={{ scale: currentSlide === index ? 1.25 : 1 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;