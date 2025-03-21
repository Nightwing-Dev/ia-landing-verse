
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const items = heroRef.current.querySelectorAll('.parallax-item');
      
      items.forEach((item: Element) => {
        const parallaxItem = item as HTMLElement;
        const speed = parseFloat(parallaxItem.getAttribute('data-speed') || '0');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        parallaxItem.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen pt-32 overflow-hidden flex items-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-40 parallax-item" data-speed="2"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30 parallax-item" data-speed="3"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-100 rounded-full filter blur-3xl opacity-20 parallax-item" data-speed="1.5"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ia-accent/10 text-ia-accent text-sm font-medium mb-8 animate-fade-in-fast">
              <span className="flex h-2 w-2 rounded-full bg-ia-accent mr-2"></span>
              Intelligent Automation Redefined
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-tight md:leading-tight lg:leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Transform Your Business with <span className="text-ia-accent">Intelligent Automation</span>
            </h1>
            
            <p className="text-xl text-ia-neutral max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Leverage cutting-edge AI and automation solutions to streamline operations, enhance productivity, and drive unprecedented growth for your enterprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="bg-ia-accent hover:bg-ia-accent/90 text-white btn-hover-effect">
                Get Started <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-ia-muted text-ia-dark btn-hover-effect">
                Watch Demo <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-16 relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -top-8 -left-8 right-0 bottom-0 bg-ia-accent/5 rounded-xl"></div>
              <div className="glass-card relative overflow-hidden rounded-xl shadow-lg border border-white/20">
                <div className="relative z-10 p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" 
                    alt="IA Business Dashboard" 
                    className="rounded-lg w-full shadow-md animate-blur-in"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
