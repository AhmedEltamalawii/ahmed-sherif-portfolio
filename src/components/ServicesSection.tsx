import { motion } from "framer-motion";
import { Server, Database, Shield, Zap, Code2, Wrench, Layout, GitBranch } from "lucide-react";

const services = [
  { icon: Server, title: "Custom API Development", desc: "Building robust, scalable RESTful APIs tailored to your business needs." },
  { icon: GitBranch, title: "Backend Architecture", desc: "Designing clean, maintainable backend systems using industry best practices." },
  { icon: Database, title: "Database Design & Optimization", desc: "Efficient relational database design with SQL Server for peak performance." },
  { icon: Shield, title: "Auth & Security", desc: "Implementing secure authentication and authorization with JWT and best practices." },
  { icon: Zap, title: "Performance Optimization", desc: "Profiling and optimizing applications for speed and scalability." },
  { icon: Layout, title: "Full-Stack Development", desc: "End-to-end web application development from backend to frontend." },
  { icon: Wrench, title: "Bug Fixing & Refactoring", desc: "Improving code quality, fixing bugs, and refactoring legacy codebases." },
  { icon: Code2, title: "Backend Integration", desc: "Seamless integration between frontend interfaces and backend systems." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm text-center">Services</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12 text-center">
          What I <span className="text-gradient">Offer</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group bg-gradient-card rounded-xl p-6 shadow-card border border-border hover:border-primary/40 transition-colors duration-300"
            >
              <s.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
