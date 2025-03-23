
import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight, LucideIcon, Lightbulb, Cpu, Palette, Shapes } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  number: number;
  isActive?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  icon: Icon,
  title,
  description,
  number,
  isActive = false
}) => {
  return (
    <Card className={cn(
      "relative p-6 transition-all duration-300 overflow-hidden border-none shadow-md",
      isActive 
        ? "bg-portfolio-accent text-white"
        : "bg-white hover:bg-portfolio-accent/5"
    )}>
      <span className={cn(
        "absolute top-0 right-0 font-display font-bold text-8xl leading-none opacity-10 -mt-4 mr-2",
        isActive ? "text-white" : "text-portfolio-accent"
      )}>
        {number}
      </span>
      
      <div className="mb-4">
        <div className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4",
          isActive 
            ? "bg-white text-portfolio-accent" 
            : "bg-portfolio-accent/10 text-portfolio-accent"
        )}>
          <Icon size={24} />
        </div>
        
        <h3 className="text-xl font-display font-medium mb-2">{title}</h3>
        <p className={cn(
          "text-base",
          isActive ? "text-white/90" : "text-portfolio-primary/70"
        )}>
          {description}
        </p>
      </div>
      
      <div className="mt-4">
        <a href="#contact" className={cn(
          "inline-flex items-center text-sm font-medium",
          isActive ? "text-white" : "text-portfolio-accent"
        )}>
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </Card>
  );
};

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <style dangerouslySetInnerHTML={{__html: `
        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
      `}}></style>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">My Design Process</h2>
          <p className="text-lg text-portfolio-primary/70">
            A structured approach that combines creativity with strategic thinking to deliver exceptional user experiences.
          </p>
        </div>
        
        <div className="process-grid">
          <ProcessStep 
            icon={Lightbulb}
            title="Discovery"
            description="I dive deep into understanding your users, business goals, and market landscape to identify key opportunities."
            number={1}
            isActive={true}
          />
          
          <ProcessStep 
            icon={Cpu}
            title="Strategy"
            description="Based on research insights, I create a detailed roadmap and information architecture to guide the design process."
            number={2}
          />
          
          <ProcessStep 
            icon={Palette}
            title="Design"
            description="I craft intuitive interfaces with careful attention to visual hierarchy, typography, and accessibility."
            number={3}
          />
          
          <ProcessStep 
            icon={Shapes}
            title="Implementation"
            description="I work closely with developers to ensure the design vision is executed perfectly down to the details."
            number={4}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
