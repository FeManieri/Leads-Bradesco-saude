import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
const Footer = () => {
  const {
    toast
  } = useToast();
  const logoUrl = "https://horizons-cdn.hostinger.com/4b7ee4c9-fb00-48d3-a389-430fe2340598/743f1aa297a5e0b175755c4bee4918e5.png";
  
  return <motion.footer initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6,
    delay: 0.2
  }} className="bg-bradesco-red text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img src={logoUrl} alt="Logo Bradesco Saúde" className="h-48 w-auto mb-4" />
          <span className="text-sm text-center md:text-left">
            © 2024 Bradesco Saúde. Todos os direitos reservados.
          </span>
        </div>

        <div className="text-center md:text-left">
          <span className="font-bold text-lg mb-4 block">Contato</span>
          <ul className="space-y-2">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="h-5 w-5" />
              <span>(11)  99616-3900</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="h-5 w-5" />
              <span>contato@abmix.com.br</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="h-5 w-5" />
              <span>Av. Paulista, 1840 - São Paulo - SP</span>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <span className="font-bold text-lg mb-4 block">Redes Sociais</span>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.facebook.com/share/1TZw1NRmn3/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/bradescoseguros?igsh=MTJiMmd4MDRreXRlaQ==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/company/bradesco/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>;
};
export default Footer;