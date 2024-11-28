'use client'
import { useState } from 'react';
import { X } from 'lucide-react';

const FiltersComponent = () => {
  const [range, setRange] = useState(85);
  const [isOpen, setIsOpen] = useState(false);

  const roomTypes = [
    ['Treatment', 'Talk therapy', 'Medical', 'Beauty'],
    ['Dental', 'Hair', 'Movement', 'Group']
  ];

  const roomSizes = ['<8sqm', '8-12 sqm', '12-16 sqm', '>16sqm'];

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-b-[38px] border-t border-[#928f8c]/30 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#4f4f4f] text-2xl font-semibold">Filters</h2>
        <button 
          onClick={() => setIsOpen(false)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-[#4f4f4f]" />
        </button>
      </div>

      {/* Location Range */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[#4f4f4f] text-xl font-semibold">Location</span>
          <div className="px-4 py-1 bg-[#928f8c]/20 rounded-full">
            <span className="text-[#4f4f4f]">within </span>
            <span className="text-[#4f4f4f] font-semibold">{range}km</span>
          </div>
        </div>
        <div className="relative w-full h-6">
          <input
            type="range"
            min="0"
            max="100"
            value={range}
            onChange={(e) => setRange(parseInt(e.target.value))}
            className="w-full h-2 bg-[#eae9dd] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#64775e] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
          />
        </div>
      </div>

      <div className="w-full h-px bg-[#928f8c]/30 my-6" />

      {/* Room Types */}
      <div className="mb-6">
        <h3 className="text-[#4f4f4f] text-xl font-semibold mb-6">Room type</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-14">
          {roomTypes.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((type) => (
                <label key={type} className="flex items-center gap-4 cursor-pointer">
                  <div className="w-6 h-6 border border-[#928f8c]/30 rounded flex items-center justify-center">
                    <input type="checkbox" className="hidden" />
                  </div>
                  <span className="text-[#4f4f4f] text-base">{type}</span>
                </label>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-[#928f8c]/30 my-6" />

      {/* Room Size */}
      <div className="mb-6">
        <h3 className="text-[#4f4f4f] text-xl font-semibold mb-6">Room Size</h3>
        <div className="space-y-4">
          {roomSizes.map((size) => (
            <label key={size} className="flex items-center gap-4 cursor-pointer">
              <div className="w-6 h-6 border border-[#928f8c]/30 rounded flex items-center justify-center">
                <input type="checkbox" className="hidden" />
              </div>
              <span className="text-[#4f4f4f] text-base">{size}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-[#928f8c]/30 my-6" />

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <button className="text-[#928f8c] text-base font-semibold">
          Clear All
        </button>
        <button className="w-full sm:w-auto px-8 py-4 bg-[#64775e] text-white text-xl font-semibold rounded-[38px] border border-[#928f8c]/30 hover:bg-[#556a4f] transition-colors">
          Show 1,000+ Places
        </button>
      </div>
    </div>
  );
};

export default FiltersComponent;