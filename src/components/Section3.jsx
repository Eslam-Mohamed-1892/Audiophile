import React from 'react'
import speaker from '../images/speaker.png'

export default function Section3() {
  return (
    <section className='w-full flex justify-center mb-12 overflow-hidden'>
        <div className='container w-277.5 h-140 bg-[#D87D4A] rounded-lg flex items-center justify-between relative'>
            <img className='w-[410.23px] h-123.25 ml-29.5 mt-30.5 z-10' src={speaker} alt="" />
            <div className='w-87.25 h-75.75 ml-34.5 z-10'>
                <h1 className='font-bold text-[56px] leading-14.5 tracking-[2px] uppercase text-[#FFFFFF] mb-6'>ZX9<br />SPEAKER</h1>
                <p className='font-normal text-[15px] leading-6.25 text-[#FFFFFF] mb-10 opacity-75'>Upgrade to premium speakers that are<br />phenomenally built to deliver truly remarkable<br />sound.</p>
                <button className='w-40 h-12 bg-[#000000] font-bold text-[13px] leading-[100%] tracking-[1px] uppercase text-[#FFFFFF] hover:bg-white hover:text-[#D87D4A] cursor-pointer active:text-black'>See Product</button>
            </div>
            <div className='border border-[#FFFFFF] w-258 h-230  rounded-full absolute -top-8 -left-35'></div>
            <div className='border border-[#FFFFFF] w-150 h-150 rounded-full absolute top-35 left-12'></div>
            <div className='border border-[#FFFFFF] w-130 h-130 rounded-full absolute top-45 left-22'></div>
        </div>
    </section>
  )
}
