import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-text-secondary">Have a project in mind or just want to say hi?</p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-[2.5rem] border border-border"
        >
          <form 
            action="https://formspree.io/f/xdkdyynl" 
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-2">
              <label className="text-sm font-mono text-text-secondary uppercase tracking-widest ml-1">Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="John Doe"
                required
                className="w-full bg-white/5 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-mono text-text-secondary uppercase tracking-widest ml-1">Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="john@example.com"
                required
                className="w-full bg-white/5 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-mono text-text-secondary uppercase tracking-widest ml-1">Message</label>
              <textarea 
                name="message" 
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="w-full bg-white/5 border border-border rounded-3xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <div className="md:col-span-2 flex justify-center mt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-12 py-4 rounded-full accent-gradient text-black font-bold flex items-center gap-2 shadow-xl shadow-accent/20"
              >
                Send Message <Send size={18} />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
