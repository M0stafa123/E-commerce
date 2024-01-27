import { useEffect, useRef, useState } from "react";

const ProfileUser = () => {
  return (
    <div className="divs bg-[#eee] capitalize p-5 gap-5 flex flex-col rounded-lg shadow-md">
      <div className="w-40 imageEdit text-5xl self-center  h-40 text-white relative rounded-full bg-slate-600 flex items-center justify-center">
        a
        <label
          className="bg-[#DB4444] opacity-0 hover:bg-[#7c2929] transition-all flex absolute right-1 bottom-1 rounded-full  items-center cursor-pointer justify-center w-10 h-10 text-sm"
          htmlFor={"file"}
        >
          #
        </label>
      </div>
      <div>
        <p>first name : </p>
        <input disabled value={""} type="text" />
      </div>
      <div>
        <p>last name : </p>
        <input disabled type="text" />
      </div>
      <div>
        <p>e-mail :</p>
        <input disabled type="text" />
      </div>
      <div>
        <p>phone number :</p>
        <input disabled type="text" />
      </div>
      <div>
        <p>address :</p>
        <input disabled type="text" />
      </div>
      <div className="flex gap-3 justify-between">
        <button
          onClick={() => (window.location.href = "/")}
          className="p-3 bg-[#DB4444] rounded-lg text-white"
        >
          back to Home
        </button>
        <button className="p-3 bg-[blue] rounded-lg text-white">edit</button>
      </div>
    </div>
  );
};

export default ProfileUser;
