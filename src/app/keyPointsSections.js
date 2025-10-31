import React from 'react'
import AnimatedButton from "@/components/AnimatedButton";
import * as constants from "@/utils/constants";

export default function KeyPointsSection() {
    return (
        <div className='lg:h-180 my-[5%] flex flex-col lg:flex-row relative'>

            {/* picture with animated icons */}
            <div className='lg:w-[50%] h-160 lg:h-full flex lg:justify-end justify-center'>
                <div className="absolute bottom-20 left-10 lg:left-30 bg-white z-1 left-right-animated-div lg:block hidden">
                    <img
                        className="h-20 lg:h-30"
                        src={"/assets/images/shape/aboutThumb1_2.webp"}
                    />
                </div>
                <div className="absolute left-30 bg-white z-1 top-bottom-animated-div lg:block hidden">
                    <img
                        className="h-50"
                        src={"/assets/images/shape/aboutThumbShape1_3.webp"}
                    />
                </div>
                <div className="absolute left-10 bg-white z-1 rotate-360 lg:block hidden">
                    <img
                        src={"/assets/images/shape/aboutThumbShape1_1.webp"}
                    />
                </div>
                <div className="absolute bottom-0 bg-white z-1 rotate-360 lg:block hidden">
                    <img
                        src={"/assets/images/shape/aboutThumbShape1_2.webp"}
                    />
                </div>
                <div className="bg-[#e7e5fd] h-[21rem] w-[30rem] mt-[18rem] rounded-b-[48px]">
                    <img
                        className="absolute mt-[-12.2rem] md:ml-10"
                        src={"assets/images/shape/aboutThumb1_1.webp"}
                    />
                </div>
            </div>

            {/* key points */}
            <div className='lg:w-[50%] h-full p-[20] lg:p-[10]'>
                <div className="flex justify-center items-center h-full flex-col ml-5 gap-y-7">
                    <p className="md:text-[48px] text-[35px] font-bold leading-[45px] lg:leading-[65px]">
                        {constants.KeyPointsTitle}
                    </p>
                    <p className="text-[16px] text-[#858585] pr-20">
                        {constants.KeyPointsInfo}
                    </p>
                    <div className="flex flex-row justify-start w-full gap-x-5">
                        <img
                            className="h-8"
                            src={"assets/images/shape/checkmarkIcon.svg"}
                        />
                        <p className="text-[18px] font-semibold">
                            {constants.KeyPoint1}
                        </p>
                    </div>
                    <div className="flex flex-row justify-start w-full gap-x-5">
                        <img
                            className="h-8"
                            src={"assets/images/shape/checkmarkIcon.svg"}
                        />
                        <p className="text-[18px] font-semibold">
                            {constants.KeyPoint2}
                        </p>
                    </div>
                    <div className="flex flex-row justify-start w-full gap-x-5">
                        <img
                            className="h-8"
                            src={"assets/images/shape/checkmarkIcon.svg"}
                        />
                        <p className="text-[18px] font-semibold">
                            {constants.KeyPoint3}
                        </p>
                    </div>
                    <div className="flex flex-row justify-start w-full gap-x-5">
                        <img
                            className="h-8"
                            src={"assets/images/shape/checkmarkIcon.svg"}
                        />
                        <p className="text-[18px] font-semibold">
                            {constants.KeyPoint4}
                        </p>
                    </div>
                    <div className="flex flex-row justify-start w-full gap-x-5">
                        <img
                            className="h-8"
                            src={"assets/images/shape/checkmarkIcon.svg"}
                        />
                        <p className="text-[18px] font-semibold">
                            {constants.KeyPoint5}
                        </p>
                    </div>
                    <div className="flex justify-start w-full mt-[1rem]">
                        <AnimatedButton title={"Discover More"} primaryColor="#7444fd" secondaryColor={"#262626"} textColor={"white"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
