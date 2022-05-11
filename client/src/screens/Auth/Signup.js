import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { register, reset } from "../../features/auth/authSlice"
import { toast } from "react-toastify"
import { Spinner } from "@chakra-ui/spinner"
import logo from "../../assets/logo.png"

function Signup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNum: "",
  })
  const [disabled, setDIsabled] = useState(true)

  const { name, email, password, mobileNum } = inputData

  const handleChange = (e) => {
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const { auth_res_loading, auth_res, auth_res_error } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (name && email && password && mobileNum) {
      setDIsabled(false)
    } else {
      setDIsabled(true)
    }
  }, [name, email, password, mobileNum])

  useEffect(() => {
    if (auth_res_error) {
      toast.error(auth_res_error)
    }

    if (auth_res) {
      toast.success(auth_res.message)
      navigate("/login")
    }

    dispatch(reset())
  }, [auth_res, auth_res_error, navigate, dispatch])

  const handleSubmit = () => {
    if (name && email && password && mobileNum) {
      const input = {
        name,
        email,
        password,
        mobile_number: mobileNum,
      }
      dispatch(register(input))
    }
  }

  return (
    <div className="register-container auth-container relative">
      <div className="full-bg absolute w-full h-full bg-[#13678A] opacity-[0.85]"></div>
      <div className="flex items-center justify-center h-full">
        <div className="form-container bg-white w-[30%] z-10 p-[15px] shadow-2xl rounded-xl">
          <div className="form-header flex items-center">
            <div className="image-thumb w-[40px] h-[40px] mr-[15px] mb-[20px]">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
            <h1 className="text font-bold mb-[20px] text-[24px] text-[#13678A]">
              Register
            </h1>
          </div>

          <div className="input-group mb-[15px]">
            <label className="label block mb-[5px] font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]"
              placeholder="Enter your name... "
              value={name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group mb-[15px]">
            <label className="label block mb-[5px] font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]"
              placeholder="youremail@example.com"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group mb-[15px]">
            <label className="label block mb-[5px] font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]"
              placeholder="Enter your password..."
              value={password}
              onChange={handleChange}
            />
          </div>

          <div className="input-group mb-[15px]">
            <label className="label block mb-[5px] font-semibold">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobileNum"
              className="border-2 border-[#13678A] inline-block w-full rounded-md py-[8px] px-[8px]"
              placeholder="08012345678"
              value={mobileNum}
              onChange={handleChange}
            />
          </div>

          <div className="submit-group">
            <button
              className="bg-[#13678A] text-white font-bold text-xs mt-[20px] rounded-md text-center py-[10px] shadow-lg w-full"
              onClick={handleSubmit}
              disabled={disabled || auth_res_loading ? true : false}
            >
              Sign up {auth_res_loading && <Spinner size="lg" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
