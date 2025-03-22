
import React from 'react';
import { Dumbbell, Heart, Zap, Users, Clock, Award } from "lucide-react";

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
      <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
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
      icon: <Dumbbell size={24} />,
      title: "Premium Equipment",
      description: "State-of-the-art workout machines and free weights for every fitness level."
    },
    {
      icon: <Heart size={24} />,
      title: "Personal Training",
      description: "Expert trainers create customized workout plans tailored to your goals."
    },
    {
      icon: <Users size={24} />,
      title: "Group Classes",
      description: "Energizing classes including HIIT, yoga, cycling, and more to keep you motivated."
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Access",
      description: "Work out on your schedule with round-the-clock facility access for members."
    },
    {
      icon: <Zap size={24} />,
      title: "Recovery Zone",
      description: "Dedicated recovery areas with foam rollers, stretching equipment, and saunas."
    },
    {
      icon: <Award size={24} />,
      title: "Nutrition Coaching",
      description: "Expert nutrition guidance to maximize your results inside and outside the gym."
    }
  ];

  return (
    <section id="facilities" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">World-Class Facilities</h2>
          <p className="section-subtitle mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Our comprehensive suite of equipment and services helps you achieve your fitness goals,
            whether you're just starting or taking your fitness to the next level.
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
