// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { NavigationLink } from '../data/data';
import { NavLink } from 'react-router';
import { useState, useEffect } from 'react';
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  Menu,
  X
} from 'lucide-react';
import Button from '../ui/button/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 150
      }
    }
  };

  return (
    <motion.div 
      className=""
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      {/* Top Contact Bar */}
      <motion.div 
        className={`bg-black text-white text-sm px-6 py-3 transition-all duration-300 ${
          isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
        }`}
        variants={linkVariants}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-6">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Phone size={16} />
              <span>+229 67 65 97 17</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Mail size={16} />
              <span>contact@kijanilab.com</span>
            </motion.div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Twitter, href: "https://twitter.com/kijanilab" },
              { Icon: Facebook, href: "https://facebook.com/kijanilab" },
              { Icon: Instagram, href: "https://instagram.com/kijanilab" },
              { Icon: Linkedin, href: "https://linkedin.com/company/kijanilab" },
              { Icon: Youtube, href: "https://youtube.com/@kijanilab" }
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav 
        className={`backdrop-blur-md bg-white/90 shadow-lg transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
        variants={linkVariants}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NavLink 
                to="/" 
                className="text-2xl font-bold text-green-600 flex items-center gap-2"
              >
                <img src="/logo.png" alt="Logo de KijaniLab"  className='w-24 h-24 object-cover hidden md:block' /> <span className='md:hidden block'>KijaniLab</span>
              </NavLink>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Navigation Links */}
              <motion.div 
                className="flex items-center gap-1 bg-black/90 backdrop-blur-sm px-6 py-3 rounded-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {NavigationLink.map((nav, index) => (
                  <motion.div
                    key={index}
                    variants={linkVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavLink
                      to={nav.href}
                      className="text-white px-4 py-2 rounded-full transition-all duration-300 hover:bg-green-500 hover:text-white relative overflow-hidden group"
                    >
                      <span className="relative z-10">{nav.label}</span>
                      <motion.div
                        className="absolute inset-0 bg-green-500 rounded-full"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  as="a" 
                  href="#contact" 
                  variant="outline" 
                  className="backdrop-blur-sm  transition-all duration-300 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl"
                >
                  Travaillons ensemble
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg bg-black/10 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-4">
                {NavigationLink.map((nav, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={nav.href}
                      className="block py-2 text-gray-700 hover:text-green-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {nav.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 border-t border-gray-200/50"
                >
                  <Button 
                    as="a" 
                    href="#contact" 
                    variant="outline" 
                    className="w-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 py-3 rounded-full font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Travaillons ensemble
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  );
}