import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"

function Header() {
 const navigate = useNavigate()
  return (
    <div className="header-container px-[80px] border-3 border-red-400 py-[10px] shadow-lg">
     <div className="header flex justify-between items-center">
      <div className="logo-thumb w-[40px] h-[40px]">
       <img src={logo} alt="auto mart logo" className="w-full h-full" />
      </div>
      <nav className="nav">
       <button className="border-2 border-[#13678A] mr-[30px] text-xs rounded-[20px] px-[25px] py-[4px]" onClick={() => navigate("/login")}>Login</button>
       <button className="bg-[#13678A] text-white font-bold text-xs rounded-[20px] px-[25px] py-[6px]" onClick={() => navigate("/register")}>Sign up</button>
      </nav>
     </div>
    </div>
  )
}

export default Header