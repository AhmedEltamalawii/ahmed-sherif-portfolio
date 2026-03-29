import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/lib/projectData";

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
              className="bg-gradient-card rounded-xl overflow-hidden shadow-card border border-border group hover:border-primary/40 transition-colors duration-300 flex flex-col"
            >
              <div className="h-2 bg-primary/60 group-hover:bg-primary transition-colors" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed line-clamp-4">{p.overview}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-auto">
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
                  <Link
                    to={`/project/${p.slug}`}
                    className="ml-auto inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 font-medium transition-colors group/link"
                  >
                    Deep Dive
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
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
