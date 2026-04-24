import React from 'react'
import logo from '../images/audiophile 2.png'
import facebook from '../images/facebook.png'
import twiter from '../images/twiter.png'
import instagram from '../images/istagram.png'

export default function Footer() {
    let aStyle = 'font-bold text-[13px] text-[#FFFFFF] leading-6.25 tracking-[2px] uppercase hover:text-black hover:bg-white transition duration-500'
    return (
        <footer className='w-full flex justify-center bg-[#101010]'>
            <div className="container w-277.5">
                <div className='w-25.25 h-1 bg-[#D87D4A]'></div>
                <header className='flex mt-18.75 mb-9 cursor-pointer'>
                    <img className='w-35.75 h-6.25 mr-134.5' src={logo} alt="" />
                    <nav className='flex gap-8'>
                        <a className={aStyle}>Home</a>
                        <a className={aStyle}>Headphones</a>
                        <a className={aStyle}>Speakers</a>
                        <a className={aStyle}>Earphones</a>
                    </nav>
                </header>
                <span className='flex'>
                    <p className='font-normal text-[15px] leading-6.25 text-[#FFFFFF] opacity-50 mb-14 mr-116.5'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team<br />of music lovers and sound specialists who are devoted to helping you get the<br />most out of personal audio. Come and visit our demo facility - we’re open 7<br />days a week.</p>
                    <span className='flex mt-26.25 gap-4 cursor-pointer'>
                        <img className='w-6 h-6' src={facebook} alt="" />
                        <img className='w-6 h-6' src={twiter} alt="" />
                        <img className='w-6 h-6' src={instagram} alt="" />
                    </span>
                </span>
                <p className='font-bold text-[15px] leading-6.25 text-[#FFFFFF] opacity-50 mb-12'>Copyright 2021. All Rights Reserved</p>
            </div>
        </footer>
    )
}
