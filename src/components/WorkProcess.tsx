import { motion } from 'motion/react';
import { Search, PenTool, Code, Rocket, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: "Discovery",
    description: "Understanding requirements, user needs, and project goals.",
    icon: Search,
    color: "text-blue-400"
  },
  {
    title: "Design",
    description: "Creating prototypes, wireframes, and visual concepts.",
    icon: PenTool,
    color: "text-green-400"
  },
  {
    title: "Development",
    description: "Writing clean, efficient, and scalable code.",
    icon: Code,
    color: "text-purple-400"
  },
  {
    title: "Deployment",
    description: "Testing, optimizing, and launching the final product.",
    icon: Rocket,
    color: "text-orange-400"
  }
];

export const WorkProcess = () => {
  return (
    <section id="process" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">My Work Process</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          A structured approach to building high-quality digital experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
        
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl border border-border group hover:border-accent/30 transition-all text-center relative z-10"
          >
            <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative">
              <step.icon size={28} className={step.color} />
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-black text-[10px] font-bold flex items-center justify-center">
                {idx + 1}
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{step.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
