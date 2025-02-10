import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-red-600" />,
      label: "Phone",
      value: "9109222890"
    },
    {
      icon: <Phone className="w-5 h-5 text-red-600" />,
      label: "WhatsApp",
      value: "9109222890"
    },
    {
      icon: <Mail className="w-5 h-5 text-red-600" />,
      label: "Email",
      value: "snbaconsumers@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5 text-red-600" />,
      label: "Address",
      value: "SNBA Consumers, Mansarovar Bhavan 2nd floor, NIT Road, Raipur, Chhattisgarh, India"
    },
    {
      icon: <Clock className="w-5 h-5 text-red-600" />,
      label: "Open Hours",
      value: "Mon-Sat: 10:30 AM - 7:00 PM"
    }
  ];

  return (
    <div className="relative h-[600px] w-full">
      {/* Background Map */}
      <div className="absolute inset-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118988.98416695044!2d81.51471811952143!3d21.2554004638853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28df628721f923%3A0x46160af4c09b69fe!2sSNBA%20Consumers%20Raipur!5e0!3m2!1sen!2sin!4v1736402058227!5m2!1sen!2sin"   
        allowFullScreen="" 
        loading="lazy" 
        width='100%'
        referrerPolicy="no-referrer-when-downgrade"
        className='border-none h-screen min-h-screen'
        aria-label="Google Map showing SNBA Consumer location"
        >
        </iframe>
      </div>

      {/* Contact Card */}
      <div className="absolute top-[150px] left-8 bg-white rounded-lg shadow-xl p-8 max-w-md">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        
        <div className="space-y-4">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="text-gray-600">
                {item.icon}
              </div>
              <div>
                <p className="text-gray-800">
                  <span className="font-medium">{item.label}: </span>
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;