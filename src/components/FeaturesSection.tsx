
import React from 'react';
import { Brain, BarChart3, Zap, Shield, RefreshCw, Globe } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
      style={{ animationDelay: delay }}
    >
      <div className="bg-ia-accent/10 w-12 h-12 rounded-lg flex items-center justify-center text-ia-accent mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-ia-neutral">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: "AI-Powered Insights",
      description: "Leverage machine learning algorithms to extract valuable insights from your business data."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Advanced Analytics",
      description: "Transform raw data into actionable intelligence with our powerful analytics platform."
    },
    {
      icon: <Zap size={24} />,
      title: "Process Automation",
      description: "Streamline operations and eliminate manual tasks with intelligent workflow automation."
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      description: "Protect your data with enterprise-grade security protocols and compliance measures."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Seamless Integration",
      description: "Connect with your existing systems and applications without disrupting operations."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Scalability",
      description: "Scale your automation initiatives across departments, regions, and business units."
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-ia-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">Intelligent Solutions for Modern Enterprises</h2>
          <p className="section-subtitle mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Our comprehensive suite of automation tools helps businesses streamline processes, 
            reduce costs, and accelerate digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={`${0.1 + (index * 0.1)}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
