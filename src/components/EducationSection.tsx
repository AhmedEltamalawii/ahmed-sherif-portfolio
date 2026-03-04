import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const learningFocus = [
  "ASP.NET Core & .NET 6/8",
  "Database Design & SQL Optimization",
  "Frontend fundamentals (HTML, CSS, JS)",
  "RESTful API Development",
  "Authentication & Authorization (JWT)",
  "Clean Architecture & SOLID Principles",
];

const EducationSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm text-center">Education</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12 text-center">
            Educational <span className="text-gradient">Background</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-card rounded-xl p-8 shadow-card border border-border">
              <GraduationCap className="text-primary mb-4" size={32} />
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">Formal Education</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Bachelor's Degree in Computer Science</li>
                <li>• Specialized training in .NET development</li>
                <li>• Continuous self-learning in backend systems</li>
              </ul>
            </div>

            <div className="bg-gradient-card rounded-xl p-8 shadow-card border border-border">
              <BookOpen className="text-primary mb-4" size={32} />
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">Technical Focus</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {learningFocus.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
