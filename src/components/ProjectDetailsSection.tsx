import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Server, Shield, CreditCard, Database, Layout, Code2, Layers, Workflow, Images } from "lucide-react";
import ImageGallery, { type GalleryImage } from "./ImageGallery";

interface ProjectDetail {
  title: string;
  overview: string;
  features: { icon: React.ReactNode; label: string }[];
  techStack: { label: string; color: "blue" | "green" | "purple" | "orange" | "red" }[];
  github?: string;
  demo?: string;
  images: GalleryImage[];
}

const techColors = {
  blue: "bg-primary/15 text-primary border-primary/25",
  green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  purple: "bg-violet-500/15 text-violet-400 border-violet-500/25",
  orange: "bg-orange-500/15 text-orange-400 border-orange-500/25",
  red: "bg-rose-500/15 text-rose-400 border-rose-500/25",
};

const projectDetails: ProjectDetail[] = [
  {
    title: "Mobile Bay Center",
    overview:
      "A full-featured e-commerce and inventory management platform. Customers can browse, search, and explore mobile devices while administrators manage inventory via a powerful dashboard.",
    features: [
      { icon: <Layout size={18} />, label: "Responsive Product Catalog with Search & Filters" },
      { icon: <Shield size={18} />, label: "Admin Dashboard with Inventory Management" },
      { icon: <Database size={18} />, label: "Entity Framework Core with SQL Server" },
      { icon: <Layers size={18} />, label: "MVC Architecture with Clean Separation" },
      { icon: <Workflow size={18} />, label: "Streamlined Order Management System" },
    ],
    techStack: [
      { label: ".NET Core 8", color: "purple" },
      { label: "C#", color: "green" },
      { label: "SQL Server", color: "red" },
      { label: "Entity Framework Core", color: "blue" },
      { label: "Bootstrap 5", color: "orange" },
    ],
    github: "https://github.com/AhmedEltamalawii/MWBAYLY",
    demo: "https://youtu.be/u_Qa-Yv5bow",
    images: [
      { src: "/placeholder.svg", title: "Home Page", description: "Main landing page with product showcase", category: "screenshot" },
      { src: "/placeholder.svg", title: "Product Catalog", description: "Browse and filter mobile devices", category: "screenshot" },
      { src: "/placeholder.svg", title: "Admin Dashboard", description: "Inventory management panel", category: "screenshot" },
      { src: "/placeholder.svg", title: "Mobile View", description: "Responsive mobile layout", category: "mobile" },
      { src: "/placeholder.svg", title: "Architecture", description: "System architecture diagram", category: "diagram" },
    ],
  },
  {
    title: "FastFood Restaurant System",
    overview:
      "A high-performance restaurant solution for fast-food chains to manage orders, inventory, and customer relationships with Clean Architecture patterns.",
    features: [
      { icon: <Shield size={18} />, label: "Role-Based Access Control (Admin, Manager, Customer)" },
      { icon: <CreditCard size={18} />, label: "Smart Shopping Cart with Discount Engine" },
      { icon: <Layers size={18} />, label: "Repository & Unit of Work Patterns" },
      { icon: <Code2 size={18} />, label: "Clean Architecture with Separation of Concerns" },
      { icon: <Database size={18} />, label: "Full CRUD for Menu Items & Categories" },
    ],
    techStack: [
      { label: "ASP.NET Core 8", color: "purple" },
      { label: "MVC/Web API", color: "blue" },
      { label: "SQL Server", color: "red" },
      { label: "Entity Framework Core", color: "green" },
      { label: "Bootstrap 5", color: "orange" },
    ],
    demo: "https://youtu.be/63x99CnNrp4",
    images: [
      { src: "/placeholder.svg", title: "Order System", description: "High-volume order management", category: "screenshot" },
      { src: "/placeholder.svg", title: "Menu Management", description: "Admin menu CRUD interface", category: "screenshot" },
      { src: "/placeholder.svg", title: "Mobile Order", description: "Mobile ordering experience", category: "mobile" },
      { src: "/placeholder.svg", title: "System Design", description: "Clean architecture diagram", category: "diagram" },
    ],
  },
  {
    title: "E-Commerce API System",
    overview:
      "A robust backend API solution powering modern e-commerce applications with secure endpoints for complete online store operations.",
    features: [
      { icon: <Shield size={18} />, label: "JWT Authentication with Admin & Customer Roles" },
      { icon: <CreditCard size={18} />, label: "Stripe Payment Processing Integration" },
      { icon: <Server size={18} />, label: "RESTful API with Clean Architecture" },
      { icon: <Database size={18} />, label: "Persistent Shopping Cart Management" },
      { icon: <Workflow size={18} />, label: "Automated Email Notifications" },
    ],
    techStack: [
      { label: "ASP.NET Core", color: "purple" },
      { label: "SQL Server", color: "red" },
      { label: "JWT", color: "green" },
      { label: "Stripe", color: "blue" },
      { label: "Clean Architecture", color: "orange" },
    ],
    github: "https://github.com/AhmedEltamalawii/Ecommerce-APIS",
    images: [
      { src: "/placeholder.svg", title: "API Endpoints", description: "Swagger documentation", category: "screenshot" },
      { src: "/placeholder.svg", title: "Auth Flow", description: "JWT authentication flow", category: "diagram" },
      { src: "/placeholder.svg", title: "API Architecture", description: "System architecture overview", category: "diagram" },
    ],
  },
  {
    title: "Task Management System",
    overview:
      "A team productivity application that streamlines task tracking and project collaboration with role-based permissions.",
    features: [
      { icon: <Shield size={18} />, label: "Admin, Manager & Team Member Roles" },
      { icon: <Workflow size={18} />, label: "Task Assignment & Priority Workflows" },
      { icon: <Database size={18} />, label: "Optimized Database Design" },
      { icon: <Layout size={18} />, label: "Intuitive Task Board Interface" },
    ],
    techStack: [
      { label: "ASP.NET MVC", color: "purple" },
      { label: ".NET", color: "blue" },
      { label: "SQL Server", color: "red" },
      { label: "Role-Based Auth", color: "green" },
    ],
    github: "https://github.com/AhmedEltamalawii/ToDoList",
    demo: "https://youtu.be/E7J4JPFN69c",
    images: [
      { src: "/placeholder.svg", title: "Task Board", description: "Main task management view", category: "screenshot" },
      { src: "/placeholder.svg", title: "Mobile Tasks", description: "Mobile responsive view", category: "mobile" },
    ],
  },
  {
    title: "Educational Academy",
    overview:
      "A comprehensive LMS enabling students to enroll in courses and access lessons, while administrators control all educational content.",
    features: [
      { icon: <Shield size={18} />, label: "Secure Authentication & Profile Management" },
      { icon: <Database size={18} />, label: "Course Enrollment Tracking System" },
      { icon: <Layout size={18} />, label: "Complete CRUD for Courses & Lessons" },
      { icon: <Workflow size={18} />, label: "Image Upload & Profile Customization" },
    ],
    techStack: [
      { label: "Python", color: "blue" },
      { label: "Flask", color: "green" },
      { label: "SQLAlchemy", color: "red" },
      { label: "Bootstrap", color: "orange" },
    ],
    github: "https://github.com/AhmedEltamalawii/School-Acadmy-",
    demo: "https://youtu.be/pKhvfYncqI0",
    images: [
      { src: "/placeholder.svg", title: "Course Catalog", description: "Browse available courses", category: "screenshot" },
      { src: "/placeholder.svg", title: "Student Dashboard", description: "Student enrolled courses", category: "screenshot" },
      { src: "/placeholder.svg", title: "Mobile View", description: "Responsive mobile layout", category: "mobile" },
    ],
  },
  {
    title: "Coffee Center",
    overview:
      "A responsive coffee shop website showcasing modern web design principles with clean layout that adapts to all screen sizes.",
    features: [
      { icon: <Layout size={18} />, label: "Fully Responsive Design for All Devices" },
      { icon: <Code2 size={18} />, label: "Pure HTML & CSS Implementation" },
      { icon: <Server size={18} />, label: "Firebase Deployment & Hosting" },
      { icon: <Layers size={18} />, label: "Clean Visual Hierarchy & Navigation" },
    ],
    techStack: [
      { label: "HTML", color: "orange" },
      { label: "CSS", color: "blue" },
      { label: "Responsive Design", color: "green" },
      { label: "Firebase", color: "red" },
    ],
    demo: "https://coffee-spark-sample-app-cd78d.web.app",
    images: [
      { src: "/placeholder.svg", title: "Landing Page", description: "Coffee shop homepage", category: "screenshot" },
      { src: "/placeholder.svg", title: "Menu Section", description: "Coffee menu display", category: "screenshot" },
      { src: "/placeholder.svg", title: "Mobile Home", description: "Mobile responsive view", category: "mobile" },
      { src: "/placeholder.svg", title: "UI Mockup", description: "Design mockup", category: "mockup" },
    ],
  },
];

const ProjectDetailsSection = () => {
  return (
    <section id="project-details" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm text-center">
          Deep Dive
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-16 text-center">
          Project <span className="text-gradient">Details</span>
        </h2>

        <div className="space-y-20 max-w-6xl mx-auto">
          {projectDetails.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-card rounded-2xl border border-border overflow-hidden shadow-card"
            >
              <div className="h-1.5 bg-primary/60" />
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Column */}
                <div className="p-8 lg:border-r border-border flex flex-col">
                  <div className="mb-6">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground mt-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2.5">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                          <span className="text-primary mt-0.5 shrink-0">{f.icon}</span>
                          {f.label}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((t) => (
                        <span
                          key={t.label}
                          className={`px-3 py-1 text-xs rounded-full border font-medium ${techColors[t.color]}`}
                        >
                          {t.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-border">
                    {project.github && (
                      <Button variant="hero" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} /> View on GitHub
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="heroOutline" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      </Button>
                    )}
                    <div className="flex items-center gap-1.5 ml-auto text-muted-foreground text-xs">
                      <Images size={14} />
                      <span>{project.images.length} images</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Gallery */}
                <div className="p-8">
                  <ImageGallery images={project.images} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsSection;
