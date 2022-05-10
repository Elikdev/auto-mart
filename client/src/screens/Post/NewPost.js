import React from 'react'
import logo from "../../assets/logo.png"


function NewPost() {
  return (
   <div className="register-container post-new-container relative">
   <div className="full-bg absolute w-full h-full bg-[#c2ced4] opacity-[0.85]"></div>
   <div className="flex items-center justify-center h-full py-[80px]">
     <div className="form-container bg-white w-[30%] z-10 p-[15px] shadow-2xl rounded-xl">
     <div className="form-header flex items-center">
      <div className="image-thumb w-[40px] h-[40px] mr-[15px] mb-[20px]">
       <img src={logo} alt="" className="w-full h-full" />
      </div>
      <h1 className="text font-bold mb-[20px] text-[24px] text-[#13678A]">Post a car</h1>
     </div>

       <div className="input-group mb-[15px]">
         <label className="label block mb-[5px] font-semibold">Name</label>
         <input type="text" className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]" placeholder="Enter your car brand..."/>
       </div>

       <div className="input-group mb-[15px]">
         <label className="label block mb-[5px] font-semibold">Price</label>
         <input type="text" className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]" placeholder="20000000"/>
       </div>

       <div className="input-group mb-[15px]">
         <label className="label block mb-[5px] font-semibold">Image</label>
         <input type="file" className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]" placeholder="Enter your password..." />
       </div>

       <div className="input-group mb-[15px]">
         <label className="label block mb-[5px] font-semibold">Location</label>
         <input type="text" className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]" placeholder="Auto mart town, Nigeria" />
       </div>

       <div className="input-group mb-[15px]">
         <label className="label block mb-[5px] font-semibold">Description</label>
         <textarea type="text" className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]" placeholder="A little description about your car..." />
       </div>

       <div className="submit-group">
        <button className="bg-[#13678A] text-white font-bold text-xs mt-[20px] rounded-md text-center py-[10px] shadow-lg w-full">Post</button>
       </div>
     </div>
   </div>
 </div>
  )
}

export default NewPost