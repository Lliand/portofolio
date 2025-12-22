// 1. Define the "Shape" of a project
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
}

// 2. Create the actual data (An Array of Objects)
export const projectData: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    category: "Web Dev",
    description: "A professional portfolio built with Next.js and Tailwind CSS.",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    category: "Database",
    description: "A backend management tool for tracking sales and inventory.",
  },
  {
    id: 3,
    title: "AI Chatbot",
    category: "AI/ML",
    description: "A Python-based chatbot integration using OpenAI API.",
  },
];