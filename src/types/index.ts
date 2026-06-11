export type About = {
  imageUrl: string;
  name: string;
  degree: string;
  instituteName: string;
  email: string;
  p1: string;
  p2?: string;
  p3?: string;
  p4?: string;
  shortBio: string;
  location: string;
  researchAreas: string[];
};

export type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
};

export type Publication = {
  id: number;
  title: string;
  authors: string[];
  pdfLink: string;
  talkLink: string;
  year: string;
  doi: string;
};

export type News = {
  id: number;
  title: string;
  year: string;
  category: string;
};

export type Project = {
  id: number;
  title: string;
  tech: string[];
  description: string;
  year: string;
  githubLink?: string;
};

export type Education = {
  id: number;
  degree: string;
  university: string;
  location: string;
  period: string;
  gpa: string;
  courses?: string[];
};

export type MenuItem = {
  title: string;
  url: string;
};

export type CvData = {
  title: string;
  url: string;
};

export type SocialLink = {
  name: string;
  href: string;
  label: string;
  icon: string;
};
