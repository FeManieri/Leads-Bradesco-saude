import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Envio Concluído com Sucesso!</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl text-center max-w-lg mx-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
            className="mx-auto mb-6 flex items-center justify-center h-20 w-20 rounded-full bg-green-100"
          >
            <CheckCircle className="h-12 w-12 text-green-600" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tudo certo!
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Sua solicitação foi enviada com sucesso. Em breve, um de nossos especialistas entrará em contato com você.
          </p>
          <Link to="/">
            <Button className="bg-bradesco-red hover:bg-bradesco-red-dark text-white font-semibold py-3 px-8 rounded-md transition-colors text-lg">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Início
            </Button>
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessPage;