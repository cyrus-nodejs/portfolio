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
    title: "🧠 Onboardly",
    featured: true,
    // metrics: [
    //   { label: "Engagement", value: "+60%" },
    //   { label: "Latency", value: "−40%" },
    //   { label: "Users", value: "1k+" },
    // ],
    description: "Role-based platform to manage organizations, admins, and employees securely.",
    stack: "NestJS · Next.js · TypeScript · Tailwind · shadcn/ui",
    categories: ["web"],
    details: [
      "Role-based access control (Super Admin, Admin, Employee).",
      "Secure invite links with expiry.",
      "Organization-scoped data isolation.",
      "Scalable modular backend architecture.",
    ],
    githubUrl: "https://github.com/cyrus-nodejs/Onboardly",
    liveUrl: "https://onboardly.vercel.ap",
  },

  {
    title: "🧠 Jollof AI",
    featured: true,
    // metrics: [
    //   { label: "Engagement", value: "+60%" },
    //   { label: "Latency", value: "−40%" },
    //   { label: "Users", value: "1k+" },
    // ],
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
    // metrics: [
    //   { label: "Engagement", value: "+60%" },
    //   { label: "Latency", value: "−40%" },
    //   { label: "Users", value: "1k+" },
    // ],
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

  // {
  //   title: "📦 Stockflow",
  //   featured: true,
  //   metrics: [
  //     { label: "Engagement", value: "+60%" },
  //     { label: "Latency", value: "−40%" },
  //     { label: "Users", value: "500+" },
  //   ],
  //   description: "Inventory, Orders & Analytics Platform.",
  //   stack: "PostgreSQL · NestJS · Next.js · Node.js · Tailwind CSS",
  //   categories: ["web"],
  //   details: [
  //     "Centralized inventory tracking with stock alerts.",
  //     "Order lifecycle management (create, update, fulfill, cancel).",
  //     "Role-based access control for admins, staff, and managers.",
  //     "RESTful API with scalable backend architecture.",
  //     "Optimized database schema for high-volume transactions.",
  //   ],
  //   githubUrl: "https://github.com/cyrus-nodejs/StockFlow",
  //   liveUrl: "https://stockflow.vercel.app",
  // },

  // {
  //   title: "🛍️ E-Commerce App",
  //   featured: true,
  //   metrics: [
  //     { label: "Engagement", value: "+60%" },
  //     { label: "Latency", value: "−40%" },
  //     { label: "Users", value: "1k+" },
  //   ],
  //   description: "Fullstack e-commerce platform with Stripe payments and admin dashboard.",
  //   stack: "MongoDB · Express · React · Node.js · Stripe API",
  //   categories: ["web"],
  //   details: [
  //     "Store with JWT authentication and product management dashboard.",
  //     "Stripe integration for secure checkout, reducing payment errors by 35%.",
  //     "Instant product search and category filtering.",
  //     "CRUD operations for users, products, orders.",
  //   ],
  //   githubUrl: "https://github.com/cyrus-nodejs/e-commerce",
  //   liveUrl: "https://shoppingluxury.netlify.app/",
  // },

];














// export type ProjectCategory = "web" | "mobile" | "desktop";

// export interface Project {
//   title: string;
//   description: string;
//   stack: string;
//   details: string[];
//   githubUrl?: string;
//   liveUrl?: string;
//   categories: ProjectCategory[];
//   featured?: boolean;
//   metrics?: {
//     label: string;
//     value: string;
//   }[];
// }

// export const projects: Project[] = [
//   // Web Projects
//   {
//     title: "🧠 Employee Management",
//     description: "Role-based platform to manage organizations, admins, and employees securely.",
//     stack: "NestJS · Next.js · TypeScript · Tailwind · shadcn/ui",
//     categories: ["web"],
//     details: [
//       "Role-based access control (Super Admin, Admin, Employee).",
//       "Secure invite links with expiry.",
//       "Organization-scoped data isolation.",
//       "Scalable modular backend architecture.",
//     ],
//     githubUrl: "https://github.com/cyrus-nodejs/employee-management-system",
//     liveUrl: "https://employee-hr.netlify.app",
//     metrics: [
//       { label: "Engagement", value: "+60%" },
//       { label: "Latency", value: "−40%" },
//       { label: "Users", value: "1k+" },
//     ],
//     featured: true,
//   },

