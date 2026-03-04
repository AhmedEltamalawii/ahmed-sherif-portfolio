import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const experiences = [
  "Building RESTful APIs using ASP.NET Core",
  "Implementing secure authentication systems",
  "Designing relational databases using SQL Server",
  "Optimizing application performance",
  "Structuring scalable and maintainable backend architecture",
  "Integrating frontend interfaces with backend APIs",
];

const ExperienceSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm text-center">Experience</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-center">
            Work & <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Ahmed has worked on designing and developing backend systems for web applications including:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 bg-gradient-card rounded-lg p-4 border border-border"
              >
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-foreground">{exp}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-muted-foreground text-center mt-8 text-sm">
            He collaborates effectively and follows best development practices including Git version control and structured project organization.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
