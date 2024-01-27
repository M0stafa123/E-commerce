const Header = ({ title }) => {
  return (
    <header className="flex gap-4 text-[#DB4444] items-center">
      <p className="w-5 h-10 bg-[#DB4444] rounded-lg"></p>
      <p className="font-semibold">{title}</p>
    </header>
  );
};

export default Header;
