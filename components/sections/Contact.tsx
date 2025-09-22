'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'Info@singhdesignsstudio.co.in',
      description: 'Send us your project details',
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 90904 40428',
      description: 'Call for immediate consultation',
    },
    {
      icon: MapPin,
      title: 'Studio',
      info: 'Amlapada 4th lane',
      description: 'Angul, Odisha',
    },
    {
      icon: Clock,
      title: 'Hours',
      info: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'Weekend consultations available',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            Start Your Project
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to bring your architectural vision to life? Let's discuss your project 
            and explore how we can create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 font-playfair">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-sm flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-900 font-medium">{info.info}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-none p-8 text-white">
              <h4 className="text-xl font-bold mb-6 font-playfair">Why Choose Singh Design?</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span>25+ years of architectural excellence</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span>Award-winning sustainable design approach</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span>Comprehensive project management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span>Collaborative design process</span>
                </li>
              </ul>
            </div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">
                Project Inquiry
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-none border-slate-300"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-none border-slate-300"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="rounded-none border-slate-300"
                    />
                  </div>
                  <div>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-500"
                      required
                    >
                      <option value="">Project Type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="renovation">Renovation</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="rounded-none border-slate-300"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white py-6 rounded-none"
                >
                  Send Project Inquiry
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}