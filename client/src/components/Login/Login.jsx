import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const LongIn = ({ setIsLogin }) => {
  const [data, setData] = useState(null);

  const navigate = useNavigate();
  const Username = useRef(null);
  const Password = useRef(null);
  function handclickfun(e) {
    e.preventDefault();
    if (Username.current.value !== ``) {
      setData(
        axios
          .post(`https://e-commerce-zes4.onrender.com/auth/login`, {
            username: Username.current.value,
            password: Password.current.value,
          })
          .then((res) => {
            navigate(`/`);
            setIsLogin(true);
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
      );
    }
  }
  return (
    <div className=" flex flex-col gap-5  grow items-center">
      <form className="flex h-full grow justify-center  gap-10 flex-col" action="">
        {data ? (
          <p className="text-3xl font-semibold">Loading</p>
        ) : (
          <>
            <h1 className="text-3xl capitalize font-bold">Login to Elder Store</h1>

            <input
              className="p-5   border-b-2 border-b-black  outline-none"
              type="text"
              placeholder="UserName"
              ref={Username}
            />
            <input
              className="p-5 border-b-2  border-b-black outline-none"
              type="text"
              placeholder="Password"
              ref={Password}
            />
            <div className="flex items-center justify-between">
              <button
                className="bg-[#DB4444] rounded-lg text-white px-5 py-2"
                onClick={(e) => handclickfun(e)}
              >
                Login
              </button>
              <a href="/" className="text-[#DB4444]">
                Forgot Password?
              </a>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default LongIn;
