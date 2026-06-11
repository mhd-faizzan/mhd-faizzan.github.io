import { Code2, Brain, Container, BarChart2 } from "lucide-react";
import {
  SiPython, SiJavascript, SiMysql,
  SiPytorch, SiScikitlearn, SiHuggingface, SiLangchain, SiPandas, SiNumpy,
  SiOpencv, SiYolo,
  SiFastapi, SiReact, SiStreamlit, SiJupyter, SiAnaconda,
  SiDocker, SiGit, SiGithub, SiGitlab, SiGithubactions, SiDatabricks, SiVercel, SiRender,
  SiN8N, SiQgis,
} from "react-icons/si";
import { FaFileExcel, FaAws } from "react-icons/fa";
import { TableauIcon, PowerBIIcon } from "@/components/ui/CustomIcons";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type Skill    = { Icon: React.FC<{ size?: number; color?: string }> | IconType; color: string; name: string };
type Category = { label: string; CategoryIcon: LucideIcon; skills: Skill[] };

const categories: Category[] = [
  {
    label: "Languages & Frameworks",
    CategoryIcon: Code2,
    skills: [
      { Icon: SiPython,     color: "#3776AB", name: "Python" },
      { Icon: SiJavascript, color: "#EAB308", name: "JavaScript" },
      { Icon: SiMysql,      color: "#4479A1", name: "SQL" },
      { Icon: SiFastapi,    color: "#009688", name: "FastAPI" },
      { Icon: SiReact,      color: "#0EA5E9", name: "React" },
      { Icon: SiStreamlit,  color: "#FF4B4B", name: "Streamlit" },
      { Icon: SiJupyter,    color: "#F37626", name: "Jupyter" },
      { Icon: SiAnaconda,   color: "#44A833", name: "Anaconda" },
    ],
  },
  {
    label: "AI & ML",
    CategoryIcon: Brain,
    skills: [
      { Icon: SiPytorch,     color: "#EE4C2C", name: "PyTorch" },
      { Icon: SiScikitlearn, color: "#F7931E", name: "scikit-learn" },
      { Icon: SiHuggingface, color: "#D97706", name: "Hugging Face" },
      { Icon: SiLangchain,   color: "#16A34A", name: "LangChain" },
      { Icon: SiPandas,      color: "#150458", name: "Pandas" },
      { Icon: SiNumpy,       color: "#4DABCF", name: "NumPy" },
      { Icon: SiOpencv,      color: "#5C3EE8", name: "OpenCV" },
      { Icon: SiYolo,        color: "#374151", name: "YOLOv8" },
    ],
  },
  {
    label: "MLOps & DevOps",
    CategoryIcon: Container,
    skills: [
      { Icon: SiGithub,        color: "#374151", name: "GitHub" },
      { Icon: SiGitlab,        color: "#FC6D26", name: "GitLab" },
      { Icon: SiGit,           color: "#F05032", name: "Git" },
      { Icon: SiDocker,        color: "#2496ED", name: "Docker" },
      { Icon: SiGithubactions, color: "#2088FF", name: "GitHub Actions" },
      { Icon: SiDatabricks,    color: "#FF3621", name: "Databricks" },
      { Icon: FaAws,           color: "#FF9900", name: "AWS" },
      { Icon: SiVercel,        color: "#374151", name: "Vercel" },
      { Icon: SiRender,        color: "#46E3B7", name: "Render" },
    ],
  },
  {
    label: "Data & Analytics",
    CategoryIcon: BarChart2,
    skills: [
      { Icon: TableauIcon,  color: "#E97627", name: "Tableau" },
      { Icon: PowerBIIcon,  color: "#F2C811", name: "Power BI" },
      { Icon: FaFileExcel,  color: "#217346", name: "Excel" },
      { Icon: SiMysql,      color: "#4479A1", name: "MySQL" },
      { Icon: SiN8N,        color: "#EA4B71", name: "n8n" },
      { Icon: SiQgis,       color: "#589632", name: "QGIS" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left xl:text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {categories.map(({ label, CategoryIcon, skills }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 bg-white rounded-2xl p-6 pb-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 overflow-visible"
            >
              <CategoryIcon className="w-9 h-9 text-blue-600" strokeWidth={1.5} />
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center leading-tight">
                {label}
              </h3>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {skills.map(({ Icon, color, name }) => (
                  <div key={name} className="group relative flex items-center justify-center">
                    <Icon size={30} color={color} />
                    <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-0.5 text-xs text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 z-10">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
