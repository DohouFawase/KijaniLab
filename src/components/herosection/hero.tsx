// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { testimonialsData } from "../data/data";
import Button from "../ui/button/button";
import { Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.div
          key={star}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: star * 0.1 }}
        >
          <Star
            className={`w-5 h-5 ${star <= rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
              }`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default function HeroSection() {
  const testimonialsRef = useRef(null);
  const isInView = useInView(testimonialsRef, { once: true, margin: "-50px" });

  return (
    <div className="farm-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col justify-center min-h-screen py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Images d'avatars */}
          <motion.div 
            className="flex flex-col"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center -space-x-2 mb-4">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1494790108755-2616b612b169?w=100&h=100&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              ].map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  alt="Client satisfait"
                  className="w-12 h-12 rounded-full border-2 border-white shadow-lg object-cover"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: 0.4 + index * 0.1,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                />
              ))}
              <motion.div
                className="ml-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <span className="text-white font-bold text-xl">200 +</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Titre et description */}
          <motion.div 
            className="max-w-4xl mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              🌿 KijaniLab – L'Agriculture Digitale au Service d'un Avenir Durable
            </h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Nous révolutionnons l'agriculture africaine avec des solutions technologiques,
              des formations Agritech et un accompagnement sur mesure. Ensemble, construisons
              une agriculture plus productive, inclusive et résiliente face aux défis climatiques.
            </motion.p>
          </motion.div>

          {/* Boutons d'action */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button as="a" href="#" variant="outline">
                Découvrir nos solutions
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button as="a" href="#" variant="outline">
                Contactez-nous
              </Button>
            </motion.div>
          </motion.div>

          {/* Témoignages */}
          <motion.div 
            ref={testimonialsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {testimonialsData.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="p-6 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <StarRating rating={testimonial.rating} />
                </motion.div>
                
                <p className="text-white leading-relaxed">
                  {testimonial.comment}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}