import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const HeroContent = React.memo(() => {
  const diferenciais = [
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      text: "Cobertura Nacional"
    },
    {
      icon: <Heart className="w-5 h-5 text-white" />,
      text: "Rede de referência: Hospitais Sírio-Libanês e Albert Einstein"
    },
    {
      icon: <Clock className="w-5 h-5 text-white" />,
      text: "Adesão rápida e simples"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-white text-center lg:text-left order-1 lg:order-2"
    >
      <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
        Planos de Saúde Bradesco – Médicos
      </h1>
      
      <p className="text-xl mb-8 leading-relaxed" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.7)'}}>
        Proteção completa para você e sua família com a qualidade e confiança que só o Bradesco oferece.
      </p>

      <div className="space-y-4 mb-8">
        {diferenciais.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
            className="flex items-start justify-center lg:justify-start gap-3"
          >
            <div className="mt-1">
              {item.icon}
            </div>
            <span className="font-medium" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});
HeroContent.displayName = 'HeroContent';

const Hero = () => {
  const imageUrl = "https://horizons-cdn.hostinger.com/4b7ee4c9-fb00-48d3-a389-430fe2340598/f37c44ed5b5f3f0b2af472d9cac4b079.jpg";

  return (
    <section 
      className="relative w-full py-16 md:py-24 px-4 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-start w-full order-2 lg:order-1"
          >
            <ContactForm />
          </motion.div>

          <HeroContent />

        </div>
      </div>
    </section>
  );
};

export default Hero;