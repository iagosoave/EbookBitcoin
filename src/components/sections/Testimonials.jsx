import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import carlorsilva from  './carolos.jpg';
import ricardo from  './ricardo.jpg';
import anasantos from  './ana.jpg';


const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Investidor Iniciante",
      image: carlorsilva,
      text: "Comecei do zero e em 3 meses já estava lucrando consistentemente. O material é incrível!",
      stars: 5
    },
    {
      name: "Ana Santos",
      role: "Day Trader",
      image: anasantos,
      text: "As estratégias ensinadas no ebook são fantásticas. Aumentei meu patrimônio em 150% em 6 meses.",
      stars: 5
    },
    {
      name: "Ricardo Oliveira",
      role: "Analista Financeiro",
      image: ricardo,
      text: "Conteúdo completo e atualizado. As dicas de gestão de risco valem cada centavo investido.",
      stars: 5
    }
  ];

  return (
    <section className="py-24 bg-[#111]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Quem Já Conquistou Resultados
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-black p-8 rounded-lg border border-yellow-400/20 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-yellow-400/20" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-yellow-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6">{testimonial.text}</p>

              <div className="flex space-x-1">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-bold mb-8">
            Junte-se a mais de <span className="text-yellow-400">1500 alunos</span> que já 
            transformaram suas vidas com nosso ebook
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-lg"
          >
            QUERO COMEÇAR AGORA
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;