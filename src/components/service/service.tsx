import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { services } from '../data/data';

export default function ServicesSection() {
  const [selected, setSelected] = useState(1);
  const selectedService = services.find(service => service.id === selected);

  // Variants pour les animations avec typage correct
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1], // easeOut bezier
        staggerChildren: 0.2
      }
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  const serviceItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    hover: {
      x: 8,
      transition: {
        duration: 0.2,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const contentVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      x: -30,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 1, 1]
      }
    }
  };

  const tagVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  return (
    <motion.section 
      className="pt-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Effet de fond subtil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(34,197,94,0.1),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(101,163,13,0.1),_transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8 leading-snug text-slate-800"
          variants={childVariants}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block"
          >
            Solutions innovantes pour l'agriculture moderne{' '}
          </motion.span>
          <motion.span 
            className="italic text-green-600 block mt-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            (technologie & durabilité)
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block mt-4 text-lg font-normal text-slate-600"
          >
            Nous offrons un panel de services technologiques et stratégiques conçus pour accompagner les acteurs du secteur agricole dans leur transformation digitale,
            leur professionnalisation et leur croissance durable. Nos prestations sont modulables et s’adaptent aux besoins spécifiques de chaque client.
          </motion.span>
        </motion.h2>
        
        <motion.div 
          className="border-t border-green-200 pt-8 grid md:grid-cols-3 gap-8 items-start"
          variants={childVariants}
        >
          {/* Liste des services */}
          <motion.div variants={childVariants} className="space-y-6">
            <motion.h3 
              className="uppercase font-semibold tracking-wider text-sm mb-4 text-green-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Services →
            </motion.h3>
            <motion.ul 
              className="space-y-3"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.9
                  }
                }
              }}
            >
              {services.map((service) => (
                <motion.li
                  key={service.id}
                  onClick={() => setSelected(service.id)}
                  className={`cursor-pointer transition-all duration-300 font-semibold text-sm p-3 rounded-lg border-2 ${
                    selected === service.id 
                      ? 'text-white bg-green-600 border-green-600 shadow-lg shadow-green-600/25' 
                      : 'text-slate-700 bg-white border-green-200 hover:border-green-400 hover:text-green-700 hover:shadow-md'
                  }`}
                  variants={serviceItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  layout
                >
                  <motion.div className="flex items-center justify-between">
                    <motion.span
                      animate={{
                        fontWeight: selected === service.id ? 700 : 600,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.titre}
                    </motion.span>
                    {selected === service.id && (
                      <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                        layoutId="selectedIndicator"
                      />
                    )}
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Détails du service sélectionné */}
          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              {selectedService ? (
                <motion.div
                  key={selectedService.id}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6 bg-white p-6 rounded-xl shadow-lg border border-green-100"
                >
                  <motion.p 
                    className="text-lg font-semibold leading-relaxed text-slate-800"
                    variants={listItemVariants}
                  >
                    {selectedService.description}
                  </motion.p>
                  
                  <motion.div variants={listItemVariants}>
                    <motion.p 
                      className="uppercase text-sm text-green-700 font-semibold mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      Public cible :
                    </motion.p>
                    <motion.ul 
                      className="space-y-2"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                    >
                      {selectedService.public_cible?.map((target, index) => (
                        <motion.li 
                          key={index}
                          variants={listItemVariants}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center text-sm text-slate-600 bg-green-50 p-2 rounded-md"
                        >
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                          {target}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                  
                  <motion.div variants={listItemVariants}>
                    <motion.p 
                      className="uppercase text-sm text-green-700 font-semibold mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      Livrables :
                    </motion.p>
                    <motion.ul 
                      className="space-y-2"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                    >
                      {selectedService.livrables?.map((deliverable, index) => (
                        <motion.li 
                          key={index}
                          variants={listItemVariants}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center text-sm text-slate-600 bg-lime-50 p-2 rounded-md"
                        >
                          <span className="w-2 h-2 bg-lime-500 rounded-full mr-3 flex-shrink-0"></span>
                          {deliverable}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                  
                  {/* Tags */}
                  <motion.div 
                    className="mt-6"
                    variants={listItemVariants}
                  >
                    <motion.p 
                      className="uppercase text-sm text-green-700 font-semibold mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      Tags :
                    </motion.p>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.2
                          }
                        }
                      }}
                    >
                      {selectedService.tags?.map((tag, index) => (
                        <motion.span
                          key={index}
                          className="bg-gradient-to-r from-green-600 to-lime-600 text-white px-4 py-2 rounded-full text-xs font-medium shadow-md hover:shadow-lg"
                          variants={tagVariants}
                          whileHover="hover"
                          whileTap={{ scale: 0.95 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div 
                  className="text-slate-500 bg-white p-8 rounded-xl shadow-lg border border-green-100 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg">Sélectionnez un service pour voir les détails</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}