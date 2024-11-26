import React from 'react';
import WellshareNavbar from "@/custom/WellshareNavbar";
import Footer from "@/custom/Footer";
const TreatmentGrid = () => {
  const categories = [
    { title: 'Treatment', icon: '/api/placeholder/40/40' },
    { title: 'Medical', icon: '/api/placeholder/40/40' },
    { title: 'Therapy', icon: '/api/placeholder/40/40' },
    { title: 'Beauty', icon: '/api/placeholder/40/40' },
    { title: 'Dental', icon: '/api/placeholder/40/40' },
    { title: 'Hair', icon: '/api/placeholder/40/40' },
    { title: 'Movement', icon: '/api/placeholder/40/40' },
    { title: 'Group', icon: '/api/placeholder/40/40' }
  ];

  const treatments = Array(8).fill({
    title: 'Wollongong...',
    type: 'Treatment',
    rating: 4.99,
    pricing: {
      hour: 40,
      day: 100,
      week: 300
    }
  });

  return (
    <div className="flex flex-col min-h-screen">
    <WellshareNavbar />
    <main className="flex-grow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="bg-[#fefdf2] py-4 px-4 sm:px-6 lg:px-8 mb-6 overflow-x-auto">
        <div className="flex space-x-2 min-w-max">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-24 h-24 p-3 rounded-3xl 
                ${index === 0 ? 'bg-white/30 border border-[#64775e] shadow' : ''}`}
            >
              <div className="w-10 h-10">
                <img src={category.icon} alt={category.title} className="w-full h-full" />
              </div>
              <div className="text-[#4f4f4f] text-xs font-semibold text-center mt-1">
                {category.title}
              </div>
            </div>
          ))}
        </div>
        
        {/* Filters */}
        <div className="flex justify-end items-center gap-3 mt-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/30 rounded-full border border-[#928f8c]/30">
            <img src="/api/placeholder/20/20" alt="sort" className="w-5 h-5" />
            <span className="text-[#4f4f4f] text-xs">Sort by</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/30 rounded-full border border-[#928f8c]/30">
            <img src="/api/placeholder/20/20" alt="filter" className="w-5 h-5" />
            <span className="text-[#4f4f4f] text-xs">Filters</span>
          </button>
        </div>
      </div>

      {/* Treatment Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {treatments.map((treatment, index) => (
          <div key={index} className="bg-[#f4f3e8] rounded-3xl shadow overflow-hidden">
            {/* Image Section */}
            <div className="relative h-56 bg-gradient-to-b from-black to-black">
              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${
                      i === 0 ? 'bg-white' : 'bg-[#928f8c]/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-[#4f4f4f]">{treatment.title}</h3>
                <span className="text-base font-semibold text-[#4f4f4f]">{treatment.rating}</span>
              </div>
              
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[#928f8c] text-base font-semibold">{treatment.type}</span>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src="/api/placeholder/16/16" alt="star" className="w-4 h-4" />
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="mt-6">
                <span className="text-[#928f8c] text-[7px] font-semibold">From</span>
                <div className="flex justify-between mt-2">
                  <div className="text-center">
                    <div className="text-[#4f4f4f] text-base font-semibold">${treatment.pricing.hour}</div>
                    <div className="text-[#928f8c] text-[7px] font-semibold">Hour</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#4f4f4f] text-base font-semibold">${treatment.pricing.day}</div>
                    <div className="text-[#928f8c] text-[7px] font-semibold">Day</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#4f4f4f] text-base font-semibold">${treatment.pricing.week}</div>
                    <div className="text-[#928f8c] text-[7px] font-semibold">Week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </main>
    <Footer />
  </div>

  );
};

export default TreatmentGrid;
