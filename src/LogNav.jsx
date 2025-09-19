import { NavLink } from "react-router-dom";

function LogNav() {
  const navs = [
    { to: "/sign/in", name: "Sign In" },
    { to: "/sign/up", name: "Sign Up" },
  ];
  return (
    <div className="grid grid-cols-2 text-center bg-gray-300 p-1 rounded-xl">
      {navs.map((ele) => (
        <NavLink
          className={({ isActive }) =>
            `py-2 ${
              isActive && "bg-white"
            } transition-colors duration-300 rounded-xl`
          }
          to={ele.to}
        >
          {ele.name}
        </NavLink>
      ))}
    </div>
  );
}

export default LogNav;
