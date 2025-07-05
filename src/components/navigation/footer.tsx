// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Leaf,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, threshold: 0.1 });

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'À propos', href: '#' },
    { name: 'Nos solutions', href: '#' },
    { name: 'Partenariats', href: '#' },
    { name: 'Incubateur Agritech', href: '#' },
    { name: 'Nous contacter', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-green-400 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-emerald-400 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-12 h-12 bg-green-300 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Main Footer Content */}
      <motion.div 
        ref={footerRef}
        className="container mx-auto px-4 py-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Leaf className="h-8 w-8 text-green-400" />
              </motion.div>
              <h3 className="text-2xl font-bold">KijaniLab</h3>
            </motion.div>
            <motion.p 
              className="text-green-100 text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Startup dédiée à la transformation digitale de l'agriculture africaine. 
              Nous développons des solutions technologiques, formons les acteurs du secteur, 
              et accompagnons les projets innovants en agro-tech.
            </motion.p>
            <motion.div 
              className="flex items-center space-x-2 text-green-200"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Bénin 🇧🇯</span>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-xl font-semibold text-green-300">Contact</h4>
            <div className="space-y-3">
              <motion.div 
                className="flex items-center space-x-3 text-green-100"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="h-4 w-4 text-green-400" />
                <a href="mailto:contact@kijanilab.com" className="text-sm hover:text-green-300 transition-colors">
                  contact@kijanilab.com
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-green-100"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="h-4 w-4 text-green-400" />
                <div className="text-sm">
                  <div>+229 67 65 97 17</div>
                  <div>+229 47 14 61 61</div>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-green-100"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Globe className="h-4 w-4 text-green-400" />
                <a href="https://www.kijanilab.com" className="text-sm hover:text-green-300 transition-colors">
                  www.kijanilab.com
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-xl font-semibold text-green-300">Liens rapides</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href}
                  className="block text-sm text-green-100 hover:text-green-300 transition-colors duration-200"
                  whileHover={{ x: 8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social Media */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-xl font-semibold text-green-300">Suivez-nous</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`text-green-200 ${social.color} transition-all duration-200`}
                    aria-label={social.name}
                    variants={socialVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.3,
                      rotate: [0, -10, 10, -5, 5, 0],
                      transition: { duration: 0.6 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent className="h-6 w-6" />
                  </motion.a>
                );
              })}
            </div>
            <motion.div 
              className="mt-6 p-4 bg-green-800/50 rounded-lg border border-green-700"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.p 
                className="text-sm text-green-200 font-medium"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🌱 Transformons l'agriculture africaine ensemble
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-green-700 bg-green-900/50 relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div 
              className="text-sm text-green-200"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              © {currentYear} KijaniLab. Tous droits réservés.
            </motion.div>
            <motion.div 
              className="flex space-x-6 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2, duration: 0.6 }}
            >
              <motion.a 
                href="#" 
                className="text-green-200 hover:text-green-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Mentions légales
              </motion.a>
              <span className="text-green-600">•</span>
              <motion.a 
                href="#" 
                className="text-green-200 hover:text-green-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Politique de confidentialité
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-200"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;