import React from 'react'
import * as constants from "@/utils/constants";

export default function StrengthPointsSection() {
    return (
        <div className='my-[5%] h-auto'>

            {/* key points visible on mobile dimensions */}
            <div className='block lg:hidden rounded-2xl shadow-2xl'>

                {/* title and info */}
                <div className='flex justify-center items-center flex-col pt-8'>
                    <h1 className='text-[28px] font-bold leading-[45px] pl-5'>{constants.StrengthPointsTitle}</h1>
                    <p className='pl-5 pt-3 text-[#858585] text-[14px]'>{constants.StrengthPointsContent}</p>
                </div>

                {/* key points */}
                <div className='px-10 py-5 flex flex-col gap-y-5'>
                    <div className='flex flex-row items-center gap-x-3'>
                        <img className="h-5" src={"assets/images/shape/checkmarkIcon.svg"} />
                        <p>{constants.StrengthPoints1}</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <img className="h-5" src={"assets/images/shape/checkmarkIcon.svg"} />
                        <p>{constants.StrengthPoints2}</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <img className="h-5" src={"assets/images/shape/checkmarkIcon.svg"} />
                        <p>{constants.StrengthPoints3}</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <img className="h-5" src={"assets/images/shape/checkmarkIcon.svg"} />
                        <p>{constants.StrengthPoints4}</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <img className="h-5" src={"assets/images/shape/checkmarkIcon.svg"} />
                        <p>{constants.StrengthPoints5}</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <img className="h-5" src={"assets/images/shape/checkmarkIcon.svg"} />
                        <p>{constants.StrengthPoints6}</p>
                    </div>
                </div>

                {/* download button */}
            </div>

            {/* key points visible for non mobile dimensions */}
            <div className='hidden lg:block'>
                <div className="h-[50rem] w-full p-2">
                    <div className="h-full w-full bg-[#faf8ff] rounded-[48px] flex flex-row">
                        <div className="h-full w-[50%] flex items-center justify-center flex-col gap-y-6">

                            {/* title and info */}
                            <div className="w-[80%] flex flex-col gap-y-3">
                                <p className="text-[48px] font-bold leading-[55px]">{constants.StrengthPointsTitle}</p>
                                <p className="text-[#858585]">{constants.StrengthPointsContent}</p>
                            </div>

                            {/* key points */}
                            <div className='flex flex-col gap-y-5 text-[18px] font-semibold'>
                                <div className='flex flex-row gap-x-10'>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <img className="h-8" src={"assets/images/shape/checkmarkIcon.svg"} />
                                        <p>{constants.StrengthPoints1}</p>
                                    </div>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <img className="h-8" src={"assets/images/shape/checkmarkIcon.svg"} />
                                        <p>{constants.StrengthPoints2}</p>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-x-8'>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <img className="h-8" src={"assets/images/shape/checkmarkIcon.svg"} />
                                        <p>{constants.StrengthPoints3}</p>
                                    </div>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <img className="h-8" src={"assets/images/shape/checkmarkIcon.svg"} />
                                        <p>{constants.StrengthPoints4}</p>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-x-8'>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <img className="h-8" src={"assets/images/shape/checkmarkIcon.svg"} />
                                        <p>{constants.StrengthPoints5}</p>
                                    </div>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <img className="h-8" src={"assets/images/shape/checkmarkIcon.svg"} />
                                        <p>{constants.StrengthPoints6}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-[50%] flex justify-center items-center">
                            <img className="absolute" src={"/assets/images/shape/advanceThumbShape1_1.webp"} />
                            <img className="absolute mr-[15rem]" src={"/assets/images/shape/advantageThumb1_1.webp"} />
                            <img className="absolute ml-[15rem]" src={"/assets/images/shape/advantageThumb1_2.webp"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
