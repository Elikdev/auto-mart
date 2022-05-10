import { useState } from "react"
import Pagination from "../../components/Pagination"
import CarInfo from "../../components/CarInfo"
import SinglePost from "./SinglePost"
import car1 from "../../assets/car1.png"

function UserPosts() {
 const [showModal, setShowModal] = useState(false)
  return (
   <>
    <div className="all-posts-container pl-[80px]">
     <div className="posts-content mt-[30px]">
      <h1 className="font-bold text-lg">Posted cars</h1>

      <div className="cars flex flex-wrap mb-[30px]">
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} user={true} />
      </div>
      <Pagination />
     </div>
    </div>
    <SinglePost showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}

export default UserPosts