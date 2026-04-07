import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Mail, 
  Globe, 
  MessageSquare,
  Download,
  MapPin,
  Clock
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState, useEffect } from 'react';

export const Sidebar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: Globe, href: "#", label: "Website" },
    { icon: Github, href: "https://github.com/MRT4R1KUL1SL4M", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mrtarikulislam/", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com/MR.T4R1KUL", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/t4r1kul.1sl4m/", label: "Instagram" },
    { icon: MessageSquare, href: "https://wa.me/8801744231046", label: "WhatsApp" },
  ];

  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 w-72 h-[85vh] glass rounded-3xl flex-col items-center p-8 z-50"
    >
      <div className="flex flex-col items-center text-center w-full">
        <div className="relative group mb-6">
          <div className="absolute -inset-1 bg-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-border">
            <img 
              src="https://picsum.photos/seed/tarikul/400/400" 
              alt="Md. Tarikul Islam" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-[#0A0A0A] rounded-full" />
        </div>
        
        <h1 className="text-2xl font-display mb-1">Tarikul Islam</h1>
        <p className="text-sm text-text-secondary font-mono mb-6">mrtarikulislamtarek@gmail.com</p>

        <div className="space-y-2 w-full mb-8">
          <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] font-mono uppercase tracking-widest text-text-secondary">
            <span className="flex items-center gap-2"><MapPin size={12} className="text-accent" /> Location</span>
            <span className="text-white">Dhaka, BD</span>
          </div>
          <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] font-mono uppercase tracking-widest text-text-secondary">
            <span className="flex items-center gap-2"><Clock size={12} className="text-accent" /> Local Time</span>
            <span className="text-white">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {socialLinks.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, backgroundColor: 'var(--color-accent)', color: '#000' }}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary transition-colors"
            title={social.label}
          >
            <social.icon size={18} />
          </motion.a>
        ))}
      </div>

      <div className="mt-auto w-full space-y-3">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center w-full py-3 rounded-full accent-gradient text-black font-bold text-sm shadow-lg shadow-accent/20"
        >
          Get In Touch
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-border hover:bg-white/5 text-sm font-medium transition-colors"
        >
          <Download size={16} />
          Resume
        </motion.a>
      </div>
    </motion.aside>
  );
};
