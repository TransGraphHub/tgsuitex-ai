import React from 'react'
import { FaAndroid, FaApple } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { IoIosMail } from 'react-icons/io'


import * as constants from "@/utils/constants"; //import constants from here

const FooterPageLinks = [
    {
        id: 0,
        name: constants.FooterPageLink1,
        route: "https://www.transgraph.com/about-us/"
    },
    {
        id: 1,
        name: constants.FooterPageLink2,
        route: "https://www.transgraph.com/industries/"
    },
    {
        id: 2,
        name: constants.FooterPageLink3,
        route: "#"
    },
    {
        id: 3,
        name: constants.FooterPageLink4,
        route: "https://www.transgraph.com/life-at-transgraph/"
    },
    {
        id: 4,
        name: constants.FooterPageLink5,
        route: "#"
    },
    {
        id: 5,
        name: constants.FooterPageLink6,
        route: "https://www.transgraph.com/contact-us/"
    },
]

const UtilityPageLinks = [
    {
        id: 0,
        name: constants.FooterUtilityLink1,
        route: "https://www.transrisk.net/index.html"
    },
    {
        id: 1,
        name: constants.FooterUtilityLink2,
        route: "https://www.transgraph.com/price-consulting/"
    },
    {
        id: 2,
        name: constants.FooterUtilityLink3,
        route: "https://www.transgraph.com/price-risk-management/"
    },
    {
        id: 3,
        name: constants.FooterUtilityLink4,
        route: "https://www.transgraph.com/research-approach/"
    },
    {
        id: 4,
        name: constants.FooterUtilityLink5,
        route: "https://www.transgraph.com/business-consulting/"
    },
]

// function for links redirection
function handleRedirection(link) {
    if (link === "/") {
        window.location.href = link;
    } else {
        window.open(link, "_blank")
    }
}

