import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { useSelector } from "react-redux";
import UserDropdown from "./UserDropdown";
// import { countItems } from "./Redux/cartSlice";
function NavNorm({ isScrolled, setMobileMenuOpen, navigation, className }) {
  const isLogged = useSelector((state) => state.loggedLocal.value);
  const totalItems = useSelector((state) => state.favorites.value.length);
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <nav
      className={`font-normal py-2 text-base shadow-gray-800/50 ${
        isScrolled
          ? "bg-red-700 text-white"
          : isHome
          ? " text-white"
          : "bg-transparent text-red-700"
      } transition-[background-color] duration-300 fixed w-full ${className}`}
    >
      <div className="container w-18/20 lg:w-9/10 mx-auto flex items-center justify-between">
        <div className="flex">
          <a
            href="#"
            className="-m-1.5 p-1.5 flex items-center font-black text-2xl"
          >
            <span className="sr-only">Your Company</span>
            <h2>GoodEats</h2>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              data-slot="icon"
              aria-hidden="true"
              className="size-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 ms-8 me-auto">
          {navigation.map((ele) => (
            <NavLink
              to={ele.to}
              key={ele.id}
              className={({ isActive }) =>
                `py-1.5 px-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 ${
                  isScrolled
                    ? "after:bg-white"
                    : isHome
                    ? "after:bg-white"
                    : "after:bg-red-700"
                }  ${
                  isActive ? "after:w-full" : "after:w-0"
                } hover:after:w-full after:transition-all`
              }
            >
              {ele.name}
            </NavLink>
          ))}
        </div>
        {isLogged.is ? (
          <div className="hidden lg:flex lg:justify-end items-center gap-4">
            <NavLink className="relative" to={"/favorites"}>
              <span
                className={`absolute top-0 right-0 pb-[0.1em] ${
                  isScrolled
                    ? "bg-white text-red-700 "
                    : " bg-red-700 text-white"
                } 
                 rounded-full font-semibold w-5 h-5 flex items-center justify-center 
                 text-sm`}
              >
                {totalItems}
              </span>
              <FontAwesomeIcon className="text-2xl p-4" icon={faHeart} />
            </NavLink>
            <UserDropdown isScrolled={isScrolled} username={isLogged.user} />
          </div>
        ) : (
          <NavLink
            to={"/sign"}
            className={`rounded-xl border-2 hidden lg:inline-block ${
              isScrolled
                ? "border-white hover:bg-white hover:text-red-700"
                : isHome
                ? "border-white hover:bg-white hover:text-red-700"
                : "border-red-700 hover:bg-red-700 hover:text-white"
            }  py-2 px-5 transition-all duration-300 `}
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default NavNorm;
