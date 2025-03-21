
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const BenefitsSection: React.FC = () => {
  const benefits = [
    "40% reduction in operational costs",
    "60% faster processing times",
    "90% decrease in manual errors",
    "3x increase in employee productivity",
    "Quick ROI with 6-month payback period",
    "24/7 automated operations"
  ];

  return (
    <section id="benefits" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-6 -right-6 left-0 bottom-0 bg-ia-accent/5 rounded-xl"></div>
              <div className="glass-card relative overflow-hidden rounded-xl shadow-lg border border-white/20">
                <div className="relative z-10 p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80" 
                    alt="AI Technology" 
                    className="rounded-lg w-full shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ia-accent/10 text-ia-accent text-sm font-medium mb-6 animate-fade-in-fast">
              <span className="flex h-2 w-2 rounded-full bg-ia-accent mr-2"></span>
              Proven Results
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-semibold leading-tight mb-6 animate-fade-in">
              Transformative Benefits for Your Enterprise
            </h2>
            
            <p className="text-ia-neutral mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Our clients experience significant improvements across all aspects of their business operations. By automating routine tasks and leveraging AI for decision-making, your organization can achieve:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "flex items-start gap-3 animate-slide-in",
                  )}
                  style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                >
                  <CheckCircle className="text-ia-accent mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
