// custom/WellshareNavbar.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"


const WellshareNavbar = () => {
  return (
    <nav className="w-full bg-wsSecondary place-items-center">
      <div className="container flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img src="/images/wellshare.png" alt="Logo" className="h-8 w-auto sm:h-12 sm:w-auto" />
        </div>
        <ul className="flex space-x-4">
          <li className="hidden sm:flex items-center space-x-2">
            <div className="px-5 py-3.5 bg-white/0 rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 flex">
              <FontAwesomeIcon icon={faPhone} />
              <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">+61 482 086 784</div>
            </div>
          </li>
          <li className="hidden sm:flex">
            <div className="px-5 py-3.5 bg-[#64775e] rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 flex">
              <div className="text-white text-base font-semibold font-['DM Sans']">List Your Clinic</div>
            </div>
          </li>
          <li>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="-p-3 -mb-5 open:bg-[#928f8c]/30">
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
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default WellshareNavbar;