'use client';

import { useState } from 'react';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'Skyline Corporate Tower',
      description: 'A 40-story mixed-use development featuring sustainable design and innovative workspace solutions.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'commercial',
      location: 'Odisha, IN',
      year: '2023',
      type: 'Commercial',
    },
    {
      title: 'Riverside Residence',
      description: 'Contemporary family home with panoramic river views and seamless indoor-outdoor living.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'residential',
      location: 'Odisha, IN',
      year: '2023',
      type: 'Residential',
    },
    {
      title: 'Green Valley Community Center',
      description: 'LEED Platinum certified community hub designed for maximum energy efficiency and social interaction.',
      image: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'sustainable',
      location: 'Odisha, IN',
      year: '2022',
      type: 'Sustainable',
    },
    {
      title: 'Metropolitan Art Museum',
      description: 'Cultural landmark featuring innovative exhibition spaces and public gathering areas.',
      image: 'https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'cultural',
      location: 'Odisha, IN',
      year: '2022',
      type: 'Cultural',
    },
    {
      title: 'Eco-Friendly Housing Complex',
      description: 'Affordable housing development with integrated renewable energy and community gardens.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'sustainable',
      location: 'Odisha, IN',
      year: '2023',
      type: 'Sustainable',
    },
    {
      title: 'Modern Villa Collection',
      description: 'Luxury residential development featuring contemporary design and smart home technology.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'residential',
      location: 'Odisha, IN',
      year: '2023',
      type: 'Residential',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'sustainable', label: 'Sustainable' },
    { id: 'cultural', label: 'Cultural' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore our portfolio of award-winning architectural projects that showcase 
            our commitment to design excellence and innovation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? 
                'bg-slate-800 hover:bg-slate-900 rounded-none' : 
                'hover:bg-slate-50 rounded-none border-slate-300'
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-md">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-slate-800 text-white">
                  {project.type}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.year}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}