
import React from 'react';
import { Search, Pencil, Users, Code } from "lucide-react";

const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      icon: <Search className="h-12 w-12 text-portfolio-accent" />,
      title: "Research",
      description: "I begin each project with thorough research to understand user needs, business goals, and industry context."
    },
    {
      icon: <Pencil className="h-12 w-12 text-portfolio-accent" />,
      title: "Design",
      description: "Creating intuitive wireframes and visual designs focused on solving problems and delighting users."
    },
    {
      icon: <Users className="h-12 w-12 text-portfolio-accent" />,
      title: "Test",
      description: "Conducting user testing to validate design solutions and identify areas for improvement."
    },
    {
      icon: <Code className="h-12 w-12 text-portfolio-accent" />,
      title: "Implement",
      description: "Working closely with developers to ensure designs are implemented with precision and care."
    }
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-portfolio-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white z-0 clip-path-diagonal"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-portfolio-accent/10 text-portfolio-accent text-sm font-medium mb-4">
            My Approach
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight mb-6">
            Design Process
          </h2>
          <p className="text-lg text-portfolio-neutral max-w-xl mx-auto">
            My structured approach ensures that every project delivers measurable results while creating experiences users love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-4">
                {step.title}
              </h3>
              <p className="text-portfolio-neutral">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .clip-path-diagonal {
          clip-path: polygon(100% 0, 100% 100%, 0 100%, 30% 0);
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
