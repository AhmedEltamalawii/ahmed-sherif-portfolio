import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm italic mb-4">
          "Building powerful backend systems that drive modern applications."
        </p>
        <div className="flex justify-center gap-5 mb-4">
          <a href="mailto:ahmedsherifelatmalawii@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
          <a href="https://linkedin.com/in/ahmedsherif" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/AhmedEltamalawii" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
        </div>
        <p className="text-muted-foreground text-xs">
          © 2026 Ahmed Sherif. All Rights Reserved.
        </p>
        <p className="text-muted-foreground text-xs mt-1">
          Email: ahmedsherifelatmalawii@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
