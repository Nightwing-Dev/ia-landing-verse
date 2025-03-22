
import React from 'react';
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-portfolio-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="font-display font-bold text-xl mb-2">Diego Ferro</h3>
            <p className="text-portfolio-neutral text-sm">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
          
          <div className="flex items-center space-x-8 mt-6 md:mt-0">
            <a href="#projects" className="text-portfolio-neutral hover:text-white transition-colors text-sm">Projects</a>
            <a href="#about" className="text-portfolio-neutral hover:text-white transition-colors text-sm">About</a>
            <a href="#process" className="text-portfolio-neutral hover:text-white transition-colors text-sm">Process</a>
            <a href="#contact" className="text-portfolio-neutral hover:text-white transition-colors text-sm">Contact</a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 w-10 h-10 rounded-full bg-portfolio-accent flex items-center justify-center hover:bg-portfolio-accent/90 transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
