import { useState } from "react"
import { useNavigate } from "react-router-dom"
import CarInfo from "./CarInfo"
import car1 from "../assets/car1.png"
import car2 from "../assets/car2.jpg"
import car3 from "../assets/car3.jfif"
import car4 from "../assets/car5.jpg"
import car5 from "../assets/car1.png"
import car6 from "../assets/car6.jfif"
import SinglePost from "../screens/Post/SinglePost"



function CarsForSale() {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    <div className="car-section-container pl-[80px] pr-[0px] mb-[40px]">
     <h1 className="font-bold text-lg">Cars for sale</h1>
     <div className="car-section-content flex flex-wrap mb-[30px]">
      <CarInfo car={car1} setShowModal={setShowModal} showModal={showModal} />
      <CarInfo car={car2} setShowModal={setShowModal} showModal={showModal} />
      <CarInfo car={car3} setShowModal={setShowModal} showModal={showModal} />
      <CarInfo car={car4} setShowModal={setShowModal} showModal={showModal} />
      <CarInfo car={car5} setShowModal={setShowModal} showModal={showModal} />
      <CarInfo car={car6} setShowModal={setShowModal} showModal={showModal} />
     </div>
     <button className="butn bg-[#13678A] text-white font-bold text-xs mt-[20px] rounded-[20px] px-[40px] py-[8px] shadow-lg" onClick={() => navigate("/posts")}>View more</button>
    </div>
    <SinglePost showModal={showModal} setShowModal={setShowModal} />
    </>

  )
}

export default CarsForSale