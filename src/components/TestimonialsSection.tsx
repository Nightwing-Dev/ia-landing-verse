
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  achievement: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Since joining IRON PULSE, I've lost 30 pounds and gained so much confidence. The trainers are incredible and the community keeps me motivated every day.",
      author: "Sarah Johnson",
      role: "Member",
      achievement: "Lost 30 lbs in 6 months",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      content: "As a busy professional, I needed a gym with flexible hours and efficient workouts. IRON PULSE delivered on both, plus their trainers know exactly how to push me to my limits.",
      author: "Michael Chen",
      role: "Member",
      achievement: "Gained 15 lbs of muscle",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      content: "The group classes at IRON PULSE completely changed my fitness routine. The energy is amazing, and I've made great friends while getting in the best shape of my life.",
      author: "Emma Rodriguez",
      role: "Member",
      achievement: "Completed first marathon",
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
    <section id="testimonials" className="section-padding bg-indigo-900 text-white bg-gradient-to-br from-indigo-900 to-indigo-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 backdrop-blur-lg bg-white/10 p-8 rounded-xl border border-white/10 shadow-md">
          <h2 className="section-title text-white animate-fade-in">Success Stories</h2>
          <p className="section-subtitle text-indigo-200 mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hear from our members who have transformed their bodies and lives with IRON PULSE.
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
                  <div className="backdrop-blur-2xl bg-white/10 rounded-xl p-8 md:p-10 border border-white/10 shadow-lg">
                    <Quote className="text-indigo-400 mb-6 h-10 w-10 opacity-80" />
                    <p className="text-xl mb-8">{testimonial.content}</p>
                    
                    <div className="flex items-center backdrop-blur-md bg-white/5 p-3 rounded-lg border border-white/10">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white/20"
                      />
                      <div>
                        <h4 className="font-medium">{testimonial.author}</h4>
                        <p className="text-indigo-300 text-sm">{testimonial.achievement}</p>
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
                  index === current ? "bg-indigo-400" : "bg-white/20 hover:bg-white/30"
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
              className="text-white backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-full p-3 pointer-events-auto border border-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="text-white backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-full p-3 pointer-events-auto border border-white/10"
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
