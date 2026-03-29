import { motion } from "framer-motion";
import { Code2, Database, Shield, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code" },
  { icon: Database, label: "Database Expert" },
  { icon: Shield, label: "Security Focused" },
  { icon: Zap, label: "High Performance" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">About Me</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            The Architectural <span className="text-gradient">Perspective</span>
          </h2>
          <p className="text-primary/80 font-medium text-lg mb-8 font-display">
            Software Engineering Student & Full-Stack .NET Developer
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I am a Senior Software Engineering student at the Faculty of Information Technology, dedicated to building end-to-end web applications that are as robust as they are scalable.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            With a core focus on <span className="text-foreground font-medium">Backend Architecture</span>, I specialize in transforming complex business requirements into high-performance digital solutions. My approach combines the precision of ASP.NET Core and SQL Server with the flexibility of modern frontend tools.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-12">
            I don't just build features; I architect systems using <span className="text-foreground font-medium">Clean Code</span> and <span className="text-foreground font-medium">SOLID principles</span> to ensure every project is maintainable, secure, and production-ready from the database layer to the user interface.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gradient-card rounded-xl p-5 shadow-card border border-border text-center"
              >
                <h.icon className="mx-auto mb-3 text-primary" size={28} />
                <p className="text-sm font-medium text-foreground">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default AboutSection;
