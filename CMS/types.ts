export type ProfileData = {
  name: string;
  brand: string;
  role: string;
  location: string;
  email: string;
  company: string;
  headline: string;
  bio: string;
};

export type ProjectMetric = {
  num: string;
  label: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  role: string;
  image: string;
  year: string;
  client: string;
  duration: string;
  stack: string[];
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  highlights: string[];
  metrics: ProjectMetric[];
  featured: boolean;
};

export type ServiceItem = {
  slug: string;
  name: string;
  desc: string;
  intro: string;
  includes: string[];
  tools: string[];
};

export type ExperienceItem = {
  year: string;
  role: string;
  company: string;
  summary: string;
  points: string[];
};

export type SocialItem = {
  label: string;
  href: string;
};

export type StatItem = {
  num: string;
  label: string;
};

export type SectionConfig = {
  id: string;
  name: string;
  enabled: boolean;
  title: string;
  subtitle?: string;
  order: number;
};

export type ThemeConfig = {
  page: string;
  ink: string;
  inkDeep: string;
  cream: string;
  muted: string;
  accent: string;
  preset: string;
};

export type TrafficSource = {
  source: string;
  count: number;
  percentage: number;
};

export type PageViewItem = {
  path: string;
  title: string;
  views: number;
};

export type ProjectViewItem = {
  title: string;
  views: number;
  percentage: number;
};

export type DeviceStat = {
  device: string;
  percentage: number;
};

export type CountryStat = {
  country: string;
  code: string;
  count: number;
};

export type DailyMetric = {
  date: string;
  views: number;
  visitors: number;
};

export type AnalyticsData = {
  totalViews: number;
  uniqueVisitors: number;
  avgTimeOnSite: string;
  bounceRate: string;
  dailyMetrics: DailyMetric[];
  trafficSources: TrafficSource[];
  pageViews: PageViewItem[];
  topProjects: ProjectViewItem[];
  deviceStats: DeviceStat[];
  countryStats: CountryStat[];
};

export type CMSConfig = {
  profile: ProfileData;
  projects: ProjectItem[];
  services: ServiceItem[];
  experiences: ExperienceItem[];
  socials: SocialItem[];
  stats: StatItem[];
  sections: SectionConfig[];
  theme: ThemeConfig;
  analytics: AnalyticsData;
};
