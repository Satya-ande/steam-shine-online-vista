
import React from 'react';
import { Car, Droplets, Shield } from 'lucide-react';

const SatyaServices = () => {
  const services = [
    {
      icon: <Car className="h-12 w-12 text-blue-600" />,
      title: "Mobile Detailing",
      description: "Complete interior and exterior detailing at your location",
      price: "$89"
    },
    {
      icon: <Droplets className="h-12 w-12 text-blue-600" />,
      title: "Steam Wash",
      description: "Eco-friendly steam cleaning using 90% less water",
      price: "$65"
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Paint Protection",
      description: "Ceramic coating and paint protection services",
      price: "$299"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional mobile car detailing services that come to you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">Starting at {service.price}</div>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SatyaServices;
