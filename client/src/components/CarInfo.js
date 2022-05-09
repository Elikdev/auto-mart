import {HiLocationMarker, HiPhone, HiTag} from "react-icons/hi"
import target from "../assets/target.svg.svg"

function CarInfo({car}) {
  return (
    <div className="car-section max-w-[33.3%]  p-[15px] rounded-[15px] shadow-2xl mr-[80px] mt-[40px] cursor-pointer">
      <div className="car-image w-[300px] h-[200px]">
        <img src={car} alt="" className="w-full h-full" />
      </div>
      <hr className="border border-[#13678A] image-hr my-[12px]" />
      <div className="car-info">
        <div className="icon-name flex items-center mb-[12px]">
          <div className="name-thumb w-[14px] h-[14px]">
            <img src={target} alt="" className="w-full h-full" />
          </div>
          <p className="name text-sm font-medium ml-[10px]">Toyota Camry, 2008 model</p>
        </div>
        <div className="icon-location flex items-center mb-[12px]">
          <HiLocationMarker className="text-[#13678A] text-[14px]" />
          <p className="location text-base font-medium ml-[10px]">Lagos, Nigeria</p>
        </div>
        <div className="icon-price flex items-center mb-[12px]">
          <HiTag className="text-[#13678A] text-[14px]" />
          <p className="price text-sm font-medium ml-[10px]">2000000</p>
        </div>
        <div className="icon-contact flex items-center">
          <HiPhone className="text-[#13678A] text-[14px]" />
          <p className="contact text-sm font-medium ml-[10px]">08165606432</p>
        </div>
      </div>
    </div>
  )
}

export default CarInfo