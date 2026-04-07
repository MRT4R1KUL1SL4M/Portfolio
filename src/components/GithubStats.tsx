import { motion } from 'motion/react';
import { Github, Star, GitFork, Activity } from 'lucide-react';

export const GithubStats = () => {
  const username = "MRT4R1KUL1SL4M";

  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Open Source Activity</h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* GitHub Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-border flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-accent/20 mb-4">
              <img 
                src={`https://github.com/${username}.png`} 
                alt="GitHub Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl mb-1">@{username}</h3>
            <p className="text-sm text-text-secondary mb-6">Passionate Developer & Researcher</p>
            
            <a 
              href={`https://github.com/${username}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 rounded-full border border-border hover:bg-white/5 transition-colors text-sm"
            >
              <Github size={16} /> View Profile
            </a>
          </motion.div>

          {/* Stats Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-3xl border border-border flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                <Star size={24} />
              </div>
              <div>
                <span className="block text-2xl font-display">15+</span>
                <span className="text-xs text-text-secondary uppercase tracking-widest">Total Stars</span>
              </div>
            </div>

            <div className="glass p-6 rounded-3xl border border-border flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <GitFork size={24} />
              </div>
              <div>
                <span className="block text-2xl font-display">10+</span>
                <span className="text-xs text-text-secondary uppercase tracking-widest">Forks Contributed</span>
              </div>
            </div>

            <div className="sm:col-span-2 glass p-6 rounded-3xl border border-border overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <Activity size={18} className="text-accent" />
                <h4 className="text-sm font-mono uppercase tracking-widest">GitHub Contribution Graph</h4>
              </div>
              <img 
                src={`https://ghchart.rshah.org/00BFFF/${username}`} 
                alt="GitHub Contributions" 
                className="w-full h-auto filter invert brightness-150"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
