import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { CheckCircle, Zap, ShieldCheck } from 'lucide-react';

const PlanCard = ({ plan, index, type }) => {
  const isWillTvPlan = type === 'willTv';
  const isLoyaltyPlan = type === 'loyalty';

  return (
    <motion.div
      key={plan.name}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`transform transition-all duration-300 ${plan.highlight ? 'scale-105' : ''}`}
    >
      <Card className={`h-full flex flex-col glassmorphism-card ${
        plan.highlight 
          ? (plan.superDiscount ? 'border-yellow-400 shadow-yellow-400/30' : 'border-accent shadow-accent/30') 
          : 'hover:border-primary/50'
        } hover:shadow-xl transition-all duration-300`}>
        <CardHeader className="items-center text-center">
          {plan.icon}
          <CardTitle className="text-2xl mt-2">{plan.name}</CardTitle>
          <CardDescription className={`text-4xl font-bold ${
            plan.superDiscount ? 'text-yellow-400' 
            : (plan.highlight && !isWillTvPlan ? 'text-accent' : 'text-primary')
          }`}>
            {plan.price}
            {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
            {!plan.period && isWillTvPlan && <span className="text-sm text-muted-foreground">/mês</span>}
          </CardDescription>
          {plan.superDiscount && (
            <span className="mt-1 text-xs font-semibold bg-yellow-400 text-background px-2 py-0.5 rounded-full">SUPER DESCONTO</span>
          )}
        </CardHeader>
        <CardContent className="flex-grow">
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
          {isLoyaltyPlan && (
            <p className="text-sm text-muted-foreground text-center">
              {plan.name === 'Mensal' ? 'Ideal para experimentar.' : 
               plan.name === 'Trimestral' ? 'Economia a cada 3 meses.' :
               plan.name === 'Semestral' ? 'Ótimo custo-benefício.' :
               'O melhor valor anual!'}
            </p>
          )}
        </CardContent>
        <CardFooter>
          <Button className={`w-full ${
            plan.highlight 
              ? (plan.superDiscount ? 'bg-yellow-400 hover:bg-yellow-400/90 text-background' : 'bg-accent hover:bg-accent/90 text-accent-foreground') 
              : 'bg-primary hover:bg-primary/90 text-primary-foreground'
            } shadow-lg transform transition-all duration-300 hover:shadow-lg`}>
            {isWillTvPlan ? 'Contratar Agora' : 'Assinar'}
            {isWillTvPlan ? <Zap className="ml-2 h-4 w-4" /> : <ShieldCheck className="ml-2 h-4 w-4" />}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PlanCard;