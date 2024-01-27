const Nav = ({ timer, name }) => {
  function slideLeft(e) {
    console.log(e.target.parentElement.parentElement.nextElementSibling);
    e.target.parentElement.parentElement.nextElementSibling.scrollLeft -= 300;
  }
  const slideRight = (e) => {
    e.target.parentElement.parentElement.nextElementSibling.scrollLeft += 300;
  };
  return (
    <nav className="flex justify-between items-center flex-wrap">
      <div className="flex justify-between py-5 gap-3 items-center">
        <h1 className="text-xl md:text-3xl font-bold">{name}</h1>
        {timer ? (
          <div className="flex gap-2">
            <div>
              <p className="text-xs font-medium">Days</p>
              <p className="font-bold ">03</p>
            </div>
            <span>:</span>
            <div>
              <p className="text-xs font-medium">Hours</p>
              <p className="font-bold ">23</p>
            </div>
            <span>:</span>
            <div>
              <p className="text-xs font-medium">Minutes</p>
              <p className="font-bold ">19</p>
            </div>
            <span>:</span>
            <div>
              <p className="text-xs font-medium">Seconds</p>
              <p className="font-bold ">56</p>
            </div>
          </div>
        ) : (
          ``
        )}
      </div>
      <div className="flex gap-2">
        <svg
          onClick={(e) => slideLeft(e)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className=" bg-[#F5F5F5] rounded-full p-2 hover:brightness-50"
        >
          <path
            d="M11 5L4 12L11 19M4 12H20"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          onClick={(e) => slideRight(e)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className=" bg-[#F5F5F5] rounded-full p-2 hover:brightness-50"
        >
          <path
            d="M3.5 12H20M20 12L13 5M20 12L13 19"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Nav;
