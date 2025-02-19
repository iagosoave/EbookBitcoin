// src/App.jsx
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Importando cada componente individualmente
import Hero from './components/sections/hero';
import Features from './components/sections/Features';
import VideoSection from './components/sections/VideoSection';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth scroll para as seções
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="relative bg-black min-h-screen text-white">
      {/* Barra de progresso */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Background com gradiente sutil */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-black to-[#1a1a1a] z-0" />

      {/* Conteúdo principal */}
      <div className="relative z-10">
        <Hero />
        <Features />
        <VideoSection />
        <Testimonials />
        <FAQ />
        <CTA />
      </div>

      {/* Botão de voltar ao topo */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-yellow-400/20 transition-shadow duration-300 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>

      {/* Meta tags importantes */}
      <Helmet>
        <title>Ebook Criptomoedas - Domine o Mercado Cripto</title>
        <meta
          name="description"
          content="Aprenda a lucrar com criptomoedas através do nosso ebook completo. Estratégias comprovadas, análise técnica e gestão de risco."
        />
        <meta
          name="keywords"
          content="criptomoedas, bitcoin, investimentos, trading, ebook, curso"
        />
      </Helmet>
    </div>
  );
};

export default App;