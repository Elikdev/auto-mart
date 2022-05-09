import React from 'react'
import logo from "../assets/logo.png"
function Footer() {
  return (
    <div className="footer-container h-[200px] px-[80px] pt-[50px]">
     <div className="footer-content flex justify-between items-start">
       <div className="logo-name ">
        <div className="logo-thumb w-[40px] h-[40px] mb-[20px]">
         <img src={logo} alt=""  className='w-full h-full'/>
        </div>
        <h1 className='text-base text-white font-bold'>Auto Mart</h1>
       </div>
       <div className="imp-links">
        <p className="wel text-white text-xs mb-[20px] font-bold cursor-pointer">Sign up</p>
        <p className="wel text-white text-xs mb-[20px] font-bold cursor-pointer">Login</p>
        <p className="wel text-white text-xs mb-[20px] font-bold cursor-pointer">Post a car</p>
       </div>
       <div className="imp-links">
        <p className="wel text-white text-xs mb-[20px] font-bold cursor-pointer">About</p>
        <p className="wel text-white text-xs mb-[20px] font-bold cursor-pointer">Privacy</p>
        <p className="wel text-white text-xs mb-[20px] font-bold cursor-pointer">Terms</p>
       </div>
     </div>
     <div className="copyright text-center mt-[20px]">
      <p className="class text-[8px] text-[#13678AAB] font-bold">Auto Mart, (2022) all right reserved</p>
     </div>
    </div>
  )
}

export default Footer