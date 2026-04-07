import { motion } from 'motion/react';

export const TechMarquee = () => {
  const techs = [
    "Python", "TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy",
    "SQL", "PostgreSQL", "MongoDB", "Flask", "Django", "React", "Next.js",
    "TypeScript", "Docker", "Git", "AWS", "GCP", "Tableau", "PowerBI"
  ];

  return (
    <div className="relative py-10 overflow-hidden border-y border-border bg-white/[0.02]">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex gap-12 items-center"
        >
          {techs.map((tech, idx) => (
            <span 
              key={idx} 
              className="text-2xl md:text-4xl font-display font-bold text-white/20 hover:text-accent transition-colors cursor-default uppercase tracking-tighter"
            >
              {tech}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {techs.map((tech, idx) => (
            <span 
              key={`dup-${idx}`} 
              className="text-2xl md:text-4xl font-display font-bold text-white/20 hover:text-accent transition-colors cursor-default uppercase tracking-tighter"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />
    </div>
  );
};
