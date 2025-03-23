
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Leaf, Send, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const GreenLanding = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Initialize scroll position
    setScrollY(window.scrollY);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate element offsets based on mouse position
  const calcMouseOffset = (factor: number = 0.02) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const offsetX = (mousePosition.x - centerX) * factor;
    const offsetY = (mousePosition.y - centerY) * factor;
    
    return { offsetX, offsetY };
  };

  const { offsetX, offsetY } = calcMouseOffset();

  // Check if element is in viewport for scroll animations
  const isInViewport = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };

  // Apply scroll animation classes on scroll
  useEffect(() => {
    const animateElements = document.querySelectorAll('.scroll-animate');
    
    animateElements.forEach((element) => {
      if (isInViewport(element as HTMLElement)) {
        element.classList.add('animate-in');
      }
    });

    const handleScrollAnimation = () => {
      animateElements.forEach((element) => {
        if (isInViewport(element as HTMLElement)) {
          element.classList.add('animate-in');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    
    // Initial check
    handleScrollAnimation();
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-green-900">
      {/* Mouse-following decorative elements */}
      <div 
        className="fixed pointer-events-none z-10 opacity-30 w-40 h-40 rounded-full bg-gradient-to-br from-green-300 to-green-500 blur-3xl transition-transform duration-500 ease-out-expo"
        style={{ 
          transform: `translate(${mousePosition.x - 80}px, ${mousePosition.y - 80}px)`,
          opacity: 0.15
        }}
      />
      
      {/* Background shapes */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-10 -right-10 w-[600px] h-[600px] bg-green-100 rounded-full filter blur-3xl opacity-30"
          style={{ 
            transform: `translate(${offsetX * 0.5}px, ${offsetY * 0.5}px)` 
          }}
        />
        <div 
          className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-green-200 rounded-full filter blur-3xl opacity-20"
          style={{ 
            transform: `translate(${offsetX * -0.3}px, ${offsetY * -0.3}px)` 
          }}
        />
        <div 
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-emerald-100 rounded-full filter blur-3xl opacity-20"
          style={{ 
            transform: `translate(${offsetX * 0.2}px, ${offsetY * 0.2}px)` 
          }}
        />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-white/30 border-b border-white/20 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <Leaf className="text-green-600 h-6 w-6" />
              <span className="font-medium text-xl text-green-800">Verdant</span>
            </a>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-green-700 hover:text-green-500 transition-colors duration-200">Features</a>
              <a href="#about" className="text-green-700 hover:text-green-500 transition-colors duration-200">About</a>
              <a href="#services" className="text-green-700 hover:text-green-500 transition-colors duration-200">Services</a>
              <a href="#contact" className="text-green-700 hover:text-green-500 transition-colors duration-200">Contact</a>
            </nav>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" className="hidden md:flex border-green-200 hover:border-green-300 hover:bg-green-50 text-green-700">
                Log in
              </Button>
              <Button className="bg-green-600 text-white hover:bg-green-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center pt-20" id="hero">
        <div className="container mx-auto px-4 md:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 scroll-animate fade-up-animation">
              <h5 className="text-green-600 font-medium mb-4 flex items-center gap-2">
                <span className="inline-block w-8 h-[2px] bg-green-500"></span>
                Sustainable Solutions
              </h5>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-medium text-green-900 leading-tight mb-6">
                Create a <span className="text-green-600">greener</span> future with our platform
              </h1>
              <p className="text-green-700/80 text-lg mb-8 max-w-lg">
                Our minimalist approach to sustainability helps organizations reduce their environmental impact while improving efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Get Started <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-green-200 hover:border-green-300 hover:bg-green-50 text-green-700">
                  Learn More
                </Button>
              </div>
              
              <div className="mt-12 flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                        alt="User avatar" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="text-green-600 font-medium">500+ companies</div>
                  <div className="text-green-700/70 text-sm">Trust our platform</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 scroll-animate fade-up-animation" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-green-100 rounded-3xl blur-xl opacity-30 transform rotate-3"></div>
                <div 
                  className="relative backdrop-blur-sm bg-white/30 p-3 rounded-3xl border border-white/30 shadow-xl overflow-hidden"
                  style={{ 
                    transform: `perspective(1000px) rotateY(${offsetX * 0.01}deg) rotateX(${-offsetY * 0.01}deg)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Sustainable Environment" 
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                  
                  <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/30 p-4 rounded-xl border border-white/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-green-900 font-medium">Reduced CO2 Emissions</h3>
                        <p className="text-green-700/80 text-sm">15% reduction this month</p>
                      </div>
                      <div className="bg-green-100 h-12 w-12 rounded-full flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                          <ArrowDown className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 scroll-animate fade-up-animation">
            <h5 className="text-green-600 font-medium mb-4 inline-flex items-center gap-2">
              <span className="inline-block w-8 h-[2px] bg-green-500"></span>
              Our Features
              <span className="inline-block w-8 h-[2px] bg-green-500"></span>
            </h5>
            <h2 className="text-3xl md:text-4xl font-medium text-green-900 mb-6">
              Simple Solutions for Complex Problems
            </h2>
            <p className="text-green-700/80 max-w-2xl mx-auto">
              Our platform provides the tools you need to monitor, manage, and reduce your environmental impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Analytics",
                description: "Real-time tracking of sustainability metrics with actionable insights.",
                delay: 0.1
              },
              {
                title: "Eco Automation",
                description: "Intelligent systems that optimize energy usage and reduce waste.",
                delay: 0.2
              },
              {
                title: "Carbon Tracking",
                description: "Measure and offset your carbon footprint with transparent reporting.",
                delay: 0.3
              },
              {
                title: "Resource Management",
                description: "Efficiently allocate and utilize resources to minimize environmental impact.",
                delay: 0.4
              },
              {
                title: "Sustainable Planning",
                description: "Strategic guidance for implementing green initiatives across operations.",
                delay: 0.5
              },
              {
                title: "ESG Reporting",
                description: "Comprehensive environmental, social, and governance reporting tools.",
                delay: 0.6
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="scroll-animate fade-up-animation backdrop-blur-sm bg-white/50 p-6 rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${feature.delay}s` }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                  {index % 3 === 0 && <Leaf className="h-6 w-6" />}
                  {index % 3 === 1 && <ArrowDown className="h-6 w-6" />}
                  {index % 3 === 2 && <ExternalLink className="h-6 w-6" />}
                </div>
                <h3 className="text-xl font-medium text-green-900 mb-3">{feature.title}</h3>
                <p className="text-green-700/80 mb-6">{feature.description}</p>
                <a href="#" className="text-green-600 font-medium inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate fade-up-animation">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 rounded-3xl blur-xl opacity-30 transform -rotate-2"></div>
                <div 
                  className="relative backdrop-blur-sm bg-white/30 p-3 rounded-3xl border border-white/30 shadow-xl overflow-hidden"
                  style={{ 
                    transform: `perspective(1000px) rotateY(${offsetX * 0.01}deg) rotateX(${-offsetY * 0.01}deg)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Our Mission" 
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="scroll-animate fade-up-animation" style={{ animationDelay: '0.2s' }}>
              <h5 className="text-green-600 font-medium mb-4 flex items-center gap-2">
                <span className="inline-block w-8 h-[2px] bg-green-500"></span>
                About Us
              </h5>
              <h2 className="text-3xl md:text-4xl font-medium text-green-900 leading-tight mb-6">
                Pioneering Sustainability Through Technology
              </h2>
              <p className="text-green-700/80 mb-6">
                Founded in 2020, Verdant has been at the forefront of developing innovative solutions to environmental challenges. Our team of experts combines deep knowledge in environmental science with cutting-edge technology.
              </p>
              <p className="text-green-700/80 mb-8">
                We believe that sustainability shouldn't be complicated. By providing simple, effective tools, we help organizations take meaningful action towards a more sustainable future.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="backdrop-blur-sm bg-white/40 p-4 rounded-lg border border-white/30">
                  <h3 className="text-2xl font-medium text-green-600 mb-2">500+</h3>
                  <p className="text-green-700/80">Active clients worldwide</p>
                </div>
                <div className="backdrop-blur-sm bg-white/40 p-4 rounded-lg border border-white/30">
                  <h3 className="text-2xl font-medium text-green-600 mb-2">30%</h3>
                  <p className="text-green-700/80">Average emission reduction</p>
                </div>
              </div>
              
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Learn Our Story <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 scroll-animate fade-up-animation">
            <h5 className="text-green-600 font-medium mb-4 inline-flex items-center gap-2">
              <span className="inline-block w-8 h-[2px] bg-green-500"></span>
              Our Services
              <span className="inline-block w-8 h-[2px] bg-green-500"></span>
            </h5>
            <h2 className="text-3xl md:text-4xl font-medium text-green-900 mb-6">
              Comprehensive Sustainability Solutions
            </h2>
            <p className="text-green-700/80 max-w-2xl mx-auto">
              Tailored services to meet your organization's unique environmental goals and challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Sustainability Auditing",
                description: "Comprehensive assessment of your current environmental impact and identification of improvement opportunities.",
                delay: 0.1
              },
              {
                title: "Implementation Strategy",
                description: "Customized plans for implementing sustainable practices across your organization.",
                delay: 0.2
              },
              {
                title: "Carbon Offsetting",
                description: "Access to verified carbon offset projects to balance your unavoidable emissions.",
                delay: 0.3
              },
              {
                title: "Ongoing Support",
                description: "Continuous monitoring and optimization of your sustainability initiatives.",
                delay: 0.4
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="scroll-animate fade-up-animation backdrop-blur-sm bg-white/50 p-8 rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${service.delay}s` }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                  {index % 2 === 0 && <Leaf className="h-6 w-6" />}
                  {index % 2 === 1 && <ExternalLink className="h-6 w-6" />}
                </div>
                <h3 className="text-xl font-medium text-green-900 mb-3">{service.title}</h3>
                <p className="text-green-700/80 mb-6">{service.description}</p>
                <Button variant="outline" className="border-green-200 hover:border-green-300 hover:bg-green-50 text-green-700">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto scroll-animate fade-up-animation">
            <div className="backdrop-blur-sm bg-white/50 p-8 md:p-12 rounded-2xl border border-white/30 shadow-lg">
              <div className="text-center mb-12">
                <h5 className="text-green-600 font-medium mb-4 inline-flex items-center justify-center gap-2">
                  <span className="inline-block w-8 h-[2px] bg-green-500"></span>
                  Get In Touch
                  <span className="inline-block w-8 h-[2px] bg-green-500"></span>
                </h5>
                <h2 className="text-3xl md:text-4xl font-medium text-green-900 mb-6">
                  Ready to start your sustainability journey?
                </h2>
                <p className="text-green-700/80 max-w-2xl mx-auto">
                  Contact us today to learn how we can help your organization reduce its environmental footprint.
                </p>
              </div>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-green-800 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-green-100 bg-white/70 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-green-800 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-green-100 bg-white/70 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-green-800 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-green-100 bg-white/70 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-green-800 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-green-100 bg-white/70 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your phone"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-green-800 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-green-100 bg-white/70 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                    Send Message <Send className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-green-50 border-t border-green-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4">
                <Leaf className="text-green-600 h-6 w-6" />
                <span className="font-medium text-xl text-green-800">Verdant</span>
              </a>
              <p className="text-green-700/80 mb-6 max-w-md">
                Empowering organizations with simple, effective tools to create a more sustainable future.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-600 border border-green-100 hover:bg-green-50 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-600 border border-green-100 hover:bg-green-50 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-600 border border-green-100 hover:bg-green-50 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-600 border border-green-100 hover:bg-green-50 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium text-green-800 mb-4">Quick Links</h5>
              <ul className="space-y-3">
                <li><a href="#features" className="text-green-700/80 hover:text-green-600 transition-colors">Features</a></li>
                <li><a href="#about" className="text-green-700/80 hover:text-green-600 transition-colors">About Us</a></li>
                <li><a href="#services" className="text-green-700/80 hover:text-green-600 transition-colors">Services</a></li>
                <li><a href="#contact" className="text-green-700/80 hover:text-green-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-green-800 mb-4">Contact</h5>
              <ul className="space-y-3">
                <li className="flex items-start text-green-700/80">
                  <svg className="h-5 w-5 text-green-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Green Street, Eco City, 10001</span>
                </li>
                <li className="flex items-start text-green-700/80">
                  <svg className="h-5 w-5 text-green-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@verdant.com</span>
                </li>
                <li className="flex items-start text-green-700/80">
                  <svg className="h-5 w-5 text-green-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          
          <hr className="border-green-100 my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-700/80 text-sm">© 2023 Verdant. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-green-700/80 hover:text-green-600 text-sm">Privacy Policy</a>
              <a href="#" className="text-green-700/80 hover:text-green-600 text-sm">Terms of Service</a>
              <a href="#" className="text-green-700/80 hover:text-green-600 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GreenLanding;
