export type EntryType = 'work' | 'volunteer' | 'competition' | 'education';

export interface TimelineEntry {
  type: EntryType;
  title: string;
  organization: string;
  period?: string;
  description?: string;
  tags?: string[];
  highlights?: string[];
}

export interface Achievement {
  title: string;
  organization?: string;
  date?: string;
}

export const experiences: TimelineEntry[] = [
  {
    type: 'work',
    title: 'Teaching Assistant (Algorithms & Programming)',
    organization: 'Singapore Management University',
    period: 'Aug 2026 - Present',
    highlights: [
      'Teach weekly lab sessions for 35 students on recursion, sorting, complexity analysis, and graph theory, walking through problem-solving approaches.',
    ],
  },
  {
    type: 'work',
    title: 'Undergraduate Researcher',
    organization: 'Algoverse',
    period: 'Jul 2026 - Oct 2026',
    tags: ['Machine Learning', 'NLP', 'LLM Evaluation'],
    highlights: [
      'Built an LLM-as-judge pipeline to evaluate 5 compression policies for multi-agent LLM memory on a 30,000-message benchmark.',
      'Showed that keeping the right evidence at a 25% memory budget restored accuracy by up to 75pp (p ≤ 0.001).',
    ],
  },
  {
    type: 'work',
    title: 'Machine Learning Intern',
    organization: 'PreciX',
    period: 'Jul 2026 - Aug 2026',
    tags: ['Python', 'PyTorch', 'scikit-learn'],
    highlights: [
      'Engineered preprocessing and validation pipelines for knee-kinematics time-series data from multi-sensor wearables.',
      'Integrated Prefect to monitor pipeline runs, exporting metrics via Prometheus to Grafana dashboards for observability.',
      'Trained and evaluated machine learning models to identify biomechanical markers of ACL injury and track patient recovery.',
    ],
  },
  {
    type: 'work',
    title: 'Machine Learning Intern',
    organization: 'FlyRank AI',
    period: 'Jul 2026 - Aug 2026',
    tags: ['Python', 'PyTorch'],
    highlights: [
      'Built a PyTorch model forecasting 2026 FIFA World Cup match outcomes from engineered team- and match-level features.',
      'Developed reproducible preprocessing, training, and evaluation pipelines for a 12-week ML capstone.',
    ],
  },
  {
    type: 'work',
    title: 'Software Engineering Intern',
    organization: 'Columns',
    period: 'May 2026 - Jul 2026',
    highlights: [
      'Shipped features to the production web, iOS, and Android clients of columns.app, supporting 10,000+ concurrent users across live App Store and Google Play releases.',
      'Resolved production crashes and user-facing defects across React web and mobile clients by triaging Sentry error reports, reproducing root causes, and verifying fixes with regression testing.',
      'Reduced release regressions by validating every build through GitHub Actions CI while shipping UI and workflow improvements.',
    ],
  },
  {
    type: 'volunteer',
    title: 'CA Mentor',
    organization: 'SMU Ellipsis',
  },
  {
    type: 'competition',
    title: 'Competitive Programmer',
    organization: 'Various Competitions',
    period: 'Nov 2024 - Present',
    description: 'Actively participating in competitive programming contests and algorithmic problem-solving competitions.',
    highlights: [
      'Codeforces: M.inggg (Specialist, rated 1500+)',
      'LeetCode: MikasaN (rated 1850+)',
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    type: 'education',
    title: 'SMU - Software Engineering',
    organization: 'Singapore Management University',
    period: 'Aug 2025 - May 2028 (Expected)',
    description: 'B.S. in Software Engineering (Work-Study Degree)',
  },
  {
    type: 'education',
    title: 'High School - Natural Science',
    organization: 'SMAK 1 BPK PENABUR Jakarta',
    period: '2022 - 2025',
    description: 'Natural Science curriculum',
  },
];

export const achievements: Achievement[] = [
  {
    title: '3rd Place - Tencent Cloud "Age Well" Hackathon',
    organization: 'Tencent Cloud',
  },
  {
    title: '3rd Place - GMI x Z.ai Agent Forge AI Hackathon',
  },
  {
    title: 'Silver Medal - International Junior Cybersecurity Olympiad',
    organization: 'National University of Singapore, SIMCC',
    date: 'Dec 2024',
  },
  {
    title: '1st Place - TicTacCode (Algorithms & CTF)',
    organization: 'SMU Ellipsis',
  },
  {
    title: 'Top 8 Finalist - AI Tinkerers SG x Tencent Cloud Hackathon',
  },
  {
    title: 'Finalist - GIC Code to Impact 2026',
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
