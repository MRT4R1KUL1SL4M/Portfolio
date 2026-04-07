import { motion, useScroll, useTransform } from 'motion/react';
import { Download, ChevronRight, MousePointer2, Database, BrainCircuit, Code2, Globe, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Complete", value: "100+" },
    { label: "Running Research", value: "1" },
    { label: "Completed Research", value: "0" },
  ];

  const techIcons = [
    { icon: Database, label: "SQL" },
    { icon: BrainCircuit, label: "ML" },
    { icon: Code2, label: "Python" },
    { icon: Globe, label: "Web" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 lg:pt-0 overflow-hidden">
      {/* Parallax Decorative Elements */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-1/4 -left-20 w-64 h-64 bg-accent/10 rounded-[3rem] blur-3xl -z-10"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl -z-10"
      />
      
      {/* Animated Shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[10%] w-12 h-12 border border-accent/20 rounded-xl hidden lg:block"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[5%] w-16 h-16 border border-blue-500/20 rounded-full hidden lg:block"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-accent/20 bg-accent/5 text-accent text-[10px] font-mono uppercase tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for new opportunities
          </span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tighter font-display leading-[0.9]"
        >
          Tarikul <span className="text-accent relative inline-block">
            Islam
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute -bottom-2 left-0 h-1 bg-accent/30 rounded-full"
            />
          </span>
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants}
          className="text-xl md:text-3xl text-white/80 mb-8 font-medium tracking-tight"
        >
          Architecting <span className="text-white">Data-Driven</span> Intelligence
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I transform complex datasets into high-impact narratives and build 
          the intelligent systems that power tomorrow's discoveries.
        </motion.p>

        {/* Tech Stack Quick View */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-8 mb-12"
        >
          {techIcons.map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-xl glass border border-border flex items-center justify-center text-text-secondary group-hover:text-accent group-hover:border-accent/50 transition-all duration-300">
                <tech.icon size={20} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-20">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0, 191, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-full accent-gradient text-black font-bold flex items-center gap-3 shadow-xl shadow-accent/20 transition-all"
          >
            Download Resume <Download size={20} />
          </motion.button>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-full border border-border font-bold flex items-center gap-3 transition-all"
          >
            Selected Works <ChevronRight size={20} />
          </motion.a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, borderColor: 'var(--color-accent)' }}
              className="glass p-6 rounded-3xl text-center border border-border transition-colors group"
            >
              <span className="block text-3xl md:text-4xl font-display text-accent mb-1 group-hover:scale-110 transition-transform">{stat.value}</span>
              <span className="text-[10px] text-text-secondary uppercase tracking-[0.2em]">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-secondary">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};
