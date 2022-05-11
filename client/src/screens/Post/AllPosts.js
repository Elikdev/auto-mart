import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import CarInfo from "../../components/CarInfo"
import Pagination from "../../components/Pagination"
import SinglePost from "./SinglePost"
import { fetchAllPosts } from "../../features/posts/postSlice"

function AllPosts() {
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(null)
  const [postsPerPage] = useState(12)
  const dispatch = useDispatch()

  const { posts, loading } = useSelector((state) => state.post)

  const paginateBack = () =>
    setCurrentPage(currentPage <= 1 ? 1 : Number(currentPage) - 1)

  const paginateFront = () =>
    setCurrentPage(currentPage >= lastPage ? 1 : Number(currentPage) + 1)

  const paginateLast = () => setCurrentPage(Number(lastPage))

  const paginateFirst = () => setCurrentPage(1)

  useEffect(() => {
    dispatch(fetchAllPosts({ limit: postsPerPage, page: currentPage }))
  }, [dispatch, currentPage])

  useEffect(() => {
    if (posts?.data?.pagination) {
      let curr_page = posts?.data?.pagination?.links?.current
        ?.split("?")[1]
        ?.split("=")[1]
        .split("&")[0]
      setCurrentPage(curr_page)
      let last_page = posts?.data?.pagination?.links?.last
        ?.split("?")[1]
        ?.split("=")[1]
        .split("&")[0]
      setLastPage(last_page)
    }
  }, [posts?.data?.pagination])

  return (
    <>
      <div className="all-posts-container pl-[40px] lg:pl-[80px]">
        <div className="posts-content mt-[30px]">
          <h1 className="font-bold text-lg">Cars available for sale</h1>

          <div className="cars flex flex-wrap mb-[30px]">
            {posts?.data?.data?.length > 0 ? (
              posts?.data?.data?.map((post) => {
                return (
                  <CarInfo
                    key={post?._id}
                    post={post}
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />
                )
              })
            ) : (
              <>{loading ? <p>Loading...</p> : <p>No cars to display</p>}</>
            )}

          </div>
          {posts?.data?.data?.length > 12 && (
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

export default AllPosts
