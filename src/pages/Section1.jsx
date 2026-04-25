import React from 'react'
import headphone from '../images/headphone.png'

export default function Section1() {

    return (
        <section className='w-full h-dvh bg-[#0E0E0E] overflow-hidden flex justify-center'>
            <div className='container w-277.5 flex flex-row justify-between'>
                <div className='left text-[#FFFFFF] w-99.5 h-86.5'>
                    <p className='tracking-[10px] leading-[100%] font-normal uppercase pt-32 pb-6 opacity-50'>NEW PRODUCT</p>
                    <h1 className='text-[56px] font-bold leading-14.5 tracking-[2px] uppercase pb-6'>XX99 Mark II<br />Headphones</h1>
                    <p className='font-normal text-[15px] leading-6.25 pb-10 opacity-75'>Experience natural, lifelike audio and exceptional<br />build quality made for the passionate music<br />enthusiast.</p>
                    <button className='bg-[#D87D4A] w-40 h-12 font-bold text-[13px] leading-[100%] tracking-[1px] mb-40 hover:bg-black hover:text-white active:bg-amber-500  active:text-black cursor-pointer'>See Pruduct</button>
                </div>
                <img className='w-168.75 h-211' src={headphone} alt="" />
            </div>
        </section>
    )
}