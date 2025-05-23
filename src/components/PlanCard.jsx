import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { CheckCircle, MessageCircle, Zap, ShieldCheck, Crown } from 'lucide-react';

const PlanCard = ({ plan, index, type, whatsappNumber }) => {
  const isWillTvPlan = type === 'willTv';
  const isLoyaltyPlan = type === 'loyalty';

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(`Olá! Tenho interesse em contratar o ${plan.name}.`);
    const url = `https://wa.me/${whatsappNumber ? whatsappNumber.replace(/\D/g, '') : ''}?text=${message}`;
    window.open(url, '_blank');
  };

  const getLoyaltyIcon = (planName) => {
    if (planName.includes('Anual')) return <Crown className="h-8 w-8 text-yellow-400" />;
    if (planName.includes('Semestral')) return <ShieldCheck className="h-8 w-8 text-sky-400" />;
    if (planName.includes('Trimestral')) return <Zap className="h-8 w-8 text-green-400" />;
    return plan.icon; 
  };

  return (
    <motion.div
      key={plan.name}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`transform transition-all duration-300 ${plan.highlight && !isLoyaltyPlan ? 'scale-105' : ''} ${isLoyaltyPlan && plan.highlight ? 'shadow-2xl' : ''}`}
    >
      <Card className={`h-full flex flex-col glassmorphism-card 
        ${plan.highlight 
          ? (plan.superDiscount ? 'border-yellow-400 shadow-yellow-500/40 ring-2 ring-yellow-400' : (isLoyaltyPlan ? 'border-sky-400 shadow-sky-500/30 ring-2 ring-sky-400' : 'border-accent shadow-accent/30')) 
          : 'hover:border-primary/50'} 
        hover:shadow-xl transition-all duration-300 overflow-hidden
        ${isLoyaltyPlan ? 'bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 border-slate-700' : ''}
      `}>
        <CardHeader className={`items-center text-center pb-4 ${isLoyaltyPlan ? 'pt-8' : 'pt-6'}`}>
          {isLoyaltyPlan ? getLoyaltyIcon(plan.name) : plan.icon}
          <CardTitle className={`text-2xl mt-3 ${isLoyaltyPlan ? 'text-slate-100' : ''}`}>{plan.name}</CardTitle>
          
          {isLoyaltyPlan && plan.loyaltyBenefit && (
            <p className="text-sm text-sky-300 font-medium mt-1">{plan.loyaltyBenefit}</p>
          )}

          <CardDescription className={`text-4xl font-bold mt-2 ${
            plan.superDiscount ? 'text-yellow-400' 
            : (plan.highlight && !isWillTvPlan ? 'text-accent' : (isLoyaltyPlan ? 'text-sky-400' : 'text-primary'))
          }`}>
            {plan.price}
            {plan.period && <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>}
            {!plan.period && isWillTvPlan && <span className="text-sm text-muted-foreground">/mês</span>}
          </CardDescription>
          
          {plan.superDiscount && (
            <span className="mt-2 text-xs font-semibold bg-yellow-400 text-background px-3 py-1 rounded-full shadow-md">MAIOR ECONOMIA</span>
          )}
        </CardHeader>
        <CardContent className="flex-grow pt-2">
          {isWillTvPlan && plan.features && (
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          )}
          {isLoyaltyPlan && plan.description && (
            <p className="text-sm text-slate-300 text-center px-2">
              {plan.description}
            </p>
          )}
        </CardContent>
        <CardFooter className={`${isLoyaltyPlan ? 'p-6' : 'p-6'}`}>
          <Button 
            onClick={handleWhatsAppRedirect}
            className={`w-full ${
            plan.highlight 
              ? (plan.superDiscount ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-semibold shadow-lg shadow-yellow-500/30' 
                  : (isLoyaltyPlan ? 'bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-sky-500/30' 
                      : 'bg-green-500 hover:bg-green-600 text-white')) 
              : 'bg-green-500 hover:bg-green-600 text-white'
            } transform transition-all duration-300 hover:shadow-xl hover:scale-105 text-base py-3`}
          >
            {isWillTvPlan ? 'Contratar Agora' : 'Assinar Plano'}
            <MessageCircle className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PlanCard;