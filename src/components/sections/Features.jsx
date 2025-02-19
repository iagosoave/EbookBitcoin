import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart2, 
  Zap, 
  Headphones, 
  ArrowRight, 
  Star, 
  Timer, 
  CheckCircle2 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Resultados Reais",
      result: "+156%",
      description: "Rentabilidade Média",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Inteligência Artificial",
      result: "94%",
      description: "Taxa de Acerto",
      color: "from-yellow-300 to-yellow-500"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Suporte Premium",
      result: "24/7",
      description: "Atendimento VIP",
      color: "from-yellow-200 to-yellow-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-black to-[#1a1a1a] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-5 py-2 rounded-full text-sm font-medium mb-8 border border-yellow-400/10">
            <Timer className="w-4 h-4" />
            <span>Vagas Limitadas</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Resultados Extraordinários
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Uma nova forma de operar, combinando tecnologia avançada com estratégias comprovadas
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-black/40 rounded-lg blur-sm transition-all duration-300 group-hover:blur-md" />
              
              <div className="relative h-full bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-lg p-8 transition-all duration-300 group-hover:border-yellow-400/20">
                {/* Icon with Gradient Background */}
                <div className="relative w-16 h-16 mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-20 rounded-full blur-md`} />
                  <div className="relative flex items-center justify-center w-full h-full bg-black/40 rounded-full border border-gray-800">
                    <div className="text-yellow-400">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                
                <div className="text-3xl font-bold mb-2 text-yellow-400">
                  {feature.result}
                </div>
                
                <div className="text-gray-400">
                  {feature.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl blur-xl opacity-50" />
            <button className="relative w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-sm md:text-lg 
                          shadow-lg hover:shadow-xl transition-shadow duration-300
                          flex items-center justify-center space-x-2">
              <span>QUERO GARANTIR MINHA VAGA</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </button>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-400">7 dias de garantia incondicional</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-400">Acesso vitalício à plataforma</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;