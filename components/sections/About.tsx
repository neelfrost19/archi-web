import { Users, Award, Globe, Compass, Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const values = [
    { 
      icon: Compass, 
      title: 'Vision', 
      description: 'Creating spaces that enhance human experience and connect with the environment.' 
    },
    { 
      icon: Lightbulb, 
      title: 'Innovation', 
      description: 'Pushing boundaries with cutting-edge design and sustainable technologies.' 
    },
    { 
      icon: Shield, 
      title: 'Integrity', 
      description: 'Building trust through transparent processes and exceptional craftsmanship.' 
    },
  ];

  const stats = [
    { icon: Users, label: 'Satisfied Clients', value: '200+' },
    { icon: Award, label: 'Design Awards', value: '25+' },
    { icon: Globe, label: 'Countries', value: '12+' },
    { icon: Compass, label: 'Years Experience', value: '15+' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            About Singh Design
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Singh Design is a premier architecture and interior design firm that specializes in creating innovative,
            functional, and aesthetically pleasing spaces. We offer a full spectrum of services, including architectural
            planning, interior design, space optimization, and professional consultation for residential, commercial,
            and hospitality projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 font-playfair">Our Philosophy</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Architecture is more than building structures—it's about crafting experiences, 
                fostering connections, and creating environments where people thrive. Every project 
                we undertake is a careful balance of form, function, and sustainability.
              </p>
              <p>
                Our multidisciplinary approach combines architectural expertise with environmental 
                consciousness, ensuring that each design not only meets today's needs but anticipates 
                tomorrow's challenges.
              </p>
              <p>
                From intimate residential spaces to large-scale commercial developments, we believe 
                in the power of thoughtful design to enhance communities and respect the natural world.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Modern building exterior"
                  className="w-full h-48 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Architectural detail"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Interior design"
                  className="w-full h-32 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sustainable architecture"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 font-playfair">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-slate-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-slate-800 mb-2 font-playfair">{stat.value}</div>
              <div className="text-gray-600 uppercase tracking-wider text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}