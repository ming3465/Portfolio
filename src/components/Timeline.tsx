import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy } from 'lucide-react';

const Timeline = () => {
  const experiences = [
    {
      type: 'education',
      title: 'High School - Natural Science',
      organization: 'SMAK 1 BPK PENABUR Jakarta',
      period: '2022 - 2025',
      description: 'Focusing on Natural Science curriculum with emphasis on mathematics and computer science.',
    },
    {
      type: 'education',
      title: 'Junior High School - Bilingual Class',
      organization: 'SMPK 7 BPK PENABUR Jakarta',
      period: '2019 - 2022',
      description: 'Participated in bilingual program with English Based curriculum.',
    },
    {
      type: 'experience',
      title: 'Competitive Programmer',
      organization: 'Various Competitions',
      period: 'Nov 2024 - Present',
      description: 'Actively participating in competitive programming contests and algorithmic problem-solving competitions.',
    },
  ];

  const achievements = [
    {
      title: 'Silver Medal - International Junior Cybersecurity Olympiad',
      organization: 'National University of Singapore, SIMCC',
      date: 'Dec 2024',
    },
    {
      title: 'Bronze Medal - International Junior Mathematical Olympiad',
      organization: 'SIMCC',
      date: 'Dec 2024',
    },
    {
      title: 'Silver Medal - South East Asian School Mathematical Olympiad',
      organization: 'SASMO',
      date: 'March 2024',
    },
    {
      title: 'Silver Medal (2nd Place) - IMPACT 4.0',
      organization: 'Bandung Institute of Technology - ITB',
      date: 'July 2024',
    },
    {
      title: 'Gold Medal (2nd Place) - CHIPS',
      organization: 'Parahyangan University - UNPAR',
      date: 'Sep 2024',
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="h-5 w-5 text-blue-600" />;
      case 'achievement':
        return <Trophy className="h-5 w-5 text-blue-600" />;
      default:
        return <Briefcase className="h-5 w-5 text-blue-600" />;
    }
  };

  return (
    <div className="relative">
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Education & Experience</h3>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="mb-8 flex gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-center">
              <motion.div 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {getIcon(exp.type)}
              </motion.div>
              {index !== experiences.length - 1 && (
                <motion.div 
                  className="h-full w-0.5 bg-blue-100"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              )}
            </div>
            <motion.div 
              className="flex flex-col pb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
              <span className="text-sm font-semibold text-blue-600">{exp.organization}</span>
              <span className="text-sm text-gray-500">{exp.period}</span>
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Achievements & Honors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-3">
                <Trophy className="h-6 w-6 text-yellow-500 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">{achievement.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{achievement.organization}</p>
              <p className="text-sm text-gray-500 mt-1">{achievement.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;