export default function Footer() {
    return (
        <div>

            {/* foooter for mobile dimensions */}
            <div className='h-[100rem] mt-[5%] bg-[#efefef] py-10 block lg:hidden'>

                {/* background images */}
                <div className="absolute pt-15">
                    <img src="/assets/images/shape/footerShape1_1.png" className="h-150" alt="shape" />
                </div>
                <div className="absolute left-[-80px]">
                    <img src="/assets/images/shape/footerShape1_3.png" className="h-140 w-200" alt="shape" />
                </div>

                {/* logo and info */}
                <div className='mt-20 px-3 flex flex-col'>

                    {/* logo and info */}
                    <img src={"/logos/TGBlack.png"} className="w-45 h-15" />
                    <p className="my-[3%]">{constants.FooterHead}</p>

                    {/* download app buttons */}
                    <button
                        className={`my-[3%] w-[40%] relative overflow-hidden rounded-full px-6 py-3 text-lg bg-black font-semibold text-white hover:cursor-pointer`}>
                        <span className="relative flex items-center gap-2">
                            <FaApple size={25} /> App Store
                        </span>
                    </button>
                    <button
                        className={`my-[3%] w-[40%] relative overflow-hidden rounded-full px-6 py-3 text-lg font-semibold text-black hover:cursor-pointer border-1 border-[#d5d5d5]`}>
                        <span className="relative flex items-center gap-2">
                            <FaAndroid size={25} /> Play Store
                        </span>
                    </button>

                    {/* pages */}
                    <h1 className='text-3xl font-bold my-[5%]'>Explore More</h1>
                    <div className="border-1 w-[30%] border-[#502170]"></div>

                    {/* page links */}
                    <div className='flex flex-col gap-y-5 my-[5%]'>
                        {FooterPageLinks.map((link) => (
                            <p key={link.id} className="hover:text-[#5236ff] hover:cursor-pointer hover:translate-x-1 transition-all duration-500">{link.name}</p>
                        ))}
                    </div>

                    {/* utilities */}
                    <h1 className='text-3xl font-bold my-[5%]'>Offerings</h1>
                    <div className="border-1 w-[30%] border-[#502170]"></div>

                    {/* utilities links */}
                    <div className='flex flex-col gap-y-5 my-[5%]'>
                        {UtilityPageLinks.map((link) => (
                            <p key={link.id} className="hover:text-[#5236ff] hover:cursor-pointer hover:translate-x-1 transition-all duration-500">{link.name}</p>
                        ))}
                    </div>

                    {/* address card */}
                    <div className='h-[18rem] bg-[#f9f9f9] shadow-2xl rounded-2xl my-[5%] p-7 flex flex-col'>
                        <p className="font-bold text-[#5236ff]">Address</p>
                        <p className="font-bold text-[30px]">Ready to get Started?</p>
                        <p className="font-bold text-[16px] text-[#8f8f8f] mt-[1%]">It is a long established fact that a reader will be distracted layout.</p>
                        <div className='flex flex-row gap-x-3 mt-[5%]'>
                            <IoIosMail size={25} color="#5236ff" />
                            <p className="text-[#565656] hover:text-[#5236ff] hover:cursor-pointer">mktg@transgraph.com</p>
                        </div>
                        <div className='flex flex-row gap-x-3 mt-[5%]'>
                            <FiPhoneCall size={25} color="#5236ff" />
                            <p className="text-[#565656] hover:text-[#5236ff] hover:cursor-pointer">+91-77998 86679</p>
                        </div>
                    </div>

                    {/* copyright section */}
                    <p className='text-center text-[12px] text-[#99999c] mt-[10%]'>ⓒ 2003-2025 TransGraph Consulting Pvt.Ltd, All Rights Reserved</p>
                </div>
            </div>

            {/* footer for non-mobile dimensions */}
            <div className='hidden lg:block'>
                <div className="bg-[#efefef] h-[40rem] w-full mt-[5%] relative flex flex-col">

                    {/* background images */}
                    <div className="absolute  left-[-40px]">
                        <img src="/assets/images/shape/footerShape1_1.png" className="h-150" alt="shape" />
                    </div>
                    <div className="absolute bottom-[0px] left-0">
                        <img src="/assets/images/shape/footerShape1_2.png" alt="shape" />
                    </div>
                    <div className="absolute top-[80px] right-0">
                        <img src="/assets/images/shape/footerShape1_3.png" className="h-140" alt="shape" />
                    </div>
                    <div className="h-[33rem] w-full flex flex-row pt-[6%]">
                        <div className="w-[30%] flex justify-start">
                            <div className="flex flex-col pl-5 pr-15">
                                <img src={"/logos/TGBlack.png"} className="w-45 h-15" />
                                <p className="mt-[3%]">{constants.FooterHead}</p>
                                <div className="flex flex-row mt-[10%] gap-x-5">
                                    <button className={`relative overflow-hidden rounded-full px-6 py-3 text-lg bg-black font-semibold text-white hover:cursor-pointer`}>
                                        <span className="relative flex items-center gap-2">
                                            <FaApple size={25} /> App Store
                                        </span>
                                    </button>
                                    <button className={`relative overflow-hidden rounded-full px-6 py-3 text-lg font-semibold text-black hover:cursor-pointer border-1 border-[#d5d5d5]`}>
                                        <span className="relative flex items-center gap-2">
                                            <FaAndroid size={25} /> Play Store
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* pages and pages links */}
                        <div className="w-[15%] flex items-center flex-col gap-y-5">
                            <h1 className="text-3xl font-bold">Explore More</h1>
                            <div className="border-1 w-[50%] border-[#502170]"></div>
                            <div className="flex flex-col gap-y-7">
                                {FooterPageLinks.map((link) => (
                                    <p key={link.id} onClick={() => handleRedirection(link.route)} className="hover:text-[#5236ff] hover:cursor-pointer hover:translate-x-1 transition-all duration-500">{link.name}</p>
                                ))}
                            </div>
                        </div>

                        {/* utility pages and links */}
                        <div className="w-[15%] flex items-center flex-col gap-y-5">
                            <h1 className="text-3xl font-bold">Offerings</h1>
                            <div className="border-1 w-[40%] border-[#502170]"></div>
                            <div className="flex flex-col gap-y-7">
                                {UtilityPageLinks.map((link) => (
                                    <p key={link.id} onClick={() => handleRedirection(link.route)} className="hover:text-[#5236ff] hover:cursor-pointer hover:translate-x-1 transition-all duration-500">{link.name}</p>
                                ))}
                            </div>
                        </div>
                        <div className="w-[40%] pl-30 pr-4">

                            {/* address card */}
                            <div className="bg-white shadow-2xl rounded-2xl h-[25rem] p-12 flex flex-col gap-x-5 relative ">
                                <p className="font-bold text-[#5236ff]">Address</p>
                                <p className="font-bold text-[30px]">Ready to get Started?</p>
                                <p className="font-bold text-[16px] text-[#797979] mt-[6%]">It is a long established fact that a reader will be distracted layout.</p>
                                <div className="flex flex-row gap-x-3 mt-[10%]">
                                    <div>
                                        <IoIosMail size={25} color="#5236ff" />
                                    </div>
                                    <div>
                                        <p className="text-[#565656] hover:text-[#5236ff] hover:cursor-pointer">mktg@transgraph.com</p>
                                        <p className="text-[#565656] hover:text-[#5236ff] hover:cursor-pointer">info@TransGraph.com</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-x-3 mt-[10%]">
                                    <div><FiPhoneCall size={22} color="#5236ff" /></div>
                                    <div>
                                        <p className="text-[#565656] hover:text-[#5236ff] hover:cursor-pointer">+91-77998 86679</p>
                                        <p className="text-[#565656] hover:text-[#5236ff] hover:cursor-pointer">+91 99885 99885</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* copyright section */}
                    <div>
                        <p className='text-center text-[12px] text-[#99999c] mt-[4%]'>ⓒ 2003-2025 TransGraph Consulting Pvt.Ltd, All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
