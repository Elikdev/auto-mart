import { useState } from "react"
import CarInfo from "../../components/CarInfo"
import car1 from "../../assets/car1.png"
import Pagination from "../../components/Pagination"
import SinglePost from "./SinglePost"

function AllPosts() {
 const [showModal, setShowModal] = useState(false)
  return (
   <>
    <div className="all-posts-container pl-[80px]">
     <div className="posts-content mt-[30px]">
      <h1 className="font-bold text-lg">Cars available for sale</h1>

      <div className="cars flex flex-wrap mb-[30px]">
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} />
       <CarInfo showModal={showModal} setShowModal={setShowModal} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} />
       <CarInfo showModal={showModal} setShowModal={setShowModal} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} />
       <CarInfo showModal={showModal} setShowModal={setShowModal} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} />
      </div>
      <Pagination />
     </div>
    </div>
    <SinglePost showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}

export default AllPosts