import { motion } from "framer-motion";

const backend = [
  "ASP.NET Core", "C#", ".NET 6 / .NET 8", "RESTful APIs",
  "Entity Framework Core", "LINQ", "SQL Server", "Database Design",
  "JWT Auth", "Clean Architecture", "SOLID Principles", "SignalR", "N-Tier Architecture",
];

const frontend = ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"];

const tools = ["Git & GitHub", "Visual Studio", "Postman", "Docker"];

const SkillGroup = ({ title, skills, delay }: { title: string; skills: string[]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-gradient-card rounded-xl p-6 shadow-card border border-border"
  >
    <h3 className="font-display text-lg font-semibold mb-4 text-primary">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm text-center">Skills</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-gradient">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <SkillGroup title="Backend" skills={backend} delay={0} />
          <SkillGroup title="Frontend" skills={frontend} delay={0.15} />
          <SkillGroup title="Tools" skills={tools} delay={0.3} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
