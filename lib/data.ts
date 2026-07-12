// ============================================================================
// Central content source for the portfolio site.
// All personal/professional data lives here — sourced directly from
// Kushagra's resume and certificates. No fabricated experience or metrics.
// ============================================================================

export const personalInfo = {
  name: "Kushagra Singh Tiwari",
  role: "Associate Data Engineer",
  tagline: "Data Engineer & Python Developer building reliable data pipelines and exploring agentic AI systems.",
  location: "Hyderabad, India",
  email: "kushagrasinghtiwari360@gmail.com",
  phone: "+91 7067698902",
  linkedin: "https://www.linkedin.com/in/kushagra-singh-tiwari",
  github: "https://github.com/Kushagra200402",
  resumeUrl: "/documents/Kushagra_Singh_Tiwari_Resume.pdf",
  // Placeholder — no profile photo was provided.
  avatarUrl: "/images/avatar-placeholder.svg",
  avatarIsPlaceholder: true,
};

export const summary = `Data Engineer / Python Developer with 2+ years of experience designing ETL/ELT pipelines, SQL development, database optimization, API integrations, and automation solutions. Strong hands-on experience with Oracle, PostgreSQL, Databricks, Python, PL/SQL, and Linux environments. Experienced in building data ingestion pipelines, automating data workflows, and integrating enterprise applications, with additional hands-on exposure to distributed data processing (Apache Spark, Hadoop), cloud data warehousing (Snowflake), and infrastructure-as-code (Terraform).`;

export const aboutMe = {
  paragraphs: [
    "I'm a Data Engineer based in Hyderabad, currently building and maintaining production ETL pipelines at Splash Business Intelligence, where enterprise data from systems like Oracle Cloud, UKG, and SAP has to move reliably, at scale, and without surprises.",
    "My day-to-day centers on Python, SQL, and PL/SQL — designing pipelines, validating data with PySpark on Databricks, and automating the manual work out of enterprise workflows. Alongside that production work, I've built hands-on experience with distributed processing (Apache Spark, Hadoop), cloud data warehousing (Snowflake), and infrastructure-as-code (Terraform), and I hold a National Apprenticeship Certificate (NCVET) in IoT/Software Analysis.",
    "Outside of work, I've been exploring agentic AI — I built a locally deployed Retrieval-Augmented Generation system using LangChain, Ollama, and FAISS, entirely for the sake of understanding how these systems are built end to end without relying on external APIs.",
    "I care about pipelines that don't wake anyone up at 2 a.m. — clear validation, sensible monitoring, and automation that actually removes manual work rather than just moving it around. I'm looking to keep growing in data engineering while deepening my exposure to distributed systems and applied AI.",
  ],
  strengths: [
    "Pipeline ownership end-to-end — design, build, validate, monitor",
    "Comfortable across the stack: SQL/PL-SQL, Python, PySpark, cloud",
    "Fast learner — self-taught agentic AI tooling outside of work",
    "Detail-oriented with data validation and consistency checks",
  ],
};

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "SQL", "PL/SQL", "Shell Scripting"],
  },
  {
    category: "ETL & Data Engineering",
    skills: [
      "ETL / ELT",
      "Data Pipelines",
      "Data Processing",
      "Data Integration",
      "Data Validation",
      "REST APIs",
      "SFTP Automation",
    ],
  },
  {
    category: "Big Data",
    skills: ["Apache Hadoop", "Apache Spark", "PySpark", "Hive"],
  },
  {
    category: "Data Warehousing & Cloud",
    skills: ["Snowflake", "Databricks", "AWS", "GCP"],
  },
  {
    category: "Databases & File Formats",
    skills: ["Oracle", "PostgreSQL", "MySQL", "SQLite", "JSON", "CSV", "Parquet"],
  },
  {
    category: "DevOps & Version Control",
    skills: ["Git", "CI/CD", "Terraform", "Linux/UNIX"],
  },
  {
    category: "AI / GenAI",
    skills: ["LangChain", "Ollama", "FAISS", "RAG", "Vector Embeddings"],
  },
  {
    category: "Python Libraries",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "OpenPyXL"],
  },
  {
    category: "Visualization & Tools",
    skills: ["Power BI", "Postman"],
  },
];

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: "Splash Business Intelligence Pvt. Ltd.",
    role: "Associate Data Engineer",
    duration: "Feb 2024 – Present",
    location: "Hyderabad, India",
    bullets: [
      "Optimized enterprise data workflows by developing high-performance PL/SQL procedures, functions, and views, improving data processing efficiency by 25% across Oracle Cloud, UKG, and SAP systems.",
      "Designed and maintained ETL pipelines using PL/SQL, REST APIs, and Postgres databases to ingest, transform, and load currency exchange data for global clients.",
      "Developed Python-based file ingestion and SFTP automation workflows for enterprise ETL pipelines, reducing manual processing effort by 90%.",
      "Developed PySpark-based validation frameworks in Databricks to verify incremental ETL loads, ensuring data consistency and accuracy across Bronze, Silver, and Gold layers for multiple enterprise modules.",
      "Implemented a centralized telemetry automation pipeline for 40+ clients, consolidating ETL execution metrics into a single dataset and enabling automated email alerts and reporting.",
    ],
    tech: ["Python", "PL/SQL", "PySpark", "Databricks", "REST APIs", "PostgreSQL", "SFTP"],
  },
  {
    company: "PHN Technology Pvt. Ltd.",
    role: "Programming Intern",
    duration: "Apr 2023 – Jun 2023",
    location: "Pune, India",
    bullets: [
      "Developed a Python-based machine learning model using NumPy, Pandas, Scikit-learn, Matplotlib, and OpenPyXL to predict linear relationships from structured datasets.",
      "Built and optimized a data preprocessing and feature engineering pipeline, improving model accuracy by ~15%.",
    ],
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "OpenPyXL"],
  },
];

