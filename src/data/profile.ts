import type { About, Education, Experience, Project, News, Publication } from "@/types";
import profileImage from "../assets/images/profile.jpg";

export const about: About = {
  imageUrl: profileImage,
  name: "Muhammad Faizan",
  degree: "M.Eng Technology & Innovation Management",
  instituteName: "Hochschule Harz – University of Applied Sciences, Germany",
  email: "muhammadfaizzan@outlook.com",
  p1: "I'm a Master's student in Technology and Innovation Management at Hochschule Harz, Germany, with coursework spanning machine learning, language modeling, big data, databases, information retrieval technology, and digital business modeling, backed by hands-on work across the full ML stack from data pipelines to deployed APIs.",
  p2: "Before starting my Master's, I spent a year at TransPeshawar as a Graduate Trainee Engineer. I automated KPI reporting pipelines in Python that replaced manual Excel workflows and cut reporting time by 70%, and analysed ridership time series data using decomposition techniques to surface demand patterns for operational decisions.",
  p3: "I build personal and academic projects continuously. My interests span transformer architectures, language modeling, and applied AI engineering, covering LLM agents, RAG systems, automation workflows, data pipelines, and MLOps. The work is on GitHub.",
  location: "Wernigerode, Germany",
  researchAreas: [
    "Machine Learning",
    "MLOps",
    "Data Science",
    "Natural Language Processing",
    "Generative AI & LLMs",
    "Computer Vision",
    "Data Engineering",
    "Python Development",
    "Agentic AI Systems",
  ],
  shortBio:
    "M.Eng student at Hochschule Harz working on ML engineering, data pipelines, and applied AI — seeking roles in ML, Data Science, and MLOps.",
};

export const education: Education[] = [
  {
    id: 1,
    degree: "M.Eng Technology & Innovation Management",
    university: "Hochschule Harz – University of Applied Sciences",
    location: "Wernigerode, Germany",
    period: "Sep 2024 – Present",
    gpa: "1.6",
    courses: [
      "Machine Learning",
      "Language Modeling",
      "Big Data & Geoinformation Systems",
      "Information Retrieval Technology",
      "Industry 4.0 & Smart Manufacturing",
      "Digital Business Modeling",
      "Agile Requirements Engineering",
      "Strategic Innovation Management",
      "Technology Assessment & Sustainability",
      "Smart Startup Garage",
      "Introduction to Research in Computer Science",
      "Environment Health & Safety",
    ],
  },
  {
    id: 2,
    degree: "BSc Industrial Engineering",
    university: "University of Engineering and Technology Peshawar",
    location: "Peshawar, Pakistan",
    period: "Sep 2019 – Aug 2023",
    gpa: "1.8",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Graduate Trainee Engineer – Operations",
    company: "TransPeshawar (Urban Mobility / BRT Network)",
    location: "Peshawar, Pakistan",
    period: "Dec 2023 – Nov 2024",
    type: "Full-time",
    bullets: [
      "Tracked and reported key operational KPIs including scheduled headway compliance, trip efficiency, and travel time regularity across the BRT network.",
      "Automated the KPI reporting pipeline in Python, replacing a manual Excel workflow and cutting reporting time by 70%.",
      "Analysed passenger ridership data using time series decomposition to identify demand patterns; presented findings through interactive Tableau dashboards to support operational decision-making.",
      "Built a bulk-processing Python pipeline for fleet inspection reporting — extracted timestamps from source files, generated structured Excel reports, and cut preparation time by ~80%.",
    ],
  },
  {
    id: 2,
    role: "Engineering Intern",
    company: "Atlas Honda (Motorcycle Manufacturer)",
    location: "Lahore, Pakistan",
    period: "Sep 2022 – Oct 2022",
    type: "Internship",
    bullets: [
      "Conducted a risk assessment using a risk factor matrix, scoring and ranking identified hazards including ergonomic and chemical inhalation risks; presented findings to senior management.",
      "Performed a micro motion study of assembly line workers to identify inefficiencies in repetitive tasks and recommended changes to reduce unnecessary movement and worker fatigue.",
    ],
  },
];

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "A Hybrid Algorithm for Time-Dependent Capacitated Vehicle Routing Problem Optimisation",
    authors: ["Muhammad Faizan", "et al."],
    pdfLink: "",
    talkLink: "",
    year: "2024",
    doi: "Journal of Innovations in Business and Industry",
  },
];

