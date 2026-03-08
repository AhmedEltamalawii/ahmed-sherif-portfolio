import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Mobile Bay Center",
    desc: "A full-featured e-commerce and inventory management platform built with ASP.NET Core MVC. Customers can browse, search, and explore mobile devices through a dynamic product catalog, while administrators gain complete control over inventory via a powerful dashboard. Features responsive UI with Bootstrap, robust data persistence using Entity Framework Core and SQL Server, and streamlined order management — demonstrating expertise in MVC architecture, database design, and scalable web applications with clean separation of concerns.",
    tech: [".NET Core 8", "C#", "SQL Server", "Entity Framework Core", "Bootstrap 5"],
    github: "https://github.com/AhmedEltamalawii/MWBAYLY",
    demo: "https://youtu.be/u_Qa-Yv5bow",
  },
  {
    title: "FastFood Restaurant System",
    desc: "A high-performance restaurant solution built with .NET 8, designed for fast-food chains to manage high-volume orders, inventory, and customer relationships. Implements Clean Architecture with Repository and Unit of Work patterns. Security is handled through ASP.NET Core Identity with role-based access for Administrators, Restaurant Managers, and Customers. Features an intelligent shopping cart, flexible discount engine with coupon support, full CRUD for menu items and categories, order tracking, and a responsive Bootstrap interface — showcasing modern .NET development, secure authentication, and enterprise architecture.",
    tech: ["ASP.NET Core 8", "MVC/Web API", "SQL Server", "Entity Framework Core", "Bootstrap 5"],
    github: "",
    demo: "https://youtu.be/63x99CnNrp4",
  },
  {
    title: "E-Commerce API System",
    desc: "A robust backend API solution designed to power modern e-commerce applications. Built on clean architecture principles, the system delivers secure, scalable endpoints for complete online store operations. Core functionality includes JWT-based authentication with distinct roles for Administrators and Customers, full CRUD operations for products and categories, persistent shopping cart management, and seamless Stripe payment processing. Additional features include automated email notifications for order confirmations and account activities, plus comprehensive user profile management allowing customers to update personal information and view order history. The API demonstrates expertise in secure authentication, payment integration, and service-based architecture.",
    tech: ["ASP.NET Core", "SQL Server", "JWT", "Entity Framework", "Stripe", "Clean Architecture"],
    github: "https://github.com/AhmedEltamalawii/Ecommerce-APIS",
    demo: "",
  },
  {
    title: "Task Management System",
    desc: "Task tracking application built with MVC pattern in .NET, featuring role-based authentication and efficient database design for team productivity.",
    tech: ["ASP.NET MVC", ".NET", "SQL Server", "Role-Based Auth"],
    github: "https://github.com/AhmedEltamalawii/ToDoList",
    demo: "https://youtu.be/E7J4JPFN69c",
  },
  {
    title: "Secure Authentication System",
    desc: "Complete registration and login system with token-based authentication and secure password handling.",
    tech: ["ASP.NET Core", "JWT", "C#", "SQL Server"],
    github: "",
    demo: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm text-center">Projects</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12 text-center">
          Notable <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-gradient-card rounded-xl overflow-hidden shadow-card border border-border group hover:border-primary/40 transition-colors duration-300"
            >
              <div className="h-2 bg-primary/60 group-hover:bg-primary transition-colors" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {p.github && (
                    <Button variant="hero" size="sm" asChild>
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} /> GitHub
                      </a>
                    </Button>
                  )}
                  {p.demo && (
                    <Button variant="heroOutline" size="sm" asChild>
                      <a href={p.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} /> Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
