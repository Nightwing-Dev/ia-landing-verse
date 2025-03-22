
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-portfolio-accent/10 text-portfolio-accent text-sm font-medium mb-6">
              Get in Touch
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight mb-6">
              Let's Work Together
            </h2>
            
            <p className="text-lg text-portfolio-neutral mb-8 max-w-md">
              Whether you have a project in mind or just want to chat about design, I'd love to hear from you. Feel free to reach out!
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-portfolio-accent mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-portfolio-neutral">hello@diegoferro.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-portfolio-accent mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-portfolio-neutral">+57 123 456 7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-portfolio-accent mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-portfolio-neutral">Bogotá, Colombia</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-portfolio-light flex items-center justify-center hover:bg-portfolio-accent hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-portfolio-light flex items-center justify-center hover:bg-portfolio-accent hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-portfolio-light flex items-center justify-center hover:bg-portfolio-accent hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-portfolio-light flex items-center justify-center hover:bg-portfolio-accent hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 4.485c2.444 0 2.735.009 3.701.054 1.253.057 1.934.257 2.385.425.599.232 1.027.508 1.477.958.45.45.725.878.957 1.477.169.451.369 1.132.426 2.385.045.966.054 1.257.054 3.701s-.009 2.735-.054 3.701c-.057 1.253-.257 1.934-.426 2.385-.232.599-.507 1.027-.957 1.477-.45.45-.878.725-1.477.957-.451.169-1.132.369-2.385.426-.966.045-1.257.054-3.701.054s-2.735-.009-3.701-.054c-1.253-.057-1.934-.257-2.385-.426-.599-.232-1.027-.507-1.477-.957-.45-.45-.725-.878-.957-1.477-.169-.451-.369-1.132-.426-2.385-.045-.966-.054-1.257-.054-3.701s.009-2.735.054-3.701c.057-1.253.257-1.934.426-2.385.232-.599.507-1.027.957-1.477.45-.45.878-.725 1.477-.957.451-.169 1.132-.369 2.385-.426.966-.045 1.257-.054 3.701-.054zm0 1.622c-2.402 0-2.685.009-3.641.052-1.064.049-1.644.226-2.029.376-.51.198-.873.434-1.255.816-.382.382-.618.745-.816 1.255-.15.385-.327.965-.376 2.029-.043.956-.052 1.239-.052 3.641s.009 2.685.052 3.641c.049 1.064.226 1.644.376 2.029.198.51.434.873.816 1.255.382.382.745.618 1.255.816.385.15.965.327 2.029.376.956.043 1.239.052 3.641.052s2.685-.009 3.641-.052c1.064-.049 1.644-.226 2.029-.376.51-.198.873-.434 1.255-.816.382-.382.618-.745.816-1.255.15-.385.327-.965.376-2.029.043-.956.052-1.239.052-3.641s-.009-2.685-.052-3.641c-.049-1.064-.226-1.644-.376-2.029-.198-.51-.434-.873-.816-1.255-.382-.382-.745-.618-1.255-.816-.385-.15-.965-.327-2.029-.376-.956-.043-1.239-.052-3.641-.052zm0 2.756c-2.504 0-4.534 2.031-4.534 4.534 0 2.504 2.031 4.534 4.534 4.534 2.504 0 4.534-2.031 4.534-4.534 0-2.504-2.031-4.534-4.534-4.534zm0 7.485c-1.631 0-2.95-1.32-2.95-2.95 0-1.631 1.319-2.95 2.95-2.95 1.63 0 2.95 1.319 2.95 2.95 0 1.63-1.319 2.95-2.95 2.95zm5.392-7.669c0 .585-.475 1.06-1.06 1.06-.586 0-1.061-.475-1.061-1.06 0-.586.475-1.061 1.061-1.061.585 0 1.06.475 1.06 1.061z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="bg-portfolio-light p-8 rounded-xl">
            <h3 className="text-2xl font-display font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="w-full bg-white border-portfolio-muted"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full bg-white border-portfolio-muted"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="How can I help you?" 
                  className="w-full bg-white border-portfolio-muted"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="w-full h-32 bg-white border-portfolio-muted"
                />
              </div>
              
              <Button className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90 text-white btn-hover-effect">
                Send Message <Send className="ml-1 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
