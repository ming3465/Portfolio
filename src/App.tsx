import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import { projects, hobbies } from './data/projects';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-gray-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-100">About me</h2>
            <p className="mt-4 text-lg text-gray-400">
              Hi, My name is Sutolimin Widjaja. I'm usually called "Ming". My journey in Software Development began when I was 15 y.o . Currently I'm a Software Engineering Freshman at SMU with strong interest in Web Development, AI and
              Competitive Programming.
            </p>
            <p className="mt-4 text-lg text-gray-400">
              Email : sutolimin.45@gmail.com
            </p>
            <p className="mt-4 text-lg text-gray-400">
               Phone : +65 8365 1042
            </p>
            <motion.div
              className="mt-6 flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a href="https://github.com/ming3465" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-10 w-10" />
              </a>
              <a href="https://linkedin.com/in/sutolimin-widjaja" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-10 w-10" />
              </a>
              <a href="https://www.instagram.com/999ming_/" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-10 w-10" />
              </a>
              <a href="mailto:sutolimin.45@gmail.com" aria-label="Email" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-10 w-10" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        id="experience"
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Timeline />
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 bg-gray-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-gray-100 mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <ProjectsSection items={projects} />
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-gray-100 mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h2>
          <SkillsSection />
        </div>
      </motion.section>

      {/* Hobbies Section */}
      <motion.section
        id="hobbies"
        className="py-20 bg-gray-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-gray-100 mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Hobbies
          </motion.h2>
          <ProjectsSection items={hobbies} />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              className="text-3xl font-bold text-gray-100"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.h2>
            <motion.a
              href="mailto:sutolimin.45@gmail.com"
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>

          </div>
        </div>
      </motion.section>
      <Analytics/>
    </div>
  );
}

export default App;
