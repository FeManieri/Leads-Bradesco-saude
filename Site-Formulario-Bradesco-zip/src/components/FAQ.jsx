import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Como funciona a adesão ao plano Bradesco Médicos?",
      answer: "A adesão é simples e rápida. Basta preencher o formulário em nossa página, enviar a documentação necessária e aguardar a aprovação. Todo o processo pode ser feito online, sem burocracias desnecessárias."
    },
    {
      question: "Qual é o prazo de carência dos planos?",
      answer: "Os prazos de carência variam conforme o tipo de procedimento: consultas médicas têm carência de 30 dias, exames simples 30 dias, cirurgias eletivas 180 dias e partos 300 dias. Urgências e emergências têm carência de 24 horas."
    },
    {
      question: "Posso incluir dependentes no meu plano?",
      answer: "Sim! Você pode incluir cônjuge, filhos até 24 anos (ou sem limite de idade se universitários até 24 anos), pais e sogros. Cada dependente deve ser declarado no momento da contratação ou em data de aniversário do contrato."
    },
    {
      question: "Como funciona o atendimento nos hospitais de referência?",
      answer: "Nossos beneficiários têm acesso direto aos melhores hospitais do país, incluindo Sírio-Libanês e Albert Einstein. Basta apresentar a carteirinha e um documento de identidade para ser atendido."
    },
    {
      question: "O plano cobre atendimento em outros estados?",
      answer: "Sim! Nossos planos Nacional e Nacional Plus oferecem cobertura em todo o território nacional. Você pode ser atendido em qualquer estado do Brasil na nossa rede credenciada."
    },
    {
      question: "Como solicitar reembolso de despesas médicas?",
      answer: "Para procedimentos realizados fora da rede credenciada, você pode solicitar reembolso através do nosso portal online ou app, enviando os recibos e relatórios médicos. O reembolso segue a tabela de referência do plano contratado."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-light-gray">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold bradesco-red mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-dark-gray">
            Tire suas dúvidas sobre os planos Bradesco Médicos
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-dark-gray pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 bradesco-red flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 bradesco-red flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-dark-gray leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;