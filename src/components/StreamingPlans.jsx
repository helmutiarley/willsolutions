import React from 'react';
import { motion } from 'framer-motion';
import PlanCard from '@/components/PlanCard.jsx';
import FreeTrialForm from '@/components/FreeTrialForm.jsx';
import { Tv, Film, CalendarDays, Sparkles, Zap, ShieldCheck, Crown } from 'lucide-react';

const willTvPlansData = [
  {
    name: 'Plano Básico WillTV',
    price: 'R$ 35,00',
    features: ['1 Tela', 'Combo - Todos os canais liberados', 'Filmes e Séries'],
    icon: <Tv className="h-8 w-8 text-primary" />,
    highlight: false,
  },
  {
    name: 'Plano Premium WillTV',
    price: 'R$ 55,00',
    features: ['2 Telas', 'Combo - Todos os canais liberados', 'Filmes e Séries'],
    icon: <Film className="h-8 w-8 text-accent" />,
    highlight: true,
  },
];

const loyaltyPlansData = [
  {
    name: 'Plano Fidelidade Mensal',
    price: 'R$ 35,00',
    period: '/mês',
    icon: <CalendarDays className="h-8 w-8 text-slate-300" />,
    highlight: false,
    loyaltyBenefit: "Flexibilidade total",
    description: "Ideal para quem busca compromisso de curto prazo ou quer experimentar nossos serviços fidelidade."
  },
  {
    name: 'Plano Fidelidade Trimestral',
    price: 'R$ 90,00',
    period: '/trimestre',
    icon: <Zap className="h-8 w-8 text-green-400" />,
    highlight: false,
    loyaltyBenefit: "Pequena economia",
    description: "Um bom começo para economizar, pagando por três meses e garantindo seu entretenimento."
  },
  {
    name: 'Plano Fidelidade Semestral',
    price: 'R$ 160,00',
    period: '/semestre',
    icon: <ShieldCheck className="h-8 w-8 text-sky-400" />,
    highlight: true, // Alterado para true para destaque
    loyaltyBenefit: "Ótimo Custo-Benefício",
    description: "Economize ainda mais com nosso plano semestral, perfeito para quem planeja a longo prazo."
  },
  {
    name: 'Plano Fidelidade Anual',
    price: 'R$ 300,00',
    period: '/ano',
    icon: <Crown className="h-8 w-8 text-yellow-400" />,
    highlight: true,
    superDiscount: true,
    loyaltyBenefit: "Máxima Economia Anual",
    description: "O melhor valor! Desfrute de um ano inteiro de acesso com o maior desconto disponível."
  },
];

const StreamingPlans = () => {
  const whatsappNumber = "+558596101073"; 

  return (
    <section id="plans" className="section-padding bg-gradient-to-b from-background via-slate-900 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-100">PLANOS <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-400">WILLTV</span></h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Qualidade e variedade para sua família ou empresa com nossos planos de streaming direto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20 items-stretch">
          {willTvPlansData.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} type="willTv" whatsappNumber={whatsappNumber} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16 mt-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-100">PLANOS <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400">FIDELIDADE</span></h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Economize mais com nossos planos de longa duração. Quanto maior o tempo, maior o desconto!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-20 items-stretch">
          {loyaltyPlansData.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} type="loyalty" whatsappNumber={whatsappNumber} />
          ))}
        </div>

        <FreeTrialForm whatsappNumber={whatsappNumber} />
      </div>
    </section>
  );
};

export default StreamingPlans;