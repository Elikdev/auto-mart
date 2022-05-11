import React from "react"
import { useSelector } from "react-redux"
import {
  HiDocumentText,
  HiLocationMarker,
  HiPhone,
  HiTag,
  HiX,
} from "react-icons/hi"
import target from "../../assets/target.svg.svg"
import notAvailable from "../../assets/not-available.png"

function SinglePost({ showModal, setShowModal }) {
  const { post } = useSelector((state) => state.post)

  const modal_ref = document.getElementById("single-post-modal")

  const handleClick = (e) => {
    if(e.target === modal_ref) {
      setShowModal(false)
    }
  }
  return (
    <>
      <div
        id="single-post-modal"
        className={`single-post-container ${
          !showModal ? "hidden" : ""
        } fixed left-0 top-0 w-full h-full overflow-y-auto z-30`}
        onClick={handleClick}
      >

        <div className="single-post-content w-[90%] mx-auto my-[30px] lg:max-w-[50%] relative">

          <div className="single-post-content z-50 bg-white rounded-lg shadow-md py-[20px] mx-auto max-w-[360px] lg:max-w-[460px] relative">

            <HiX
              className=" cursor-pointer absolute right-[-2px] top-[2px] text-[#13678A] font-bold text-[24px] lg:text-[30px] "
              onClick={() => setShowModal(false)}
            />

            <div className="image-thumb w-[300px] h-[200px] lg:w-[400px] lg:h-[300px] mx-auto">
              <img
                src={post?.image_url ? post?.image_url : notAvailable}
                alt=""
                className="w-full h-full"
              />
            </div>

            <div className="post-info mt-[25px] pl-[15px]">
              <div className="icon-name mb-[20px]">
                <div className="name-label flex items-center mb-[10px]">
                  <div className="icon-thumb w-[14px] h-[14px]">
                    <img src={target} alt="" className="w-full h-full" />
                  </div>
                  <p className="label-text inline ml-[10px] text-md font-bold">
                    Name
                  </p>
                </div>
                <p className="name ml-[24px] text-sm text-[#2F3233]">
                  {post?.name}
                </p>
              </div>

              <div className="icon-location mb-[20px]">
                <div className="location-label flex items-center mb-[10px]">
                  <HiLocationMarker className="text-[#13678A] text-[14px]" />
                  <p className="label-text ml-[10px] text-md font-bold">
                    Location
                  </p>
                </div>
                <p className="location ml-[24px] text-[#2F3233]">
                  {post?.location}
                </p>
              </div>

              <div className="icon-price mb-[20px]">
                <div className="label-price flex items-center mb-[10px]">
                  <HiTag className="text-[#13678A] text-[14px]" />
                  <p className="label-text ml-[10px] text-md font-bold">
                    Price
                  </p>
                </div>
                <p className="price ml-[24px] text-sm text-[#2F3233]">
                  {post?.price}
                </p>
              </div>

              <div className="icon-phone mb-[20px] ">
                <div className="contact flex items-center mb-[10px]">
                  <HiPhone className="text-[#13678A] text-[14px]" />
                  <p className="label-text ml-[10px] text-md font-bold">
                    Contact
                  </p>
                </div>
                <p className="phone ml-[24px] text-sm text-[#2F3233]">
                  {post?.user?.mobile_number}
                </p>
              </div>

              <div className="icon-description mb-[20px]">
                <div className="label-description flex items-center mb-[10px]">
                  <HiDocumentText className="text-[#13678A] text-[14px]" />
                  <p className="label-text ml-[10px] text-md font-bold">
                    Description
                  </p>
                </div>

                <p className="description ml-[24px] text-sm text-[#2F3233]">
                  {post?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglePost
