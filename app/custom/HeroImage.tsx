// custom/HeroImage.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface HeroImageProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, title, subtitle }) => {
  return (
    <div className="h-[550px] relative">
    <img className="w-full h-[769px] left-[-34px] top-[-96px] absolute" src={src} />
    <Card className="w-3/5 h-[85px] left-[263px] top-[120px]  bgpwhite rounded-full">

  <CardContent>
  <div className="grid grid-col-6">
      <div className="col-span-2">
      <div className="w-[195px] text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Where</div>
      <div className="w-[195px] text-[#4f4f4f] text-base font-light font-['DM Sans']">Search Locations</div>
      </div>
      <div className="col-span-2">
      <div className="w-[274px] text-[#4f4f4f] text-base font-semibold font-['DM Sans']">Usage</div>
      <div className="w-[274px] text-[#4f4f4f] text-base font-light font-['DM Sans']">Select Casual Or Regular Use</div>
      </div>
      <div className="w-16 h-16 p-[17px] col-span-2 top-[10px]  bg-[#64775e] rounded-[50px] justify-center items-center inline-flex">
            <img className="w-[30px] h-[30px]" src="https://via.placeholder.com/30x30" />
        </div>
    </div>
  </CardContent>

</Card>
   
</div>
  );
};

export default HeroImage;