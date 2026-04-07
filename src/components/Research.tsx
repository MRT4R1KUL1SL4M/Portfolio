import { motion } from 'motion/react';
import { FileText, ExternalLink, BookOpen, Presentation } from 'lucide-react';

export const Research = () => {
  const papers = [
    {
      type: "Journal Paper",
      title: "A Robust Framework for Sentiment-Aware Depression Detection with Real-Time Web Deployment",
      description: "Proposed a novel framework for detecting depression through sentiment analysis, featuring a real-time web interface for immediate assessment and support.",
      status: "Submitted",
      year: "2026",
      icon: BookOpen,
      link: "#"
    },
    {
      type: "Conference Paper",
      title: "Automated Detection of Fake Job Advertisements in Bangladesh via Machine Learning Approaches",
      description: "Developed a machine learning-based system to identify and filter fraudulent job postings, specifically tailored for the Bangladeshi job market context.",
      status: "Submitted",
      year: "2026",
      icon: Presentation,
      link: "#"
    }
  ];

  return (
    <section id="research" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Publications & Research</h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {papers.map((paper, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 md:p-10 rounded-3xl border border-border group hover:border-accent/30 transition-all flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <paper.icon size={20} />
                </div>
                <div>
                  <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-mono uppercase tracking-widest block mb-1">
                    {paper.type}
                  </span>
                  <span className="text-text-secondary text-xs font-mono">{paper.status} • {paper.year}</span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight group-hover:text-accent transition-colors">
                {paper.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                {paper.description}
              </p>
              
              <motion.a
                href={paper.link}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-white/5 text-sm font-medium transition-colors"
              >
                View Publication <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
