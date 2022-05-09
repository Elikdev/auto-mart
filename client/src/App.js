import React from "react"
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage";
import Login from "./screens/Auth/Login";
import Signup from "./screens/Auth/Signup";

function App() {
  return (
    <Routes>
    <Route path="/login" element={<Login />}/>
    <Route path="/register" element={<Signup />} />
    <Route path="/" element={
      <>
        <Header />
        <LandingPage />
      </>
    } />

    </Routes>
  );
}

export default App;
