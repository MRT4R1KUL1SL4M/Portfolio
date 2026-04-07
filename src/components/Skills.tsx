import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Terminal, 
  LineChart,
  BrainCircuit,
  Cloud
} from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "SQL", "JavaScript", "Java", "C/C++", "R", "Bash"]
    },
    {
      title: "Web & Databases",
      icon: Database,
      skills: ["Flask", "Django", "React", "MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Data Science & ML",
      icon: BrainCircuit,
      skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "PyTorch"]
    },
    {
      title: "Developer Tools",
      icon: Terminal,
      skills: ["Git", "GitHub", "Docker", "Jupyter", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border border-border hover:border-accent/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <cat.icon size={24} />
              </div>
              <h3 className="text-xl mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="text-sm text-text-secondary">
                    {skill}{sIdx !== cat.skills.length - 1 ? " •" : ""}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 glass p-8 rounded-3xl border border-accent/20 bg-accent/5"
        >
          <div className="flex items-center gap-4 mb-6">
            <Rocket className="text-accent" />
            <h3 className="text-xl">Currently Exploring</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {["PyTorch & Deep Learning", "MLOps with Docker", "Advanced SQL", "Cloud Platforms (AWS/GCP)"].map((item, idx) => (
              <span key={idx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Rocket = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/>
    <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/>
  </svg>
);
