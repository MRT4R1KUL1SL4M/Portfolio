import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Academic Supervisor",
      role: "Dhaka International University",
      content: "Tarikul shows exceptional dedication to his research. His ability to bridge the gap between theoretical ML and practical application is impressive.",
      avatar: "https://picsum.photos/seed/prof/100/100"
    },
    {
      name: "Project Collaborator",
      role: "Open Source Contributor",
      content: "Working with Tarikul on the Lost & Found platform was a great experience. He is a problem-solver who writes clean, efficient code.",
      avatar: "https://picsum.photos/seed/dev/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Endorsements</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 md:p-10 rounded-[2.5rem] border border-border relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-8 text-accent/10 w-20 h-20 -z-10" />
              
              <p className="text-lg text-white/90 italic mb-8 leading-relaxed">
                "{test.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/30">
                  <img src={test.avatar} alt={test.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-display text-white">{test.name}</h4>
                  <p className="text-xs text-text-secondary uppercase tracking-widest">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
