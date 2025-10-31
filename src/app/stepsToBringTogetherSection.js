import React from 'react'

export default function StepsToBringTogetherSection() {
    return (
        <div className='mb-[5%]'>

            {/* visible for mobile dimensions */}
            <div className='block lg:hidden'>
                <div className="h-full flex flex-col shadow-2xl rounded-2xl py-10 mb-[5%] bg-white">
                    {/* section title */}
                    <div className="h-[10rem] flex justify-center items-center">
                        <p className="text-[32px] lg:text-[48px] font-bold text-center lg:px-100">
                            How TG SuiteX Brings Every Insight Together
                        </p>
                    </div>

                    {/* section points */}
                    <div className='flex flex-col gap-y-10'>
                        <div className='flex justify-center items-center flex-col'>
                            <p className='bg-[#eae3ff] p-2 rounded-2xl font-semibold'>Step - 01</p>
                            <p className="text-[24px] text-center font-bold">Identify your Data Sources</p>
                            <p className="text-center">List down all your data Sources</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <p className='bg-[#eae3ff] p-2 rounded-2xl font-semibold'>Step - 02</p>
                            <p className="text-[24px] text-center font-bold">Integrate with our Software</p>
                            <p className="text-center">Through APIs/Excel store data Centrally</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <p className='bg-[#eae3ff] p-2 rounded-2xl font-semibold'>Step - 03</p>
                            <p className="text-[24px] text-center font-bold">Access Centralized Data</p>
                            <p className="text-center">Do Analysis and Share</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* visible for non-mobile dimensions */}
            <div className='hidden lg:block'>
                <div className="h-[45rem] flex flex-col">

                    {/* section title */}
                    <div className="h-[20rem] flex justify-center items-end px-100">
                        <p className="text-[48px] font-bold text-center">How TG SuiteX Brings Every Insight Together</p>
                    </div>
                    <div className="h-[25rem] flex flex-col items-center justify-center w-[100%]">
                        <div className="absolute">
                            <img src={"/assets/images/shape/workProcessShape1_1.webp"} />
                        </div>

                        {/* section points */}
                        <div className="h-full w-full flex-row flex">
                            <div className="w-[33%] h-full flex items-center flex-col px-30 py-30">
                                <div className="bg-[#eae3ff] p-2 rounded-2xl font-semibold">Step - 01</div>
                                <p className="text-[24px] text-center font-bold">Identify your Data Sources</p>
                                <p className="text-center">List down all your data Sources</p>
                            </div>
                            <div className="w-[33%] h-full flex items-center flex-col px-30 py-30 mt-[3rem]">
                                <div className="bg-[#eae3ff] p-2 rounded-2xl font-semibold">Step - 02</div>
                                <p className="text-[24px] text-center font-bold">Integrate with our Software</p>
                                <p className="text-center">Through APIs/Excel store data Centrally</p>
                            </div>
                            <div className="w-[33%] h-full flex items-center flex-col px-30 py-30">
                                <div className="bg-[#eae3ff] p-2 rounded-2xl font-semibold">Step - 03</div>
                                <p className="text-[24px] text-center font-bold">Access Centralized Data</p>
                                <p className="text-center">Do Analysis and Share</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
