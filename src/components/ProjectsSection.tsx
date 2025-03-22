
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "FinTech Dashboard",
      category: "UX/UI Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive financial management dashboard with intuitive data visualization."
    },
    {
      id: 2,
      title: "Travel App Redesign",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&w=800&q=80",
      description: "Reimagined user experience for a popular travel booking application."
    },
    {
      id: 3,
      title: "E-commerce Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
      description: "Clean and conversion-focused design for an online fashion retailer."
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-portfolio-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-portfolio-accent/10 text-portfolio-accent text-sm font-medium mb-4">
            Selected Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight mb-6">
            Recent Design Projects
          </h2>
          <p className="text-lg text-portfolio-neutral max-w-xl mx-auto">
            Explore a selection of my latest UI/UX design work, showcasing my approach to solving design challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="text-white text-sm font-medium">{project.category}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                <p className="text-portfolio-neutral mb-4">{project.description}</p>
                <Button variant="link" className="text-portfolio-accent p-0 hover:text-portfolio-accent/80 font-medium">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="border-portfolio-muted text-portfolio-primary btn-hover-effect">
            View All Projects <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
