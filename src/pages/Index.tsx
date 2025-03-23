
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background gradients for glassmorphism effect */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-portfolio-accent/5 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-portfolio-primary/5 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full filter blur-3xl opacity-40"></div>
      </div>
      
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
