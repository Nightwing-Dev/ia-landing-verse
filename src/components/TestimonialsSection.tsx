
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      content: "IA Business has revolutionized our approach to data processing. We've seen a 40% reduction in operational costs and significantly improved decision-making capabilities.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechSolutions Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      content: "The automation solutions provided by IA Business have transformed our customer service department. Response times are down 70% and customer satisfaction is at an all-time high.",
      author: "Michael Chen",
      role: "Director of Operations",
      company: "Global Services Ltd.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      content: "Implementing IA Business's AI-powered analytics platform gave us insights we never thought possible. Our strategic decisions are now backed by reliable data and predictive models.",
      author: "Emma Rodriguez",
      role: "Data Science Lead",
      company: "Innovative Analytics",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-ia-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-white animate-fade-in">What Our Clients Say</h2>
          <p className="section-subtitle text-ia-neutral mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Discover how businesses across industries have transformed their operations with our intelligent automation solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div 
            ref={testimonialsRef}
            className="relative overflow-hidden"
          >
            <div 
              className={cn(
                "flex transition-all duration-500 ease-out-expo",
                isAnimating ? "opacity-0" : "opacity-100"
              )}
              style={{ 
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 md:p-10 border border-white/5">
                    <Quote className="text-ia-accent mb-6 h-10 w-10 opacity-80" />
                    <p className="text-xl mb-8">{testimonial.content}</p>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium">{testimonial.author}</h4>
                        <p className="text-ia-neutral text-sm">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrent(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === current ? "bg-ia-accent" : "bg-white/20 hover:bg-white/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="hidden md:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 justify-between pointer-events-none">
            <Button
              variant="ghost"
              size="icon"
              onClick={prev}
              className="text-white bg-white/10 hover:bg-white/20 rounded-full p-3 pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="text-white bg-white/10 hover:bg-white/20 rounded-full p-3 pointer-events-auto"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
