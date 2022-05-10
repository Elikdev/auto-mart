import React from "react"
import {
  HiDocumentText,
  HiLocationMarker,
  HiPhone,
  HiTag,
  HiX,
} from "react-icons/hi"
import target from "../../assets/target.svg.svg"
import car1 from "../../assets/car1.png"
import notAvailable from "../../assets/not-available.png"

function SinglePost({ showModal, setShowModal }) {
  return (
    <>
      {showModal && (
        <div
          className="bg-overlay bg-black opacity-60 absolute w-full inset-0 z-20"
          onClick={() => setShowModal(false)}
        ></div>
      )}

      <div
        className={`single-post-container ${
          !showModal ? "hidden" : ""
        } absolute top-[20%] flex justify-center items-center`}
      >
        <div className="single-post-content w-[50%] mx-auto bg-white shadow-2xl p-[20px] z-30 relative rounded-md">
          <HiX
            className=" cursor-pointer absolute right-0 top-0 mr-[10px] mt-[10px] text-[#13678A] font-bold text-lg"
            onClick={() => setShowModal(false)}
          />
          <div className="image-thumb w-[400px] h-[300px] mx-auto">
            <img src={car1} alt="" className="w-full h-full" />
          </div>

          <div className="post-info mt-[30px]">
            <div className="icon-name mb-[25px]">
              <div className="name-label flex items-center mb-[10px]">
                <div className="icon-thumb w-[14px] h-[14px]">
                  <img src={target} alt="" className="w-full h-full" />
                </div>
                <p className="label-text inline ml-[10px] text-lg font-bold">
                  Name
                </p>
              </div>
              <p className="name ml-[24px] text-sm text-[#2F3233]">
                Toyota Camry 2022
              </p>
            </div>

            <div className="icon-location mb-[25px]">
              <div className="location-label flex items-center mb-[10px]">
                <HiLocationMarker className="text-[#13678A] text-[14px]" />
                <p className="label-text ml-[10px] text-lg font-bold">
                  Location
                </p>
              </div>
              <p className="location ml-[24px] text-[#2F3233]">Lagos Nigeria</p>
            </div>

            <div className="icon-price mb-[25px]">
              <div className="label-price flex items-center mb-[10px]">
                <HiTag className="text-[#13678A] text-[14px]" />
                <p className="label-text ml-[10px] text-lg font-bold">Price</p>
              </div>
              <p className="price ml-[24px] text-sm text-[#2F3233]">2000000</p>
            </div>

            <div className="icon-phone mb-[25px] ">
              <div className="contact flex items-center mb-[10px]">
                <HiPhone className="text-[#13678A] text-[14px]" />
                <p className="label-text ml-[10px] text-lg font-bold">
                  Contact
                </p>
              </div>
              <p className="phone ml-[24px] text-sm text-[#2F3233]">
                08145678954
              </p>
            </div>

            <div className="icon-description mb-[25px]">
              <div className="label-description flex items-center mb-[10px]">
                <HiDocumentText className="text-[#13678A] text-[14px]" />
                <p className="label-text ml-[10px] text-lg font-bold">
                  Description
                </p>
              </div>

              <p className="description ml-[24px] text-sm text-[#2F3233]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                ipsum ratione nisi eligendi quia quidem beatae corrupti iste
                consectetur neque molestias labore hic velit expedita quam modi
                itaque nostrum quos suscipit veritatis, laudantium minus dicta.
                Aspernatur, non ad perferendis repellendus aut error impedit
                inventore dolore consectetur aliquam culpa at labore amet
                sapiente odio reprehenderit commodi molestiae laborum dolorum,
                sed fuga iste nesciunt. Ipsum, id? Enim odit minima, suscipit
                quam, libero rerum aut eos assumenda saepe nesciunt totam
                molestiae facere obcaecati vitae impedit dolore cum illum
                perferendis maxime laborum explicabo commodi doloremque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglePost
