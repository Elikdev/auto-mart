import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { HiLocationMarker, HiPhone, HiTag, HiTrash } from "react-icons/hi"
import target from "../assets/target.svg.svg"
import notAvailable from "../assets/not-available.png"
import { deletePost, getSinglePost, reset} from "../features/posts/postSlice"
import { useNavigate } from "react-router-dom"

function CarInfo({ setShowModal, showModal, user, post }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    isDeleted,
    deleted_error: error,
    deleted_loading: loading,
  } = useSelector((state) => state.post)

  const handleDelete = (id) => {
    dispatch(deletePost(id))
  }

  useEffect(() => {
    if (error) {
      console.log("delete")
    }

    if (isDeleted) {
      navigate("/posts/user")
    }

    dispatch(reset())
  }, [isDeleted, error, navigate, dispatch])

  return (
    <div className="w-full md:w-[40%] lg:w-[25%]">
      <div className="car-section p-[15px] rounded-[15px] shadow-2xl mr-[40px] mt-[40px]">
        <div
          className="car-image w-full h-full cursor-pointer"
          onClick={() => {
            dispatch(getSinglePost(post?._id))
            setShowModal(!showModal)
          }}
        >
          <img
            src={post?.image_url ? post?.image_url : notAvailable}
            alt=""
            className="w-full h-[200px]"
          />
        </div>
        <hr className="border border-[#13678A] image-hr my-[12px]" />
        <div className="car-info">
          <div className="icon-name flex items-center mb-[12px]">
            <div className="name-thumb w-[14px] h-[14px]">
              <img src={target} alt="" className="w-full h-full" />
            </div>
            <p className="name text-sm font-medium ml-[10px]">{post?.name}</p>
          </div>
          <div className="icon-location flex items-center mb-[12px]">
            <HiLocationMarker className="text-[#13678A] text-[14px]" />
            <p className="location text-sm font-medium ml-[10px]">
              {post?.location}
            </p>
          </div>
          <div className="icon-price flex items-center mb-[12px]">
            <HiTag className="text-[#13678A] text-[14px]" />
            <p className="price text-sm font-medium ml-[10px]">{post?.price}</p>
          </div>
          <div className="icon-contact flex items-center">
            <HiPhone className="text-[#13678A] text-[14px]" />
            <p className="contact text-sm font-medium ml-[10px]">
              {post?.user?.mobile_number}
            </p>
          </div>
        </div>
        {user ? (
          <div className="edit-delete mt-[20px]">
            <button
              className="delete border-2 border-[#B8BCBD] p-[4px] shadow-xl rounded-md"
              onClick={() => handleDelete(post?._id)}
            >
              <HiTrash className="text-[#13678A] text-lg" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default CarInfo
