import Image from "next/image";

  
export default function Home() {
  return (
    <div className="w-[1280px] h-[4060px] relative bg-[#fefdf2]">
    <div className="h-[3544px] left-0 top-[122px] absolute flex-col justify-start items-start gap-[100px] inline-flex">
        <div className="h-[550px] relative">
            <img className="w-[1348px] h-[769px] left-[-34px] top-[-96px] absolute" src="https://via.placeholder.com/1348x769" />
            <div className="w-[756px] h-[85px] left-[263px] top-[40px] absolute bg-white rounded-[50px] shadow border border-[#928f8c]/30">
                <div className="w-[370px] pl-9 pr-[139px] py-[17.50px] left-0 top-0 absolute rounded-[50px] flex-col justify-center items-start gap-2 inline-flex">
                    <div className="w-[195px] text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Where</div>
                    <div className="w-[195px] text-[#4f4f4f] text-base font-light font-['DM Sans']">Search Locations</div>
                </div>
                <div className="w-[370px] pl-9 pr-[60px] py-[17.50px] left-[386px] top-0 absolute rounded-[50px] flex-col justify-center items-start gap-2 inline-flex">
                    <div className="w-[274px] text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Usage</div>
                    <div className="w-[274px] text-[#4f4f4f] text-base font-light font-['DM Sans']">Select Casual Or Regular Use</div>
                </div>
                <div className="w-16 h-16 p-[17px] left-[680px] top-[10px] absolute bg-[#64775e] rounded-[50px] justify-center items-center inline-flex">
                    <img className="w-[30px] h-[30px]" src="https://via.placeholder.com/30x30" />
                </div>
            </div>
        </div>
        <div className="self-stretch h-[413px] px-[100px] flex-col justify-start items-center gap-10 flex">
            <div className="self-stretch text-center text-[#4f4f4f] text-2xl font-semibold font-['DM Sans'] capitalize">The Wellshare Collection</div>
            <div className="w-[1080px] h-[244px] relative">
                <div className="w-[252px] h-[110px] left-0 top-0 absolute justify-center items-center gap-3 inline-flex">
                    <div className="w-[110px] rounded-3xl shadow justify-start items-center inline-flex">
                        <img className="w-[152px] h-[110px]" src="https://via.placeholder.com/152x110" />
                    </div>
                    <div className="w-[130px] self-stretch relative">
                        <div className="w-[94px] h-[21px] left-0 top-0 absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Sydney CBD</div>
                        <div className="w-[130px] h-[49px] left-0 top-[33px] absolute text-[#928f8c] text-sm font-light font-['DM Sans']">Treatment, Therapy, Medical& Beauty Rooms</div>
                    </div>
                </div>
                <div className="w-[252px] h-[110px] left-0 top-[134px] absolute justify-center items-center gap-3 inline-flex">
                    <div className="w-[110px] rounded-3xl shadow justify-start items-center inline-flex">
                        <img className="w-[152px] h-[110px]" src="https://via.placeholder.com/152x110" />
                    </div>
                    <div className="w-[130px] self-stretch relative">
                        <div className="w-[94px] h-[21px] left-0 top-0 absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Surry Hills</div>
                        <div className="w-[130px] h-[49px] left-0 top-[33px] absolute text-[#928f8c] text-sm font-light font-['DM Sans']">Treatment, Therapy & Medical Rooms</div>
                    </div>
                </div>
                <div className="w-[252px] h-[110px] left-[276px] top-0 absolute justify-center items-center gap-3 inline-flex">
                    <div className="w-[110px] rounded-3xl shadow justify-end items-center inline-flex">
                        <img className="w-[150px] h-[110px]" src="https://via.placeholder.com/150x110" />
                    </div>
                    <div className="w-[130px] self-stretch relative">
                        <div className="w-[94px] h-[21px] left-0 top-0 absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">St Leonards</div>
                        <div className="w-[130px] h-[49px] left-0 top-[33px] absolute text-[#928f8c] text-sm font-light font-['DM Sans']">Treatment, Therapy, Medical& Beauty Rooms</div>
                    </div>
                </div>
                <div className="w-[252px] h-[110px] left-[276px] top-[134px] absolute justify-center items-center gap-3 inline-flex">
                    <div className="w-[110px] rounded-3xl shadow justify-start items-center inline-flex">
                        <img className="w-[152px] h-[110px]" src="https://via.placeholder.com/152x110" />
                    </div>
                    <div className="w-[130px] self-stretch relative">
                        <div className="w-[94px] h-[21px] left-0 top-0 absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Pyrmont</div>
                        <div className="w-[130px] h-[49px] left-0 top-[33px] absolute text-[#928f8c] text-sm font-light font-['DM Sans']">Treatment & Therapy Rooms</div>
                    </div>
                </div>
                <div className="w-[252px] h-[110px] left-[552px] top-0 absolute justify-center items-center gap-3 inline-flex">
                    <div className="w-[110px] rounded-3xl shadow justify-start items-center inline-flex">
                        <img className="w-[152px] h-[110px]" src="https://via.placeholder.com/152x110" />
                    </div>
                    <div className="w-[130px] self-stretch relative">
                        <div className="w-[94px] h-[21px] left-0 top-0 absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Penrith</div>
                        <div className="w-[130px] h-[49px] left-0 top-[33px] absolute text-[#928f8c] text-sm font-light font-['DM Sans']">Medical, Treatment & Therapy Rooms</div>
                    </div>
                </div>
                <div className="w-[252px] h-[110px] left-[552px] top-[134px] absolute justify-center items-center gap-3 inline-flex">
                    <div className="w-[110px] h-[110px] rounded-3xl shadow justify-center items-center inline-flex">
                        <img className="w-[152px] h-[110px]" src="https://via.placeholder.com/152x110" />
                    </div>
                    <div className="w-[130px] self-stretch relative">
                        <div className="w-[121px] h-[21px] left-0 top-0 absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Doncaster East</div>
                        <div className="w-[130px] h-[49px] left-0 top-[33px] absolute text-[#928f8c] text-sm font-light font-['DM Sans']">Treatment, Therapy, Medical& Beauty Rooms</div>
                    </div>
                </div>
                <div className="w-[252px] h-[110px] left-[828px] top-0 absolute justify-center items-center gap-3 inline-flex">
                    <div className="w-[110px] h-[110px] rounded-3xl shadow justify-center items-center inline-flex">
                        <img className="w-[152px] h-[110px]" src="https://via.placeholder.com/152x110" />
                    </div>
                    <div className="w-[130px] self-stretch relative">
                        <div className="w-[94px] h-[21px] left-0 top-0 absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Caringbah</div>
                        <div className="w-[130px] h-[49px] left-0 top-[33px] absolute text-[#928f8c] text-sm font-light font-['DM Sans']">Treatment, Therapy, Medical& Beauty Rooms</div>
                    </div>
                </div>
                <div className="w-[252px] h-[110px] left-[828px] top-[134px] absolute justify-center items-center gap-3 inline-flex">
                    <div className="w-[110px] rounded-3xl shadow justify-start items-center inline-flex">
                        <img className="w-[152px] h-[110px]" src="https://via.placeholder.com/152x110" />
                    </div>
                    <div className="w-[130px] self-stretch relative">
                        <div className="w-[94px] h-[21px] left-0 top-0 absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Canberra</div>
                        <div className="w-[130px] h-[49px] left-0 top-[33px] absolute text-[#928f8c] text-sm font-light font-['DM Sans']">Treatment & Therapy Rooms</div>
                    </div>
                </div>
            </div>
            <div className="h-[58px] px-8 py-4 bg-[#f4f3e8] rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 inline-flex">
                <div className="text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">More Locations</div>
            </div>
        </div>
        <div className="self-stretch h-[793px] px-[100px] flex-col justify-start items-center gap-10 flex">
            <div className="self-stretch text-center text-[#4f4f4f] text-2xl font-semibold font-['DM Sans']">Room Types Available</div>
            <div className="w-[1080px] h-[624px] relative">
                <div className="w-[252px] h-[300px] left-0 top-0 absolute rounded-3xl shadow">
                    <img className="w-[412px] h-[300px] left-[-35px] top-0 absolute" src="https://via.placeholder.com/412x300" />
                    <div className="w-[268px] h-[329px] left-[-11px] top-[-9px] absolute bg-[#4f4f4f]/20"></div>
                    <div className="left-[75px] top-[234px] absolute text-white text-xl font-semibold font-['DM Sans']">Treatment</div>
                </div>
                <div className="w-[252px] h-[300px] left-0 top-[324px] absolute rounded-3xl shadow">
                    <img className="w-[412px] h-[300px] left-[-2px] top-0 absolute" src="https://via.placeholder.com/412x300" />
                    <div className="w-[268px] h-[329px] left-[-11px] top-[-9px] absolute bg-[#4f4f4f]/20"></div>
                    <div className="left-[95px] top-[234px] absolute text-center text-white text-xl font-semibold font-['DM Sans']">Dental</div>
                </div>
                <div className="w-[252px] h-[300px] left-[276px] top-0 absolute rounded-3xl shadow">
                    <img className="w-[412px] h-[300px] left-[-57px] top-0 absolute" src="https://via.placeholder.com/412x300" />
                    <div className="w-[268px] h-[329px] left-[-11px] top-[-9px] absolute bg-[#4f4f4f]/20"></div>
                    <div className="left-[88px] top-[234px] absolute text-center text-white text-xl font-semibold font-['DM Sans']">Medical</div>
                </div>
                <div className="w-[252px] h-[300px] left-[276px] top-[324px] absolute rounded-3xl shadow">
                    <img className="w-[412px] h-[300px] left-[-79px] top-0 absolute" src="https://via.placeholder.com/412x300" />
                    <div className="w-[268px] h-[329px] left-[-11px] top-[-9px] absolute bg-[#4f4f4f]/20"></div>
                    <div className="left-[106px] top-[234px] absolute text-white text-xl font-semibold font-['DM Sans']">Hair</div>
                </div>
                <div className="w-[252px] h-[300px] left-[552px] top-0 absolute rounded-3xl shadow">
                    <img className="w-[412px] h-[300px] left-[-65px] top-0 absolute" src="https://via.placeholder.com/412x300" />
                    <div className="w-[268px] h-[329px] left-[-11px] top-[-9px] absolute bg-[#4f4f4f]/20"></div>
                    <div className="left-[86px] top-[234px] absolute text-center text-white text-xl font-semibold font-['DM Sans']">Therapy</div>
                </div>
                <div className="w-[252px] h-[300px] left-[552px] top-[324px] absolute rounded-3xl shadow">
                    <img className="w-[412px] h-[300px] left-[-35px] top-0 absolute" src="https://via.placeholder.com/412x300" />
                    <div className="w-[268px] h-[329px] left-[-11px] top-[-9px] absolute bg-[#4f4f4f]/20"></div>
                    <div className="left-[74px] top-[234px] absolute text-white text-xl font-semibold font-['DM Sans']">Movement</div>
                </div>
                <div className="w-[252px] h-[300px] left-[828px] top-0 absolute rounded-3xl shadow">
                    <img className="w-[412px] h-[300px] left-[-54px] top-0 absolute" src="https://via.placeholder.com/412x300" />
                    <div className="w-[268px] h-[329px] left-[-11px] top-[-9px] absolute bg-[#4f4f4f]/20"></div>
                    <div className="left-[91px] top-[234px] absolute text-center text-white text-xl font-semibold font-['DM Sans']">Beauty</div>
                </div>
                <div className="w-[252px] h-[300px] left-[828px] top-[324px] absolute rounded-3xl shadow">
                    <img className="w-[412px] h-[300px] left-[-35px] top-0 absolute" src="https://via.placeholder.com/412x300" />
                    <div className="w-[268px] h-[329px] left-[-11px] top-[-9px] absolute bg-[#4f4f4f]/20"></div>
                    <div className="left-[95px] top-[234px] absolute text-white text-xl font-semibold font-['DM Sans']">Group</div>
                </div>
            </div>
            <div className="h-[58px] px-8 py-4 bg-[#f4f3e8] rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 inline-flex">
                <div className="text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">More Rooms</div>
            </div>
        </div>
        <div className="self-stretch px-[100px] justify-center items-center inline-flex">
            <div className="w-[1080px] h-[344px] relative">
                <div className="w-[344px] h-[344px] pb-10 left-0 top-0 absolute bg-[#f4f3e8] rounded-3xl shadow flex-col justify-start items-center gap-10 inline-flex">
                    <img className="w-[369px] h-[268px]" src="https://via.placeholder.com/369x268" />
                    <div className="text-center text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Hourly</div>
                </div>
                <div className="w-[344px] h-[344px] pb-10 left-[368px] top-0 absolute bg-[#f4f3e8] rounded-3xl shadow flex-col justify-start items-center gap-10 inline-flex">
                    <img className="w-[410px] h-[261px]" src="https://via.placeholder.com/410x261" />
                    <div className="text-center text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Daily</div>
                </div>
                <div className="w-[344px] h-[344px] left-[736px] top-0 absolute bg-[#f4f3e8] rounded-3xl shadow flex-col justify-start items-start inline-flex">
                    <img className="w-[403px] h-[293px]" src="https://via.placeholder.com/403x293" />
                    <div className="text-center text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Weekly</div>
                </div>
            </div>
            <div className="w-[542px] text-center text-[#4f4f4f] text-2xl font-semibold font-['DM Sans']">Casual & Regular Use Available</div>
            <div className="px-8 py-4 bg-[#f4f3e8] rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 flex">
                <div className="text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">View Pricing</div>
            </div>
        </div>
        <div className="self-stretch h-[351px] px-[100px] py-10 bg-[#f4f3e8] flex-col justify-start items-center gap-10 flex">
            <div className="w-[1078px] text-center text-[#4f4f4f] text-2xl font-semibold font-['DM Sans']">Why Wellshare</div>
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <div className="w-[196px] bg-[#f4f3e8] flex-col justify-start items-center gap-3 inline-flex">
                    <img className="w-12 h-12" src="https://via.placeholder.com/48x48" />
                    <div className="self-stretch text-center text-[#4f4f4f] text-base font-medium font-['DM Sans']"> Locations Across Australia</div>
                </div>
                <div className="w-[196px] bg-[#f4f3e8] flex-col justify-start items-center gap-3 inline-flex">
                    <img className="w-12 h-12" src="https://via.placeholder.com/48x48" />
                    <div className="self-stretch text-center text-[#4f4f4f] text-base font-medium font-['DM Sans']">Rooms To Suit Any Practitioner</div>
                </div>
                <div className="w-[196px] bg-[#f4f3e8] flex-col justify-start items-center gap-3 inline-flex">
                    <img className="w-12 h-12" src="https://via.placeholder.com/48x48" />
                    <div className="self-stretch text-center text-[#4f4f4f] text-base font-medium font-['DM Sans']">Join A Collaborative Community</div>
                </div>
                <div className="w-[196px] bg-[#f4f3e8] flex-col justify-start items-center gap-3 inline-flex">
                    <img className="w-12 h-12" src="https://via.placeholder.com/48x48" />
                    <div className="self-stretch text-center text-[#4f4f4f] text-base font-medium font-['DM Sans']">Seamless Search & Booking</div>
                </div>
                <div className="w-[196px] bg-[#f4f3e8] flex-col justify-start items-center gap-3 inline-flex">
                    <img className="w-12 h-12" src="https://via.placeholder.com/48x48" />
                    <div className="self-stretch text-center text-[#4f4f4f] text-base font-medium font-['DM Sans']">Flexible Room Use Options</div>
                </div>
            </div>
            <div className="h-[58px] px-8 py-4 bg-[#fefdf2] rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 inline-flex">
                <div className="text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">More About Us</div>
            </div>
        </div>
        <div className="self-stretch h-[424px] px-[73px] flex-col justify-start items-center gap-10 flex">
            <div className="self-stretch text-center text-[#4f4f4f] text-2xl font-semibold font-['DM Sans']">What Our Users Are Saying</div>
            <div className="w-[1134.37px] h-[353px] relative">
                <div className="w-[344px] h-[353px] left-[27px] top-0 absolute bg-[#f4f3e8] rounded-[38px]">
                    <img className="w-[60px] h-[60px] left-[142px] top-[40px] absolute rounded-[50px]" src="https://via.placeholder.com/60x60" />
                    <div className="left-[142px] top-[108px] absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Rodrigo</div>
                    <div className="w-[264px] left-[40px] top-[193px] absolute text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Highly recommend! The indoor and outdoor spaces are beautiful! Wonderful for little kids. Lots of room to run around and play outside. The food was delicious and lots of it. The hospitality was...</div>
                    <div className="left-[40px] top-[295px] absolute text-[#928f8c] text-sm font-light font-['DM Sans']">November 2023</div>
                    <div className="w-[159px] h-8 left-[92px] top-[137px] absolute">
                    </div>
                </div>
                <div className="w-[344px] h-[353px] left-[395px] top-0 absolute bg-[#f4f3e8] rounded-[38px]">
                    <img className="w-[60px] h-[60px] left-[142px] top-[40px] absolute rounded-[50px]" src="https://via.placeholder.com/60x60" />
                    <div className="left-[142px] top-[108px] absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Rodrigo</div>
                    <div className="w-[264px] left-[40px] top-[193px] absolute text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Highly recommend! The indoor and outdoor spaces are beautiful! Wonderful for little kids. Lots of room to run around and play outside. The food was delicious and lots of it. The hospitality was...</div>
                    <div className="left-[40px] top-[295px] absolute text-[#928f8c] text-sm font-light font-['DM Sans']">November 2023</div>
                    <div className="w-[159px] h-8 left-[92px] top-[137px] absolute">
                    </div>
                </div>
                <div className="w-[344px] h-[353px] left-[763px] top-0 absolute bg-[#f4f3e8] rounded-[38px]">
                    <img className="w-[60px] h-[60px] left-[142px] top-[40px] absolute rounded-[50px]" src="https://via.placeholder.com/60x60" />
                    <div className="left-[142px] top-[108px] absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Rodrigo</div>
                    <div className="w-[264px] left-[40px] top-[193px] absolute text-[#4f4f4f] text-sm font-normal font-['DM Sans']">Highly recommend! The indoor and outdoor spaces are beautiful! Wonderful for little kids. Lots of room to run around and play outside. The food was delicious and lots of it. The hospitality was...</div>
                    <div className="left-[40px] top-[295px] absolute text-[#928f8c] text-sm font-light font-['DM Sans']">November 2023</div>
                    <div className="w-[159px] h-8 left-[92px] top-[137px] absolute">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-[1281px] h-[290px] left-[-1px] top-[3770px] absolute bg-[#64775e]">
        <div className="h-36 left-[1036px] top-[40px] absolute flex-col justify-start items-end gap-[9px] inline-flex">
            <div className="px-6 py-2 rounded-[48px] border border-white justify-start items-center inline-flex">
                <div className="justify-start items-center gap-2 flex">
                    <div className="w-6 h-6 relative"></div>
                    <img className="w-9 h-9" src="https://via.placeholder.com/36x36" />
                </div>
            </div>
            <div className="px-4 py-2 rounded-[48px] border border-white justify-start items-center inline-flex">
                <div className="justify-start items-center gap-2 flex">
                    <div className="text-white text-base font-semibold font-['DM Sans']">List Your Clinic</div>
                </div>
            </div>
            <div className="self-stretch px-4 py-2 rounded-[48px] border border-white justify-start items-center inline-flex">
                <div className="justify-start items-center gap-2 flex">
                    <div className="w-5 h-5 relative"></div>
                    <div className="text-white text-base font-semibold font-['DM Sans']">+61 482 086 784</div>
                </div>
            </div>
        </div>
        <div className="h-12 left-[56px] top-[218px] absolute flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-[0px] border border-[#fefdf2]/40"></div>
            <div className="self-stretch justify-between items-center inline-flex">
                <div className="justify-start items-center gap-2 flex">
                    <div className="text-[#fefdf2] text-sm font-normal font-['DM Sans'] uppercase">© 2024 WEllshare</div>
                    <div className="w-1 h-1 bg-[#928f8c]/30 rounded-full"></div>
                    <div className="text-[#fefdf2] text-sm font-normal font-['DM Sans'] uppercase">privacy policy</div>
                    <div className="w-1 h-1 bg-[#928f8c]/30 rounded-full"></div>
                    <div className="text-[#fefdf2] text-sm font-normal font-['DM Sans'] uppercase">terms & conditions</div>
                </div>
                <div className="h-6 justify-end items-center gap-4 flex">
                    <div className="w-6 h-6 relative">
                        <div className="w-[13.50px] h-[13.32px] left-[5.25px] top-[5.34px] absolute">
                        </div>
                    </div>
                    <div className="w-6 h-6 relative">
                    </div>
                    <div className="w-6 h-6 relative">
                        <div className="w-[14.87px] h-[14.24px] left-[4.57px] top-[4.88px] absolute">
                        </div>
                    </div>
                    <div className="w-6 h-6 relative">
                    </div>
                    <div className="w-6 h-6 relative">
                    </div>
                </div>
            </div>
        </div>
        <div className="h-36 left-[480px] top-[40px] absolute flex-col justify-start items-center gap-12 inline-flex">
            <img className="w-[253.54px] h-[34px]" src="https://via.placeholder.com/254x34" />
            <div className="flex-col justify-start items-center gap-4 flex">
                <div className="text-white text-lg font-normal font-['DM Sans']">Our Story</div>
                <div className="text-white text-lg font-normal font-['DM Sans']">FAQs</div>
            </div>
        </div>
    </div>
    <div className="h-[122px] px-[100px] pt-10 pb-8 left-0 top-0 absolute bg-[#eae9dd] border border-[#928f8c]/30 flex-col justify-start items-center gap-8 inline-flex">
        <div className="relative">
            <div className="h-[50px] left-[576.25px] top-0 absolute justify-start items-center gap-6 inline-flex">
                <div className="px-5 py-3.5 bg-white/0 rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 flex">
                    <img className="w-[22px] h-[22px]" src="https://via.placeholder.com/22x22" />
                    <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">+61 482 086 784</div>
                </div>
                <div className="px-5 py-3.5 bg-[#64775e] rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 flex">
                    <div className="text-white text-base font-semibold font-['DM Sans']">List Your Clinic</div>
                </div>
                <div className="px-5 py-3.5 bg-white/0 rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 flex">
                    <img className="w-[22px] h-[22px]" src="https://via.placeholder.com/22x22" />
                    <img className="w-9 h-9" src="https://via.placeholder.com/36x36" />
                </div>
            </div>
            <img className="w-[217.50px] h-[30px] left-0 top-[9px] absolute" src="https://via.placeholder.com/217x30" />
        </div>
    </div>
    <div className="w-[260px] h-[328px] p-10 left-[994px] top-[100px] absolute bg-white rounded-[38px] shadow flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Login</div>
        <div className="self-stretch text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Create Account</div>
        <div className="self-stretch text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">FAQs</div>
        <div className="self-stretch text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Our Story</div>
    </div>
</div>
  );
}
