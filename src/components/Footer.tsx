import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 px-6 border-t border-border/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-white/90 font-display text-lg tracking-tight">
            &copy; {currentYear} <span className="text-accent font-bold">Md. Tarikul Islam</span>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2.5 text-text-secondary text-sm font-medium">
            <span>Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart size={16} className="text-red-500 fill-red-500" />
            </motion.div>
            <span>using <span className="text-white/80">React</span> & <span className="text-white/80">Framer Motion</span></span>
          </div>
        </motion.div>

        <div className="w-12 h-1 bg-border/30 rounded-full" />
        
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-secondary/60">
          Designed with passion • Engineered with precision
        </p>
      </div>
    </footer>
  );
};
