import type { CvData, MenuItem } from "@/types";

export const menuItems: MenuItem[] = [
  { title: "About", url: "about" },
  { title: "Education", url: "education" },
  { title: "Experience", url: "experience" },
  { title: "Projects", url: "projects" },
  { title: "Skills", url: "skills" },
  { title: "Publications", url: "publications" },
];

export const cvData: CvData = {
  title: "CV",
  url: "/cv.pdf",
};
