
import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider"

const PricingFilters = () => {
  const [priceRange, setPriceRange] = useState([500, 2000]);
  const [selectedPricing, setSelectedPricing] = useState('Casual');
  
  return (
    <div className="w-full max-w-[670px] mx-auto bg-white rounded-[38px] p-4 md:p-6 lg:p-10">
      {/* Price Section */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-[#4f4f4f] text-xl font-semibold font-['DM Sans'] capitalize">
            Pricing
          </h2>
          <p className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">
            Prices before fees and taxes
          </p>
        </div>

        {/* Pricing Type Toggle */}
        <div className="flex justify-center w-full px-4 md:px-[162px]">
          <div className="w-full p-3 bg-[#f4f3e8] rounded-[50px] flex justify-center items-center gap-2">
            <button
              onClick={() => setSelectedPricing('Casual')}
              className={`flex-1 px-6 py-3 rounded-[38px] transition-all
                ${selectedPricing === 'Casual' 
                  ? 'bg-white shadow-sm' 
                  : 'bg-transparent'
                }
              `}
            >
              <span className="text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">
                Casual
              </span>
            </button>
            <button
              onClick={() => setSelectedPricing('Regular')}
              className={`flex-1 px-6 py-3 rounded-[38px] transition-all
                ${selectedPricing === 'Regular' 
                  ? 'bg-white shadow-sm' 
                  : 'bg-transparent'
                }
              `}
            >
              <span className="text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">
                Regular
              </span>
            </button>
          </div>
        </div>

        {/* Usage Options */}
        <div className="space-y-4">
          <label className="flex items-center gap-4 cursor-pointer">
            <div className="w-6 h-6 border border-[#928f8c]/30 rounded flex items-center justify-center">
              <input type="checkbox" className="hidden peer" />
              <div className="w-4 h-4 bg-[#64775e] rounded hidden peer-checked:block" />
            </div>
            <span className="text-[#4f4f4f] text-base font-semibold">
              Hourly
            </span>
          </label>
          
          <label className="flex items-center gap-4 cursor-pointer">
            <div className="w-6 h-6 border border-[#928f8c]/30 rounded flex items-center justify-center">
              <input type="checkbox" className="hidden peer" />
              <div className="w-4 h-4 bg-[#64775e] rounded hidden peer-checked:block" />
            </div>
            <span className="text-[#4f4f4f] text-base font-semibold">
              Daily
            </span>
          </label>
        </div>

        {/* Price Chart */}
        <div className="w-full overflow-x-auto">
          <div className="w-full min-w-[583px] h-10 flex items-end gap-0.5">
            {/* Generate bars dynamically based on data */}
            {Array.from({ length: 60 }, (_, i) => (
              <div
                key={i}
                className="w-2 bg-[#64775e] rounded-t-sm border border-[#64775e]"
                style={{
                  height: `${Math.max(4, Math.sin(i/10) * 20 + 20)}px`
                }}
              />
            ))}
          </div>
        </div>

        {/* Price Range Slider */}
        <div className="relative w-full h-6 mb-8">
        <Slider defaultValue={[33]} max={100} step={1} className="text-white"/>

          <div className="absolute inset-x-2 top-2 h-2 bg-[#64775e] rounded-[20px]" />
          <div 
            className="absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow"
            style={{ left: `${(priceRange[0] / 4000) * 100}%` }}
          >
            <div className="w-5 h-5 m-0.5 bg-[#64775e] rounded-full" />
          </div>
          <div 
            className="absolute right-0 top-0 w-6 h-6 bg-white rounded-full shadow"
            style={{ right: `${100 - (priceRange[1] / 4000) * 100}%` }}
          >
            <div className="w-5 h-5 m-0.5 bg-[#64775e] rounded-full" />
          </div>
        </div>

        {/* Price Inputs */}
        <div className="flex justify-between items-center gap-4">
          <div className="flex-1 pl-4 pr-6 py-3 bg-white rounded-full border border-[#928f8c]/30">
            <div className="flex items-center gap-4">
              <span className="text-[#4f4f4f] text-sm font-normal leading-[14px]">
                Min
              </span>
              <span className="text-[#4f4f4f] text-lg font-bold leading-[14px]">
                ${priceRange[0].toLocaleString()}
              </span>
            </div>
          </div>
          
          <div className="flex-1 pl-4 pr-6 py-3 bg-white rounded-full border border-[#928f8c]/30">
            <div className="flex items-center gap-4">
              <span className="text-[#4f4f4f] text-sm font-normal leading-[14px]">
                Max
              </span>
              <span className="text-[#4f4f4f] text-lg font-bold leading-[14px]">
                ${priceRange[1].toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingFilters;
