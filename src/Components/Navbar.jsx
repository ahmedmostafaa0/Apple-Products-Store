import { navItems } from "../data/index";

const Navbar = ({ activePage, handleNavClick, isNavbarOpen, toggleNavbar }) => {
  return (
    <>
      <div className={`2xl:w-80 xl:w-52 w-44 h-full bg-[#f8f8f8] pt-5 pl-6 pb-14 md:pb-0 flex flex-col justify-between absolute z-10 md:relative transition-transform duration-300 ${isNavbarOpen ? 'translate-x-0' : '-translate-x-110 md:translate-x-0'}`}>
        <a
          href="#"
          className="2xl:text-2xl xl:text-xl text-red-600 font-light mb-14 tracking-wider"
        >
          Apple Products
        </a>
        <div className="flex flex-col grow">
          {navItems.map((navItem, index) => (
            <a
              key={index}
              onClick={() => handleNavClick(index)}
              href="#"
              className="xl:w-36 lg:w-32 w-30 flex justify-between items-center my-3.5 cursor-pointer text-left"
            >
              <i className={`${navItem.icon} text-xl text-pink-400`}></i>
              <span className="text-sm text-gray-500 mr-auto px-2.5 tracking-wider">
                {navItem.label}
              </span>
              <i
                className={`${
                  activePage === index
                    ? navItem.activeIcon
                    : navItem.inactiveIcon
                } text-yellow-400 text-lg`}
              ></i>
            </a>
          ))}
        </div>
        <div className="flex justify-between pr-6 pb-2">
          <a href="#">
            <i className="bx bxl-instagram text-2xl text-red-600"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter text-2xl text-red-600"></i>
          </a>
          <a href="#">
            <i className="bx bxl-facebook text-2xl text-red-600"></i>
          </a>
          <a href="#">
            <i className="bx bxl-youtube text-2xl text-red-600"></i>
          </a>
        </div>
      </div>
      <button onClick={toggleNavbar} className="fixed z-10 md:hidden bottom-4 left-4 p-2 text-4xl text-blue-400">
        <i className={`bx ${isNavbarOpen ? 'bx-x' : 'bx-menu'}`}></i>
      </button>
    </>
  );
};

export default Navbar;
