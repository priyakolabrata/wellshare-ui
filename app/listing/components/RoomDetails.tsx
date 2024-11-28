import React from 'react';
import { Card } from "@/components/ui/card";

const RoomDetails = () => {
  const features = [
    {
      title: "Suitable Practitioners",
      value: "Medical | Nurse",
      icon: "/api/placeholder/30x30"
    },
    {
      title: "Clinic Type",
      value: "Medical Centre",
      icon: "/api/placeholder/30x30"
    },
    {
      title: "Room Size",
      value: "100 m²",
      icon: "/api/placeholder/30x30"
    },
    {
      title: "Furnished Status",
      value: "Furnished",
      icon: "/api/placeholder/30x30"
    }
  ];

  const amenities = [
    { title: 'High-Tech Check-In', icon: "/api/placeholder/30x30" },
    { title: 'Reception Desk', icon: "/api/placeholder/30x30" },
    { title: 'High-Speed Internet', icon: "/api/placeholder/30x30" },
    { title: 'Advanced Security', icon: "/api/placeholder/30x30" },
    { title: 'Secure Storage', icon: "/api/placeholder/30x30" },
    { title: 'Bathroom & Showers', icon: "/api/placeholder/30x30" },
    { title: 'Kitchen', icon: "/api/placeholder/30x30" },
    { title: 'Waiting Areas', icon: "/api/placeholder/30x30" },
    { title: 'Door Sign', icon: "/api/placeholder/30x30" }
  ];

  const extras = [
    { title: 'Cleaning Service', price: '$123', icon: "/api/placeholder/30x30" },
    { title: 'Storage Service', price: '$123', icon: "/api/placeholder/30x30" },
    { title: 'Insurance', price: '$123', icon: "/api/placeholder/30x30" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Host Info */}
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 bg-gray-100 rounded-full"></div>
          <div>
            <h2 className="text-xl text-[#4f4f4f] font-semibold">Hosted by Anthony</h2>
            <p className="text-base text-[#4f4f4f] font-semibold">4.99 (99 reviews)</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#928f8c]/30">
            <div className="flex items-center gap-3">
              <img src={feature.icon} alt="" className="w-8 h-8" />
              <span className="text-lg text-[#4f4f4f] font-semibold">{feature.title}</span>
            </div>
            <span className="text-[#4f4f4f]">{feature.value}</span>
          </div>
        ))}
      </div>

      {/* Furniture Button */}
      <button className="w-full sm:w-auto px-8 py-4 mb-8 bg-[#f4f3e8] rounded-full border border-[#928f8c]/30 hover:bg-[#eae9dd] transition-colors">
        <span className="text-[#4f4f4f] font-semibold">Show All Furniture</span>
      </button>

      {/* Amenities Section */}
      <section className="mb-12">
        <h2 className="text-2xl text-[#4f4f4f] font-semibold mb-6">
          Clinic Facilities and Amenities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {amenities.map((amenity) => (
            <div key={amenity.title} className="flex items-center gap-3">
              <img src={amenity.icon} alt="" className="w-8 h-8" />
              <span className="text-[#4f4f4f] font-semibold">{amenity.title}</span>
            </div>
          ))}
        </div>
        <button className="w-full sm:w-auto px-8 py-4 bg-[#f4f3e8] rounded-full border border-[#928f8c]/30 hover:bg-[#eae9dd] transition-colors">
          <span className="text-[#4f4f4f] font-semibold">Show All Amenities</span>
        </button>
      </section>

      {/* Pricing Section */}
      <section className="mb-12">
        <h2 className="text-2xl text-[#4f4f4f] font-semibold mb-6">Room Prices</h2>
        <div className="overflow-x-auto">
          <div className="min-w-[768px] bg-white rounded-[38px] border border-[#928f8c]/30">
            <div className="grid grid-cols-3 bg-[#f4f3e8] p-6 rounded-t-[38px]">
              <div>
                <h3 className="text-base font-semibold mb-4">Casual</h3>
                <div className="space-y-2">
                  <p>PAYG Hourly: $40</p>
                  <p>PAYG Daily: $150</p>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-4">Regular Daily</h3>
                <div className="space-y-2">
                  <p>1 month: $125</p>
                  <p>6 month: $110</p>
                  <p>12 month: $100</p>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-4">Regular Weekly</h3>
                <div className="space-y-2">
                  <p>1 month: $500</p>
                  <p>6 month: $440</p>
                  <p>12 month: $400</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-[#4f4f4f] font-semibold">Security Required</p>
      </section>

      {/* Optional Extras */}
      <section>
        <h2 className="text-2xl text-[#4f4f4f] font-semibold mb-6">Optional Extras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {extras.map((extra) => (
            <div key={extra.title} className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#928f8c]/30">
              <div className="flex items-center gap-3">
                <img src={extra.icon} alt="" className="w-8 h-8" />
                <span className="text-lg text-[#4f4f4f] font-semibold">{extra.title}</span>
              </div>
              <span className="text-[#4f4f4f]">{extra.price}</span>
            </div>
          ))}
        </div>
        <button className="w-full sm:w-auto px-8 py-4 bg-[#f4f3e8] rounded-full border border-[#928f8c]/30 hover:bg-[#eae9dd] transition-colors">
          <span className="text-[#4f4f4f] font-semibold">Show All Services</span>
        </button>
      </section>
    </div>
  );
};

export default RoomDetails;
