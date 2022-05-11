import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Pagination from "../../components/Pagination"
import CarInfo from "../../components/CarInfo"
import SinglePost from "./SinglePost"
import { fetchUserPosts } from "../../features/posts/postSlice"

function UserPosts() {
 const [showModal, setShowModal] = useState(false)
 const [currentPage, setCurrentPage] = useState(1)
 const [lastPage, setLastPage] = useState(null)
 const [postsPerPage] = useState(12)
 const dispatch = useDispatch()

 const {user_posts:posts, user_posts_loading: loading, user_posts_error: error } = useSelector((state) => state.post)

 const paginateBack = () =>
 setCurrentPage(currentPage <= 1 ? 1 : Number(currentPage) - 1)

const paginateFront = () =>
 setCurrentPage(currentPage >= lastPage ? 1 : Number(currentPage) + 1)

const paginateLast = () => setCurrentPage(Number(lastPage))

const paginateFirst = () => setCurrentPage(1)

useEffect(() => {
 dispatch(fetchUserPosts({ limit: postsPerPage, page: currentPage }))
}, [dispatch, currentPage])

useEffect(() => {
 if (posts?.pagination) {
   let curr_page = posts?.pagination?.links?.current
     ?.split("?")[1]
     ?.split("=")[1]
     .split("&")[0]
   setCurrentPage(curr_page)
   let last_page = posts?.pagination?.links?.last
     ?.split("?")[1]
     ?.split("=")[1]
     .split("&")[0]
   setLastPage(last_page)
 }
}, [posts?.pagination])


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
      </div>
      {posts?.data?.length > 12 && (
            <Pagination
              postsPerPage={postsPerPage}
              paginateBack={paginateBack}
              paginateFront={paginateFront}
              paginateFirst={paginateFirst}
              paginateLast={paginateLast}
              currentPage={currentPage}
              totalPosts={30}
            />
          )}
     </div>
    </div>
    <SinglePost showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}

export default UserPosts