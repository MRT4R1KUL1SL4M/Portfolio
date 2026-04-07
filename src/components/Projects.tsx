import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Origins-Bangladesh",
      description: "A comprehensive platform for Origins Bangladesh, featuring modern web technologies and a seamless user experience for regional services.",
      tags: ["React", "Vite", "Tailwind CSS", "Node.js"],
      github: "https://github.com/MRT4R1KUL1SL4M/Origins-Bangladesh",
      demo: "https://originsbd.eu.cc/",
      image: "https://picsum.photos/seed/origins/800/600"
    },
    {
      title: "Lost & Found Platform",
      description: "A full-stack web application to help people report and find lost or found items, streamlining the recovery process.",
      tags: ["Flask", "Python", "MySQL", "HTML/CSS"],
      github: "https://github.com/MRT4R1KUL1SL4M/LostAndFound",
      demo: "https://lostandfound-zxx7.onrender.com",
      image: "https://picsum.photos/seed/lost/800/600"
    },
    {
      title: "Housing Price Prediction",
      description: "Developed a regression model to predict California housing prices. Involved data cleaning, feature engineering, and performance evaluation.",
      tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      github: "https://github.com/MRT4R1KUL1SL4M/ML-CalifroniaHousePrice",
      demo: "#",
      image: "https://picsum.photos/seed/house/800/600"
    },
    {
      title: "Event Management System",
      description: "A web-based platform for organizing, managing, and promoting events of various scales.",
      tags: ["Flask", "Python", "MySQL"],
      github: "https://github.com/MRT4R1KUL1SL4M/EventManagement",
      demo: "#",
      image: "https://picsum.photos/seed/event/800/600"
    },
    {
      title: "Blood Bank Management",
      description: "An application to manage donor information, blood inventory, and requests efficiently.",
      tags: ["Flask", "Python", "MySQL"],
      github: "https://github.com/MRT4R1KUL1SL4M/BloodBankManagement",
      demo: "#",
      image: "https://picsum.photos/seed/blood/800/600"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Selected Projects</h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass rounded-3xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} target="_blank" className="p-3 bg-accent text-black rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-text-secondary mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono uppercase tracking-widest py-1 px-2 rounded bg-white/5 border border-white/10 text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
