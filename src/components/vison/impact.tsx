// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
//bg-gradient-to-br from-blue-50 via-green-50 to-blue-100
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

const TimelineItem = ({ item, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <div ref={ref} className="relative flex items-start mb-8 md:mb-12">
      {/* Content card */}
      <motion.div 
        className="w-full ml-12 md:ml-16"
        variants={cardVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="bg-gray-900 rounded-lg p-4 md:p-6 border border-gray-800 hover:border-gray-700 transition-colors duration-300">
          <div className="flex items-start gap-3 md:gap-4">
            <div 
              className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timeline dot */}
      <motion.div 
        className="absolute left-4 md:left-6 top-4 md:top-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white border-2 shadow-lg z-10"
        style={{ borderColor: item.color }}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
      />
    </div>
  );
};

const KijaniLabTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const timelineInView = useInView(timelineRef, { once: true });

  const timelineData = [
    {
      icon: "🔵",
      title: "ODD 1 – Pas de pauvreté",
      description: "Nous soutenons les agriculteurs pour augmenter leurs revenus via des outils de gestion modernes, l'accès aux marchés, et une meilleure visibilité.",
      color: "#3B82F6"
    },
    {
      icon: "🟢",
      title: "ODD 2 – Faim Zéro",
      description: "En renforçant la productivité et la résilience des exploitations agricoles, nous contribuons à la sécurité alimentaire locale.",
      color: "#10B981"
    },
    {
      icon: "🟡",
      title: "ODD 4 – Éducation de qualité",
      description: "Notre Agritech Academy forme les jeunes, les femmes et les professionnels à l'utilisation des technologies agricoles.",
      color: "#F59E0B"
    },
    {
      icon: "🟣",
      title: "ODD 5 – Égalité entre les sexes",
      description: "Nous encourageons l'autonomisation des femmes dans l'agriculture grâce à l'accès à la formation, à la technologie et à la visibilité.",
      color: "#8B5CF6"
    },
    {
      icon: "🟠",
      title: "ODD 8 – Travail décent & croissance économique",
      description: "Nos services créent des opportunités pour des emplois durables, qualifiés, et porteurs de valeur dans les zones rurales.",
      color: "#F97316"
    },
    {
      icon: "🔴",
      title: "ODD 9 – Industrie, innovation et infrastructure",
      description: "Nous développons des applications, des plateformes collaboratives et des systèmes IoT pour une agriculture connectée.",
      color: "#EF4444"
    },
    {
      icon: "🟢",
      title: "ODD 13 – Lutte contre les changements climatiques",
      description: "Nos solutions favorisent la gestion durable des ressources, l'agriculture intelligente et la préservation des écosystèmes.",
      color: "#059669"
    }
  ];

  useEffect(() => {
    if (timelineInView) {
      setIsVisible(true);
    }
  }, [timelineInView]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 md:mb-6">
            <span className="text-4xl md:text-6xl">🌍</span>
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Notre Impact & Engagement
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
            pour un Développement Durable
          </h2>
          
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Chez <span className="font-bold text-green-400">KijaniLab</span>, nous croyons que l'innovation technologique doit être au service de l'humain, de la planète et des générations futures. C'est pourquoi toutes nos actions s'alignent avec les{' '}
            <span className="font-bold text-blue-400">Objectifs de Développement Durable (ODD)</span> définis par les Nations Unies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline line avec gradient animé */}
          <motion.div 
            className="absolute left-4 md:left-6 top-0 w-0.5 md:w-1 h-full bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 rounded-full"
            initial={{ scaleY: 0 }}
            animate={isVisible ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />
          
          {/* Animation pulse sur la ligne */}
          <motion.div 
            className="absolute left-4 md:left-6 top-0 w-0.5 md:w-1 h-full bg-gradient-to-b from-blue-400 via-green-400 to-purple-400 rounded-full opacity-50"
            initial={{ scaleY: 0 }}
            animate={isVisible ? { 
              scaleY: [0, 1, 0],
              opacity: [0.5, 0.8, 0.5]
            } : {}}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2 
            }}
            style={{ originY: 0 }}
          />
          
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KijaniLabTimeline;