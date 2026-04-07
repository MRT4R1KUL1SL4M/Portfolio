import { motion } from 'motion/react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const certificates = [
  {
    title: "Volunteer Service Award",
    issuer: "Community Service Foundation",
    date: "2023",
    icon: ShieldCheck,
    link: "#"
  },
  {
    title: "Scouting Leadership",
    issuer: "National Scouting Organization",
    date: "2022",
    icon: Award,
    link: "#"
  },
  {
    title: "Advanced Data Science",
    issuer: "Coursera / IBM",
    date: "2021",
    icon: ShieldCheck,
    link: "#"
  }
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Certificates & Awards</h2>
        <div className="w-20 h-1 bg-accent rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl border border-border group hover:border-accent/30 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-12 -mt-12 group-hover:bg-accent/10 transition-colors" />
            
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <cert.icon size={24} />
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{cert.title}</h3>
            <p className="text-text-secondary text-sm mb-6">{cert.issuer} • {cert.date}</p>

            <a 
              href={cert.link}
              className="inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest hover:gap-3 transition-all"
            >
              View Credential <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
