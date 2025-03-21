
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-ia-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-ia-accent/10 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ia-accent/10 rounded-full filter blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-ia-accent/10 text-ia-accent text-sm font-medium mb-6 animate-fade-in-fast">
            <span className="flex h-2 w-2 rounded-full bg-ia-accent mr-2"></span>
            Limited Time Offer
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-semibold leading-tight mb-6 animate-fade-in">
            Start Your Automation Journey Today
          </h2>
          
          <p className="text-ia-neutral text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Schedule a free consultation with our experts and receive a personalized 
            automation roadmap tailored to your business needs.
          </p>
          
          <Button size="lg" className="bg-ia-accent hover:bg-ia-accent/90 text-white btn-hover-effect animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Book Your Free Consultation <ChevronRight className="ml-1 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
