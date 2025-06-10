
import { motion } from 'framer-motion';
import { Bot, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#161623] text-white px-4">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="mb-8"
        >
          <Bot className="w-24 h-24 mx-auto text-cyan-400 mb-4" />
        </motion.div>
        
        <motion.h1 
          className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          404
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 mb-8 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          🧠 Oops! The AI couldn't find that page. Try heading back to the homepage or ping the model again.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link 
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full hover:scale-105 hover:shadow-[0_0_20px_#fb7185] transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Back to Homepage
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
