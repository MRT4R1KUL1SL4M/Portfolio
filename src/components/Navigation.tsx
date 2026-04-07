import { motion } from 'motion/react';
import { 
  Home, 
  User, 
  Briefcase, 
  FileText, 
  Lightbulb, 
  GraduationCap, 
  Award, 
  Wrench, 
  Rocket, 
  Mail,
  Github,
  MessageSquare,
  LayoutGrid
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState, useEffect, MouseEvent } from 'react';
import { Magnetic } from './Magnetic';

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'services', icon: LayoutGrid, label: 'Services' },
    { id: 'process', icon: Rocket, label: 'Process' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'research', icon: FileText, label: 'Research' },
    { id: 'projects', icon: Lightbulb, label: 'Projects' },
    { id: 'github', icon: Github, label: 'GitHub' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'certificates', icon: Award, label: 'Certificates' },
    { id: 'skills', icon: Wrench, label: 'Skills' },
    { id: 'testimonials', icon: MessageSquare, label: 'Endorsements' },
    { id: 'learning', icon: Rocket, label: 'Learning' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Special case for bottom of page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection(navItems[navItems.length - 1].id);
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 glass rounded-full py-6 px-2 flex flex-col gap-2 z-50 max-h-[85vh] overflow-y-auto scrollbar-hide"
    >
      {navItems.map((item) => (
        <div key={item.id}>
          <Magnetic strength={0.3}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group relative",
                activeSection === item.id 
                  ? "bg-accent text-black" 
                  : "text-text-secondary hover:text-white hover:bg-white/10"
              )}
            >
              <item.icon size={20} />
              <span className="absolute right-full mr-4 px-2 py-1 rounded bg-surface border border-border text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {item.label}
              </span>
            </a>
          </Magnetic>
        </div>
      ))}
    </motion.nav>
  );
};
