export const heroHeadline = [
  { text: 'Your', em: false },
  { text: 'average', em: false },
  { text: 'number', em: false },
  { text: 'is', em: true },
  { text: 'hiding', em: true },
  { text: 'the', em: false },
  { text: 'real', em: false },
  { text: 'story.', em: false },
];

export const signalBars = [
  { tag: 'Overall', pct: 24, color: 'var(--slate)' },
  { tag: 'Basic', pct: 41, color: 'var(--amber)' },
  { tag: 'Organic', pct: 15, color: 'var(--teal)' },
  { tag: 'Premium', pct: 7, color: 'var(--teal)' },
];

export const projects = [
  {
    index: '01 / Analytics pipeline',
    title: 'Customer Churn Analytics Pipeline',
    tools: ['SQLite', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    body:
      'An end-to-end churn analysis built from three disjointed sources — customer profiles, subscription tiers, and support logs — joined and cleaned with SQLite, pandas, and NumPy. Support tickets were deduplicated and a clean churn_flag engineered before any chart was drawn, then behavioral intensity was mapped with Matplotlib and Seaborn.',
    findings: [
      'The aggregate churn rate looked stable — it was masking a much riskier group underneath.',
      'The Basic plan carries most of the risk; Premium and Organic customers stay structurally sound.',
      'Referral-sourced customers on monthly Basic plans churn the fastest, with almost no tolerance for friction.',
      'Active support escalations turned out to be an early, reliable warning sign of cancellation.',
    ],
  },
  {
    index: '02 / Applied Python',
    title: 'Personal Finance Tracker',
    tools: ['Python', 'Pandas', 'Matplotlib'],
    body:
      'A real-world Pandas + Matplotlib project built to move past tutorials: parsing raw bank transaction exports, converting date strings into proper datetime objects, and handling missing values before any analysis could be trusted.',
    findings: [
      'Built a keyword-matching categorizer so scattered vendor names (e.g. every "Amazon" charge) roll up into one clean spending category.',
      'Used groupby aggregation to summarize spending by month and surface real habits, not guesses.',
      'Visualized the category split with a pie chart to make the spending story legible at a glance.',
    ],
  },
];

export const tools = [
  { name: 'Python', desc: 'Core language' },
  { name: 'Pandas', desc: 'Wrangling & analysis' },
  { name: 'NumPy', desc: 'Numerical computing' },
  { name: 'Matplotlib', desc: 'Data visualization' },
  { name: 'Seaborn', desc: 'Statistical plotting' },
  { name: 'Tableau', desc: 'Dashboards' },
  { name: 'SQL / SQLite', desc: 'Data engineering' },
  { name: 'Excel', desc: 'Quick analysis' },
  { name: 'C# (OOP)', desc: 'Applied fundamentals' },
];

export const education = [
  {
    year: '2025 — Present',
    title: 'BS Data Science',
    org: 'University of Engineering and Technology (UET), Lahore',
  },
  {
    year: 'Intermediate',
    title: 'FSc (Pre-Engineering)',
    org: 'Government College University (GCU), Lahore',
  },
  {
    year: '2026',
    title: 'Foundations: Data, Data, Everywhere',
    org: 'Google, via Coursera',
  },
  {
    year: 'DataCamp',
    title: 'Introduction to Python · Intermediate Python · Data Manipulation with pandas',
    org: 'DataCamp certifications',
  },
  {
    year: '2026',
    title: 'Data Analytics Job Simulation',
    org: 'Deloitte — data analysis & forensic technology',
  },
];

export const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#toolkit', label: 'Toolkit' },
  { href: '#education', label: 'Education' },
  { href: '#gallery', label: 'Visuals' },
  { href: '#about', label: 'About' },
];
