"use client";
import { useState } from "react";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulated form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-50 dark:from-gray-950 dark:to-gray-950 transition-all duration-300"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center mb-16 text-gray-800 dark:text-gray-100 tracking-tight"
        >
          Get in Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {[
              { 
                icon: Mail, 
                title: "Email", 
                content: "abiyogawp@gmail.com",
                gradient: "from-blue-500 to-cyan-400"
              },
              { 
                icon: Instagram, 
                title: "Instagram", 
                content: "abiiiyga",
                gradient: "from-pink-500 to-rose-400"
              },
              { 
                icon: MapPin, 
                title: "Location", 
                content: "Kalimantan Selatan, Banjarbaru",
                gradient: "from-green-500 to-emerald-400"
              }
            ].map((contact) => (
              <div 
                key={contact.title} 
                className="flex items-center gap-5 group"
              >
                <div 
                  className={`p-3 rounded-full bg-gradient-to-br ${contact.gradient} bg-opacity-20 shadow-md group-hover:scale-110 transition-transform`}
                >
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {contact.content}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit} 
            className="space-y-6 bg-white dark:bg-gray-950 p-8 rounded-xl shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Input
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="py-6 text-base border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="py-6 text-base border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[180px] text-base border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-6 text-base bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 group"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg 
                      className="animate-spin h-5 w-5 mr-3" 
                      viewBox="0 0 24 24"
                    >
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      ></circle>
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </div>
                )}
              </Button>
              
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center"
                >
                  Message sent successfully!
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg text-center"
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;