import React from 'react';
import Image from 'next/image';
import wellshare_img from '/public/images/wellshare_w.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faBars, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
const SearchHeader = () => {
  return (
    <header className="w-full bg-[#eae9dd] border border-[#d9d9d9] px-4 md:px-8 lg:px-[100px] py-6 lg:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Search Section */}
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-4">
              <div className="w-14 h-12 hidden md:block">
                <img className="bg-wsPrimary w-14 h-12 p-2 rounded-full" src={wellshare_img.src} alt="Search" />  
              </div>
              <div className="w-full flex items-center bg-white rounded-[50px] shadow border border-[#d9d9d9] pr-4">
                {/* NSW Dropdown */}
                <div className="hidden md:flex items-center justify-center w-[135px] py-3.5">
                  <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">NSW</div>
                </div>
                
                {/* Casual/Daily Dropdown */}
                <div className="flex-1 md:w-[170px] px-4 md:px-7 py-3.5">
                  <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans'] truncate">
                    Casual / Daily
                  </div>
                </div>
                
                {/* Search Button */}
                <div className="w-10 h-10 p-2.5 bg-[#64775e] rounded-[50px] flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg text-white font-thin"/>
                </div>
              </div>
            </div>
          </div>

          {/* Actions Section */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 md:gap-6">
            {/* Phone Number */}
            <button className="flex items-center gap-2 px-4 py-3 rounded-[38px] border border-[#d9d9d9]">
            <FontAwesomeIcon className="text-[#4f4f4f]" icon={faPhone} />
              <span className="text-[#4f4f4f] text-base font-semibold font-['DM Sans'] hidden sm:inline">
                +61 482 086 784
              </span>
            </button>

            {/* List Your Clinic Button */}
            <button className="px-4 py-3 bg-[#64775e] rounded-[38px] border border-[#d9d9d9]">
              <span className="text-white text-base font-semibold font-['DM Sans']">
                List Your Clinic
              </span>
            </button>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="-p-3 -mb-1 open:bg-[#928f8c]/30">
                  <div className="px-5 py-3.5 bg-white/0 rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 flex">
                    <FontAwesomeIcon icon={faBars} className="text-xl text-[#4f4f4f]" />
                    <FontAwesomeIcon icon={faUser} className="text-2xl fill-[#4f4f4f] text-bg-[#928f8c]/30" />
                  </div>
                </MenubarTrigger>
                <MenubarContent className="rounded-3xl p-4 gap-6 -m-1 -p-20">
                  <MenubarItem>
                    <div className="text-[#4f4f4f] text-lg font-semibold font-['DM Sans']">Login</div>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <div className="text-[#4f4f4f] text-lg font-semibold font-['DM Sans']">Create Account</div>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <div className="text-[#4f4f4f] text-lg font-semibold font-['DM Sans']">FAQs</div>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <div className="text-[#4f4f4f] text-lg font-semibold font-['DM Sans']">Our Story</div>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

          </div>
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
