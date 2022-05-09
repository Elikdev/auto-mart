import React from "react"
import logo from "../../assets/logo.png"

function Signup() {
  return (
    <div className="register-container auth-container relative">
      <div className="full-bg absolute w-full h-full bg-[#13678A] opacity-[0.85]"></div>
      <div className="flex items-center justify-center h-full">
        <div className="form-container bg-white w-[30%] z-10 p-[15px] shadow-2xl rounded-xl">
        <div className="form-header flex items-center">
         <div className="image-thumb w-[40px] h-[40px] mr-[15px] mb-[20px]">
          <img src={logo} alt="" className="w-full h-full" />
         </div>
         <h1 className="text font-bold mb-[20px] text-[24px] text-[#13678A]">Register</h1>
        </div>

          <div className="input-group mb-[15px]">
            <label className="label block mb-[5px] font-semibold">Name</label>
            <input type="text" className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]" placeholder="Enter your name..."/>
          </div>

          <div className="input-group mb-[15px]">
            <label className="label block mb-[5px] font-semibold">Email</label>
            <input type="email" className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]" placeholder="youremail@example.com"/>
          </div>

          <div className="input-group mb-[15px]">
            <label className="label block mb-[5px] font-semibold">Password</label>
            <input type="password" className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]" placeholder="Enter your password..." />
          </div>

          <div className="input-group mb-[15px]">
            <label className="label block mb-[5px] font-semibold">Mobile Number</label>
            <input type="text" className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]" placeholder="08012345678" />
          </div>

          <div className="submit-group">
           <button className="bg-[#13678A] text-white font-bold text-xs mt-[20px] rounded-md text-center py-[10px] shadow-lg w-full">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