//   {
//     title: "💬 ChatPlanet",
//     description: "Real-time messaging platform with group chat, avatars, and live presence.",
//     stack: "React · Node.js · Socket.IO · PostgreSQL",
//     categories: ["web"],
//     details: [
//       "Scalable chat for 1,000+ users using WebSocket & Socket.IO.",
//       "JWT authentication and live presence tracking.",
//       "Group chat, avatars, and message history sync.",
//       "Reduced latency from 300ms → 80ms via socket batching.",
//     ],
//     githubUrl: "https://github.com/cyrus-nodejs/chatplanet",
//     liveUrl: "https://wen-chat.netlify.app/login",
//     metrics: [
//       { label: "Engagement", value: "+60%" },
//       { label: "Latency", value: "−40%" },
//       { label: "Users", value: "1k+" },
//     ],
//     featured: true,
//   },

//   // Mobile Projects
//   {
//     title: "📱 Fitness Tracker",
//     description: "Track workouts, nutrition, and sleep from your mobile device.",
//     stack: "React Native · Expo · Firebase",
//     categories: ["mobile"],
//     details: [
//       "Track daily workouts and goals.",
//       "Push notifications for reminders.",
//       "Sync data across devices.",
//     ],
//     githubUrl: "https://github.com/example/fitness-tracker",
//     liveUrl: "https://example.com/fitness-tracker",
//     metrics: [
//       { label: "Active Users", value: "5k+" },
//       { label: "Retention", value: "78%" },
//     ],
//     featured: true,
//   },

//   {
//     title: "📱 Chat Mobile App",
//     description: "Lightweight chat application optimized for mobile devices.",
//     stack: "Flutter · Firebase",
//     categories: ["mobile"],
//     details: [
//       "End-to-end encryption for messages.",
//       "Real-time notifications and updates.",
//       "Offline message caching.",
//     ],
//     githubUrl: "https://github.com/example/chat-mobile",
//     liveUrl: "https://example.com/chat-mobile",
//     metrics: [
//       { label: "Messages Sent", value: "1M+" },
//       { label: "Active Users", value: "10k+" },
//     ],
//     featured: false,
//   },

//   // Desktop Projects
//   {
//     title: "🖥️ Desktop Inventory App",
//     description: "Manage inventory and orders directly from your desktop.",
//     stack: "Electron · React · SQLite",
//     categories: ["desktop"],
//     details: [
//       "Offline-first inventory management.",
//       "Export reports to Excel or PDF.",
//       "Multi-user support with roles.",
//     ],
//     githubUrl: "https://github.com/example/desktop-inventory",
//     liveUrl: "https://example.com/desktop-inventory",
//     metrics: [
//       { label: "Installed", value: "500+" },
//       { label: "Efficiency Gain", value: "+30%" },
//     ],
//     featured: true,
//   },

//   {
//     title: "🖥️ Desktop Analytics Tool",
//     description: "Data visualization and analytics for desktop users.",
//     stack: "Electron · D3.js · Node.js",
//     categories: ["desktop"],
//     details: [
//       "Interactive charts and dashboards.",
//       "CSV and JSON data import/export.",
//       "Customizable widgets for key metrics.",
//     ],
//     githubUrl: "https://github.com/example/desktop-analytics",
//     liveUrl: "https://example.com/desktop-analytics",
//     metrics: [
//       { label: "Charts Rendered", value: "10k+" },
//       { label: "Users", value: "1k+" },
//     ],
//     featured: false,
//   },
// ];
