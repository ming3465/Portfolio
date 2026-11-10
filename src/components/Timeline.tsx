import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, HeartHandshake, Trophy, type LucideIcon } from 'lucide-react';
import { achievements, education, experiences, type EntryType, type TimelineEntry } from '../data/timeline';

const icons: Record<EntryType, LucideIcon> = {
  work: Briefcase,
  volunteer: HeartHandshake,
  competition: Trophy,
  education: GraduationCap,
};

type TimelineListProps = {
  heading: string;
  entries: TimelineEntry[];
};

const TimelineList = ({ heading, entries }: TimelineListProps) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold text-gray-100 mb-8">{heading}</h3>
    {entries.map((entry, index) => {
      const Icon = icons[entry.type];
      return (
        <motion.div
          key={`${entry.organization}-${entry.title}`}
          className="mb-8 flex gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 ring-1 ring-blue-500/20"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="h-5 w-5 text-blue-400" />
            </motion.div>
            {index !== entries.length - 1 && (
              <motion.div
                className="h-full w-0.5 bg-gray-800"
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
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-gray-100">{entry.title}</h4>
            <span className="text-sm font-semibold text-blue-400">{entry.organization}</span>
            {entry.period && <span className="text-sm text-gray-400">{entry.period}</span>}
            {entry.tags && (
              <div className="mt-2 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-xs bg-blue-500/10 text-blue-300 ring-1 ring-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {entry.description && <p className="mt-2 text-gray-400">{entry.description}</p>}
            {entry.highlights && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-400">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </motion.div>
        </motion.div>
      );
    })}
  </div>
);

const Timeline = () => (
  <div className="relative">
    <TimelineList heading="Experience" entries={experiences} />
    <TimelineList heading="Education" entries={education} />

    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-100 mb-8">Achievements & Honors</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500/40 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center">
              <Trophy className="h-6 w-6 shrink-0 text-yellow-400 mr-3" />
              <h4 className="text-lg font-semibold text-gray-100">{achievement.title}</h4>
            </div>
            {achievement.organization && (
              <p className="mt-3 text-sm text-gray-400">{achievement.organization}</p>
            )}
            {achievement.date && <p className="text-sm text-gray-400 mt-1">{achievement.date}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Timeline;
