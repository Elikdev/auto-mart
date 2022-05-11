import logo from "../assets/logo.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../features/auth/authSlice"
import { HiPlus, HiMenuAlt1, HiX } from "react-icons/hi"

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [showSideBar, setShowSideBar] = useState(false)

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }

  return (
    <div className="header-container px-[40px] lg:px-[80px] border-3 border-red-400 py-[10px] shadow-lg">
      <div className="header flex justify-between items-center relative overflow-x-hidden">
        <div
          className="logo-thumb w-[40px] h-[40px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="auto mart logo" className="w-full h-full" />
        </div>

        {showSideBar ? (
          <HiX
            className="lg:invisible transition-all text-[#13678A] text-[24px]"
            onClick={() => setShowSideBar(!showSideBar)}
          />
        ) : (
          <HiMenuAlt1
            className="lg:invisible transition-all text-[#13678A] text-[24px]"
            onClick={() => setShowSideBar(!showSideBar)}
          />
        )}

        <div
          className={`${
            !showSideBar ? "side-bar" : "side-bar-active"
          } fixed h-[200px] w-[60%] bg-[#13678A] top-[60px] mr-[30px] z-60`}
        >
          <nav className="nav flex items-center flex-col lg:hidden pr-[30px] py-[25px]">
            {user ? (
              <>
                <p
                  className="text-white  text-sm font-semibold cursor-pointer mb-[30px] flex items-center"
                  onClick={() => navigate("/posts/add")}
                >
                  Add a post{" "}
                  <small>
                    <HiPlus className="text-sm ml-[6px]" />
                  </small>
                </p>
                <p
                  className="text-white text-sm font-semibold cursor-pointer mb-[30px]"
                  onClick={() => navigate("/posts/user")}
                >
                  My posts
                </p>
                <button
                  className="text-white text-sm font-semibold cursor-pointer mb-[30px]"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="text-white mb-[30px] text-sm font-semibold cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  Sign up
                </button>
                <button
                  className="text-white mb-[30px] text-sm font-semibold cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </>
            )}
          </nav>
        </div>

        <nav className="nav items-center hidden lg:flex">
          {user ? (
            <>
              <p
                className="text-[#13678A] text-sm font-semibold cursor-pointer mr-[30px] flex items-center"
                onClick={() => navigate("/posts/add")}
              >
                Add a post{" "}
                <small>
                  <HiPlus className="text-sm ml-[6px]" />
                </small>
              </p>
              <p
                className="text-[#13678A] text-sm font-semibold cursor-pointer mr-[30px]"
                onClick={() => navigate("/posts/user")}
              >
                My posts
              </p>
              <button
                className="border-2 border-[#13678A] text-xs rounded-[20px] px-[25px] py-[4px]"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="border-2 border-[#13678A] mr-[30px] text-xs rounded-[20px] px-[25px] py-[4px]"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="bg-[#13678A] text-white font-bold text-xs rounded-[20px] px-[25px] py-[6px]"
                onClick={() => navigate("/register")}
              >
                Sign up
              </button>
            </>
          )}
        </nav>
      </div>
    </div>
  )
}

export default Header
