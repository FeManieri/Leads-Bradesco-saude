import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: "Flex",
      description: "Ideal para quem busca flexibilidade e economia",
      features: [
        "Consultas médicas ilimitadas",
        "Exames básicos inclusos",
        "Rede credenciada regional",
        "Telemedicina 24h",
        "Coparticipação reduzida"
      ],
      highlight: false
    },
    {
      name: "Nacional",
      description: "Cobertura completa em todo o Brasil",
      features: [
        "Todas as vantagens do Flex",
        "Cobertura nacional completa",
        "Internações sem limite",
        "Cirurgias de alta complexidade",
        "Medicina preventiva"
      ],
      highlight: true
    },
    {
      name: "Nacional Plus",
      description: "O mais completo para máxima tranquilidade",
      features: [
        "Todas as vantagens do Nacional",
        "Hospitais de referência premium",
        "Acomodação individual",
        "Check-up executivo anual",
        "Medicina personalizada"
      ],
      highlight: false
    }
  ];

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="planos" className="py-16 px-4 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold bradesco-red mb-4">
            Planos Disponíveis
          </h2>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            Escolha o plano que melhor se adapta às suas necessidades e da sua família.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-white rounded-lg p-8 shadow-lg relative ${
                plan.highlight ? 'ring-2 ring-bradesco-red transform scale-105' : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-bradesco-red text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold bradesco-red mb-2">
                  {plan.name}
                </h3>
                <p className="text-dark-gray">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 bradesco-red mt-0.5 flex-shrink-0" />
                    <span className="text-dark-gray">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToForm}
                className={`w-full py-3 font-semibold transition-colors ${
                  plan.highlight
                    ? 'bg-bradesco-red hover:bg-bradesco-red text-white'
                    : 'bg-white border-2 border-bradesco-red bradesco-red hover:bg-bradesco-red hover:text-white'
                }`}
              >
                Solicitar Cotação
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;