export type Project = {
  name: string;
  duration: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  results: string;
  // No repos/live demos were provided — these are clearly-marked placeholders.
  githubUrl: string | null;
  liveUrl: string | null;
};

export const projects: Project[] = [
  {
    name: "Agentic AI System — RAG-Based Intelligent Q&A",
    duration: "Nov 2025 – Dec 2025",
    description:
      "A locally deployed, privacy-first AI agent that answers questions grounded in your own documents using Retrieval-Augmented Generation.",
    problem:
      "General-purpose LLMs can't answer questions about private, unindexed documents, and sending sensitive documents to external APIs isn't always acceptable.",
    solution:
      "Built a fully local RAG pipeline: documents are chunked and embedded, indexed with FAISS for fast semantic search, and retrieved context is passed to a locally-run LLM via Ollama — no data ever leaves the machine.",
    features: [
      "Locally deployed AI agent using Retrieval-Augmented Generation (RAG)",
      "Ollama integration for fully offline, private LLM inference",
      "FAISS-based vector search for fast semantic document retrieval",
      "LangChain-orchestrated retrieval + generation workflow",
      "Pandas-based document preprocessing pipeline",
    ],
    tech: ["Python", "LangChain", "Ollama", "FAISS", "Pandas"],
    results: "Delivered a working offline Q&A agent capable of contextual, document-grounded answers with no external API dependency.",
    githubUrl: "https://github.com/Kushagra200402",
    liveUrl: null,
  },
  {
    name: "Image Forgery Detection & Localization",
    duration: "Aug 2023 – Dec 2023",
    description:
      "A deep learning model that detects and localizes copy-move and splicing forgeries within images.",
    problem:
      "Manipulated images (copy-move and splicing forgeries) are difficult to detect visually and require pixel-level localization for real forensic use.",
    solution:
      "Trained a U-Net-based 2D CNN for binary segmentation, identifying manipulated regions at the pixel level, with a dedicated preprocessing and annotation pipeline to improve generalization.",
    features: [
      "U-Net-based 2D CNN architecture for pixel-level forgery localization",
      "Detection of both copy-move and splicing forgery types",
      "Custom image preprocessing and annotation handling pipeline",
      "Achieved 76% Binary IoU on localization accuracy",
    ],
    tech: ["Python", "TensorFlow", "Keras"],
    results: "Achieved 76% Binary IoU, demonstrating strong localization performance for pixel-level forgery detection.",
    githubUrl: "https://github.com/Kushagra200402",
    liveUrl: null,
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  fileUrl: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    name: "National Apprenticeship Certificate — IoT / Software Analyst",
    issuer: "IT-ITeS Sector Skills Council (NASSCOM), recognized by NCVET",
    date: "Issued Dec 2024",
    credentialId: "ADTGA0021QG-05-IT-00497-2023-V1.1-NASSCOM35022",
    fileUrl: "/documents/Apprenticeship_Certificate.pdf",
    description:
      "6-month apprenticeship in the IT-ITeS sector (Optional Trade: IoT – Software Analyst) completed at Splash Business Intelligence Pvt. Ltd., assessed at 70.62% under the National Credit Framework (NCrF/NSQF Level 5).",
  },
  {
    name: "Student System Administration Training Program",
    issuer: "University of Hyderabad — School of Computer & Information Sciences (AI Lab)",
    date: "September 2023",
    fileUrl: "/documents/SysAdmin_Certificate.pdf",
    description:
      "Certificate of Participation for hands-on system administration training conducted at the Artificial Intelligence Lab, School of CIS, University of Hyderabad.",
  },
  {
    name: "Programming Languages Internship — Completion Certificate",
    issuer: "PHN Technology Pvt. Ltd.",
    date: "June 2023",
    fileUrl: "/documents/PHN_Internship_Certificate.pdf",
    description:
      "Completion certificate for the Programming Languages internship program at PHN Technology Pvt. Ltd., Pune (Intern ID: 114069).",
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "University of Hyderabad",
    location: "Hyderabad, India",
    duration: "2022 – 2024",
    detail: "CGPA: 7.4",
  },
  {
    degree: "Bachelor of Science",
    institution: "Awadhesh Pratap Singh University",
    location: "Rewa, Madhya Pradesh, India",
    duration: "2018 – 2021",
    detail: "Subjects: Statistics, Mathematics, Computer Science · Percentage: 69.15%",
  },
];

export const stats = [
  { label: "Years of Experience", value: 2, suffix: "+" },
  { label: "Enterprise ETL Efficiency Gain", value: 25, suffix: "%" },
  { label: "Manual Effort Reduced", value: 90, suffix: "%" },
  { label: "Client Environments Monitored", value: 40, suffix: "" },
];
