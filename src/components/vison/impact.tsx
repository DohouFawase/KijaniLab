// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TimelineItem = ({ item, index, isInView }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -50 : 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.1 + 0.3
      }
    }
  };

  return (
    <div ref={ref} className="relative flex items-center mb-12 lg:mb-16">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full  -z-10"></div>
      
      {/* Content card */}
      <motion.div 
        className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:ml-auto'}`}
        variants={cardVariants}
        initial="hidden"
        animate={controls}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-l-4 border-gradient-to-b from-blue-500 to-green-500">
          <div className="flex items-start gap-4">
            <motion.div 
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
              style={{ backgroundColor: item.color }}
              variants={iconVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ 
                rotate: 360,
                transition: { duration: 0.6 }
              }}
            >
              {item.icon}
            </motion.div>
            <div className="flex-1">
              <motion.h3 
                className="text-xl font-bold text-gray-800 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              >
                {item.description}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timeline dot */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 shadow-lg z-10"
        style={{ borderColor: item.color }}
        variants={iconVariants}
        initial="hidden"
        animate={controls}
        whileHover={{ 
          scale: 1.5,
          transition: { duration: 0.2 }
        }}
      />
    </div>
  );
};

const KijaniLabTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

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
    if (headerInView) {
      setIsVisible(true);
    }
  }, [headerInView]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ 
              scale: 1.1,
              rotate: 360,
              transition: { duration: 0.8 }
            }}
          >
            <span className="text-6xl">🌍</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Notre Impact & Engagement
          </motion.h1>
          
          <motion.h2 
            className="text-2xl lg:text-3xl font-semibold text-green-600 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            pour un Développement Durable
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Chez <span className="font-bold text-green-600">KijaniLab</span>, nous croyons que l'innovation technologique doit être au service de l'humain, de la planète et des générations futures. C'est pourquoi toutes nos actions s'alignent avec les{' '}
            <span className="font-bold text-blue-600">Objectifs de Développement Durable (ODD)</span> définis par les Nations Unies.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-300 to-green-300 rounded-full"
            initial={{ scaleY: 0 }}
            animate={isVisible ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />
          
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              index={index} 
              isInView={isVisible}
            />
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default KijaniLabTimeline;