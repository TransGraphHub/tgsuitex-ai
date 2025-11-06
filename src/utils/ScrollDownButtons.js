"use client";

import React from 'react'

export default function ScrollDownButtons() {

    // function handles scroll
    function handleScrollDown() {
        window.scrollBy({
            top: 600,  // Scrolls down by 600px vertically
            behavior: 'smooth'  // Makes the scroll smooth
        });
    }

    return (
        <div className='fixed bottom-10 right-5 z-2'>
            <button onClick={handleScrollDown} className='hover:cursor-pointer'>
                <img className='h-12 scrollIcon-animation' src={"/assets/images/shape/scroll-down.png"} />
            </button>
        </div>
    )
}
