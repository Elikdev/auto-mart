import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Pagination from "../../components/Pagination"
import CarInfo from "../../components/CarInfo"
import SinglePost from "./SinglePost"
import car1 from "../../assets/car1.png"

function UserPosts() {
 const [showModal, setShowModal] = useState(false)

 const {user_posts:posts, user_posts_loading: loading, user_posts_error: error } = useSelector((state) => state.post)
  return (
   <>
    <div className="all-posts-container pl-[80px]">
     <div className="posts-content mt-[30px]">
      <h1 className="font-bold text-lg">Posted cars</h1>

      <div className="cars flex flex-wrap mb-[30px]">
      {
        posts?.data?.length > 0 ? posts?.data?.map((post) => {
          return (
            <CarInfo key={post?._id} post={post} showModal={showModal} setShowModal={setShowModal} user={true} />
          )
        }) :
        (
          <>
            {loading  ? <p>Loading...</p> : <p>No cars to display</p>}
          </>
        )
      }
       {/* <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo showModal={showModal} setShowModal={setShowModal} user={true} />
       <CarInfo car={car1} showModal={showModal} setShowModal={setShowModal} user={true} /> */}
      </div>
      <Pagination />
     </div>
    </div>
    <SinglePost showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}

export default UserPosts