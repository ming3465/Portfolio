export interface ProfileFact {
  label: string;
  value: string;
}

export const profile = {
  name: 'Sutolimin Widjaja',
  location: 'Singapore',
  role: 'Software Engineering @ SMU',
  summary: 'Software Engineering undergraduate at SMU Singapore, working across high-performance C++ systems, applied machine learning, LLM evaluation, and production web and mobile engineering.',
  availability: 'Open to 2027 internships',
  updated: '11 Nov 2026',
  email: 'sutolimin.45@gmail.com',
};

export const facts: ProfileFact[] = [
  { label: 'Focus', value: 'Systems / ML / Full-Stack / Quant' },
  { label: 'Base', value: 'Singapore' },
  { label: 'Languages', value: 'C++, Python, Java, TypeScript' },
  {
    label: 'Current interests',
    value: 'Low-latency trading systems, LLM evaluation and agent memory, and competitive programming',
  },
  {
    label: 'Status',
    value: 'Work-study student at SMU, open to 2027 internships and research collaborations',
  },
];
