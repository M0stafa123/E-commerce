const Footer = () => {
  const dateY = new Date();
  return (
    <footer className="flex flex-col p-5 gap-4 text-white bg-black items-center">
      <div className="hidden md:flex">
        <h2 className="font-bold">Elder store</h2>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <input type="text" />
      </div>
      <div className="text-center md:hidden">
        <p>© {dateY.getFullYear()} Elder store. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
