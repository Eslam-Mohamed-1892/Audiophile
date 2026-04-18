import headPhone from '../images/headPhone (2).png'
import speaker from '../images/speaker.png'
import earphone from '../images/earphone.png'
import path from '../images/Path 2.png'

export default function Section2() {
  let h1Style = 'text-[18px] font-bold leading-[100%] tracking-[1.29px] text-center uppercase mt-[116px] cursor-pointer '
  let pStyle = 'font-bold text-[13px] leading-[100%] tracking-[1px] uppercase text-center mt-[15px] cursor-pointer  '
  let spanStyle = 'flex flex-row justify-center items-center gap-[13.5px]'
  let arrowStyle = 'w-1.25 h-2.5 mt-3.75 cursor-pointer '
  return (
    <section className='mt-30 mb-42'>
      <div className="container w-277.5 grid grid-cols-3 gap-7.5 mt-30">
        <div className='w-87.5 h-51 bg-[#F1F1F1] relative rounded-lg'>
          <img className='w-[122.95px] h-40 absolute left-28 -top-22 mb-32' src={headPhone} alt="" />
          <h1 className={h1Style}>Headphones</h1>
          <span className={spanStyle}>
            <p className={pStyle}>Shop</p>
            <img className={arrowStyle} src={path} alt="" />
          </span>
        </div>
        <div className='w-87.5 h-51 bg-[#F1F1F1] relative rounded-lg'>
          <img className='w-[121.49px] h-36.5 absolute left-28 -top-22 mb-32' src={speaker} alt="" />
          <h1 className={h1Style}>Speakers</h1>
          <span className={spanStyle}>
            <p className={pStyle}>Shop</p>
            <img className={arrowStyle} src={path} alt="" />
          </span>
        </div>
        <div className='w-87.5 h-51 bg-[#F1F1F1] relative rounded-lg'>
          <img className='w-44.5 h-40.25 absolute left-22 -top-22 mb-32' src={earphone} alt="" />
          <h1 className={h1Style}>Earphones</h1>
          <span className={spanStyle}>
            <p className={pStyle}>Shop</p>
            <img className={arrowStyle} src={path} alt="" />
          </span>
        </div>
      </div>
    </section>
  )
}
