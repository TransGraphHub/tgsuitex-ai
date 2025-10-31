import React from 'react'

export default function StrengthPointsSection() {
    return (
        <div className='my-[5%] h-auto'>

            {/* key points visible on mobile dimensions */}
            <div className='block lg:hidden rounded-2xl shadow-2xl'>

                {/* title and info */}
                <div className='flex justify-center items-center flex-col pt-8'>
                    <h1 className='text-[28px] font-bold leading-[45px]'>Centralize. Analyze. Monetize.</h1>
                    <p className='text-center text-[#858585] text-[14px]'>TG SuiteX simplifies how global enterprises manage intelligence—turning complex data into confident decisions.</p>
                </div>

                {/* key points */}
                <div className='px-10 py-5 flex flex-col gap-y-5'>
                    <div className='flex flex-row items-center gap-x-3'>
                        <img className="h-5" src={"assets/images/shape/checkmarkIcon.svg"} />
                        <p>One Source of Truth</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <img className="h-5" src={"assets/images/shape/checkmarkIcon.svg"} />
                        <p>Enhanced ROI on Data Subscriptions</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <img className="h-5" src={"assets/images/shape/checkmarkIcon.svg"} />
                        <p>Instant Collaboration</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <img className="h-5" src={"assets/images/shape/checkmarkIcon.svg"} />
                        <p>Analytics & Insights</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <img className="h-5" src={"assets/images/shape/checkmarkIcon.svg"} />
                        <p>Secure Cloud Access</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <img className="h-5" src={"assets/images/shape/checkmarkIcon.svg"} />
                        <p>Hosted on your Server</p>
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
                                <p className="text-[48px] font-bold leading-[55px]">Centralize. Analyze. Monetize.</p>
                                <p className="text-[#858585]">TG SuiteX simplifies how global enterprises manage intelligence—turning complex data into confident decisions.</p>
                            </div>

                            {/* key points */}
                            <div className='flex flex-col gap-y-5 text-[18px] font-semibold'>
                                <div className='flex flex-row gap-x-10'>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <img className="h-8" src={"assets/images/shape/checkmarkIcon.svg"} />
                                        <p>One Source of Truth</p>
                                    </div>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <img className="h-8" src={"assets/images/shape/checkmarkIcon.svg"} />
                                        <p>Enhanced ROI on Data Subscriptions</p>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-x-8'>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <img className="h-8" src={"assets/images/shape/checkmarkIcon.svg"} />
                                        <p>Instant Collaboration</p>
                                    </div>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <img className="h-8" src={"assets/images/shape/checkmarkIcon.svg"} />
                                        <p>Analytics & Insights</p>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-x-8'>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <img className="h-8" src={"assets/images/shape/checkmarkIcon.svg"} />
                                        <p>Secure Cloud Access</p>
                                    </div>
                                    <div className='flex flex-row items-center gap-x-3'>
                                        <img className="h-8" src={"assets/images/shape/checkmarkIcon.svg"} />
                                        <p>Hosted on your Server</p>
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
