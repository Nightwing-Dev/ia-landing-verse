
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">Ready to Transform Your Business?</h2>
          <p className="section-subtitle mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Get in touch with our team of experts to discuss how intelligent automation can 
            drive innovation and efficiency in your organization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card rounded-xl p-8 border border-ia-muted/60">
              <h3 className="text-2xl font-medium mb-6">Send Us a Message</h3>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ia-dark mb-1">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="w-full border-ia-muted/60"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ia-dark mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full border-ia-muted/60"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-ia-dark mb-1">
                    Company
                  </label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    className="w-full border-ia-muted/60"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ia-dark mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your automation needs..."
                    className="w-full border-ia-muted/60 resize-none"
                    rows={5}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-ia-accent hover:bg-ia-accent/90 text-white btn-hover-effect">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card rounded-xl p-8 border border-ia-muted/60 mb-8">
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-ia-accent/10 p-3 rounded-lg text-ia-accent mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-ia-neutral">contact@iabusiness.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ia-accent/10 p-3 rounded-lg text-ia-accent mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-ia-neutral">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ia-accent/10 p-3 rounded-lg text-ia-accent mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Visit Us</h4>
                    <p className="text-ia-neutral">123 Innovation Drive<br />Tech District, CA 94103</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8 border border-ia-muted/60 bg-ia-light">
              <h3 className="text-2xl font-medium mb-6">Business Hours</h3>
              <p className="text-ia-neutral mb-4">Our team is available to assist you during the following hours:</p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
