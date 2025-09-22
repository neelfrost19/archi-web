'use client';

import { useState } from 'react';
import { Building, Home, TreePine, Lightbulb, Ruler, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Building,
      title: 'Commercial Architecture',
      description: 'Innovative commercial spaces that enhance productivity and reflect your brand identity.',
      features: ['Office Buildings', 'Retail Spaces', 'Mixed-Use Developments', 'Hospitality Design'],
    },
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Custom homes and residential developments that prioritize comfort and lifestyle.',
      features: ['Custom Homes', 'Renovations', 'Multi-Family Housing', 'Interior Design'],
    },
    {
      icon: TreePine,
      title: 'Sustainable Design',
      description: 'Environmentally conscious architecture that minimizes impact and maximizes efficiency.',
      features: ['Green Building', 'Energy Efficiency', 'Sustainable Materials'],
    },
    {
      icon: Lightbulb,
      title: 'Design Consultation',
      description: 'Expert guidance from concept development through project completion.',
      features: ['Feasibility Studies', 'Design Development', 'Code Compliance', 'Project Management'],
    },
    {
      icon: Ruler,
      title: 'Master Planning',
      description: 'Comprehensive planning solutions for large-scale developments and communities.',
      features: ['Site Analysis', 'Zoning Studies', 'Urban Planning', 'Landscape Integration'],
    },
    {
      icon: Users,
      title: 'Collaborative Design',
      description: 'Working closely with clients, contractors, and communities to achieve shared visions.',
      features: ['Client Workshops', 'Stakeholder Engagement', 'Design Charrettes', 'Community Input'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From initial concept to final construction, we provide comprehensive architectural 
            services tailored to your unique vision and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-500 cursor-pointer border-0 shadow-md ${
                hoveredCard === index ? 'scale-105 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-slate-800 rounded-sm flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 font-playfair">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}