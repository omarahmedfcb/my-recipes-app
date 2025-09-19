import { useDispatch } from "react-redux";
import { loggedOut } from "./Redux/loggedLocalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

function UserDropdown({ username, isScrolled }) {
  const dispatch = useDispatch();
  const detailsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        detailsRef.current.removeAttribute("open"); // close dropdown
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <details ref={detailsRef} className="relative">
      <summary className="cursor-pointer list-none font-semibold">
        {username} <FontAwesomeIcon icon={faChevronDown} />
      </summary>
      <div className="absolute right-0 mt-2 overflow-hidden shadow-lg">
        <button
          onClick={() => {
            dispatch(loggedOut());
          }}
          className={`w-full text-center px-4 py-2 cursor-pointer border-2 rounded-xl text-sm ${
            isScrolled
              ? "border-white bg-red-700 hover:bg-white hover:text-red-700"
              : "border-red-700 text-red-700 bg-white hover:bg-red-700 hover:text-white"
          } transition`}
        >
          Log out
        </button>
      </div>
    </details>
  );
}

export default UserDropdown;
