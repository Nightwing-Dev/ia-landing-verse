
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Full-width background image - changed to a cleaner person-focused image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/80 to-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=2000&q=80" 
          alt="Design Professional" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-16 md:pt-0">
        <div className="max-w-3xl bg-portfolio-primary/10 backdrop-blur-sm p-8 rounded-xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-portfolio-accent text-white text-sm font-medium mb-8 shadow-lg animate-fade-in-fast">
            <span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>
            UI/UX Designer based in Colombia
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-tight text-white mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Creating <span className="text-portfolio-accent">Delightful</span> Digital Experiences
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I design user-centered digital solutions that solve real problems, focusing on intuitive interfaces with clean aesthetics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white btn-hover-effect">
              View Projects <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white backdrop-blur-sm hover:bg-white/10 btn-hover-effect">
              About Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-pulse-soft">
        <div className="text-white text-sm mb-2">Scroll</div>
        <div className="w-0.5 h-8 bg-white/50 rounded-full overflow-hidden">
          <div className="w-full h-1/2 bg-white animate-[scroll_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
