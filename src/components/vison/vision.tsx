// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState,  useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Target, Users, Sprout, Globe, TrendingUp, Shield, Heart, ArrowRight } from 'lucide-react';

const MissionSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  // Refs pour useInView
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const featuresRef = useRef(null);
  const audienceRef = useRef(null);
  const ctaRef = useRef(null);
  
  // useInView hooks
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.2 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const audienceInView = useInView(audienceRef, { once: true, amount: 0.2 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Sprout className="w-6 h-6" />,
      title: "Outils Numériques",
      description: "Solutions tech adaptées aux défis agricoles africains",
      color: "emerald"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Formations AgriTech",
      description: "Programmes innovants pour moderniser les pratiques",
      color: "blue"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Accompagnement",
      description: "Solutions sur mesure pour entreprises agricoles",
      color: "purple"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Durabilité",
      description: "Agriculture respectueuse et rentable",
      color: "orange"
    }
  ];

  const targetAudience = [
    { icon: "🌾", label: "Agriculteurs" },
    { icon: "🤝", label: "Coopératives" },
    { icon: "🚀", label: "Startups AgriTech" },
    { icon: "🏛️", label: "Gouvernements" },
    { icon: "🌍", label: "ONG" }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700"
    };
    return colors[color] || colors.emerald;
  };

  // Variants d'animation pour les conteneurs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Variants pour les éléments enfants
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Animation pour le héro
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animation pour les cartes
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Animation pour les icônes
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Animation pour les boutons
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="px-4 mt-6">
      <div className="max-w-6xl mx-auto py-16">
        
        {/* Hero Section avec animation fluide */}
        <motion.div 
          ref={heroRef}
          className="text-center mb-16"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={heroVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-2 text-emerald-600 font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Globe className="w-5 h-5" />
            </motion.div>
            Agriculture Africaine 2.0
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Transformer l'Agriculture
            <motion.span 
              className="text-emerald-600 block"
              initial={{ opacity: 0, x: -20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              par l'Innovation
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Nous révolutionnons l'agriculture africaine grâce à la technologie, 
            créant un avenir connecté, rentable et résilient.
          </motion.p>
        </motion.div>

        {/* Cards Layout - Vision & Mission */}
        <motion.div 
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
        >
          {/* Vision Card */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="bg-white rounded-2xl p-8 h-full shadow-sm border border-gray-100"
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center"
                  whileHover={iconVariants.hover}
                >
                  <Rocket className="w-6 h-6 text-emerald-600" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900">Notre Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Transformer durablement l'agriculture africaine grâce à la technologie, à l'innovation et à la formation. 
                Un continent où chaque exploitation est connectée, rentable et résiliente face aux défis climatiques.
              </p>
            </motion.div>
          </motion.div>

          {/* Mission Card */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="bg-white rounded-2xl p-8 h-full shadow-sm border border-gray-100"
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"
                  whileHover={iconVariants.hover}
                >
                  <Target className="w-6 h-6 text-blue-600" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900">Notre Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Développer des outils numériques, proposer des formations AgriTech de qualité, 
                et accompagner les entreprises agricoles avec des solutions sur mesure pour une agriculture productive et durable.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Grid avec animations staggered */}
        <motion.div 
          ref={featuresRef}
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                custom={index}
              >
                <motion.div 
                  className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${getColorClasses(feature.color)}`}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <motion.div 
                    className="mb-4"
                    animate={activeCard === index ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm opacity-80">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Target Audience */}
        <motion.div 
          ref={audienceRef}
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={audienceInView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div 
                className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center"
                whileHover={iconVariants.hover}
              >
                <Users className="w-6 h-6 text-purple-600" />
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-900">Pour Qui ?</h2>
            </div>
            <p className="text-gray-600 max-w-xl mx-auto">
              Nos services s'adressent aux acteurs clés de l'écosystème agricole africain.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {targetAudience.map((audience, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                custom={index}
              >
                <motion.div 
                  className="bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100 cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.span 
                      className="text-2xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {audience.icon}
                    </motion.span>
                    <span className="font-medium text-gray-900">{audience.label}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action avec animation de bouton */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.button 
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Rejoignez la Révolution AgriTech
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionSection;