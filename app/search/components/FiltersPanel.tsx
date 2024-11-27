import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import PricingFilter from './PricingFilter';
import * as Slider  from '@radix-ui/react-slider';
import "../default/landing.css";
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import filterby_img from '/public/images/filterby.png';

interface FilterSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  isOpen?: boolean;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, subtitle, children, isOpen = true }) => {
  const [expanded, setExpanded] = useState(isOpen);

  return (
    <div className="border-b border-[#928f8c]/30 py-6">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <h3 className="text-[#4f4f4f] text-xl font-semibold font-['DM Sans'] capitalize">
            {title}
          </h3>
          {subtitle && (
            <span className="text-[#4f4f4f] text-sm font-normal ml-2">
              {subtitle}
            </span>
          )}
        </div>
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {expanded && <div className="mt-4">{children}</div>}
    </div>
  );
};

interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => (
  <label className="flex items-center gap-4 py-2 cursor-pointer">
    <div className="w-6 h-6 border border-[#928f8c]/30 rounded flex items-center justify-center">
      <input type="checkbox" className="hidden" />
      <div className="w-4 h-4 bg-[#64775e] rounded hidden peer-checked:block" />
    </div>
    <span className="text-[#4f4f4f] text-base font-normal">{label}</span>
  </label>
);

interface TagProps {
  label: string;
  active?: boolean;
}

const Tag: React.FC<TagProps> = ({ label, active = false }) => (
  <button
    className={`px-6 py-3 rounded-full border transition-colors
    ${active 
      ? "bg-[#64775e]/25 border-[#64775e] text-[#64775e]" 
      : "border-[#928f8c]/30 text-[#4f4f4f] hover:bg-gray-50"
    } text-base font-medium`}
  >
    {label}
  </button>
);

interface FiltersPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const FiltersPanel: React.FC<FiltersPanelProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog>
  <DialogTrigger><div className="flex items-center border border-[#928f8c]/30 rounded-full p-2">
  <Image
          src={filterby_img}
          alt="sort" className="w-5 h-5 m-2"
          /><span className="text-[#4f4f4f] text-xs py-2">Filters</span>
    </div> </DialogTrigger>
  <DialogContent className="min-w-2/5 h-4/5 bg-white">
  <div className={`h-full overflow-scroll
      fixed inset-0 z-50 bg-white lg:relative lg:bg-transparent
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="h-full ">
        <div className="max-w-lg mx-auto lg:max-w-none">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-[#928f8c]/30">
            <h2 className="text-[#4f4f4f] text-2xl font-semibold">Filters</h2>
            <button 
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          {/* Filter Sections */}
          <div className="p-6">
            <FilterSection title="Location">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#4f4f4f]">within 85km</span>
                  <div className="px-4 py-1 bg-[#928f8c]/20 rounded-full">
                    <span className="text-[#4f4f4f]">within <strong>85km</strong></span>
                  </div>
                </div>

                <Slider.Root className="SliderRoot" defaultValue={[50]} max={100} step={1}>
			<Slider.Track className="SliderTrack">
				<Slider.Range className="SliderRange" />
			</Slider.Track>
			<Slider.Thumb className="SliderThumb" aria-label="Volume" />
		</Slider.Root>
                {/* Range Slider <Slider defaultValue={[33]} max={100} step={1} className="h-2 bg-[#64775e] rounded-full" />*/}
                
              </div>
            </FilterSection>
            <PricingFilter />
            <FilterSection title="Room Type">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Treatment", "Talk therapy", "Medical", "Beauty", "Dental", "Hair", "Movement", "Group"].map(type => (
                  <Checkbox key={type} label={type} />
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Room Features">
              <div className="flex flex-wrap gap-2">
                <Tag label="Windows/Natural Light" active />
                <Tag label="Blinds/curtains" />
                <Tag label="Internal room" />
                <Tag label="Artwork" />
                <Tag label="Dimmable Lighting" />
              </div>
              <button className="mt-4 text-[#4f4f4f] font-bold underline flex items-center gap-2">
                Show more
                <ChevronDown size={16} />
              </button>
            </FilterSection>

            {/* Add other sections similarly */}
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-white border-t border-[#928f8c]/30 p-4">
            <div className="flex justify-between items-center">
              <button className="text-[#928f8c] font-semibold">
                Clear All
              </button>
              <button className="px-8 py-4 bg-[#64775e] text-white rounded-[38px] font-semibold">
                Show 1,000+ Places
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DialogContent>
</Dialog>


  );
};

export default FiltersPanel;
