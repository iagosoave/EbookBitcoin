import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Shield, Gift, Zap, ArrowRight, Users, Star, TrendingUp, Check, XCircle } from 'lucide-react';

const GlowingBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15)_0%,rgba(0,0,0,1)_70%)]" />
    
    {/* Dynamic grid */}
    <motion.div 
      className="absolute inset-0"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,215,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,215,0,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}
      animate={{
        opacity: [0.3, 0.5, 0.3],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }}
    />

    {/* Moving light circles */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`circle-${i}`}
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(255,215,0,0) 70%)',
          left: `${30 * i}%`,
          top: `${20 * (i + 1)}%`
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 8,
          delay: i * 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}

    {/* Floating particles */}
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`
        }}
        animate={{
          y: [0, -100, 0],
          opacity: [0, 1, 0],
          scale: [0, 1, 0]
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Infinity,
          delay: Math.random() * 2
        }}
      />
    ))}
  </div>
);

const PremiumCard = ({ children, className = "", glowEffect = false, hoverEffect = false }) => (
  <div className={`relative ${glowEffect ? 'glow' : ''} ${hoverEffect ? 'group' : ''}`}>
    {glowEffect && (
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 blur-xl -z-10 transform scale-105" />
    )}
    <div className={`
      relative
      bg-gradient-to-br from-[rgba(255,215,0,0.15)] via-[rgba(255,215,0,0.05)] to-[rgba(255,215,0,0.1)]
      backdrop-blur-xl
      border border-yellow-400/20
      rounded-2xl
      transition-all duration-300
      ${hoverEffect ? 'group-hover:border-yellow-400/40 group-hover:bg-[rgba(255,215,0,0.15)]' : ''}
      ${className}
    `}>
      {children}
    </div>
  </div>
);

const FloatingNotification = ({ notification, onComplete }) => (
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 100, opacity: 0 }}
    onAnimationComplete={() => {
      setTimeout(onComplete, 3000);
    }}
    className="fixed left-4 z-50 max-w-sm"
    style={{ top: `${notification.position}px` }}
  >
    <PremiumCard className="p-4">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
          {notification.icon}
        </div>
        <div className="flex-1">
          <p className="text-yellow-400 text-sm">{notification.text}</p>
          <p className="text-gray-400 text-xs mt-1">{notification.time}</p>
        </div>
      </div>
    </PremiumCard>
  </motion.div>
);

const SpotsWarning = ({ spots }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 20, opacity: 0 }}
    className="fixed bottom-4 right-4 z-50"
  >
    <PremiumCard className="p-4 bg-red-500/10">
      <div className="flex items-center space-x-3">
        <XCircle className="w-6 h-6 text-red-400" />
        <p className="text-red-400 font-medium">
          Apenas {spots} {spots === 1 ? 'vaga restante!' : 'vagas restantes!'}
        </p>
      </div>
    </PremiumCard>
  </motion.div>
);

const LiveCounter = ({ count, label }) => (
  <div className="flex items-center space-x-2 text-sm">
    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
    <span className="text-gray-400">{count} {label}</span>
  </div>
);

const Timer = ({ minutes, seconds }) => (
  <div className="flex items-center space-x-4">
    <div className="w-14 h-14 rounded-xl bg-yellow-400/20 flex items-center justify-center">
      <Clock className="w-7 h-7 text-yellow-400" />
    </div>
    <div>
      <p className="text-gray-400 text-sm">Oferta expira em</p>
      <div className="flex items-baseline space-x-1">
        <span className="text-2xl font-bold text-yellow-400">
          {minutes}:{seconds.toString().padStart(2, '0')}
        </span>
        <span className="text-yellow-400/60">min</span>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const [notifications, setNotifications] = useState([]);
  const [activeSpots, setActiveSpots] = useState(7);
  const [viewerCount, setViewerCount] = useState(147);
  const [timer, setTimer] = useState({ minutes: 14, seconds: 59 });
  const [showSpotsWarning, setShowSpotsWarning] = useState(false);

  // Simulate live viewers
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate notifications
  useEffect(() => {
    const cities = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Belo Horizonte', 'Brasília'];
    const names = ['João', 'Maria', 'Pedro', 'Ana', 'Lucas', 'Julia'];
    const positions = [24, 100, 176]; // Different vertical positions
    
    const interval = setInterval(() => {
      if (notifications.length < 3) {
        const name = names[Math.floor(Math.random() * names.length)];
        const city = cities[Math.floor(Math.random() * cities.length)];
        const position = positions[notifications.length];
        
        const newNotification = {
          id: Date.now(),
          icon: <Star className="w-5 h-5 text-yellow-400" />,
          text: `${name} de ${city} acabou de garantir sua vaga!`,
          time: 'Agora mesmo',
          position
        };
        
        setNotifications(prev => [...prev, newNotification]);
        
        // Update remaining spots randomly
        if (Math.random() > 0.7) {
          setActiveSpots(prev => {
            const newSpots = Math.max(prev - 1, 1);
            if (newSpots <= 3) {
              setShowSpotsWarning(true);
            }
            return newSpots;
          });
        }
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [notifications.length]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      <GlowingBackground />

      {/* Floating Notifications */}
      <AnimatePresence>
        {notifications.map(notification => (
          <FloatingNotification
            key={notification.id}
            notification={notification}
            onComplete={() => {
              setNotifications(prev => prev.filter(n => n.id !== notification.id));
            }}
          />
        ))}
      </AnimatePresence>

      {/* Spots Warning */}
      <AnimatePresence>
        {showSpotsWarning && activeSpots <= 3 && (
          <SpotsWarning spots={activeSpots} />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Top Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <PremiumCard className="inline-block px-8 py-4">
              <div className="flex items-center justify-center space-x-6 divide-x divide-yellow-400/20">
                <Timer minutes={timer.minutes} seconds={timer.seconds} />
                
                <div className="flex items-center space-x-3 pl-6">
                  <Users className="w-6 h-6 text-yellow-400" />
                  <div className="text-left">
                    <p className="text-gray-400 text-xs">Últimas vagas</p>
                    <motion.span 
                      className="text-xl font-bold text-yellow-400"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {activeSpots} disponíveis
                    </motion.span>
                  </div>
                </div>
              </div>
            </PremiumCard>
          </motion.div>

          {/* Live Activity Indicators */}
          <div className="absolute top-8 right-8 space-y-2">
            <LiveCounter count={viewerCount} label="pessoas estão vendo" />
            <LiveCounter count={activeSpots} label="vagas restantes" />
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div className="space-y-8">
                <motion.div 
                  className="inline-block"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <PremiumCard className="px-6 py-2">
                    <span className="text-yellow-400 font-medium">
                      🔥 Método Exclusivo 2024
                    </span>
                  </PremiumCard>
                </motion.div>

                <h1 className="text-7xl font-black leading-tight">
                  <motion.span 
                    className="block bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
                  >
                    Potencialize
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent"
                  >
                    Seus Ganhos
                  </motion.span>
                </h1>

                <p className="text-2xl text-gray-300 leading-relaxed">
                  Descubra as <span className="text-yellow-400 font-semibold">estratégias comprovadas</span> que já 
                  geraram mais de <span className="text-yellow-400 font-semibold">R$ 2.5M em lucro</span> para 
                  nossos alunos em 2024
                </p>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "1500+", label: "Alunos Satisfeitos", icon: Users },
                  { number: "95%", label: "Taxa de Sucesso", icon: TrendingUp }
                ].map((stat, index) => (
                  <PremiumCard key={index} className="p-4" hoverEffect>
                    <motion.div
                      className="flex items-center space-x-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <span className="block text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                          {stat.number}
                        </span>
                        <span className="text-gray-400 text-sm">{stat.label}</span>
                      </div>
                    </motion.div>
                  </PremiumCard>
                ))}
              </div>
            </motion.div>

            {/* Right Column - CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <PremiumCard className="p-8" glowEffect>
                {/* Floating Bonus Banner */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
                  <PremiumCard className="px-6 py-2">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex items-center justify-center space-x-2"
                    >
                      <Gift className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 font-medium">
                        Bônus exclusivo por tempo limitado
                      </span>
                    </motion.div>
                  </PremiumCard>
                </div>

                <div className="space-y-8 mt-6">
                  {/* Card Header */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent mb-2">
                      Método Completo + Bônus
                    </h3>
                    <p className="text-gray-400">Acesso vitalício garantido</p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Gift, text: "Estratégias VIP" },
                      { icon: Shield, text: "Sistema Anti-perdas" },
                      { icon: Zap, text: "Alertas Premium" },
                      { icon: Users, text: "Grupo Exclusivo" }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="flex flex-col items-center text-center space-y-3 p-4">
                          <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center group-hover:bg-yellow-400/30 transition-colors">
                            <feature.icon className="w-6 h-6 text-yellow-400" />
                          </div>
                          <span className="text-gray-300 font-medium group-hover:text-yellow-400 transition-colors">
                            {feature.text}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Limited Time Bonuses */}
                  <div className="space-y-4">
                    {[
                      "🎁 3 planilhas profissionais de análise",
                      "📱 App exclusivo de sinais",
                      "🎯 Sistema indicador de entradas",
                      "📊 Dashboards personalizados"
                    ].map((bonus, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-yellow-400/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-yellow-400" />
                        </div>
                        <span className="text-gray-300">{bonus}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold py-6 px-8 rounded-xl text-xl shadow-lg shadow-yellow-400/20">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center space-x-2">
                          <span>QUERO COMEÇAR AGORA</span>
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <span className="text-sm opacity-75">
                          Apenas {activeSpots} {activeSpots === 1 ? 'vaga restante' : 'vagas restantes'}
                        </span>
                      </div>
                    </div>
                  </motion.button>

                  {/* Trust Elements */}
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                    <div className="flex items-center justify-center space-x-2">
                      <Shield className="w-4 h-4 text-yellow-400" />
                      <span>7 dias de garantia</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Users className="w-4 h-4 text-yellow-400" />
                      <span>{viewerCount} pessoas vendo</span>
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;