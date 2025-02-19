import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const CTA = () => {
  const benefits = [
    "Acesso vitalício ao conteúdo",
    "Suporte 24/7 via grupo exclusivo",
    "Bônus: 3 planilhas de análise",
    "Garantia de 30 dias",
    "Atualizações gratuitas"
  ];

  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-black to-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comece Sua Jornada no Mundo Cripto
              <span className="block text-yellow-400 mt-2">Hoje Mesmo!</span>
            </h2>
            <p className="text-xl text-gray-300">
              Não perca mais tempo! Garanta agora seu acesso a todo o conteúdo
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#111] p-8 rounded-lg border border-yellow-400/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-8">
                  <div className="text-yellow-400 text-lg font-semibold mb-2">
                    OFERTA POR TEMPO LIMITADO
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    <span className="text-gray-400 line-through mr-3">R$297</span>
                    <span className="text-white">R$97</span>
                  </div>
                  <div className="text-gray-400">Pagamento único</div>
                </div>

                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-lg flex items-center justify-center space-x-2"
                >
                  <span>QUERO GARANTIR MEU ACESSO</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <div className="text-center text-sm text-gray-400">
                  <p>Pagamento 100% seguro via</p>
                  <div className="flex justify-center space-x-4 mt-2">
                    <span className="font-semibold">Pix</span>
                    <span className="font-semibold">Cartão de Crédito</span>
                    <span className="font-semibold">Boleto</span>
                  </div>
                </div>

                <div className="text-center text-sm">
                  <p className="text-gray-400">
                    Garantia incondicional de 30 dias.
                    <br />
                    Não ficou satisfeito? Devolvemos 100% do seu dinheiro.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8 text-sm text-gray-500">
            © 2025 Crypto Ebook. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;