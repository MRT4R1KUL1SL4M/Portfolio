import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">My Philosophy</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8 text-lg text-text-secondary leading-relaxed text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            To me, code is a language, data is a universe of stories, and research is the vessel for discovery. 
            My journey is a blend of disciplines: the structured logic of a Programmer, the user-centric 
            creativity of a Web Developer, and the insatiable curiosity of a Researcher.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            I don't just build applications; I architect experiences. I don't just analyze numbers; I uncover narratives. 
            My passion for Artificial Intelligence and Machine Learning is rooted in this philosophy.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            I see them as powerful tools to augment human intellect, to find clarity in complexity, and to build a 
            future where technology works in harmony with our aspirations. Every project is an opportunity to 
            learn, to create, and to make a tangible impact.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
