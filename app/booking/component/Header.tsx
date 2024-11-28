import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-[#eae9dd] border border-[#928f8c]/30">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-[100px] py-8 lg:py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <img 
            src="https://via.placeholder.com/217x30" 
            alt="Logo" 
            className="h-[30px] w-auto"
          />
          
          <div className="flex items-center gap-3 md:gap-6">
            <button className="flex items-center gap-2 px-4 md:px-5 py-3 rounded-[38px] border border-[#928f8c]/30">
              <img src="https://via.placeholder.com/22x22" alt="Exit" className="w-[22px] h-[22px]" />
              <span className="text-[#4f4f4f] text-sm md:text-base font-semibold font-['DM Sans']">Exit</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 md:px-5 py-3 bg-[#64775e] rounded-[38px] border border-[#928f8c]/30">
              <span className="text-white text-sm md:text-base font-semibold font-['DM Sans']">List Your Clinic</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 md:px-5 py-3 rounded-[38px] border border-[#928f8c]/30">
              <img src="https://via.placeholder.com/22x22" alt="Icon" className="w-[22px] h-[22px]" />
              <img src="https://via.placeholder.com/36x36" alt="Avatar" className="w-8 md:w-9 h-8 md:h-9" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
