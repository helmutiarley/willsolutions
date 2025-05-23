import React from 'react';
import { motion } from 'framer-motion';
import PlanCard from '@/components/PlanCard.jsx';
import FreeTrialForm from '@/components/FreeTrialForm.jsx';
import { Tv, Film, CalendarDays, Sparkles } from 'lucide-react';

const willTvPlansData = [
  {
    name: 'Plano Básico',
    price: 'R$ 35,00',
    features: ['1 Tela', 'Combo - Todos os canais liberados', 'Filmes e Séries'],
    icon: <Tv className="h-8 w-8 text-primary" />,
    highlight: false,
  },
  {
    name: 'Plano Premium',
    price: 'R$ 55,00',
    features: ['2 Telas', 'Combo - Todos os canais liberados', 'Filmes e Séries'],
    icon: <Film className="h-8 w-8 text-accent" />,
    highlight: true,
  },
];

const loyaltyPlansData = [
  {
    name: 'Mensal',
    price: 'R$ 35,00',
    period: '/mês',
    icon: <CalendarDays className="h-8 w-8 text-primary" />,
    highlight: false,
  },
  {
    name: 'Trimestral',
    price: 'R$ 90,00',
    period: '/trimestre',
    icon: <CalendarDays className="h-8 w-8 text-primary" />,
    highlight: false,
  },
  {
    name: 'Semestral',
    price: 'R$ 160,00',
    period: '/semestre',
    icon: <CalendarDays className="h-8 w-8 text-accent" />,
    highlight: false,
  },
  {
    name: 'Anual',
    price: 'R$ 300,00',
    period: '/ano',
    icon: <Sparkles className="h-8 w-8 text-yellow-400" />,
    highlight: true,
    superDiscount: true,
  },
];

const StreamingPlans = () => {
  const whatsappNumber = "+558596101073"; 

  return (
    <section id="plans" className="section-padding bg-background/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-2">PLANOS <span className="gradient-text">WILLTV</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Qualidade e variedade para sua família ou empresa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {willTvPlansData.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} type="willTv" />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16 mt-24"
        >
          <h2 className="text-4xl font-bold mb-2">PLANOS <span className="gradient-text">FIDELIDADE</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Economize mais com nossos planos de longa duração.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {loyaltyPlansData.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} type="loyalty" />
          ))}
        </div>

        <FreeTrialForm whatsappNumber={whatsappNumber} />
      </div>
    </section>
  );
};

export default StreamingPlans;