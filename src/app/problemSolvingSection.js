"use client";

import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function ProblemSolvingSection() {
    const videoRef = React.useRef(null);
    const videoUrl = "https://tgsuitex.s3.ap-south-1.amazonaws.com/TG+SuiteX+Video.mp4";

    React.useEffect(() => {
        const videoElement = videoRef.current;
    
        // Mute the video initially to comply with autoplay policies
        if (videoElement) {
          videoElement.muted = true;
        }
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Video is in view, try to play it
                if (videoElement) {
                  videoElement.play().catch((error) => {
                    console.error("Autoplay failed:", error);
                  });
                }
              } else {
                // Video is out of view, pause it
                if (videoElement) {
                  videoElement.pause();
                }
              }
            });
          },
          { threshold: 0.2 }
        ); // 20% of the video should be visible for it to autoplay
    
        if (videoElement) {
          observer.observe(videoElement);
        }
    
        return () => {
          if (videoElement) {
            observer.unobserve(videoElement);
          }
        };
      }, []);

    return (
        <div className="h-[50rem] w-full px-5 py-20">
            <div className="h-full w-full bg-[#7445fd] rounded-[48px] flex md:flex-row flex-col relative overflow-hidden">

                {/* background small images */}
                <div className="absolute bottom-10 left-[-100]">
                    <img src={"/assets/images/shape/ctaShape1_2.webp"} />
                </div>
                <div className="absolute">
                    <img src={"/assets/images/shape/ctaShape1_1.webp"} />
                </div>
                <div className="absolute right-0 top-10">
                    <img src={"/assets/images/shape/ctaShape1_2.webp"} />
                </div>
                <div className="absolute top-[50%] left-[30%]">
                    <img
                        className="h-50"
                        src={"/assets/images/shape/ctaShape1_1.webp"}
                    />
                </div>

                {/* problem solving points */}
                <div className="md:w-[40%] h-full py-10 md:py-0 z-1">
                    <div className="h-full w-full flex flex-col items-start justify-center pl-20 gap-y-5 text-white">
                        <h1 className="text-2xl md:text-4xl font-bold">Problems we are solving:</h1>
                        <div className="flex gap-y-5 flex-col">
                            <div className="flex flex-row justify-start items-center w-full gap-x-5 hover:cursor-pointer hover:translate-x-2 transition-all duration-300">
                                <FaArrowAltCircleRight size={20} />
                                <p className="text-[14px] md:text-[18px] font-semibold">Scattered Data</p>
                            </div>
                            <div className="flex flex-row justify-start items-center w-full gap-x-5 hover:cursor-pointer hover:translate-x-2 transition-all duration-300">
                                <FaArrowAltCircleRight size={20} />
                                <p className="text-[14px] md:text-[18px] font-semibold">Difficulty in Collaboration</p>
                            </div>
                            <div className="flex flex-row justify-start items-center w-full gap-x-5 hover:cursor-pointer hover:translate-x-2 transition-all duration-300">
                                <FaArrowAltCircleRight size={20} />
                                <p className="text-[14px] md:text-[18px] font-semibold">Duplication of Data Subscription</p>
                            </div>
                            <div className="flex flex-row justify-start items-center w-full gap-x-5 hover:cursor-pointer hover:translate-x-2 transition-all duration-300">
                                <FaArrowAltCircleRight size={20} />
                                <p className="text-[14px] md:text-[18px] font-semibold">Unawareness of Data Availability</p>
                            </div>
                            <div className="flex flex-row justify-start items-center w-full gap-x-5 hover:cursor-pointer hover:translate-x-2 transition-all duration-300">
                                <FaArrowAltCircleRight size={20} />
                                <p className="text-[14px] md:text-[18px] font-semibold">Delayed Updates, Lost Opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* video section */}
                <div className="md:w-[60%] h-full p-5 md:p-10 py-0 md:py-26">
                    <div className="h-full w-full flex items-center justify-center rounded-2xl">
                        <video
                            ref={videoRef}
                            controls
                            className="rounded-lg shadow-lg w-full max-w-4xl z-1"
                            src={videoUrl}
                            type="video/mp4"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
