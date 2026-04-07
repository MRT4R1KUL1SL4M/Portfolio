import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "Dhaka International University",
      period: "2022 - 2026 (Expected)",
      achievements: [
        "Core Coursework: Data Structures, Algorithms, AI & Machine Learning",
        "Key Projects: Movie Recommendation System, Lost & Found Platform",
        "Active member of CSE Volunteer Club & DIU Programming Club"
      ]
    },
    {
      degree: "HSC (Science)",
      institution: "Cantonment Public School and College, Lalmonirhat",
      period: "2021",
      achievements: [
        "Participated in National Science Fair",
        "Focus on Renewable Energy projects"
      ]
    },
    {
      degree: "SSC (Science)",
      institution: "Khamar Dashalia Adarsha High School",
      period: "2019",
      achievements: [
        "Active member of National Scouting Organization",
        "Achieved leadership ranks in scouting"
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Academic Journey</h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 border-l border-border"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-[#0A0A0A]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h3 className="text-2xl font-display">{edu.degree}</h3>
                <span className="flex items-center gap-2 text-sm font-mono text-accent">
                  <Calendar size={14} /> {edu.period}
                </span>
              </div>
              
              <p className="text-lg text-white/80 mb-6">{edu.institution}</p>
              
              <ul className="space-y-3">
                {edu.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-3 text-text-secondary text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {ach}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
