
import React from 'react';
import { Shield, BarChart3, AlertCircle, User, Info, Settings } from "lucide-react";

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
      <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center text-teal-600 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      title: "Comprehensive Protection",
      description: "Secure your business with our complete suite of financial protection solutions."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Risk Analytics",
      description: "Make informed decisions with our powerful risk assessment and analytics tools."
    },
    {
      icon: <AlertCircle size={24} />,
      title: "Fraud Prevention",
      description: "Detect and prevent fraudulent activities before they impact your business."
    },
    {
      icon: <User size={24} />,
      title: "Personalized Solutions",
      description: "Custom protection plans tailored to your business's specific needs and industry."
    },
    {
      icon: <Info size={24} />,
      title: "Expert Guidance",
      description: "Get strategic advice from our team of financial protection specialists."
    },
    {
      icon: <Settings size={24} />,
      title: "Easy Integration",
      description: "Seamlessly integrate our solutions with your existing financial systems."
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">Financial Protection Solutions</h2>
          <p className="section-subtitle mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Our comprehensive suite of tools helps businesses safeguard their finances, 
            prevent fraud, and secure their financial future.
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
