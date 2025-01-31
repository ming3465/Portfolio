import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Terminal } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Core Languages',
      icon: <Terminal className="h-6 w-6" />,
      skills: ['C++', 'Python', 'Data Structures', 'Algorithms'],
      description: 'Primary languages used for competitive programming and problem solving'
    },
    {
      title: 'Development',
      icon: <Code2 className="h-6 w-6" />,
      skills: ['React', 'TypeScript', 'Git', 'HTML/CSS'],
      description: 'Tools and technologies for web development'
    },
    {
      title: 'Current Focus',
      icon: <Globe className="h-6 w-6" />,
      skills: ['Competitive Programming', 'Cybersecurity', 'Mathematics', 'Cryptography'],
      description: 'Areas of expertise and competition focus'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {skillCategories.map((category, index) => (
        <motion.div
          key={index}
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          variants={item}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center mb-4">
            <motion.div 
              className="p-2 bg-blue-100 rounded-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {category.icon}
            </motion.div>
            <h3 className="ml-3 text-lg font-semibold">{category.title}</h3>
          </div>
          <p className="text-gray-600 mb-4">{category.description}</p>
          <ul className="space-y-2">
            {category.skills.map((skill, skillIndex) => (
              <motion.li 
                key={skillIndex} 
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: skillIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-600">{skill}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsSection;