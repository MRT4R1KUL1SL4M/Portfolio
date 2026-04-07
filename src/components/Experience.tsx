import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Data Entry Operator",
    company: "Intelligent Image Management Limited",
    period: "2025 - 2025",
    location: "Dhaka, Bangladesh",
    description: "Managed large-scale data entry projects with high accuracy and efficiency. Ensured data integrity and quality control for international clients.",
    skills: ["Data Management", "Quality Assurance", "Excel", "Typing Speed"]
  },
  {
    title: "Coordinator",
    company: "Academic and Admission Pathshala",
    period: "2025 - 2025",
    location: "Remote",
    description: "Coordinated online educational programs and student admissions. Managed remote teams and streamlined communication between students and instructors.",
    skills: ["Coordination", "Remote Management", "Communication", "LMS"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Professional Journey</h2>
        <div className="w-20 h-1 bg-accent rounded-full" />
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl border border-border relative group hover:border-accent/30 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{exp.title}</h3>
                <div className="flex items-center gap-2 text-accent font-medium mt-1">
                  <Briefcase size={16} />
                  <span>{exp.company}</span>
                </div>
              </div>
              <div className="flex flex-col md:items-end gap-2 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
