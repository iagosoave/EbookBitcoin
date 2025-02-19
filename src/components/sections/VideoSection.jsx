import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, BookOpen, Users } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-black to-[#1a1a1a]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Video Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            {/* Video Container */}
            <div className="aspect-video bg-[#111] rounded-lg overflow-hidden relative shadow-2xl">
              {!isPlaying ? (
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-black/50" />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-400 flex items-center justify-center transform transition-transform group-hover:scale-110">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-black" />
                    </div>
                  </motion.div>
                </div>
              ) : null}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/BL5vUVQvmX4${isPlaying ? '?autoplay=1' : ''}`}
                title="Bitcoin em 1 minuto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Floating Stats - Adjusted for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 md:-bottom-8 -right-2 md:-right-8 bg-yellow-400 text-black p-3 md:p-4 rounded-lg shadow-xl text-sm md:text-base"
            >
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-bold whitespace-nowrap">1500+ Alunos</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6 order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Aprenda com Quem Já Conquistou a{' '}
              <span className="text-yellow-400">Liberdade Financeira</span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-300">
              Nosso ebook foi desenvolvido com base em anos de experiência no mercado de criptomoedas,
              trazendo estratégias comprovadas e atualizadas para 2025.
            </p>

            {/* Features Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 md:mt-8">
              <div className="flex items-start space-x-3 bg-black/20 p-4 rounded-lg">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-sm md:text-base">Acesso Vitalício</h3>
                  <p className="text-xs md:text-sm text-gray-400">Estude no seu ritmo</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 bg-black/20 p-4 rounded-lg">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-sm md:text-base">Conteúdo Completo</h3>
                  <p className="text-xs md:text-sm text-gray-400">300+ páginas de conteúdo</p>
                </div>
              </div>
            </div>

            {/* CTA Button - Responsive */}
            <div className="pt-4 md:pt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-sm md:text-lg 
                          shadow-lg hover:shadow-xl transition-shadow duration-300
                          flex items-center justify-center space-x-2"
              >
                <span>QUERO GARANTIR MINHA VAGA</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.button>

              {/* Mobile Guarantee Text */}
              <p className="text-center text-xs md:text-sm text-gray-400 mt-3">
                7 dias de garantia incondicional
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;