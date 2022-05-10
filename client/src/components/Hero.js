import React from 'react'
import { useNavigate } from 'react-router-dom'
import carImage from "../assets/car-image.png"

function Hero() {
  const navigate = useNavigate()
  
  return (
    <div className="hero-container">
     <div className="hero-content flex justify-between pl-[80px]">
      <aside className="hero-text max-w-[480px] mt-[85px]">
       <h1 className='text-[35px] font-bold leading-[45px]'>Welcome to the online marketplace where you can find the buyer of your car.</h1>
       <p className="hero-subtext text-xs text-[#2F3233] mt-[15px] w-[360px]">
       Ipsum enim sit tellus placerat ornare amet sit est. 
       Dolor tempor donec ullamcorper velit, cum tempor eget senectus. 
       Nibh a in nibh egestas pretium ipsum. 
       </p>
       <button className='bg-[#13678A] text-white font-bold text-xs mt-[20px] rounded-[20px] px-[40px] py-[8px] shadow-lg'>Get started</button>
      </aside>
      <aside className="hero-image-thumb w-[50%] mr-[-10px] mt-[10px]">
       <img src= {carImage} alt="image car" className='w-full h-full'/>
      </aside>
     </div>
    </div>
  )
}

export default Hero