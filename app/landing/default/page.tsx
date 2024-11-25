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
    <div>
    <WellshareNavbar />
      <main className="items-center justify-center w-full gap-0">
      
        <div
          style={{ backgroundImage: `url('/images/wellsharelandingimg.png')` }}
          className="h-[569px] w-full bg-cover bg-no-repeat m-0 p-10 items-center justify-center"
        >
          <div className="place-self-center">
          <div className="w-[756px] h-[85px] relative bg-white rounded-[50px] shadow border border-[#928f8c]/30">
    <div className="w-[370px] pl-9 pr-[139px] py-[17.50px] left-0 top-0 absolute rounded-[50px] flex-col justify-center items-start gap-2 inline-flex">
        <div className="w-[195px] text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Where</div>
        <div className="w-[195px] text-[#4f4f4f] text-base font-light font-['DM Sans']">Search Locations</div>
    </div>
    <div className="w-[370px] pl-9 pr-[60px] py-[17.50px] left-[386px] top-0 absolute rounded-[50px] flex-col justify-center items-start gap-2 inline-flex">
        <div className="w-[274px] text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Usage</div>
        <div className="w-[274px] text-[#4f4f4f] text-base font-light font-['DM Sans']">Select Casual Or Regular Use</div>
    </div>
    <div className="w-16 h-16 p-[17px] left-[680px] top-[10px] absolute bg-[#64775e] rounded-[50px] justify-center items-center inline-flex">
    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl text-white"/>
    </div>
