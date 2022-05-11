import { useEffect } from "react"
import { useSelector, useDispatch} from "react-redux"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { fetchAllPosts, fetchUserPosts } from "../features/posts/postSlice"

function Main() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllPosts())
    dispatch(fetchUserPosts())
  }, [])

  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default Main