import React from 'react'
import person from '../images/person.png'

export default function Section6() {
    return (
        <section className='w-full flex justify-center'>
            <div className="container w-277.5 flex items-center mb-50">
                <div className='mr-31.25'>
                    <h1 className='font-bold text-[40px] leading-11 tracking-[1.43px] uppercase mb-8'>Bringing you the <span className='text-[#D87D4A]'>best</span> audio gear</h1>
                    <p className='font-noraml text-[14px] leading-6.25 text-[#000000] opacity-50'>Located at the heart of New York City, Audiophile is the premier<br />store for high end headphones, earphones, speakers, and audio<br />accessories. We have a large showroom and luxury<br />demonstration rooms available for you to browse and<br />experience a wide range of our products. Stop by our store to<br />meet some of the fantastic people who make Audiophile the<br />best place to buy your portable audio equipment.</p>
                </div>
                <img className='w-135 h-147 rounded-lg' src={person} alt="" />
            </div>
        </section>
    )
}
