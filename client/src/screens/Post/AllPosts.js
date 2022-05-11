import { useState } from "react"
import { useSelector } from "react-redux"
import CarInfo from "../../components/CarInfo"
import car1 from "../../assets/car1.png"
import Pagination from "../../components/Pagination"
import SinglePost from "./SinglePost"

function AllPosts() {
 const [showModal, setShowModal] = useState(false)

 const {posts, loading} = useSelector((state) => state.post)


  return (
   <>
    <div className="all-posts-container pl-[80px]">
     <div className="posts-content mt-[30px]">
      <h1 className="font-bold text-lg">Cars available for sale</h1>

      <div className="cars flex flex-wrap mb-[30px]">
      {
        posts?.data?.data?.length > 0 ? posts?.data?.data?.slice(0, 6).map((post) => {
          return (
            <CarInfo key={post?._id} post={post} showModal={showModal} setShowModal={setShowModal} />
          )
        }) :
        (
          <>
            {loading  ? <p>Loading...</p> : <p>No cars to display</p>}
          </>
        )
      }
       {/* <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} />
       <CarInfo showModal={showModal} setShowModal={setShowModal} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} />
       <CarInfo showModal={showModal} setShowModal={setShowModal} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} />
       <CarInfo showModal={showModal} setShowModal={setShowModal} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} /> */}
      </div>
      <Pagination />
     </div>
    </div>
    <SinglePost showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}

export default AllPosts