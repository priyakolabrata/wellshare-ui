import React from 'react';

const LocationExplorer = () => {
  return (
    <div className="w-full max-w-[1080px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-8 lg:gap-10">
      <div className="flex flex-col gap-8 lg:gap-10">
        <div className="border-t border-[#eae9dd]"></div>
        <div className="flex flex-wrap items-center gap-2 md:gap-[7px]">
          <span className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Wellshare</span>
          <div className="w-2 h-2 bg-[#4f4f4f] rounded-full"></div>
          <span className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Australia</span>
          <div className="w-2 h-2 bg-[#4f4f4f] rounded-full"></div>
          <span className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">New South Wales</span>
          <div className="w-2 h-2 bg-[#4f4f4f] rounded-full"></div>
          <span className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Sydney</span>
        </div>
        <div className="border-t border-[#eae9dd]"></div>
      </div>

      <div className="flex flex-col gap-8 lg:gap-10">
        <section className="flex flex-col gap-6 lg:gap-8">
          <h2 className="text-[#4f4f4f] text-lg font-semibold font-['DM Sans']">
            Explore other options in and around Sydney
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {["Sydney CBD", "St. Leonards", "Penrith", "Caringbah", 
              "Surry Hills", "Pyrmont", "Doncaster East", "Canberra"].map((location, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">{location}</div>
                <div className="text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Casual/Daily</div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 lg:gap-8">
          <h2 className="text-[#4f4f4f] text-lg font-semibold font-['DM Sans']">
            Other types of rooms available on Wellshare
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Sydney treatment rooms",
              "Penrith weekly casual rooms",
              "Pyrmont furnished beauty salon",
              "Medical rooms in New South Wales",
              "Furnished Co-working space in Sydney",
              "Yoga / pilates room rentals in Surry Hill"
            ].map((room, index) => (
              <div key={index} className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">
                {room}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LocationExplorer;