</div>
           </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center text-center text-[#4f4f4f] text-xl sm:text-lg lg:text-2xl font-semibold font-['DM Sans'] capitalize mt-8 sm:mt-12 lg:mt-16">
  The Wellshare Collection
</div>

          <div className="self-stretch justify-center items-center  place-items-center text-center text-[#4f4f4f] text-2xl font-semibold font-['DM Sans'] capitalize mt-10 flex flex-col-4 gap-10">
          <div className="w-[252px] h-[110px] justify-center items-center gap-3 inline-flex flex flex-col-2 ">
            <div className="w-[110px] rounded-3xl shadow justify-start items-center inline-flex">
                <img className="w-[152px] h-[110px]" src="https://via.placeholder.com/152x110" />
            </div>
            <div className="w-[130px] self-stretch relative gap-4 justify-between">
                <div className="text-[#4f4f4f] text-left text-base font-semibold font-['DM Sans']">Sydney CBD</div>
                <div className="text-[#928f8c] mt-4 text-left text-sm font-light font-['DM Sans'] justify-start">Treatment, Therapy, Medical& Beauty Rooms</div>
            </div>
        </div>
        <div className="w-[252px] h-[110px] justify-center items-center gap-3 inline-flex flex flex-col-2 ">
            <div className="w-[110px] rounded-3xl shadow justify-start items-center inline-flex">
                <img className="w-[152px] h-[110px]" src="https://via.placeholder.com/152x110" />
            </div>
            <div className="w-[130px] self-stretch relative gap-4 justify-between">
                <div className="text-[#4f4f4f] text-left text-base font-semibold font-['DM Sans']">Sydney CBD</div>
                <div className="text-[#928f8c] mt-4 text-left text-sm font-light font-['DM Sans'] justify-start">Treatment, Therapy, Medical& Beauty Rooms</div>
            </div>
        </div>
        <div className="w-[252px] h-[110px] justify-center items-center gap-3 inline-flex flex flex-col-2 ">
            <div className="w-[110px] rounded-3xl shadow justify-start items-center inline-flex">
                <img className="w-[152px] h-[110px]" src="https://via.placeholder.com/152x110" />
            </div>
            <div className="w-[130px] self-stretch relative gap-4 justify-between">
                <div className="text-[#4f4f4f] text-left text-base font-semibold font-['DM Sans']">Sydney CBD</div>
                <div className="text-[#928f8c] mt-4 text-left text-sm font-light font-['DM Sans'] justify-start">Treatment, Therapy, Medical& Beauty Rooms</div>
            </div>
        </div>
        <div className="w-[252px] h-[110px] justify-center items-center gap-3 inline-flex flex flex-col-2 ">
            <div className="w-[110px] rounded-3xl shadow justify-start items-center inline-flex">
                <img className="w-[152px] h-[110px]" src="https://via.placeholder.com/152x110" />
            </div>
            <div className="w-[130px] self-stretch relative gap-4 justify-between">
                <div className="text-[#4f4f4f] text-left text-base font-semibold font-['DM Sans']">Sydney CBD</div>
                <div className="text-[#928f8c] mt-4 text-left text-sm font-light font-['DM Sans'] justify-start">Treatment, Therapy, Medical& Beauty Rooms</div>
            </div>
        </div>
          </div>

          <div className="self-stretch justify-center items-center  place-items-center text-center text-[#4f4f4f] text-2xl font-semibold font-['DM Sans'] capitalize mt-10">
          <div className="h-[48px] px-8 py-4 bg-[#f4f3e8] place-self-center rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 inline-flex">
    <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">More Locations</div>
</div>
          </div>
          <div className="w-full flex flex-col items-center justify-center text-center text-[#4f4f4f] text-xl sm:text-lg lg:text-2xl font-semibold font-['DM Sans'] capitalize mt-8 sm:mt-12 lg:mt-16">
          Room Types Available
</div>
          
          <div className="self-stretch justify-center items-center place-items-center text-center text-[#4f4f4f] text-2xl font-semibold font-['DM Sans'] capitalize mt-10 flex flex-wrap gap-10">
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 relative rounded-3xl shadow">
    <img className="w-full h-auto rounded-3xl" src="https://via.placeholder.com/412x300" alt="Treatment" />
    <div className="absolute inset-0 bg-[#4f4f4f]/20 rounded-3xl"></div>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold">Treatment</div>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 relative rounded-3xl shadow">
    <img className="w-full h-auto rounded-3xl" src="https://via.placeholder.com/412x300" alt="Treatment" />
    <div className="absolute inset-0 bg-[#4f4f4f]/20 rounded-3xl"></div>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold">Treatment</div>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 relative rounded-3xl shadow">
    <img className="w-full h-auto rounded-3xl" src="https://via.placeholder.com/412x300" alt="Treatment" />
    <div className="absolute inset-0 bg-[#4f4f4f]/20 rounded-3xl"></div>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold">Treatment</div>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 relative rounded-3xl shadow">
    <img className="w-full h-auto rounded-3xl" src="https://via.placeholder.com/412x300" alt="Treatment" />
    <div className="absolute inset-0 bg-[#4f4f4f]/20 rounded-3xl"></div>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold">Treatment</div>
  </div>
</div>
          <div className="self-stretch justify-center items-center  place-items-center text-center text-[#4f4f4f] text-2xl font-semibold font-['DM Sans'] capitalize mt-10">
          <div className="h-[48px] px-8 py-4 bg-[#f4f3e8] place-self-center rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 inline-flex">
    <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">More Rooms</div>
</div>
</div>
<div className="self-stretch justify-center items-center  place-items-center text-center text-[#4f4f4f] text-2xl font-semibold font-['DM Sans'] capitalize mt-24">Casual & Regular Use Available</div>
<div className="self-stretch justify-center items-center  place-items-center text-center text-[#4f4f4f] text-2xl font-semibold font-['DM Sans'] capitalize mt-10 flex flex-col-3 gap-10">
<div className="w-[344px] h-[344px] pb-10  bg-[#f4f3e8] rounded-3xl shadow flex-col justify-start items-center gap-10 inline-flex">
            <img className="w-[344px] h-[344px] rounded-t-3xl" src="https://via.placeholder.com/369x268" />
            <div className="text-center text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Hourly</div>
        </div>
        <div className="w-[344px] h-[344px] pb-10  bg-[#f4f3e8] rounded-3xl shadow flex-col justify-start items-center gap-10 inline-flex">
            <img className="w-[410px] h-[261px] rounded-t-3xl" src="https://via.placeholder.com/410x261" />
            <div className="text-center text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Daily</div>
        </div>
        <div className="w-[344px] h-[344px] pb-10 bg-[#f4f3e8] rounded-3xl shadow flex-col justify-start items-start inline-flex">
            <img className="w-[410px] h-[261px] rounded-t-3xl" src="https://via.placeholder.com/403x293" />
            <div className="text-center text-[#4f4f4f] text-xl font-semibold font-['DM Sans']">Weekly</div>
        </div>
</div>

          <div className="self-stretch justify-center items-center  place-items-center text-center text-[#4f4f4f] text-2xl font-semibold font-['DM Sans'] capitalize mt-10">
          <div className="h-[48px] px-8 py-4 bg-[#f4f3e8] place-self-center rounded-[38px] border border-[#928f8c]/30 justify-center items-center gap-2 inline-flex">
    <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">View Pricing</div>
</div>
</div>
<div className="w-full h-[351px] px-[100px] py-10 bg-[#f4f3e8] flex-col justify-center items-center place-items-center gap-10 inline-flex mt-24">
    <div className="w-[1078px] text-center text-[#4f4f4f] text-2xl font-semibold font-['DM Sans']">Why Wellshare</div>
    <div className="justify-center justify-between items-center gap-6 inline-flex">
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
        <div className="text-[#4f4f4f] text-sm font-semibold font-['DM Sans']">More About Us</div>
    </div>
</div>
<div className="self-stretch justify-center items-center  place-items-center text-center text-[#4f4f4f] text-2xl font-semibold font-['DM Sans'] capitalize mt-24">What Our Users Are Saying</div>
<div className="self-stretch justify-center items-center  place-items-center text-center text-[#4f4f4f] text-2xl font-semibold font-['DM Sans'] capitalize mt-10">
<Carousel className="w-5/6 justify-center">
      <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className='flex justify-center items-center basis-1/3 md:basis-1/2 lg:basis-1/3'
              >
                <div className='p-1 w-[344px]'>
                  <Card className='bg-wsSecondary rounded-[38px]'>
                  <CardContent className="flex items-center justify-center p-0">
  <div className="w-full max-w-sm h-auto bg-[#f4f3e8] rounded-[38px] p-4">
    <img className="w-16 h-16 mx-auto mt-4 rounded-full" src="https://via.placeholder.com/60x60" alt="Rodrigo" />
    <div className="mt-4 text-center text-[#4f4f4f] text-base font-semibold">Rodrigo</div>
    <div className="mt-4 text-start text-[#4f4f4f] text-sm font-normal px-4">
      Highly recommend! The indoor and outdoor spaces are beautiful! Wonderful for little kids. Lots of room to run around and play outside. The food was delicious and lots of it. The hospitality was...
    </div>
    <div className="mt-4 text-start text-[#928f8c] text-sm font-light px-4">November 2023</div>
  </div>
</CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
      <CarouselPrevious >
      <FontAwesomeIcon icon="arrow-down" className="border-none"/>
      </CarouselPrevious>
      <CarouselNext >
      <FontAwesomeIcon icon="chevron-right" />
      </CarouselNext>
    </Carousel>
    </div>
        <Footer />
      </main>
</div>    
   
  );
}

