import { motion } from "framer-motion";
import { Server, Database, Shield, Zap, Code2, Wrench, Layout, GitBranch, Radio, Search } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Custom API Development & Integration",
    desc: "Engineering high-performance RESTful APIs using ASP.NET Core. Whether it's third-party integrations (like Stripe or Twilio) or building custom endpoints, I focus on scalability and clear documentation.",
  },
  {
    icon: GitBranch,
    title: "Advanced Backend Architecture",
    desc: "Designing the \"Skeleton\" of your application. I specialize in Clean Architecture, N-Tier, and Design Patterns (Repository, Unit of Work) to ensure your code is decoupled, testable, and easy to maintain.",
  },
  {
    icon: Database,
    title: "Database Engineering & Schema Design",
    desc: "Crafting efficient relational databases with SQL Server. My service includes schema modeling, complex query optimization, and Entity Framework Core migrations to ensure data integrity at scale.",
  },
  {
    icon: Shield,
    title: "Identity & Enterprise Security",
    desc: "Implementing robust security layers using JWT, Identity Framework, and Role-Based Access Control (RBAC). I ensure your application is protected against common vulnerabilities while managing user permissions seamlessly.",
  },
  {
    icon: Layout,
    title: "Full-Stack End-to-End Solutions",
    desc: "From a blank page to a live URL. I handle the entire lifecycle: designing the Database, building the API, and crafting a responsive Bootstrap/JS frontend that provides a premium user experience.",
    isNew: true,
  },
  {
    icon: Radio,
    title: "Real-Time System Implementation",
    desc: "Integrating SignalR for real-time features like live notifications, chat systems, or instant status updates—essential for modern management systems and dashboards.",
    isNew: true,
  },
  {
    icon: Search,
    title: "Performance Profiling & Refactoring",
    desc: "Transforming \"Legacy Code\" into modern systems. I profile applications to find bottlenecks, optimize LINQ queries, and refactor code to follow SOLID principles for better performance.",
    isNew: true,
  },
  {
    icon: Code2,
    title: "Technical Consultation & Code Review",
    desc: "Leveraging my role as a Backend Architect to provide guidance on system design, database schemas, and best practices for development teams to ensure long-term project success.",
    isNew: true,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm text-center">Services</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-center">
          Professional Services & <span className="text-gradient">Solutions</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          What I Bring to the Table
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group bg-gradient-card rounded-xl p-6 shadow-card border border-border hover:border-primary/40 transition-colors duration-300 relative"
            >
              {"isNew" in s && s.isNew && (
                <span className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-bold uppercase rounded-full bg-primary text-primary-foreground">
                  New ✨
                </span>
              )}
              <s.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="font-display font-semibold text-foreground mb-2 text-sm">{s.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
