import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import carImage from "../assets/car-image.png"

function Hero() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  const handleClick = () => {
    if(user) {
      navigate("/posts/add")
    } else {
      navigate("/login")
    }
  }
  
  return (
    <div className="hero-container mb-[100px] lg:mb-[50px]">
     <div className="hero-content lg:flex lg:justify-between lg:pl-[80px] lg:pr-0 pr-[40px] pl-[40px]">
      <aside className="hero-text max-w-full lg:max-w-[480px] mt-[40px] lg:mt-[85px]">
       <h1 className='text-[35px] font-bold leading-[45px]'>Welcome to the online marketplace where you can find the buyer of your car.</h1>
       <p className="hero-subtext text-xs text-[#E8E5E5]  lg:text-[#2F3233]  mt-[15px] w-full lg:w-[360px]">
       An online marketplace for automobiles. 
       A platform to select any vehicle of your choice and also a nice place to sell your cars. 
       Explore clean-title, non-rebuilt vehicles that include a warranty amd puts you at ease. 
       </p>
       <button className='bg-[#13678A] text-white font-bold text-xs mt-[20px] rounded-[20px] px-[40px] py-[8px] shadow-lg' onClick={handleClick}>Get started</button>
      </aside>
      <aside className="hero-image-thumb hidden lg:block w-[50%] mr-[-10px] mt-[10px]">
       <img src= {carImage} alt="image car" className='w-full h-full'/>
      </aside>
     </div>
    </div>
  )
}

export default Hero