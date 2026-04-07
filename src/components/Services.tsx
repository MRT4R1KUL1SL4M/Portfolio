import { motion } from 'motion/react';
import { 
  BarChart3, 
  Globe2, 
  Cpu, 
  Search,
  Database,
  Layers
} from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Data Science & Analytics",
      description: "Transforming raw data into actionable insights using statistical modeling and advanced analytics techniques.",
      icon: BarChart3,
      color: "text-blue-400"
    },
    {
      title: "Machine Learning",
      description: "Developing and deploying predictive models, from regression and classification to deep learning architectures.",
      icon: Cpu,
      color: "text-purple-400"
    },
    {
      title: "Full-Stack Web Dev",
      description: "Building robust, scalable web applications with a focus on data-driven features and seamless user experiences.",
      icon: Globe2,
      color: "text-emerald-400"
    },
    {
      title: "Research & Strategy",
      description: "Conducting deep technical research and providing data-backed strategic recommendations for complex problems.",
      icon: Search,
      color: "text-orange-400"
    }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">What I Do</h2>
          <p className="text-text-secondary">Specialized services tailored to solve modern technical challenges.</p>
          <div className="w-20 h-1 bg-accent rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-[2rem] border border-border hover:border-accent/30 transition-all duration-500 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.color}`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl mb-4">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
