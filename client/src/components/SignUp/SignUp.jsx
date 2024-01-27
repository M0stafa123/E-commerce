import axios from "axios";
import { useEffect, useRef, useState } from "react";

const SingUp = ({ setIsLogin }) => {
  const Username = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);

  function handclickfun(e) {
    e.preventDefault();
    if (Username.current.value !== ``) {
      axios
        .post(`https://e-commerce-zes4.onrender.com/auth/register`, {
          username: Username.current.value,
          email: Email.current.value,
          password: Password.current.value,
        })
        .then((res) => {
          setIsLogin(true);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className=" flex flex-col gap-5  grow items-center">
      <form className="flex h-full grow justify-center  gap-5 flex-col" action="">
        <h1 className="text-3xl capitalize font-bold">Create an account</h1>
        <p>Enter your details below</p>
        <input
          className="p-5   border-b-2 border-b-black  outline-none"
          ref={Username}
          type="text"
          placeholder="name"
        />
        <input
          className="p-5 border-b-2 border-b-black  outline-none"
          type="text"
          ref={Email}
          placeholder="Email or Phone number"
        />
        <input
          className="p-5 border-b-2  border-b-black outline-none"
          type="text"
          ref={Password}
          placeholder="Password"
        />
        <div className="flex items-center flex-col gap-5 justify-between">
          <button
            className="bg-[#DB4444] rounded-lg text-white px-5 py-2"
            onClick={(e) => handclickfun(e)}
          >
            Create Account
          </button>
          <div className="flex gap-2 items-center justify-center">
            <p>Already have account?</p>
            <a href="/" className="text-[#DB4444]">
              Log in
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
