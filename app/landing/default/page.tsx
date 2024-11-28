'use client'

import { useState, useEffect } from 'react';
import WellshareNavbar from "@/custom/WellshareNavbar";
import Footer from "@/custom/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://api.github.com/repos/vercel/next.js')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  const locations = [
    { name: 'Sydney CBD', description: 'Treatment, Therapy, Medical & Beauty Rooms' },
    { name: 'Surry Hills', description: 'Treatment, Therapy & Medical Rooms' },
    { name: 'St Leonards', description: 'Treatment, Therapy, Medical & Beauty Rooms' },
    { name: 'Pyrmont', description: 'Treatment & Therapy Rooms' },
    { name: 'Penrith', description: 'Medical, Treatment & Therapy Rooms' },
    { name: 'Doncaster East', description: 'Treatment, Therapy, Medical & Beauty Rooms' },
    { name: 'Caringbah', description: 'Treatment, Therapy, Medical & Beauty Rooms' },
    { name: 'Canberra', description: 'Treatment & Therapy Rooms' }
  ];

  const roomTypes = [
    'Treatment', 'Dental', 'Medical', 'Hair', 'Therapy', 'Movement', 'Beauty', 'Group'
  ];

  const usageTypes = ['Hourly', 'Daily', 'Weekly'];

  const features = [
    'Locations Across Australia',
    'Rooms To Suit Any Practitioner',
    'Join A Collaborative Community',
    'Seamless Search & Booking',
    'Flexible Room Use Options'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <WellshareNavbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[550px] w-full">
          <div className="absolute inset-0">
            <img 
              src='' 
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Search Bar */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[756px]">
            <div className="bg-white rounded-[50px] shadow p-4 md:p-6 flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="font-semibold text-[#4f4f4f]">Where</div>
                <div className="text-[#4f4f4f] font-light">Search Locations</div>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-[#4f4f4f]">Usage</div>
                <div className="text-[#4f4f4f] font-light">Select Casual Or Regular Use</div>
              </div>
              <button className="w-12 h-12 bg-[#64775e] rounded-full flex items-center justify-center">
                <img src="/api/placeholder/30/30" alt="Search" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 px-4 md:px-[100px]">
          <h2 className="text-2xl font-semibold text-center text-[#4f4f4f] mb-10">The Wellshare Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-[110px] h-[110px] rounded-3xl shadow overflow-hidden">
                  <img src="/api/placeholder/152/110" alt={location.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-[#4f4f4f]">{location.name}</div>
                  <div className="text-sm text-[#928f8c]">{location.description}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-10 mx-auto block px-8 py-4 bg-[#f4f3e8] rounded-[38px] border border-[#928f8c]/30 text-[#4f4f4f] font-semibold">
            More Locations
          </button>
        </section>

        {/* Room Types Section */}
        <section className="py-16 px-4 md:px-[100px]">
          <h2 className="text-2xl font-semibold text-center text-[#4f4f4f] mb-10">Room Types Available</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomTypes.map((type, index) => (
              <div key={index} className="relative h-[300px] rounded-3xl shadow overflow-hidden">
                <img src="/api/placeholder/412/300" alt={type} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#4f4f4f]/20" />
                <div className="absolute bottom-6 w-full text-center text-white text-xl font-semibold">
                  {type}
                </div>
              </div>
            ))}
          </div>
          <button className="mt-10 mx-auto block px-8 py-4 bg-[#f4f3e8] rounded-[38px] border border-[#928f8c]/30 text-[#4f4f4f] font-semibold">
            More Rooms
          </button>
        </section>

        {/* Usage Types Section */}
        <section className="py-16 px-4 md:px-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {usageTypes.map((type, index) => (
              <div key={index} className="bg-[#f4f3e8] rounded-3xl shadow p-6 flex flex-col items-center">
                <img src="/api/placeholder/369/268" alt={type} className="w-full h-auto mb-6" />
                <div className="text-xl font-semibold text-[#4f4f4f]">{type}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#4f4f4f] mb-6">Casual & Regular Use Available</h2>
            <button className="px-8 py-4 bg-[#f4f3e8] rounded-[38px] border border-[#928f8c]/30 text-[#4f4f4f] font-semibold">
              View Pricing
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 md:px-[100px] bg-[#f4f3e8]">
          <h2 className="text-2xl font-semibold text-center text-[#4f4f4f] mb-10">Why Wellshare</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <img src="/api/placeholder/48/48" alt="" className="w-12 h-12" />
                <div className="text-center text-[#4f4f4f] font-medium">{feature}</div>
              </div>
            ))}
          </div>
          <button className="mt-10 mx-auto block px-8 py-4 bg-[#fefdf2] rounded-[38px] border border-[#928f8c]/30 text-[#4f4f4f] font-semibold">
            More About Us
          </button>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 md:px-[100px]">
          <h2 className="text-2xl font-semibold text-center text-[#4f4f4f] mb-10">What Our Users Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-[#f4f3e8] rounded-[38px] p-6">
                <div className="flex flex-col items-center">
                  <img src="/api/placeholder/60/60" alt="" className="w-[60px] h-[60px] rounded-full mb-4" />
                  <div className="font-semibold text-[#4f4f4f] mb-2">Rodrigo</div>
                  <div className="text-sm text-[#4f4f4f] mb-4">
                    Highly recommend! The indoor and outdoor spaces are beautiful! Wonderful for little kids. Lots of room to run around and play outside. The food was delicious and lots of it. The hospitality was...
                  </div>
                  <div className="text-sm text-[#928f8c]">November 2023</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}