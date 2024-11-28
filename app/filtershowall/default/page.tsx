'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';

const FilterSection = ({ title, subtitle, children, defaultExpanded = true }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <div className="py-6 border-b border-[#928f8c]/30">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-[#4f4f4f] capitalize">{title}</h2>
          {subtitle && <p className="text-base text-[#4f4f4f] mt-2">{subtitle}</p>}
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      {isExpanded && <div className="mt-6">{children}</div>}
    </div>
  );
};

const Checkbox = ({ label, count }) => (
  <label className="flex items-center gap-4 py-2 cursor-pointer group">
    <div className="w-6 h-6 rounded border border-[#928f8c]/30 group-hover:border-[#64775e]" />
    <span className="text-[#4f4f4f] text-base flex-grow">{label}</span>
    {count && <span className="text-[#4f4f4f] text-base">({count})</span>}
  </label>
);

const Tag = ({ children, selected }) => (
  <button className={`
    px-8 py-3 rounded-full border border-[#928f8c]/30 text-base 
    ${selected ? 'bg-[#64775e] text-white' : 'text-[#4f4f4f] hover:bg-[#64775e]/10'}
    transition-colors
  `}>
    {children}
  </button>
);

const PriceRange = () => (
  <div className="space-y-6">
    <div className="flex flex-wrap gap-2">
      <Tag selected>Casual</Tag>
      <Tag>Regular</Tag>
    </div>
    <div className="space-y-4">
      <Checkbox label="Hourly" />
      <Checkbox label="Daily" />
    </div>
    <div className="flex justify-between gap-4">
      <div className="flex-1 px-4 py-3 border border-[#928f8c]/30 rounded-full">
        <div className="flex items-center gap-4">
          <span className="text-sm text-[#4f4f4f]">Min</span>
          <span className="text-lg font-bold text-[#4f4f4f]">$500</span>
        </div>
      </div>
      <div className="flex-1 px-4 py-3 border border-[#928f8c]/30 rounded-full">
        <div className="flex items-center gap-4">
          <span className="text-sm text-[#4f4f4f]">Max</span>
          <span className="text-lg font-bold text-[#4f4f4f]">$2000</span>
        </div>
      </div>
    </div>
  </div>
);

const RatingSection = () => (
  <div className="space-y-4">
    {[5, 4, 3, 2].map(rating => (
      <div key={rating} className="flex items-center gap-4">
        <Checkbox label={
          <div className="flex items-center gap-2">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
            ))}
          </div>
        } count={rating === 5 ? 134 : rating === 4 ? 346 : rating === 3 ? 4759 : 3849} />
      </div>
    ))}
  </div>
);

const FilterContent = () => {
  return (
    <div className="space-y-2">
      <FilterSection title="Location">
        <div className="space-y-4">
          <div className="relative h-6 bg-[#eae9dd] rounded-full">
            <div className="absolute h-2 w-3/4 bg-[#64775e] rounded-full top-2 left-2"></div>
            <div className="absolute right-0 -top-1 w-6 h-6 bg-white rounded-full shadow">
              <div className="w-5 h-5 m-0.5 bg-[#64775e] rounded-full"></div>
            </div>
          </div>
        </div>
      </FilterSection>

      <FilterSection 
        title="Pricing" 
        subtitle="Prices before fees and taxes"
      >
        <PriceRange />
      </FilterSection>

      <FilterSection title="Rating">
        <RatingSection />
      </FilterSection>

      <FilterSection title="Type of practitioner suitable">
        <div className="flex flex-wrap gap-2">
          <Tag>Medical</Tag>
          <Tag>Nurse</Tag>
          <Tag>Beauty</Tag>
          <Tag>Dental</Tag>
          <Tag>Allied Health (AHPRA regulated)</Tag>
          <Tag>Alternative Health</Tag>
          <Tag>Mental Health</Tag>
          <Tag>Other</Tag>
        </div>
      </FilterSection>

      <FilterSection title="Type of clinic">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <Checkbox label="Medical" />
            <Checkbox label="Dental" />
            <Checkbox label="Allied Health" />
            <Checkbox label="Alternative Health" />
            <Checkbox label="Psychology/Counselling" />
            <Checkbox label="Co-working space" />
          </div>
          <div className="space-y-4">
            <Checkbox label="Beauty Salon" />
            <Checkbox label="Hair Salon" />
            <Checkbox label="Fitness Centre" />
            <Checkbox label="Yoga / Pilates" />
            <Checkbox label="Dance / Studio" />
            <Checkbox label="General offices" />
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Room Size">
        <div className="space-y-4">
          <Checkbox label="<8sqm" />
          <Checkbox label="8-12 sqm" />
          <Checkbox label="12-16 sqm" />
          <Checkbox label=">16sqm" />
        </div>
      </FilterSection>

      <FilterSection title="Furnishing status">
        <div className="space-y-4">
          <Checkbox label="Furnished" />
          <Checkbox label="Unfurnished" />
        </div>
      </FilterSection>

      <FilterSection title="Room features">
        <div className="flex flex-wrap gap-2">
          <Tag>Windows/Natural Light</Tag>
          <Tag>Blinds/curtains</Tag>
          <Tag>Internal room</Tag>
          <Tag>Artwork</Tag>
          <Tag>Dimmable Lighting</Tag>
          <Tag>Air Conditioning</Tag>
          <Tag>Room Temperature Control</Tag>
          {/* Add more room features as tags */}
        </div>
      </FilterSection>

      <FilterSection title="Clinic amenities">
        <div className="flex flex-wrap gap-2">
          <Tag>Wi-Fi</Tag>
          <Tag>Waiting Area</Tag>
          <Tag>Reception</Tag>
          <Tag>Coffee & Tea</Tag>
          <Tag>Kitchen Facilities</Tag>
          <Tag>Breakout Room</Tag>
          {/* Add more amenities as tags */}
        </div>
      </FilterSection>

      <FilterSection title="Agreement Term">
        <div className="space-y-4">
          <Checkbox label="PAYG" />
          <Checkbox label="1 month" />
          <Checkbox label="6 month" />
          <Checkbox label="12 month" />
        </div>
      </FilterSection>

      <FilterSection title="Health and Safety">
        <div className="space-y-4">
          <Checkbox label="Accredited Medical Clinic" />
          <Checkbox label="Complies with skin penetration standards" />
          <Checkbox label="Council permitted use covers health services" />
          <Checkbox label="Fire Safety Equipment" />
          <Checkbox label="Emergency Exits" />
        </div>
      </FilterSection>

      <FilterSection title="Public Transportation (within 400m)">
        <div className="space-y-4">
          <Checkbox label="Bus Stop" />
          <Checkbox label="Train Station" />
          <Checkbox label="Tram / light rail stop" />
          <Checkbox label="Bike-sharing stations" />
          <Checkbox label="Ferry terminal" />
        </div>
      </FilterSection>

      {/* Bottom Actions - Fixed on mobile, normal position on desktop */}
      <div className="sticky bottom-0 lg:relative bg-white pt-4 mt-4 border-t border-[#928f8c]/30">
        <div className="flex justify-between items-center">
          <button className="text-[#928f8c] font-semibold hover:text-[#64775e]">
            Clear All
          </button>
          <button className="px-8 py-4 bg-[#64775e] text-white rounded-full font-semibold hover:bg-[#64775e]/90">
            Show 1,000+ Places
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterContent;