import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, UserCheck, Clock } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Rede Nacional",
      description: "Cobertura em todo o território nacional com mais de 40.000 prestadores credenciados."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Hospitais de Referência",
      description: "Acesso aos melhores hospitais do país, incluindo Sírio-Libanês e Albert Einstein."
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Adesão Simples",
      description: "Processo de contratação rápido e descomplicado, sem burocracias desnecessárias."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Atendimento 24h",
      description: "Suporte e orientação médica disponível 24 horas por dia, 7 dias por semana."
    }
  ];

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="beneficios" className="py-16 px-4 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold bradesco-red mb-4">
            Por que escolher o Bradesco Médicos?
          </h2>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            Mais de 75 anos de experiência cuidando da saúde dos brasileiros com excelência e inovação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-white hover:shadow-lg transition-shadow"
            >
              <div className="bradesco-red mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-gray mb-3">
                {item.title}
              </h3>
              <p className="text-dark-gray leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;