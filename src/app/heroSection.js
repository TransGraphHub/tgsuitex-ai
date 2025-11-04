"use client"

// imports from packages
import React from "react";
import Link from 'next/link';
import { Search } from 'lucide-react';

// imports from local
import AnimatedButton from '@/components/AnimatedButton'
import * as constants from "@/utils/constants";

export default function HeroSection() {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        // Set a 2-second delay before making the image visible
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 600);

        // Cleanup timeout on component unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='bg-gradient-to-tr from-[#ded2fe] via-[#f7f5ff] to-[#d9f1ed] h-[45rem] md:h-[60rem] rounded-[48px] pt-5'>

            {/*header for mobile view */}
            <div className='h-20 block lg:hidden'>
                <div className="flex justify-center items-center">
                    <img src={"/logos/TGBlack.png"} className="w-45 h-15" />
                </div>
                <div className='h-10 flex flex-row justify-end items-center pr-5 space-x-5 my-5'>
                    <Search className="text-gray-600 hover:cursor-pointer" size={24} />
                    <Link href={"#"}><h1>Contact Us</h1></Link>
                </div>
            </div>

            {/*header for Web and Tablet View */}
            <div className='hidden lg:block'>
                <div className='h-18 flex flex-row'>
                    <div className="w-[20%] flex justify-center">
                        <img src={"/logos/TGBlack.png"} className="w-45 h-15" />
                    </div>
                    <div className="w-[60%] h-15 flex justify-between items-center flex-row px-20"></div>
                    <div className="flex items-center space-x-10 w-[20%] h-15">
                        <Search className="text-gray-600 hover:cursor-pointer" size={24} />
                        <AnimatedButton title={"Contact Us"} primaryColor="#7444fd" secondaryColor={"#262626"} textColor={"white"} />
                    </div>
                </div>
            </div>

            {/* main content and login ui */}
            <div className='h-120 mt-10 lg:mt-[3rem] py-10 px-10 flex flex-col lg:flex-row'>

                {/* content */}
                <div className="flex flex-col lg:w-[55%]">
                    <span className="text-[38px] lg:text-[40px] w-[60%] font-medium text-[#502170]">
                        {constants.HeroSectionMainTitlePart1}
                    </span>
                    <span className="text-[38px] lg:text-[58px] font-medium text-[#502170]">
                        {constants.HeroSectionMainTitlePart2}
                    </span>
                    <span className="text-[16px] mt-4 font-medium text-black">
                        {constants.HeroSectionSubInfo}
                    </span>
                    <div className="md:mt-[2.5rem] mt-[1.5rem] flex flex-row gap-x-10">
                        <AnimatedButton
                            title={"Learn More"}
                            primaryColor={"#7444fd"}
                            secondaryColor={"#262626"}
                            textColor={"white"}
                        />
                    </div>
                </div>
                {/* right side images */}
                <div className='hidden lg:block'>

                    {/* background images */}
                    <img className="absolute right-[4rem] top-[17rem]" src={"/shape/introThumbShape1_1.webp"} />
                    <img className="absolute right-[8rem] top-[21rem]" src={"/shape/introThumbShape1_2.webp"} />

                    {/* mobile images */}
                    <div>
                        <img src={"/assets/images/shape/Mobile_Right.png"} className={`mobile-image-action ${isVisible ? 'show' : ''}`}  />
                    </div>
                </div>
            </div>
        </div>

    )
}
