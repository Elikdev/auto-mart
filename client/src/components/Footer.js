import React from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"

function Footer() {
  const navigate = useNavigate()
  const user = false
  return (
    <div className="footer-container h-[200px] px-[80px] pt-[50px]">
      <div className="footer-content flex justify-between items-start">
        <div className="logo-name">
          <div
            className="logo-thumb w-[40px] h-[40px] mb-[20px] cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="" className="w-full h-full" />
          </div>
          <h1
            className="text-base text-white font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Auto Mart
          </h1>
        </div>
        <div className="imp-links">
          <Link
            to={user ? "/posts" : "/register"}
            className="wel text-white text-xs mb-[20px] font-bold cursor-pointer block"
          >
            {user ? "Posts" : "Sign up"}
          </Link>
          <Link
            to={user ? "/posts/add" : "/login"}
            className="wel text-white text-xs mb-[20px] font-bold cursor-pointer block"
          >
            {user ? "Post a car" : "Login"}
          </Link>
          <Link
            to={user ? "#" : "#"}
            className="wel text-white text-xs mb-[20px] font-bold cursor-pointer block"
          >
            {user ? "Logout" : "Home"}
          </Link>
        </div>
        <div className="imp-links">
          <Link
            to="#"
            className="wel text-white text-xs mb-[20px] font-bold cursor-pointer block"
          >
            About
          </Link>
          <Link
            to="#"
            className="wel text-white text-xs mb-[20px] font-bold cursor-pointer block"
          >
            Privacy
          </Link>
          <Link
            to="#"
            className="wel text-white text-xs mb-[20px] font-bold cursor-pointer block"
          >
            Terms
          </Link>
        </div>
      </div>
      <div className="copyright text-center mt-[20px]">
        <p className="class text-[8px] text-[#13678AAB] font-bold">
          Auto Mart, (2022) all right reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
