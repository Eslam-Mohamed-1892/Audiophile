import React from 'react'
import logo from '../images/audiophile 2.png'
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function MainHeader() {


  let imgStyle = 'w-35.75 h-6.25'
  let navStyle = 'w-107.25 h-6.25 flex gap-8.5 ml-49.25 mr-[317.5px]'
  let aStyle = "hover:text-black transition duration-500 hover:bg-white uppercase text-[13px] font-bold cursor-pointer"

  return (
    <header className='w-full z-10 bg-[#0E0E0E] flex justify-center'>
      <div className='container w-277.5 text-white flex items-center justify-center pt-8 pb-9 border-b border-[#FFFFFF]'>
        <img className={imgStyle} src={logo} alt="" />
        <nav className={navStyle}>
          <a className={aStyle}>Home</a>
          <a className={aStyle}>Headphones</a>
          <a className={aStyle}>Speakers</a>
          <a className={aStyle}>Earphones</a>
        </nav><HiOutlineShoppingCart className='w-[23.33px] h-[15.83px] sm:flex-none' />
      </div>
    </header>
  )
}

