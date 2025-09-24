import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Building, TrendingUp } from 'lucide-react';
const About = () => {
  const stats = [{
    icon: <Award className="w-8 h-8" />,
    number: "75+",
    label: "Anos de experiência"
  }, {
    icon: <Users className="w-8 h-8" />,
    number: "8M+",
    label: "Vidas protegidas"
  }, {
    icon: <Building className="w-8 h-8" />,
    number: "40K+",
    label: "Prestadores credenciados"
  }, {
    icon: <TrendingUp className="w-8 h-8" />,
    number: "98%",
    label: "Satisfação dos clientes"
  }];
  return <section id="sobre-nos" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl lg:text-4xl font-bold bradesco-red mb-6">
              Somos Bradesco
            </h2>
            
            <div className="space-y-4 text-dark-gray leading-relaxed">
              <p>
                Há mais de 75 anos, o Bradesco é sinônimo de confiança e excelência no mercado brasileiro. 
                Nossa trajetória na área da saúde começou com o compromisso de oferecer o melhor cuidado 
                médico para nossos clientes.
              </p>
              
              <p>
                Com uma das maiores redes credenciadas do país, garantimos acesso aos melhores hospitais, 
                clínicas e profissionais de saúde, sempre com a qualidade e segurança que você merece.
              </p>
              
              <p>
                Nosso compromisso vai além do atendimento médico: oferecemos soluções completas em saúde, 
                com foco na prevenção, bem-estar e qualidade de vida de nossos beneficiários.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <img className="w-full h-80 object-cover rounded-lg shadow-lg mb-8" alt="Sede do Bradesco com arquitetura moderna" src="https://horizons-cdn.hostinger.com/4b7ee4c9-fb00-48d3-a389-430fe2340598/image-3-gYJj8.jpeg" />

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="text-center p-4 bg-light-gray rounded-lg">
                  <div className="bradesco-red mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-dark-gray mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-dark-gray">
                    {stat.label}
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;