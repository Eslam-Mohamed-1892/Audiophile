import React from 'react'
import bitmap from '../images/Bitmap.png'

export default function Section5() {
    return (
        <section className='w-full flex justify-center'>
            <div className="container w-277.5 grid grid-cols-2 gap-7.5 mb-50">
                <img className='w-135 h-80 rounded-lg' src={bitmap} alt="" />
                <div className='w-135 h-80 bg-[#F1F1F1] rounded-lg'>
                    <h1 className='font-bold text-[28px] leading-[100%] tracking-[2px] uppercase text-[#000000] ml-23.75 mt-25.25'>YX1 EARPHONES</h1>
                    <button className='w-40 h-12 font-bold text-[13px] leading-[100%] tracking-[1px] uppercase border border-[#000000] mt-8 ml-24 hover:bg-black hover:text-white active:bg-white active:text-black cursor-pointer'>See Product</button>
                </div>
            </div>
        </section>
    )
}
