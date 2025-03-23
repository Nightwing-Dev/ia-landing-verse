
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "backdrop-blur-xl bg-white/80 border-b border-white/10 shadow-sm py-3" 
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="font-display font-bold text-xl md:text-2xl text-portfolio-primary">Diego Ferro</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="text-portfolio-primary/80 hover:text-portfolio-accent transition-colors duration-200">Projects</a>
            <a href="#about" className="text-portfolio-primary/80 hover:text-portfolio-accent transition-colors duration-200">About</a>
            <a href="#process" className="text-portfolio-primary/80 hover:text-portfolio-accent transition-colors duration-200">Process</a>
            <a href="#testimonials" className="text-portfolio-primary/80 hover:text-portfolio-accent transition-colors duration-200">Testimonials</a>
            <a href="#contact" className="text-portfolio-primary/80 hover:text-portfolio-accent transition-colors duration-200">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-portfolio-muted text-portfolio-primary btn-hover-effect">
              Resume
            </Button>
            <Button className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white btn-hover-effect">
              Get in Touch <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <button 
            className="md:hidden text-portfolio-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 backdrop-blur-xl bg-white/90 z-40 pt-20 px-4 transition-all duration-300 ease-out-expo md:hidden",
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-6 py-8">
          <a 
            href="#projects" 
            className="text-xl font-medium text-portfolio-primary py-2 border-b border-portfolio-muted/50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#about" 
            className="text-xl font-medium text-portfolio-primary py-2 border-b border-portfolio-muted/50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#process" 
            className="text-xl font-medium text-portfolio-primary py-2 border-b border-portfolio-muted/50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Process
          </a>
          <a 
            href="#testimonials" 
            className="text-xl font-medium text-portfolio-primary py-2 border-b border-portfolio-muted/50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="text-xl font-medium text-portfolio-primary py-2 border-b border-portfolio-muted/50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          
          <div className="flex flex-col space-y-4 pt-4">
            <Button variant="outline" className="w-full justify-center border-portfolio-muted text-portfolio-primary">
              Resume
            </Button>
            <Button className="w-full justify-center bg-portfolio-accent hover:bg-portfolio-accent/90 text-white">
              Get in Touch <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
