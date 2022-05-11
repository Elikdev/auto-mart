import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Spinner } from "@chakra-ui/spinner"
import { toast } from "react-toastify"
import logo from "../../assets/logo.png"
import { addNewPost, reset } from "../../features/posts/postSlice"

function NewPost() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { error, success, loading } = useSelector((state) => state.post)

  const [inputData, setInputData] = useState({
    name: "",
    price: "",
    location: "",
    description: "",
  })
  const [file, setFile] = useState(null)
  const [disabled, setDisabled] = useState(true)

  const handleChange = (e) => {
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const { name, price, image, location, description } = inputData

  useEffect(() => {
    if (name && price && location) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [name, price, location])

  useEffect(() => {
    if (error) {
      toast.error(error)
    }

    if (success) {
      navigate("/posts")
      toast.success("New post added successfully")
    }

    dispatch(reset())
  }, [error, success, dispatch, navigate])

  const handleSubmit = () => {
    if ((name && price && location) || image || description) {
      const req_data = new FormData()

      req_data.append("name", name)
      req_data.append("location", location)
      req_data.append("price", price)
      req_data.append("image", file)
      req_data.append("description", description)

      dispatch(addNewPost(req_data))
    }
  }

  return (
    <div className="register-container post-new-container ">
      <div className="full-bg absolute w-full h-full bg-[#c2ced4] opacity-[0.85]"></div>
      <div className="flex items-center justify-center h-full py-[80px]">
        <div className="form-container bg-white w-[80%] sm:w-[70%] lg:w-[30%] z-50 p-[15px] shadow-2xl rounded-xl">
          <div className="form-header flex items-center">
            <div className="image-thumb w-[40px] h-[40px] mr-[15px] mb-[20px]">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
            <h1 className="text font-bold mb-[20px] text-[24px] text-[#13678A]">
              Post a car
            </h1>
          </div>

          <div className="input-group mb-[15px]">
            <label className="label block mb-[5px] font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]"
              placeholder="Enter your car brand..."
              value={name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group mb-[15px]">
            <label className="label block mb-[5px] font-semibold">Price</label>
            <input
              type="text"
              name="price"
              className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]"
              placeholder="20000000"
              value={price}
              onChange={handleChange}
            />
          </div>

          <div className="input-group mb-[15px]">
            <label className="label block mb-[5px] font-semibold">Image</label>
            <input
              type="file"
              name="image"
              className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]"
              onChange={(e) =>{
                setFile(e.target.files[0])
              }}
            />
          </div>

          <div className="input-group mb-[15px]">
            <label className="label block mb-[5px] font-semibold">
              Location
            </label>
            <input
              type="text"
              name="location"
              className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]"
              placeholder="Auto mart town, Nigeria"
              value={location}
              onChange={handleChange}
            />
          </div>

          <div className="input-group mb-[15px]">
            <label className="label block mb-[5px] font-semibold">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]"
              placeholder="A little description about your car..."
              value={description}
              onChange={handleChange}
            />
          </div>

          <div className="submit-group">
            <button
              className="bg-[#13678A] text-white font-bold text-xs mt-[20px] rounded-md text-center py-[10px] shadow-lg w-full disabled:cursor-not-allowed disabled:opacity-30"
              onClick={handleSubmit}
              disabled={disabled || loading ? true : false}
            >
              Post {loading && <Spinner size="lg" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPost
