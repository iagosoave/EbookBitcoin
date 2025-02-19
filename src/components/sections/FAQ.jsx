import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Shield, Clock } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      question: "Preciso ter experiência prévia com criptomoedas?",
      answer: "Não! O ebook foi desenvolvido para iniciantes e inclui todo o conhecimento básico necessário. Começamos desde os conceitos fundamentais até as estratégias mais avançadas.",
      tag: "Iniciantes"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "Quanto tempo tenho acesso ao conteúdo?",
      answer: "O acesso é vitalício! Uma vez adquirido, você pode consultar o material quando quiser, incluindo todas as atualizações futuras do conteúdo.",
      tag: "Acesso"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Existe garantia de resultados?",
      answer: "Oferecemos garantia incondicional de 7 dias. Se você não ficar satisfeito por qualquer motivo, devolvemos 100% do seu investimento, sem questionamentos.",
      tag: "Garantia"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-black to-[#1a1a1a] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-5 py-2 rounded-full text-sm font-medium mb-8 border border-yellow-400/10">
            <MessageCircle className="w-4 h-4" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Perguntas Frequentes
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tudo que você precisa saber sobre nossa metodologia
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-black/40 rounded-lg blur-sm transition-all duration-300 group-hover:blur-md" />
              
              <div className="relative bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-lg transition-all duration-300 group-hover:border-yellow-400/20 overflow-hidden">
                {/* Question Header */}
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400">
                      {faq.icon}
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">{faq.tag}</div>
                      <h3 className="text-white font-medium pr-8">{faq.question}</h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-yellow-400"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-400 border-t border-gray-800 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-sm md:text-lg 
                      shadow-lg hover:shadow-xl transition-shadow duration-300
                      flex items-center justify-center space-x-2 mx-auto"
          >
            <span>QUERO COMEÇAR AGORA</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>

          <p className="text-gray-400 text-sm mt-4">
            Ainda tem dúvidas? Entre em contato com nosso suporte 24/7
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;