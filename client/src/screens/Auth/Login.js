import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { login, reset } from "../../features/auth/authSlice"
import { toast } from "react-toastify"
import { Spinner } from "@chakra-ui/spinner"
import logo from "../../assets/logo.png"

function Login() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  })
  const [disabled, setDisabled] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, loading, error } = useSelector((state) => state.auth)

  const handleChange = (e) => {
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const { email, password } = inputData

  useEffect(() => {
    if (email && password) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [email, password])

  useEffect(() => {
    if (error) {
      toast.error(error)
    }

    if (user) {
      navigate("/")
    }

    dispatch(reset())
  }, [error, user, navigate, dispatch])

  const handleSubmit = () => {
    if (email && password) {
      dispatch(login({ email, password }))
    }
  }

  return (
    <div className="login-container auth-container relative">
      <div className="full-bg absolute w-full h-full bg-[#13678A] opacity-[0.85]"></div>
      <div className="flex items-center justify-center h-full">
        <div className="form-container bg-white w-[80%] sm:w-[70%] lg:w-[30%] z-10 p-[15px] shadow-2xl rounded-xl">
          <div className="form-header flex items-center">
            <div className="image-thumb w-[40px] h-[40px] mr-[15px] mb-[20px]">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
            <h1 className="text font-bold mb-[20px] text-[24px] text-[#13678A]">
              Login
            </h1>
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

          <div className="submit-group">
            <button
              className="bg-[#13678A] text-white font-bold text-xs mt-[20px] rounded-md text-center py-[10px] shadow-lg w-full disabled:cursor-not-allowed disabled:opacity-30"
              onClick={handleSubmit}
              disabled={disabled || loading ? true : false }
            >
              Login {loading && <Spinner size="lg" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
