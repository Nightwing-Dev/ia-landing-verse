
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full filter blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-600 text-sm font-medium mb-6 animate-fade-in-fast">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
            Start Today
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-semibold leading-tight mb-6 animate-fade-in">
            Protect Your Business's Financial Future
          </h2>
          
          <p className="text-gray-600 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Join thousands of businesses that have strengthened their financial security with Fortesza's comprehensive protection solutions.
          </p>
          
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white btn-hover-effect animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Get Started Now <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
