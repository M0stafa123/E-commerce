import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import LongIn from "./components/Login/Login";
import SingUp from "./components/SignUp/SignUp";
import SummerSale from "./components/SummerSale";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileUser from "./components/profile/ProfileUser";

function App() {
  const [Islogin, setIsLogin] = useState(false)
  return (
    <BrowserRouter>
      <div className="App min-h-screen gap-5 font-Poppins flex flex-col">
        <SummerSale />
        <div className=" w-5/6 flex flex-col grow   mx-auto  ">
          <Header Islogin={Islogin} />
          <Routes>
            <Route path="/ProfileUser" element={<ProfileUser />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LongIn setIsLogin={setIsLogin} />} />
            <Route path="/SignUp" element={<SingUp setIsLogin={setIsLogin} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
