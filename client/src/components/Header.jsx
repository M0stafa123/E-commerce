import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ Islogin }) => {
  return (
    <header className="text-xl py-5 font-semibold capitalize flex justify-between items-center">
      <div>
        <p>elder</p>
        <p>store</p>
      </div>
      <div className="flex gap-4 items-center">
        {Islogin ? (
          `he is`
        ) : (
          <a
            href={"/login"}
            className="border-2 border-black w-10 h-10 flex place-items-center place-content-center rounded-full"
          >
            <i className="fa-solid fa-user"></i>
          </a>
        )}

        <i className="fa-solid fa-bars fa-xl cursor-pointer"></i>
      </div>
    </header>
  );
};

export default Header;
