
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-ia-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="font-display font-bold text-xl mb-6">IA Business</h3>
            <p className="text-ia-neutral mb-6 max-w-xs">
              Transforming businesses with intelligent automation solutions designed for the modern enterprise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-ia-neutral hover:text-ia-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-ia-neutral hover:text-ia-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-ia-neutral hover:text-ia-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-ia-neutral hover:text-ia-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-ia-neutral hover:text-white transition-colors">Process Automation</a></li>
              <li><a href="#" className="text-ia-neutral hover:text-white transition-colors">AI Integration</a></li>
              <li><a href="#" className="text-ia-neutral hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#" className="text-ia-neutral hover:text-white transition-colors">Cloud Migration</a></li>
              <li><a href="#" className="text-ia-neutral hover:text-white transition-colors">Enterprise Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-ia-neutral hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-ia-neutral hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-ia-neutral hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-ia-neutral hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="#" className="text-ia-neutral hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6">Stay Updated</h3>
            <p className="text-ia-neutral mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="rounded-r-none bg-white/10 border-white/10 text-white placeholder:text-ia-neutral"
              />
              <Button className="rounded-l-none bg-ia-accent hover:bg-ia-accent/90">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-ia-neutral">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} IA Business SAS. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
