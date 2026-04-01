import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft, Images } from "lucide-react";
import { getProjectBySlug, iconMap, techColors } from "@/lib/projectData";
import ImageGallery from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createElement } from "react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/#projects" className="text-primary hover:underline">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm"
            >
              <ArrowLeft size={16} /> Back to Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-card rounded-2xl border border-border overflow-hidden shadow-card"
          >
            <div className="h-1.5 bg-primary/60" />
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Column */}
              <div className="p-8 lg:p-10 lg:border-r border-border flex flex-col">
                <div className="mb-8">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                    Project Deep Dive
                  </span>
                  <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2">
                    {project.title}
                  </h1>
                  <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-4">
                    Key Technical Features
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((f, i) => {
                      const IconComponent = iconMap[f.icon];
                      return (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                          <span className="text-primary mt-0.5 shrink-0">
                            {IconComponent && createElement(IconComponent, { size: 18 })}
                          </span>
                          {f.label}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-4">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((t) => (
                      <span
                        key={t.label}
                        className={`px-3 py-1.5 text-xs rounded-full border font-medium ${techColors[t.color]}`}
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-border">
                  {project.github && project.github !== "private" && (
                    <Button variant="hero" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} /> View on GitHub
                      </a>
                    </Button>
                  )}
                  {project.github === "private" && (
                    <Button variant="hero" size="sm" className="cursor-default opacity-80">
                      <Github size={16} /> Private Repo — Contact Me
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
              <div className="p-8 lg:p-10">
                <ImageGallery images={project.images} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
