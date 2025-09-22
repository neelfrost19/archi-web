'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Award, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      />

      {/* Geometric Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 border border-slate-200 rotate-45 opacity-20" />
      <div className="absolute bottom-20 left-20 w-64 h-64 border-2 border-slate-300 rotate-12 opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="space-y-6">
              <Badge className="bg-slate-100 text-slate-800 border-slate-200 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Award-Winning Design Studio
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight font-playfair">
                Architectural
                <span className="block text-slate-600">
                  Excellence
                </span>
              </h1>
              <p className="text-xl text-gray-700 max-w-lg leading-relaxed">
                We create extraordinary spaces that inspire, function beautifully, and stand the test of time. 
                From concept to completion, we bring architectural visions to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-6 text-lg rounded-none"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-slate-300 hover:bg-slate-50 px-8 py-6 text-lg rounded-none"
              >
                Schedule Consultation
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800 mb-1">50+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800 mb-1">25</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Years</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-800 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern Architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>

              {/* Geometric Accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-slate-200 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}