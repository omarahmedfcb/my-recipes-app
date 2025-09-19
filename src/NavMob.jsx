import { NavLink } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserDropdown from "./UserDropdown";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function NavMob({ setMobileMenuOpen, mobileMenuOpen, navigation }) {
  const isLogged = useSelector((state) => state.loggedLocal.value);
  const totalItems = useSelector((state) => state.favorites.value.length);

  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className="backdrop:bg-transparent font-normal relative z-50 lg:hidden"
    >
      <div tabIndex="0" className="fixed z-10 inset-0 focus:outline-none">
        <DialogPanel className="fixed inset-y-0 text-white bg-red-700 right-0  w-full overflow-y-auto px-4 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 text-2xl">
              <span className="sr-only">Your Company</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
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
                  d="M6 18 18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root max-sm:text-center">
            <div className="-my-6 divide-y divide-white/10">
              <h2 className="text-3xl sm:hidden font-black">GoodEats</h2>
              <div className="space-y-2 py-6">
                {navigation.map((ele) => (
                  <NavLink
                    onClick={() => setMobileMenuOpen(false)}
                    to={ele.to}
                    key={ele.id}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 hover:bg-gray-900 hover:text-white"
                  >
                    {ele.name}
                  </NavLink>
                ))}
              </div>
              {isLogged.is ? (
                <div className="flex justify-center sm:justify-start items-center gap-4">
                  <NavLink
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative"
                    to={"/favorites"}
                  >
                    <span className="absolute top-0 right-0 pb-[0.1em] bg-white text-red-700 rounded-full font-semibold w-5 h-5 flex items-center justify-center text-sm">
                      {totalItems}
                    </span>
                    <FontAwesomeIcon className="text-xl p-4" icon={faHeart} />
                  </NavLink>
                  <UserDropdown isScrolled={false} username={isLogged.user} />
                </div>
              ) : (
                <NavLink
                  to={"/sign"}
                  className={
                    "rounded-xl border-2 inline-block border-white hover:bg-white hover:text-red-700  py-2 px-5 transition-all duration-300 "
                  }
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default NavMob;
