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
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">
            Passionate <span className="text-gradient">Backend Developer</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Ahmed Sherif is a passionate Backend .NET Developer with strong experience in building scalable, secure, and high-performance web applications. He specializes in ASP.NET Core, RESTful APIs, and SQL Server, with a solid understanding of system architecture and backend optimization.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-12">
            With a problem-solving mindset and attention to clean code principles, Ahmed focuses on writing maintainable, efficient, and scalable solutions that power modern digital platforms.
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
