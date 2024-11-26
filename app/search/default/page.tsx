'use client'

import Image from "next/image";
import WellshareNavbar from "@/custom/WellshareNavbar";
import { useState, useEffect } from 'react'
import { Repo } from "@/types/Repo";
import HeroImage from '@/custom/HeroImage';
import whywellshare1 from '/public/images/wellsharelandingimg.png';
import Footer from "@/custom/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {


  const [data, setData] = useState<Repo>();

  useEffect(() => {
    fetch('https://api.github.com/repos/vercel/next.js')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
    <WellshareNavbar />
    <main className="flex-grow">
            <div className="w-full pt-4 bg-[#fefdf2] flex flex-col justify-center items-center gap-4">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="flex flex-wrap justify-center justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                "Treatment",
                "Medical",
                "Therapy",
                "Beauty",
                "Dental",
                "Hair",
                "Movement",
                "Group",
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-24 h-24 p-3 bg-white/30 rounded-3xl shadow border border-[#64775e] flex flex-col justify-center items-center gap-1"
                >
                  <div className="w-10 h-10 flex justify-center items-center">
                    <img
                      className="w-10 h-10"
                      src="https://via.placeholder.com/40x40"
                      alt={item}
                    />
                  </div>
                  <div className="w-full text-center text-[#4f4f4f] text-xs font-semibold font-['DM Sans']">
                    {item}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-grow flex justify-end items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="p-4 bg-white/30 rounded-[38px] border border-[#928f8c]/30 flex justify-center items-center gap-2">
                  <img
                    className="w-5 h-5"
                    src="https://via.placeholder.com/20x20"
                    alt="Sort by"
                  />
                  <div className="text-[#4f4f4f] text-xs font-normal font-['DM Sans']">
                    Sort by
                  </div>
                </div>
                <div className="p-4 bg-white/30 rounded-[38px] border border-[#928f8c]/30 flex justify-center items-center gap-2">
                  <img
                    className="w-5 h-5"
                    src="https://via.placeholder.com/20x20"
                    alt="Filters"
                  />
                  <div className="text-[#4f4f4f] text-xs font-normal font-['DM Sans']">
                    Filters
                  </div>
                </div>
                <div className="pl-4 pr-2 bg-white/30 rounded-[38px] border border-[#928f8c]/30 flex justify-center items-center gap-2">
                  <div className="w-6 h-6 flex justify-center items-center">
                    <div className="w-10 h-10 bg-[#64775e] rounded-full flex justify-center items-center">
                      <div className="w-6 h-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-[#f4f3e8]"></div>

        <div className="h-[941px] flex-col justify-start items-center gap-10 inline-flex">
    <div className="h-[127px] px-[100px] pt-4 bg-[#fefdf2] flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch h-[95px] flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-center gap-0.5 inline-flex">
                <div className="w-[788px] flex-col justify-start items-start gap-[11px] inline-flex">
                    <div className="self-stretch justify-start items-center gap-1 inline-flex">
                        <div className="w-[95px] h-[95px] px-3 py-2 bg-white/30 rounded-3xl shadow border border-[#64775e] flex-col justify-center items-center gap-1 inline-flex">
                            <div className="w-10 h-10 justify-center items-center inline-flex">
                                <img className="w-10 h-10" src="https://via.placeholder.com/40x40" />
                            </div>
                            <div className="w-[90px] text-center text-[#4f4f4f] text-xs font-semibold font-['DM Sans']">Treatment</div>
                        </div>
                        <div className="w-[95px] h-[95px] p-3 rounded-3xl flex-col justify-center items-center gap-1 inline-flex">
                            <div className="w-10 h-10 justify-center items-center inline-flex">
                                <img className="w-10 h-10" src="https://via.placeholder.com/40x40" />
                            </div>
                            <div className="self-stretch text-center text-[#4f4f4f] text-xs font-semibold font-['DM Sans']">Medical</div>
                        </div>
                        <div className="w-[95px] h-[95px] p-3 rounded-3xl flex-col justify-center items-center gap-1 inline-flex">
                            <div className="w-10 h-10 justify-center items-center inline-flex">
                                <img className="w-10 h-10" src="https://via.placeholder.com/40x40" />
                            </div>
                            <div className="self-stretch text-center text-[#4f4f4f] text-xs font-semibold font-['DM Sans']">Theraphy</div>
                        </div>
                        <div className="w-[95px] h-[95px] p-3 rounded-3xl flex-col justify-center items-center gap-1 inline-flex">
                            <div className="w-10 h-10 justify-center items-center inline-flex">
                                <img className="w-10 h-10" src="https://via.placeholder.com/40x40" />
                            </div>
                            <div className="self-stretch text-center text-[#4f4f4f] text-xs font-semibold font-['DM Sans']">Beauty</div>
                        </div>
                        <div className="w-[95px] h-[95px] p-3 rounded-3xl flex-col justify-center items-center gap-1 inline-flex">
                            <div className="w-10 h-10 justify-center items-center inline-flex">
                                <img className="w-10 h-10" src="https://via.placeholder.com/40x40" />
                            </div>
                            <div className="self-stretch text-center text-[#4f4f4f] text-xs font-semibold font-['DM Sans']">Dental</div>
                        </div>
                        <div className="w-[95px] h-[95px] p-3 rounded-3xl flex-col justify-center items-center gap-1 inline-flex">
                            <div className="w-10 h-10 justify-center items-center inline-flex">
                                <img className="w-10 h-10" src="https://via.placeholder.com/40x40" />
                            </div>
                            <div className="self-stretch text-center text-[#4f4f4f] text-xs font-semibold font-['DM Sans']">Hair</div>
                        </div>
                        <div className="w-[95px] h-[95px] p-3 rounded-3xl flex-col justify-center items-center gap-1 inline-flex">
                            <div className="w-10 h-10 justify-center items-center inline-flex">
                                <img className="w-10 h-10" src="https://via.placeholder.com/40x40" />
                            </div>
                            <div className="self-stretch text-center text-[#4f4f4f] text-xs font-semibold font-['DM Sans']">Movement</div>
                        </div>
                        <div className="w-[95px] h-[95px] p-3 rounded-3xl flex-col justify-center items-center gap-1 inline-flex">
                            <div className="w-10 h-10 justify-center items-center inline-flex">
                                <img className="w-10 h-10" src="https://via.placeholder.com/40x40" />
                            </div>
                            <div className="self-stretch text-center text-[#4f4f4f] text-xs font-semibold font-['DM Sans']">Group</div>
                        </div>
                    </div>
                </div>
                <div className="grow shrink basis-0 self-stretch justify-start items-center gap-3 flex">
                    <div className="justify-end items-start gap-1 flex">
                        <div className="p-4 bg-white/30 rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 flex">
                            <img className="w-5 h-5" src="https://via.placeholder.com/20x20" />
                            <div className="text-[#4f4f4f] text-xs font-normal font-['DM Sans']">Sort by</div>
                        </div>
                        <div className="flex-col justify-center items-end gap-2 inline-flex">
                            <div className="justify-start items-start gap-2 inline-flex">
                                <div className="p-4 bg-white/30 rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 flex">
                                    <img className="w-5 h-5" src="https://via.placeholder.com/20x20" />
                                    <div className="text-[#4f4f4f] text-xs font-normal font-['DM Sans']">Filters</div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-4 pr-2 bg-white/30 rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 flex">
                            <div className="w-6 h-6 relative flex-col justify-start items-start inline-flex"></div>
                            <div className="justify-start items-center gap-2 flex">
                                <div className="py-1.5 justify-start items-center gap-2 flex">
                                    <div className="w-10 h-10 relative">
                                        <div className="w-10 h-10 left-0 top-0 absolute bg-[#64775e] rounded-full"></div>
                                        <div className="w-6 h-6 left-[7.50px] top-[7.50px] absolute"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[1080px] h-[0px] border border-[#f4f3e8]"></div>
    </div>
    <div className="self-stretch h-[774px] flex-col justify-start items-center gap-[72px] flex">
        <div className="h-[774px] relative">
            <div className="w-[252px] h-[375px] left-[100px] top-0 absolute bg-[#f4f3e8] rounded-3xl shadow">
                <div className="w-[280px] h-[220px] left-[-7px] top-0 absolute bg-gradient-to-b from-black to-black"></div>
                <div className="w-8 h-8 left-[210px] top-[10px] absolute"></div>
                <div className="w-6 h-6 left-[212px] top-[98px] absolute">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-full shadow"></div>
                    <div className="w-4 h-4 left-[4px] top-[4px] absolute"></div>
                </div>
                <div className="left-[112px] top-[197px] absolute justify-start items-center gap-1 inline-flex">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1 h-1 bg-[#928f8c]/60 rounded-full"></div>
                </div>
                <div className="w-40 h-[26px] left-[7px] top-[238px] absolute text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Wollongong... </div>
                <div className="left-[7px] top-[271px] absolute text-[#928f8c] text-base font-semibold font-['DM Sans']">Treatment </div>
                <div className="left-[180px] top-[239px] absolute">
                    <div className="left-[26px] top-[2px] absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">4.99</div>
                </div>
                <div className="left-[8px] top-[317px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">From</div>
                <div className="w-[181px] h-[33px] left-[36px] top-[332px] absolute">
                    <div className="left-[80px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Day</div>
                    <div className="h-[21px] left-[67px] top-0 absolute justify-center items-center gap-1 inline-flex">
                        <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$100</div>
                    </div>
                    <div className="w-[31px] h-[33px] left-0 top-0 absolute">
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$40</div>
                        </div>
                        <div className="left-[8px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Hour</div>
                    </div>
                    <div className="w-[42px] h-[33px] left-[139px] top-0 absolute">
                        <div className="left-[12px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Week</div>
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$300</div>
                        </div>
                    </div>
                </div>
                <div className="left-[127px] top-[273px] absolute justify-start items-center gap-2 inline-flex">
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                </div>
            </div>
            <div className="w-[252px] h-[375px] left-[99px] top-[399px] absolute bg-[#f4f3e8] rounded-3xl shadow">
                <div className="w-[293.66px] h-[220px] left-[-21px] top-0 absolute bg-gradient-to-b from-black to-black"></div>
                <div className="left-[112px] top-[197px] absolute justify-start items-center gap-1 inline-flex">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1 h-1 bg-[#928f8c]/60 rounded-full"></div>
                </div>
                <div className="w-40 h-[26px] left-[7px] top-[238px] absolute text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Wollongong... </div>
                <div className="left-[7px] top-[271px] absolute text-[#928f8c] text-base font-semibold font-['DM Sans']">Treatment </div>
                <div className="left-[180px] top-[239px] absolute">
                    <div className="left-[26px] top-[2px] absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">4.99</div>
                </div>
                <div className="left-[8px] top-[317px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">From</div>
                <div className="w-[181px] h-[33px] left-[36px] top-[332px] absolute">
                    <div className="left-[80px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Day</div>
                    <div className="h-[21px] left-[67px] top-0 absolute justify-center items-center gap-1 inline-flex">
                        <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$100</div>
                    </div>
                    <div className="w-[31px] h-[33px] left-0 top-0 absolute">
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$40</div>
                        </div>
                        <div className="left-[8px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Hour</div>
                    </div>
                    <div className="w-[42px] h-[33px] left-[139px] top-0 absolute">
                        <div className="left-[12px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Week</div>
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$300</div>
                        </div>
                    </div>
                </div>
                <div className="left-[127px] top-[273px] absolute justify-start items-center gap-2 inline-flex">
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                </div>
                <div className="w-8 h-8 left-[210px] top-[10px] absolute"></div>
            </div>
            <div className="w-[252px] h-[375px] left-[376px] top-0 absolute bg-[#f4f3e8] rounded-3xl shadow">
                <div className="w-[293.66px] h-[220px] left-[-21px] top-0 absolute bg-gradient-to-b from-black to-black"></div>
                <div className="left-[112px] top-[197px] absolute justify-start items-center gap-1 inline-flex">
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1 h-1 bg-[#928f8c]/60 rounded-full"></div>
                </div>
                <div className="w-6 h-6 left-[16px] top-[98px] absolute">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-full shadow"></div>
                    <div className="w-4 h-4 left-[4px] top-[4px] absolute"></div>
                </div>
                <div className="w-6 h-6 left-[212px] top-[98px] absolute">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-full shadow"></div>
                    <div className="w-4 h-4 left-[4px] top-[4px] absolute"></div>
                </div>
                <div className="w-40 h-[26px] left-[7px] top-[238px] absolute text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Wollongong... </div>
                <div className="left-[7px] top-[271px] absolute text-[#928f8c] text-base font-semibold font-['DM Sans']">Treatment </div>
                <div className="left-[180px] top-[239px] absolute">
                    <div className="left-[26px] top-[2px] absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">4.99</div>
                </div>
                <div className="left-[8px] top-[317px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">From</div>
                <div className="w-[181px] h-[33px] left-[36px] top-[332px] absolute">
                    <div className="left-[80px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Day</div>
                    <div className="h-[21px] left-[67px] top-0 absolute justify-center items-center gap-1 inline-flex">
                        <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$100</div>
                    </div>
                    <div className="w-[31px] h-[33px] left-0 top-0 absolute">
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$40</div>
                        </div>
                        <div className="left-[8px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Hour</div>
                    </div>
                    <div className="w-[42px] h-[33px] left-[139px] top-0 absolute">
                        <div className="left-[12px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Week</div>
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$300</div>
                        </div>
                    </div>
                </div>
                <div className="left-[127px] top-[273px] absolute justify-start items-center gap-2 inline-flex">
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                </div>
                <div className="w-8 h-8 left-[210px] top-[10px] absolute"></div>
            </div>
            <div className="w-[252px] h-[375px] left-[375px] top-[399px] absolute bg-[#f4f3e8] rounded-3xl shadow">
                <div className="w-[293.66px] h-[220px] left-[-21px] top-0 absolute bg-gradient-to-b from-black to-black"></div>
                <div className="left-[112px] top-[197px] absolute justify-start items-center gap-1 inline-flex">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1 h-1 bg-[#928f8c]/60 rounded-full"></div>
                </div>
                <div className="w-40 h-[26px] left-[7px] top-[238px] absolute text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Wollongong... </div>
                <div className="left-[7px] top-[271px] absolute text-[#928f8c] text-base font-semibold font-['DM Sans']">Treatment </div>
                <div className="left-[180px] top-[239px] absolute">
                    <div className="left-[26px] top-[2px] absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">4.99</div>
                </div>
                <div className="left-[8px] top-[317px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">From</div>
                <div className="w-[181px] h-[33px] left-[36px] top-[332px] absolute">
                    <div className="left-[80px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Day</div>
                    <div className="h-[21px] left-[67px] top-0 absolute justify-center items-center gap-1 inline-flex">
                        <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$100</div>
                    </div>
                    <div className="w-[31px] h-[33px] left-0 top-0 absolute">
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$40</div>
                        </div>
                        <div className="left-[8px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Hour</div>
                    </div>
                    <div className="w-[42px] h-[33px] left-[139px] top-0 absolute">
                        <div className="left-[12px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Week</div>
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$300</div>
                        </div>
                    </div>
                </div>
                <div className="left-[127px] top-[273px] absolute justify-start items-center gap-2 inline-flex">
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                </div>
                <div className="w-8 h-8 left-[210px] top-[10px] absolute"></div>
            </div>
            <div className="w-[252px] h-[375px] left-[652px] top-0 absolute bg-[#f4f3e8] rounded-3xl shadow">
                <div className="w-[293.66px] h-[220px] left-[-21px] top-0 absolute bg-gradient-to-b from-black to-black"></div>
                <div className="left-[112px] top-[197px] absolute justify-start items-center gap-1 inline-flex">
                    <div className="w-1 h-1 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="w-6 h-6 left-[16px] top-[98px] absolute">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-full shadow"></div>
                    <div className="w-4 h-4 left-[4px] top-[4px] absolute"></div>
                </div>
                <div className="w-40 h-[26px] left-[7px] top-[238px] absolute text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Wollongong... </div>
                <div className="left-[7px] top-[271px] absolute text-[#928f8c] text-base font-semibold font-['DM Sans']">Treatment </div>
                <div className="left-[180px] top-[239px] absolute">
                    <div className="left-[26px] top-[2px] absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">4.99</div>
                </div>
                <div className="left-[8px] top-[317px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">From</div>
                <div className="w-[181px] h-[33px] left-[36px] top-[332px] absolute">
                    <div className="left-[80px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Day</div>
                    <div className="h-[21px] left-[67px] top-0 absolute justify-center items-center gap-1 inline-flex">
                        <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$100</div>
                    </div>
                    <div className="w-[31px] h-[33px] left-0 top-0 absolute">
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$40</div>
                        </div>
                        <div className="left-[8px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Hour</div>
                    </div>
                    <div className="w-[42px] h-[33px] left-[139px] top-0 absolute">
                        <div className="left-[12px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Week</div>
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$300</div>
                        </div>
                    </div>
                </div>
                <div className="left-[127px] top-[273px] absolute justify-start items-center gap-2 inline-flex">
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                </div>
                <div className="w-8 h-8 left-[210px] top-[10px] absolute"></div>
            </div>
            <div className="w-[252px] h-[375px] left-[651px] top-[399px] absolute bg-[#f4f3e8] rounded-3xl shadow">
                <div className="w-[293.66px] h-[220px] left-[-21px] top-0 absolute bg-gradient-to-b from-black to-black"></div>
                <div className="left-[112px] top-[197px] absolute justify-start items-center gap-1 inline-flex">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1 h-1 bg-[#928f8c]/60 rounded-full"></div>
                </div>
                <div className="w-40 h-[26px] left-[7px] top-[238px] absolute text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Wollongong... </div>
                <div className="left-[7px] top-[271px] absolute text-[#928f8c] text-base font-semibold font-['DM Sans']">Treatment </div>
                <div className="left-[180px] top-[239px] absolute">
                    <div className="left-[26px] top-[2px] absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">4.99</div>
                </div>
                <div className="left-[8px] top-[317px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">From</div>
                <div className="w-[181px] h-[33px] left-[36px] top-[332px] absolute">
                    <div className="left-[80px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Day</div>
                    <div className="h-[21px] left-[67px] top-0 absolute justify-center items-center gap-1 inline-flex">
                        <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$100</div>
                    </div>
                    <div className="w-[31px] h-[33px] left-0 top-0 absolute">
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$40</div>
                        </div>
                        <div className="left-[8px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Hour</div>
                    </div>
                    <div className="w-[42px] h-[33px] left-[139px] top-0 absolute">
                        <div className="left-[12px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Week</div>
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$300</div>
                        </div>
                    </div>
                </div>
                <div className="left-[127px] top-[273px] absolute justify-start items-center gap-2 inline-flex">
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                </div>
                <div className="w-8 h-8 left-[210px] top-[10px] absolute"></div>
            </div>
            <div className="w-[252px] h-[375px] left-[928px] top-0 absolute bg-[#f4f3e8] rounded-3xl shadow">
                <div className="w-[293.66px] h-[220px] left-[-21px] top-0 absolute bg-gradient-to-b from-black to-black"></div>
                <div className="w-40 h-[26px] left-[7px] top-[238px] absolute text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Wollongong... </div>
                <div className="left-[7px] top-[271px] absolute text-[#928f8c] text-base font-semibold font-['DM Sans']">Treatment </div>
                <div className="left-[180px] top-[239px] absolute">
                    <div className="left-[26px] top-[2px] absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">4.99</div>
                </div>
                <div className="left-[8px] top-[317px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">From</div>
                <div className="w-[181px] h-[33px] left-[36px] top-[332px] absolute">
                    <div className="left-[80px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Day</div>
                    <div className="h-[21px] left-[67px] top-0 absolute justify-center items-center gap-1 inline-flex">
                        <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$100</div>
                    </div>
                    <div className="w-[31px] h-[33px] left-0 top-0 absolute">
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$40</div>
                        </div>
                        <div className="left-[8px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Hour</div>
                    </div>
                    <div className="w-[42px] h-[33px] left-[139px] top-0 absolute">
                        <div className="left-[12px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Week</div>
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$300</div>
                        </div>
                    </div>
                </div>
                <div className="left-[127px] top-[273px] absolute justify-start items-center gap-2 inline-flex">
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                </div>
                <div className="w-8 h-8 left-[210px] top-[10px] absolute"></div>
            </div>
            <div className="w-[252px] h-[375px] left-[927px] top-[399px] absolute bg-[#f4f3e8] rounded-3xl shadow">
                <div className="w-[293.66px] h-[220px] left-[-21px] top-0 absolute bg-gradient-to-b from-black to-black"></div>
                <div className="left-[112px] top-[197px] absolute justify-start items-center gap-1 inline-flex">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#928f8c]/60 rounded-full"></div>
                    <div className="w-1 h-1 bg-[#928f8c]/60 rounded-full"></div>
                </div>
                <div className="w-40 h-[26px] left-[7px] top-[238px] absolute text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Wollongong... </div>
                <div className="left-[7px] top-[271px] absolute text-[#928f8c] text-base font-semibold font-['DM Sans']">Treatment </div>
                <div className="left-[180px] top-[239px] absolute">
                    <div className="left-[26px] top-[2px] absolute text-[#4f4f4f] text-base font-semibold font-['DM Sans']">4.99</div>
                </div>
                <div className="left-[8px] top-[317px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">From</div>
                <div className="w-[181px] h-[33px] left-[36px] top-[332px] absolute">
                    <div className="left-[80px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Day</div>
                    <div className="h-[21px] left-[67px] top-0 absolute justify-center items-center gap-1 inline-flex">
                        <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$100</div>
                    </div>
                    <div className="w-[31px] h-[33px] left-0 top-0 absolute">
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$40</div>
                        </div>
                        <div className="left-[8px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Hour</div>
                    </div>
                    <div className="w-[42px] h-[33px] left-[139px] top-0 absolute">
                        <div className="left-[12px] top-[24px] absolute text-[#928f8c] text-[7px] font-semibold font-['DM Sans']">Week</div>
                        <div className="h-[21px] left-0 top-0 absolute justify-center items-center gap-1 inline-flex">
                            <div className="text-[#4f4f4f] text-base font-semibold font-['DM Sans']">$300</div>
                        </div>
                    </div>
                </div>
                <div className="left-[127px] top-[273px] absolute justify-start items-center gap-2 inline-flex">
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                    <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                </div>
                <div className="w-8 h-8 left-[210px] top-[10px] absolute"></div>
            </div>
        </div>
    </div>
</div>
      </div>
    </main>
    <Footer />
  </div>
   
  );
}

