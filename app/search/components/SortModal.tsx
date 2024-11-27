import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
import sortby_img from '/public/images/sortby.png';
import Image from 'next/image';

const SortModal = () => {
  return (
    <Dialog>
  <DialogTrigger><div className="flex items-center border border-[#928f8c]/30 rounded-full p-2">
  <Image
          src={sortby_img}
          alt="sort" className="w-5 h-5 m-2"
          /><span className="text-[#4f4f4f] text-xs py-2">Sort</span>
    </div> </DialogTrigger>
  <DialogContent className="min-w-2/5 h-4/5 bg-white p-0 rounded-[38px] [&>button]:hidden">
  <div className="w-full max-w-[550px] bg-white rounded-[38px] shadow flex flex-col">
      {/* Header */}
      <div className="p-8 md:p-10 border-b border-[#928f8c]/30">
        <div className="flex justify-between items-center">
          <h2 className="text-[#4f4f4f] text-xl md:text-2xl font-semibold font-['DM Sans'] capitalize">
            Sort by
          </h2>
          <DialogClose asChild>
          <button className="w-8 h-8 rotate-45">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14m-7-7h14" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          </DialogClose>

        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-10 flex-grow">
        <div className="flex flex-col gap-6">
          <h3 className="text-[#4f4f4f] text-lg md:text-xl font-semibold font-['DM Sans'] capitalize">
            Sort
          </h3>
          <div className="flex flex-col gap-4">
            {['Location', 'Price', 'Rating'].map((option) => (
              <button
                key={option}
                className="flex items-center gap-4 w-full p-2 hover:bg-gray-50 rounded-lg"
              >
                <div className="w-6 h-6 border-2 border-[#4f4f4f] rounded-full" />
                <span className="text-[#4f4f4f] text-base font-normal font-['DM Sans']">
                  {option}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-8 md:p-10 border-t border-[#928f8c]/30">
        <button className="w-full px-8 py-4 bg-[#64775e] rounded-[38px] border border-[#928f8c]/30">
          <span className="text-white text-lg md:text-xl font-semibold font-['DM Sans']">
            Sort By
          </span>
        </button>
      </div>
    </div>
  </DialogContent>
</Dialog>

    
  );
};

export default SortModal;
