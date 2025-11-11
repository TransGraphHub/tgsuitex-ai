"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import HeroSection from './heroSection'
import KeyPointsSection from './keyPointsSections'
import ProblemSolvingSection from './problemSolvingSection';
import StepsToBringTogetherSection from './stepsToBringTogetherSection';
import StrengthPointsSection from './strengthPointsSection';
import Footer from './footer';

export default function Page() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    delay: 0.5
  })
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    delay: 0.5
  })
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    delay: 0.5
  })
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    delay: 0.5
  })
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    delay: 0.5
  })

  return (
    <div className='bg-[#ffffff] mt-10'>
      
      {/* login section */}
      <div className='px-[1%]'><HeroSection /></div>

      {/* First Animate Section with Key Points */}
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView1 ? 1 : 0, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className='px-[1%]'>
        <KeyPointsSection />
      </motion.div>

      {/* Private Cloud section */}
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView2 ? 1 : 0, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className='px-[1%]'>
        <div className='flex justify-center items-center'>
          <img src={"/backgrounndImages/Tgsuitexsection3.png"} />
        </div>
      </motion.div>

      {/* problem solving section */}
      <div className='px-[1%]'><ProblemSolvingSection /></div>

      {/* steps to bring MMS section */}
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView3 ? 1 : 0, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className='px-[1%]'>
        <StepsToBringTogetherSection />
      </motion.div>

      {/* strength points section */}
      <motion.div
        ref={ref4}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView4 ? 1 : 0, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className='px-[1%]'>
        <StrengthPointsSection />
      </motion.div>

      {/* footer */}
      <motion.div
        ref={ref5}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView5 ? 1 : 0, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}>
        <Footer />
      </motion.div>
    </div>
  )
}
