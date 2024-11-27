'use client'

import Image from "next/image";
import WellshareNavbar from "@/custom/WellshareNavbar";
import { useState, useEffect } from 'react'
import { Repo } from "@/types/Repo";
import SearchHeader from "@/search/components/SearchHeader";
import Footer from "@/search/components/Footer";
import SearchResultsCard from "@/search/components/SearchResultsCard";

import ExploreBreadcrumb from "@/search/components/ExploreBreadcrumb";
import HeroImage from '@/custom/HeroImage';
import whywellshare1 from '/public/images/wellsharelandingimg.png';
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
    <SearchHeader />
    <main className="flex-grow">
      <SearchResultsCard />
    </main>
    <Footer />
  </div>
   
  );
}

