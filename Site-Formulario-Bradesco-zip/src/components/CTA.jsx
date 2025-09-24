import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const CTA = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 bg-light-gray">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-8 lg:p-12 shadow-lg"
        >
          <h2 className="text-3xl lg:text-4xl font-bold bradesco-red mb-4">
            Pronto para cuidar da sua saúde?
          </h2>
          
          <p className="text-lg text-dark-gray mb-8 max-w-2xl mx-auto">
            Não deixe para depois o que pode ser feito hoje. Garante já a proteção que você e sua família merecem 
            com os planos Bradesco Médicos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-2"> {/* Adicionado px-2 para espaçamento lateral em mobile */}
            <Button
              onClick={scrollToForm}
              className="w-full sm:w-auto bg-bradesco-red hover:bg-bradesco-red text-white px-6 py-3 text-base sm:text-lg font-semibold flex items-center justify-center gap-2"
            >
              Quero minha cotação
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button
              onClick={() => window.open('https://wa.me/5511996163900', '_blank')}
              variant="outline"
              className="w-full sm:w-auto border-2 border-bradesco-red bradesco-red hover:bg-bradesco-red hover:text-white px-6 py-3 text-base sm:text-lg font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-sm text-gray-600"
          >
            <p>✓ Atendimento personalizado</p>
            <p>✓ Cotação sem compromisso</p>
            <p>✓ Resposta em até 24 horas</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;