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

  const categories = [
    { name: 'Treatment', icon: '/api/placeholder/40/40' },
    { name: 'Medical', icon: '/api/placeholder/40/40' },
    { name: 'Therapy', icon: '/api/placeholder/40/40' },
    { name: 'Beauty', icon: '/api/placeholder/40/40' },
    { name: 'Dental', icon: '/api/placeholder/40/40' },
    { name: 'Hair', icon: '/api/placeholder/40/40' },
    { name: 'Movement', icon: '/api/placeholder/40/40' },
    { name: 'Group', icon: '/api/placeholder/40/40' }
  ];

  const LocationFooter = () => {
    const locations = [
      {
        heading: "Sydney CBD",
        subtext: "Casual/Daily"
      },
      {
        heading: "Surry Hills",
        subtext: "Casual/Daily"
      },
      {
        heading: "St. Leonards",
        subtext: "Casual/Daily"
      },
      {
        heading: "Pyrmont",
        subtext: "Casual/Daily"
      },
      {
        heading: "Penrith",
        subtext: "Casual/Daily"
      },
      {
        heading: "Doncaster East",
        subtext: "Casual/Daily"
      },
      {
        heading: "Caringbah",
        subtext: "Casual/Daily"
      },
      {
        heading: "Canberra",
        subtext: "Casual/Daily"
      }
    ];
  
    const roomTypes = [
      "Sydney treatment rooms",
      "Medical rooms in New South Wales",
      "Penrith weekly casual rooms",
      "Furnished Co-working space in Sydney",
      "Pyrmont furnished beauty salon",
      "Yoga / pilates room rentals in Surry Hill"
    ];
  

  return (
    <div className="flex flex-col min-h-screen">
      <WellshareNavbar />
      <main className="flex-grow">
        {/* Categories Section */}
        <div className="w-full bg-[#fefdf2] px-4 md:px-8 lg:px-16 pt-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-wrap gap-2 md:gap-4">
                {categories.map((category, index) => (
                  <div key={index} className={`w-20 h-24 p-3 rounded-3xl flex flex-col justify-center items-center gap-1 
                    ${index === 0 ? 'bg-white/30 border border-[#64775e] shadow' : ''}`}>
                    <div className="w-10 h-10">
                      <img src={category.icon} alt={category.name} className="w-full h-full" />
                    </div>
                    <div className="text-center text-[#4f4f4f] text-xs font-semibold">{category.name}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <button className="p-4 bg-white/30 rounded-[38px] border border-[#928f8c]/30 flex items-center gap-2">
                  <img src="/api/placeholder/20/20" alt="sort" className="w-5 h-5" />
                  <span className="text-[#4f4f4f] text-xs">Sort by</span>
                </button>
                <button className="p-4 bg-white/30 rounded-[38px] border border-[#928f8c]/30 flex items-center gap-2">
                  <img src="/api/placeholder/20/20" alt="filter" className="w-5 h-5" />
                  <span className="text-[#4f4f4f] text-xs">Filters</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="px-4 md:px-8 lg:px-16 py-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[#4f4f4f] text-base font-semibold mb-6">Over 400+ rooms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="bg-[#f4f3e8] rounded-3xl shadow">
                  <div className="relative">
                    <div className="w-full h-[220px] bg-gradient-to-b from-black to-black rounded-t-3xl" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div key={dot} className={`w-1.5 h-1.5 rounded-full ${dot === 1 ? 'bg-white' : 'bg-[#928f8c]/60'}`} />
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-[#4f4f4f] text-xl font-semibold">Wollongong...</h3>
                      <div className="text-[#4f4f4f] text-base font-semibold">4.99</div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[#928f8c] text-base font-semibold">Treatment</span>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <img key={star} src="/api/placeholder/16/16" alt="star" className="w-4 h-4" />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-[#928f8c] text-xs">From</span>
                      <div className="flex justify-between mt-2">
                        <div className="text-center">
                          <div className="text-[#4f4f4f] text-base font-semibold">$40</div>
                          <div className="text-[#928f8c] text-xs">Hour</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[#4f4f4f] text-base font-semibold">$100</div>
                          <div className="text-[#928f8c] text-xs">Day</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[#4f4f4f] text-base font-semibold">$300</div>
                          <div className="text-[#928f8c] text-xs">Week</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button className="text-[#928f8c] font-semibold">Prev</button>
              <div className="flex gap-2">
                {[1, 2, 3, '...', 10].map((page, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-full flex items-center justify-center
                      ${page === 1 ? 'bg-[#64775e] text-white' : 'text-[#4f4f4f]'}`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="text-[#4f4f4f] font-semibold">Next</button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        

       
        <div className="w-full px-4 md:px-6 lg:px-8 py-8 md:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="border-y border-[#eae9dd] py-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[#4f4f4f] text-sm">Wellshare</span>
            <span className="text-[#4f4f4f]">•</span>
            <span className="text-[#4f4f4f] text-sm">Australia</span>
            <span className="text-[#4f4f4f]">•</span>
            <span className="text-[#4f4f4f] text-sm">New South Wales</span>
            <span className="text-[#4f4f4f]">•</span>
            <span className="text-[#4f4f4f] text-sm">Sydney</span>
          </div>
        </div>

        {/* Location Options */}
        <div className="my-8 space-y-8">
          <h2 className="text-[#4f4f4f] text-lg font-semibold">
            Explore other options in and around Sydney
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-[#4f4f4f] text-sm font-semibold">
                  {location.heading}
                </h3>
                <p className="text-[#4f4f4f] text-sm">
                  {location.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Room Types */}
        <div className="space-y-8">
          <h2 className="text-[#4f4f4f] text-lg font-semibold">
            Other types of rooms available on Wellshare
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomTypes.map((roomType, index) => (
              <div key={index} className="text-[#4f4f4f] text-sm font-semibold">
                {roomType}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   
      </main>
      <Footer />
    </div>
  );
}
}