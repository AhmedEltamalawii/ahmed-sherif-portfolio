import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-developer.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">Backend .NET Developer</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ahmed <span className="text-gradient">Sherif</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-4 font-display">
              Building Scalable Web Solutions
            </p>
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
              I design and develop secure, high-performance backend systems and modern web applications using .NET technologies and clean architecture principles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4]">
              {/* Outer glow */}
              <div className="absolute -inset-3 bg-primary/20 rounded-[30px] blur-2xl animate-pulse" />
              {/* Glowing border */}
              <div className="absolute -inset-[3px] rounded-[27px] bg-gradient-to-br from-primary via-primary/40 to-primary/80 opacity-70" />
              {/* Image container */}
              <div className="relative w-full h-full rounded-[25px] overflow-hidden shadow-[0_20px_60px_-15px_hsl(217_91%_60%/0.3),0_10px_30px_-10px_hsl(220_30%_4%/0.6)]">
                <img
                  src={heroImage}
                  alt="Ahmed Sherif - Backend .NET Developer"
                  className="w-full h-full object-cover object-[center_15%]"
                />
                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
