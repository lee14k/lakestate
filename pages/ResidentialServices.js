import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, Home, Users, Heart } from "lucide-react";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

const ResidentialServices = () => {
  const services = [
    {
      icon: <Home className="w-6 h-6 text-primary" />,
      title: "Semi-Independent Living",
      description: "Residents can enjoy the independence of living in their own homes/apartments while benefiting from the peace of mind that comes with having support available whenever it's needed. Our professional staff members are committed to providing personalized assistance to ensure that each resident's unique needs are met while promoting independence and autonomy."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Daily Support",
      description: "Whether it's help with daily tasks, administration of medication, or simply having someone to support the tasks of daily living, our staff is here to ensure that residents can live comfortably and confidently in their own homes."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Community Engagement",
      description: "At Lakestate Industries, we understand the importance of community engagement. That's why we actively take our residents out and encourage their involvement in community activities and events. Whether it's attending local gatherings, participating in group outings, or volunteering for worthy causes, we strive to keep our residents connected and engaged with the community around them."
    }
  ];

  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h1 className="text-4xl font-bold">Residential Services</h1>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {service.icon}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
    <Image
    src="/unspalshstockphoto1.jpg"
    alt="Residential Services"
    width={800}
    height={800}
    />
          <Image
            src="/unsplashstockphoto2.jpg"
            alt="Residential Services"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default ResidentialServices;