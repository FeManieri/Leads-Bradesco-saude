import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ShieldCheck, Heart, Building, Users, HeartHandshake as Handshake } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoUrl = "https://horizons-cdn.hostinger.com/4b7ee4c9-fb00-48d3-a389-430fe2340598/64d751db1b105f87f07b91b737f1b808.png";
  const seloUrl = "https://horizons-cdn.hostinger.com/4b7ee4c9-fb00-48d3-a389-430fe2340598/6f80ec070ff41104590cd85ae37d8d44.png";

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { text: 'Planos', icon: <ShieldCheck className="w-5 h-5" />, action: () => scrollToSection('planos') },
    { text: 'Benefícios', icon: <Heart className="w-5 h-5" />, action: () => scrollToSection('beneficios') },
    { text: 'Rede', icon: <Building className="w-5 h-5" />, action: () => scrollToSection('beneficios') },
    { text: 'Sobre Nós', icon: <Users className="w-5 h-5" />, action: () => scrollToSection('sobre-nos') },
    { text: 'Seja um parceiro', icon: <Handshake className="w-5 h-5" />, action: () => scrollToSection('formulario') },
  ];

  const handleLinkClick = (e, action) => {
    e.preventDefault();
    action();
  };

  return (
    <header className="shadow-md sticky top-0 z-50 bg-white">
      <div className="bg-gradient-to-r from-bradesco-red to-bradesco-purple py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center relative">
          <a href="/" className="flex-shrink-0">
            <img src={logoUrl} alt="Logo Bradesco Saúde" className="h-14 w-auto" />
          </a>
          <img src={seloUrl} alt="Selo Great Place To Work Certificada" className="h-10 w-auto absolute right-0 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href="#"
                  onClick={(e) => handleLinkClick(e, link.action)}
                  className="text-bradesco-red font-semibold hover:text-bradesco-red-dark transition-colors duration-300 text-sm"
                >
                  {link.text}
                </a>
              ))}
               <a
                  href="https://wa.me/5511996163900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bradesco-red font-semibold hover:text-bradesco-red-dark transition-colors duration-300 text-sm"
                >
                  WhatsApp
                </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-bradesco-red hover:bg-light-gray focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href="#"
                onClick={(e) => handleLinkClick(e, link.action)}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-bradesco-red hover:bg-light-gray transition-colors"
              >
                {link.icon}
                <span>{link.text}</span>
              </a>
            ))}
             <a
                href="https://wa.me/5511996163900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-bradesco-red hover:bg-light-gray transition-colors"
              >
                <Handshake className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;