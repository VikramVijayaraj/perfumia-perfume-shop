import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      {/* Hamburger */}
      {menu && (
        <nav className="fixed top-0 right-0 h-screen w-[250px] z-[999] bg-white shadow-md flex flex-col items-start justify-start p-4 space-y-4">
          <div className="cursor-pointer" onClick={() => setMenu(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
          <Link className="cursor-pointer w-full" to="/">
            Home
          </Link>
          <Link className="cursor-pointer w-full" to="/categories">
            Categories
          </Link>
          <Link className="cursor-pointer w-full" to="/about">
            About Us
          </Link>
          <Link className="cursor-pointer w-full" to="/contact">
            Contact Us
          </Link>
        </nav>
      )}

      {/* Full */}
      <nav className="flex justify-between py-8 items-center uppercase px-14 bg-gray-50 tracking-widest">
        <Link to="/" className="text-md lg:text-2xl cursor-pointer">
        Perfumia
        </Link>
        <div className="space-x-8 text-gray-500 text-sm hidden lg:block">
          <Link className="cursor-pointer" to="/">
            Home
          </Link>
          <Link className="cursor-pointer" to="/categories">
            Categories
          </Link>
          <Link className="cursor-pointer" to="/about">
            About Us
          </Link>
          <Link className="cursor-pointer" to="/contact">
            Contact Us
          </Link>
        </div>
        <div onClick={() => setMenu(true)} className="lg:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
