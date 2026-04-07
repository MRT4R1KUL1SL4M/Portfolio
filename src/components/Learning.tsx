import { motion } from 'motion/react';
import { Rocket, Sparkles, Code, Database } from 'lucide-react';

const learningItems = [
  {
    title: "PyTorch & Deep Learning",
    description: "Deepening my expertise in neural networks and computer vision.",
    icon: Sparkles,
    color: "text-blue-400"
  },
  {
    title: "MLOps with Docker",
    description: "Learning to deploy and manage machine learning models at scale.",
    icon: Database,
    color: "text-green-400"
  },
  {
    title: "Advanced SQL",
    description: "Optimizing queries and managing large-scale data warehouses.",
    icon: Code,
    color: "text-purple-400"
  },
  {
    title: "Cloud Platforms",
    description: "Exploring AWS and Google Cloud for data-driven applications.",
    icon: Rocket,
    color: "text-orange-400"
  }
];

export const Learning = () => {
  return (
    <section id="learning" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">What I'm Exploring</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          My passion for technology drives me to constantly learn and grow. 
          Currently, I am deepening my expertise in cutting-edge fields.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {learningItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl border border-border group hover:border-accent/30 transition-all text-center relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <item.icon size={24} className={item.color} />
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
