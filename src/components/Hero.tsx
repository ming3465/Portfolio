import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { facts, profile } from '../data/profile';
import Resume from '../public/Resume.pdf';

const Hero = () => (
  <motion.section
    id="home"
    className="pt-16"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* Status line */}
    <div className="border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-gray-400">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span>
            <span className="text-gray-200">{profile.name}</span> / {profile.location}
          </span>
          <span>Updated {profile.updated}</span>
        </div>
        <span className="flex items-center gap-2 text-gray-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          {profile.availability}
        </span>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
      <div>
        <motion.p
          className="font-mono text-xs uppercase tracking-widest text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {profile.role}
        </motion.p>
        <motion.h1
          className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {profile.summary}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-blue-500/40 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 transition-colors"
          >
            Selected work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-gray-800 text-gray-300 hover:text-white hover:border-gray-600 transition-colors"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-gray-800 text-gray-300 hover:text-white hover:border-gray-600 transition-colors"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </motion.div>
      </div>

      <motion.dl
        className="rounded-lg border border-gray-800 bg-gray-900/60 divide-y divide-gray-800"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {facts.map((fact) => (
          <div key={fact.label} className="px-6 py-4">
            <dt className="font-mono text-xs uppercase tracking-widest text-gray-400">{fact.label}</dt>
            <dd className="mt-1 text-gray-100">{fact.value}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </motion.section>
);

export default Hero;
