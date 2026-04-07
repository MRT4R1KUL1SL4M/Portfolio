import { Sidebar } from './components/Sidebar';
import { Navigation } from './components/Navigation';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Research } from './components/Research';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { GithubStats } from './components/GithubStats';
import { TechMarquee } from './components/TechMarquee';
import { CustomCursor } from './components/CustomCursor';
import { WorkProcess } from './components/WorkProcess';
import { Learning } from './components/Learning';
import { Certificates } from './components/Certificates';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';
import { Mail, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-black">
      <CustomCursor />
      <Background />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      <Sidebar />
      <Navigation />

      <main className="lg:ml-[340px] lg:mr-[100px]">
        <Hero />
        <TechMarquee />
        
        <div className="max-w-5xl mx-auto px-6 py-20 space-y-32">
          <About />
          <Services />
          <WorkProcess />
          <Experience />
          <Research />
          <Projects />
          <GithubStats />
          <Education />
          <Certificates />
          <Skills />
          <Testimonials />
          <Learning />

          <section id="cta" className="py-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[3rem] border border-accent/20 bg-accent/5 text-center relative overflow-hidden group"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-500" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors duration-500" />
              
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to start a project?</h2>
              <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
                I'm currently available for freelance work and full-time opportunities. 
                Let's build something amazing together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full accent-gradient text-black font-bold shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all"
              >
                Let's Talk <Mail size={18} />
              </motion.button>
            </motion.div>
          </section>

          <Contact />
        </div>

        <Footer />
      </main>

      {/* Scroll to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all z-40 shadow-xl"
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
}
