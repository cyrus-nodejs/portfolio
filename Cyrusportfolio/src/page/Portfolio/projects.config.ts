export type ProjectCategory = "web" | "mobile" | "desktop";

export interface Project {
  title: string;
  description: string;
  stack: string;
  details: string[];
  githubUrl?: string;
  liveUrl?: string;
  categories: ProjectCategory[];
  featured?: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    title: "🧠 Employee Management",
    featured: true,
    metrics: [
      { label: "Engagement", value: "+60%" },
      { label: "Latency", value: "−40%" },
      { label: "Users", value: "1k+" },
    ],
    description: "Role-based platform to manage organizations, admins, and employees securely.",
    stack: "NestJS · Next.js · TypeScript · Tailwind · shadcn/ui",
    categories: ["web"],
    details: [
      "Role-based access control (Super Admin, Admin, Employee).",
      "Secure invite links with expiry.",
      "Organization-scoped data isolation.",
      "Scalable modular backend architecture.",
    ],
    githubUrl: "https://github.com/cyrus-nodejs/employee-management-system",
    liveUrl: "https://employee-hr.netlify.app",
  },

  {
    title: "🧠 Jollof AI",
    featured: true,
    metrics: [
      { label: "Engagement", value: "+60%" },
      { label: "Latency", value: "−40%" },
      { label: "Users", value: "1k+" },
    ],
    description: "AI-powered recipe recommendation system with text, voice, and image input.",
    stack: "Express · React · MongoDB · ML · Google Vision",
    categories: ["web"],
    details: [
      "Multimodal input: text, voice, image recognition.",
      "Semantic recipe matching using embeddings.",
      "40% backend performance improvement via indexing & caching.",
    ],
    githubUrl: "https://github.com/cyrus-nodejs/jollofai",
    liveUrl: "https://jollofai.netlify.app",
  },

  {
    title: "💬 ChatPlanet",
    featured: true,
    metrics: [
      { label: "Engagement", value: "+60%" },
      { label: "Latency", value: "−40%" },
      { label: "Users", value: "1k+" },
    ],
    description: "Real-time messaging platform with group chat, avatars, and live presence.",
    stack: "React · Node.js · Socket.IO · PostgreSQL",
    categories: ["web"],
    details: [
      "Scalable chat for 1,000+ users using WebSocket & Socket.IO.",
      "JWT authentication and live presence tracking.",
      "Group chat, avatars, and message history sync.",
      "Reduced latency from 300ms → 80ms via socket batching.",
    ],
    githubUrl: "https://github.com/cyrus-nodejs/chatplanet",
    liveUrl: "https://wen-chat.netlify.app/login",
  },

  {
    title: "📦 Inventory & Orders",
    featured: true,
    metrics: [
      { label: "Engagement", value: "+60%" },
      { label: "Latency", value: "−40%" },
      { label: "Users", value: "500+" },
    ],
    description: "Full-stack system to manage inventory, orders, and business operations.",
    stack: "PostgreSQL · NestJS · Next.js · Node.js · Tailwind CSS",
    categories: ["web"],
    details: [
      "Centralized inventory tracking with stock alerts.",
      "Order lifecycle management (create, update, fulfill, cancel).",
      "Role-based access control for admins, staff, and managers.",
      "RESTful API with scalable backend architecture.",
      "Optimized database schema for high-volume transactions.",
    ],
    githubUrl: "https://github.com/cyrus-nodejs/inventory-order-management",
    liveUrl: "https://inventory-management-app.vercel.app",
  },

  {
    title: "🛍️ E-Commerce App",
    featured: true,
    metrics: [
      { label: "Engagement", value: "+60%" },
      { label: "Latency", value: "−40%" },
      { label: "Users", value: "1k+" },
    ],
    description: "Fullstack e-commerce platform with Stripe payments and admin dashboard.",
    stack: "MongoDB · Express · React · Node.js · Stripe API",
    categories: ["web"],
    details: [
      "Store with JWT authentication and product management dashboard.",
      "Stripe integration for secure checkout, reducing payment errors by 35%.",
      "Instant product search and category filtering.",
      "CRUD operations for users, products, orders.",
    ],
    githubUrl: "https://github.com/cyrus-nodejs/e-commerce",
    liveUrl: "https://shoppingluxury.netlify.app/",
  },

  {
    title: "📝 Todo App",
    featured: true,
    metrics: [
      { label: "Engagement", value: "+60%" },
      { label: "Latency", value: "−40%" },
      { label: "Users", value: "1k+" },
    ],
    description: "Scalable full-stack Todo app with reminders, notifications, and task management.",
    stack: "React · TypeScript · Node.js · Express · MongoDB",
    categories: ["web"],
    details: [
      "Scalable full-stack app using React, TypeScript, Node.js/Express.",
      "JWT-based authentication and authorization.",
      "CRUD system for tasks with completion tracking.",
      "Reminder and notification system for improved engagement.",
      "RESTful API following best practices and clean architecture.",
      "Optimized MongoDB schemas for efficient persistence and retrieval.",
      "Responsive and cross-device compatible UI.",
      "Deployed with modern cloud and CI/CD platforms.",
    ],
    githubUrl: "https://github.com/cyrus-nodejs/todoapp",
    liveUrl: "https://todo-planet.netlify.app",
  },
];
