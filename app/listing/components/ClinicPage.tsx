import React from 'react';
import { Card } from "@/components/ui/card";

const ClincPage = () => {
  // Room data structure
  const rooms = [
    {
      id: 1,
      title: 'Room 1',
      image: '/api/placeholder/294/220',
      rating: '4.99',
      type: 'Treatment room',
      pricing: {
        hourly: 40,
        daily: 100,
        weekly: 300
      }
    },
    // ... more rooms
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Gallery Section */}


          {/* Other Rooms Section */}
          <section className="my-12">
            <h2 className="text-2xl font-semibold mb-8">Other rooms at this clinic</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {rooms.map((room) => (
                <Card key={room.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{room.title}</h3>
                      <span>{room.rating}</span>
                    </div>
                    <p className="text-sm">{room.type}</p>
                    <div className="space-y-1 text-sm">
                      <p>From ${room.pricing.hourly}/Hour</p>
                      <p>From ${room.pricing.daily}/Day</p>
                      <p>From ${room.pricing.weekly}/Week</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ClincPage;
