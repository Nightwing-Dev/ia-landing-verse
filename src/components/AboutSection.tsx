
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-portfolio-accent/10 text-portfolio-accent text-sm font-medium mb-6">
              About Me
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight mb-6">
              Hi, I'm Diego Ferro
            </h2>
            
            <p className="text-lg text-portfolio-neutral mb-6">
              I'm a UI/UX designer with over 7 years of experience creating digital experiences that users love. Based in Colombia, I've worked with clients globally to deliver intuitive and beautiful interfaces.
            </p>
            
            <p className="text-lg text-portfolio-neutral mb-8">
              With a background in visual design and a passion for user research, I take a human-centered approach to every project. I believe that great design is not just about aesthetics, but about solving real problems for real people.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold mb-2 text-portfolio-primary">Education</h3>
                <p className="text-portfolio-neutral">Master's in Interaction Design<br />Universidad de Los Andes</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-portfolio-primary">Experience</h3>
                <p className="text-portfolio-neutral">7+ Years<br />Working with global clients</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-portfolio-primary">Expertise</h3>
                <p className="text-portfolio-neutral">UI/UX Design<br />Design Systems, User Research</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-portfolio-primary">Tools</h3>
                <p className="text-portfolio-neutral">Figma, Adobe Suite<br />Sketch, Principle</p>
              </div>
            </div>
            
            <Button className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white btn-hover-effect">
              Download Resume <Download className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-8 -right-8 bottom-8 left-8 bg-portfolio-accent/10 rounded-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80" 
              alt="Diego Ferro" 
              className="relative z-10 w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
