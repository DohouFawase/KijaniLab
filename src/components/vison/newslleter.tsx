import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';

const NewsletterCard = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        className="relative max-w-md w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute -top-4 -right-4 w-24 h-24 opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-30"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Main card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 borderrelative overflow-hidden w-full"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Header with icon */}
          <div className="text-center mb-6">
           
            
            <motion.h2 
              className="text-2xl font-bold text-gray-800 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Newsletter KijaniLab
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 text-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Restez informé des dernières innovations en agriculture digitale et recevez nos conseils exclusifs 🌱
            </motion.p>
          </div>

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                animate={{ 
                  scale: email ? [1, 1.1, 1] : 1,
                  color: email ? "#10B981" : "#9CA3AF"
                }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="h-5 w-5" />
              </motion.div>
              
              <input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-200 text-gray-800"
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={isLoading || isSubmitted}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
              whileHover={!isLoading && !isSubmitted ? { scale: 1.02 } : {}}
              whileTap={!isLoading && !isSubmitted ? { scale: 0.98 } : {}}
              animate={isSubmitted ? { 
                background: "linear-gradient(to right, #10B981, #059669)" 
              } : {}}
            >
              {isLoading ? (
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : isSubmitted ? (
                <motion.div
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>Merci ! 🎉</span>
                </motion.div>
              ) : (
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span>S'abonner</span>
                  <Send className="h-4 w-4" />
                </motion.div>
              )}
            </motion.button>
          </motion.form>

        

          {/* Floating accent */}
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Success message overlay */}
        {isSubmitted && (
          <motion.div
            className="absolute inset-0 bg-green-50 bg-opacity-90 rounded-2xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 0.8 }}
              >
                <CheckCircle className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Inscription réussie !
              </h3>
              <p className="text-sm text-green-600">
                Vous recevrez bientôt notre newsletter
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default NewsletterCard;