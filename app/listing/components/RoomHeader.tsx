import React from 'react';

const RoomHeader = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-[40px] text-[#4f4f4f] font-semibold font-['DM Sans']">
          Treatment room in Sydney CBD
        </h1>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-4 bg-[#f4f3e8] rounded-full border border-[#928f8c]/30 hover:bg-[#eae9dd] transition-colors">
            <img 
              src="/api/placeholder/22/22" 
              alt="Save icon" 
              className="w-[22px] h-[22px]"
            />
            <span className="text-[#4f4f4f] font-semibold">Save</span>
          </button>
          
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-4 bg-[#f4f3e8] rounded-full border border-[#928f8c]/30 hover:bg-[#eae9dd] transition-colors">
            <img 
              src="/api/placeholder/22/22" 
              alt="Share icon" 
              className="w-[22px] h-[22px]"
            />
            <span className="text-[#4f4f4f] font-semibold">Share</span>
          </button>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Main Image */}
          <div className="col-span-1 md:col-span-2 relative">
            <img 
              src="/api/placeholder/549/410" 
              alt="Main room view"
              className="w-full h-[300px] md:h-[410px] object-cover rounded-3xl"
            />
          </div>

          {/* Side Images - Hidden on mobile */}
          <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="relative">
                <img 
                  src="/api/placeholder/254/196" 
                  alt={`Room view ${index}`}
                  className="w-full h-[196px] object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>

          {/* Show All Photos Button */}
          <button className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-3 bg-[#fefdf2] rounded-full border border-[#928f8c]/30 hover:bg-white transition-colors">
            <img 
              src="/api/placeholder/22/22" 
              alt="Gallery icon"
              className="w-[22px] h-[22px]"
            />
            <span className="text-[#4f4f4f] font-semibold text-base md:text-xl whitespace-nowrap">
              Show all photos
            </span>
          </button>
        </div>

        {/* Mobile Gallery Indicators */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {[0, 1, 2, 3, 4].map((index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === 0 ? 'bg-[#4f4f4f]' : 'bg-[#928f8c]/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomHeader;
