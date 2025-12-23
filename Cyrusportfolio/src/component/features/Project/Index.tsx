import  ProjectCard  from "../Project/ProjectCard";

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="Employee Invite & Organisation System"
          description="Role-based organisation management platform with secure onboarding."
          features={[
            "RBAC (Super Admin, Admin, Employee)",
            "Secure invite links with expiry",
            "JWT authentication",
            "Admin dashboard",
          ]}
          stack={[
            "Next.js",
            "TypeScript",
            "NestJS",
            "MongoDB",
            "JWT",
            "Tailwind",
          ]}
          github="#"
          live="#"
        />

        <ProjectCard
          title="SaaS Dashboard & Analytics"
          description="Scalable SaaS dashboard with real-time analytics."
          features={[
            "Protected routes & permissions",
            "SSR for performance",
            "Real-time updates",
            "Modular architecture",
          ]}
          stack={[
            "Next.js",
            "NestJS",
            "PostgreSQL",
            "WebSockets",
            "AWS",
          ]}
          github="#"
          live="#"
        />

        <ProjectCard
          title="Authentication & Authorization System"
          description="Reusable backend authentication system."
          features={[
            "JWT access & refresh tokens",
            "Secure cookies",
            "Role-based guards",
            "Swagger documentation",
          ]}
          stack={[
            "NestJS",
            "Express",
            "MongoDB",
            "JWT",
            "Swagger",
          ]}
          github="#"
        />

        <ProjectCard
          title="Modern Portfolio Website"
          description="High-performance developer portfolio."
          features={[
            "SEO optimized",
            "Responsive design",
            "Framer Motion animations",
            "Component-driven UI",
          ]}
          stack={[
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Framer Motion",
          ]}
          github="#"
          live="#"
        />
      </div>
    </section>
  );
}
