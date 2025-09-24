import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Plans from '@/components/Plans';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import WhatsAppButton from '@/components/WhatsAppButton';

function HomePage() {
  return (
    <div className="min-h-screen smooth-scroll">
      <Helmet>
        <title>Planos de Saúde Bradesco Médicos – Flex, Nacional e Nacional Plus</title>
        <meta 
          name="description" 
          content="Planos Bradesco Médicos com cobertura nacional e rede referência (Sírio-Libanês e Albert Einstein). Cotação rápida via e-mail e WhatsApp." 
        />
        <meta name="keywords" content="plano de saúde, bradesco médicos, sírio libanês, albert einstein, cobertura nacional" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Planos de Saúde Bradesco Médicos – Flex, Nacional e Nacional Plus" />
        <meta property="og:description" content="Planos Bradesco Médicos com cobertura nacional e rede referência (Sírio-Libanês e Albert Einstein). Cotação rápida via e-mail e WhatsApp." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.bradesco.com.br/planos-saude" />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <Highlights />
        <Plans />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />

      <WhatsAppButton />
      <Toaster />
    </div>
  );
}

export default HomePage;