export const news: News[] = [
  {
    id: 1,
    title:
      "Built Veto Agent at MLH Global Hack Week — AI agent with human-in-the-loop authorization using Groq + Google Calendar API",
    year: "2026",
    category: "January",
  },
  {
    id: 2,
    title:
      "Built Privacy-Aware RAG Bot at MLH Global Hack Week — fine-grained document access control using Auth0 FGA and FAISS",
    year: "2026",
    category: "January",
  },
  {
    id: 3,
    title:
      "FactVerify AI earned Grade 1 (top score) at Smart Startup Garage for investor pitch and live product demo",
    year: "2025",
    category: "December",
  },
  {
    id: 4,
    title:
      "Surveillance Activity Detection pipeline achieved 93% accuracy across 14 activity classes on UCF-Crime dataset",
    year: "2025",
    category: "November",
  },
  {
    id: 5,
    title:
      "Collected primary research data at Hannover Messe 2025 for AutoMind Robotics market entry strategy project",
    year: "2025",
    category: "April",
  },
  {
    id: 6,
    title:
      "Started M.Eng in Technology and Innovation Management at Hochschule Harz, Germany",
    year: "2024",
    category: "September",
  },
  {
    id: 7,
    title:
      "Published: A Hybrid Algorithm for Time-Dependent Capacitated VRP Optimisation — Journal of Innovations in Business and Industry",
    year: "2024",
    category: "March",
  },
  {
    id: 8,
    title:
      "Awarded CMEEF Merit-Based Academic Scholarship (Full) for outstanding academic performance",
    year: "2023",
    category: "August",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "CampusGuideGPT",
    tech: ["Python", "FastAPI", "React", "Pinecone", "Groq LLM", "Llama 3.3 70B", "fastembed", "Railway", "Vercel"],
    description:
      "Full-stack RAG chatbot for Hochschule Harz students — ask anything about admissions, programs, or campus life in plain language. Pipeline: question → fastembed (all-MiniLM-L6-v2) → Pinecone vector search (top-3 context retrieval) → prompt builder → Llama 3.3 70B via Groq → conversational response with source references. Includes prompt injection sanitizer and a global daily rate limiter. FastAPI backend deployed on Railway, React/Vite frontend on Vercel with auto-deploy on every push. Live at campus-guide-gpt.vercel.app.",
    year: "",
    githubLink: "https://github.com/mhd-faizzan/CampusGuideGPT",
  },
  {
    id: 2,
    title: "Veto Agent",
    tech: ["Python", "Flask", "Groq LLM", "Google Calendar API", "OAuth 2.0"],
    description:
      "AI agent with async human-in-the-loop authorization built at MLH Global Hack Week. Safe read actions execute immediately; high-impact actions (create/delete events) pause and send an approval email with Approve/Deny links before executing. Intent classification via Groq routes commands to the Calendar API.",
    year: "",
    githubLink: "https://github.com/mhd-faizzan/veto-agent",
  },
  {
    id: 3,
    title: "Privacy-Aware RAG Bot",
    tech: ["Python", "Flask", "Auth0 FGA", "Groq LLM", "FAISS", "HuggingFace Embeddings"],
    description:
      "RAG chatbot with document-level authorization using Auth0 FGA, built at MLH Global Hack Week. Before retrieval, only documents the logged-in user is permitted to see are loaded into FAISS. Role-based access (manager vs employee) means unauthorized document exposure is structurally impossible.",
    year: "",
    githubLink: "https://github.com/mhd-faizzan/privacy-aware-rag-bot",
  },
  {
    id: 4,
    title: "Surveillance Activity Detection",
    tech: ["Python", "PyTorch", "YOLOv8-pose", "LSTM", "Autoencoder", "OpenCV", "Streamlit"],
    description:
      "Real-time suspicious activity detection on UCF-Crime surveillance footage. YOLOv8-pose reduces input from ~6M pixels to 34 keypoints per frame; 30-frame sequences fed into an LSTM classifier achieved 93% accuracy and 93% weighted F1 across 14 activity classes on 218k sequences. An autoencoder trained exclusively on normal behavior flags unknown anomalies via reconstruction error.",
    year: "",
    githubLink: "https://github.com/mhd-faizzan/surveillance-pipeline",
  },
  {
    id: 5,
    title: "Insurance Fraud Detection",
    tech: ["Python", "scikit-learn", "FastAPI", "SMOTE", "Docker"],
    description:
      "Fraud detection pipeline on 284,807 credit card transactions (0.17% fraud rate). Applied SMOTE on training data to fix class imbalance — 394 → 227k fraud cases. Trained Decision Tree (recall 0.83, AUC 0.88) and SVM (AUC 0.94); chose Decision Tree for higher recall. Predictions served via FastAPI with separate endpoints per model.",
    year: "",
    githubLink: "https://github.com/mhd-faizzan/insurance-fraud-detection",
  },
  {
    id: 6,
    title: "Model Drift Pipeline",
    tech: ["Python", "FastAPI", "scikit-learn", "SciPy", "GitHub Actions", "Docker"],
    description:
      "End-to-end MLOps pipeline that detects feature distribution drift using KS tests across 11 features with configurable thresholds. On drift, the pipeline automatically retrains a RandomForest model and opens a GitHub PR with a champion vs new model metrics comparison. CI/CD via GitHub Actions; Docker image published to GitHub Container Registry.",
    year: "",
    githubLink: "https://github.com/mhd-faizzan/model_drift_pipeline",
  },
  {
    id: 7,
    title: "FactVerify AI",
    tech: ["Python", "Streamlit", "Fact-Checking APIs", "B2B/B2C Monetisation"],
    description:
      "AI-powered fact-checking MVP (Technical Lead, Smart Startup Garage). Verifies claims against .gov, .edu, and DOI sources. Dual revenue model: €9.99/mo consumer tier + €0.01/query API. Sized a €9.1B TAM and prepared a €150K pre-seed ask. Earned Grade 1 — top score — for the investor pitch and live demo.",
    year: "",
    githubLink: "https://github.com/mhd-faizzan/Factverify_Ai",
  },
  {
    id: 8,
    title: "KaufDa Deal Finder",
    tech: ["Python", "Flask", "React", "MySQL", "GitHub Actions", "Vercel", "Render"],
    description:
      "Full-stack scraping app pulling live supermarket deals from Lidl, Rewe, Netto, and Kaufland via KaufDa's internal API. Full pipeline: Python scraper → MySQL → Flask REST API → React frontend. CI/CD: GitHub Actions auto-scrape, Render backend, Vercel frontend.",
    year: "",
    githubLink: "https://github.com/mhd-faizzan/kaufda_deal_finder",
  },
  {
    id: 9,
    title: "GPT-2 from Scratch",
    tech: ["Python", "PyTorch", "Transformers", "Tokenization", "Language Modeling"],
    description:
      "Full GPT-2 architecture implemented from scratch in PyTorch — multi-head self-attention, positional embeddings, transformer blocks, layer norm, and autoregressive language modeling. Covers the complete pretraining pipeline from tokenization to next-token prediction, built to deeply understand how large language models work at the implementation level.",
    year: "",
    githubLink: "https://github.com/mhd-faizzan/gpt2_from_scratch",
  },
  {
    id: 10,
    title: "MoE-BERT",
    tech: ["PyTorch", "BERT", "Mixture of Experts", "GLUE Benchmark", "Hugging Face"],
    description:
      "Mixture of Experts architecture integrated with BERT, trained from scratch and benchmarked on GLUE. MoE routing selects a subset of expert feed-forward layers per token, improving parameter efficiency over dense transformers at equivalent compute.",
    year: "",
    githubLink: "https://github.com/mhd-faizzan/MoE_BERT",
  },
];
