import { Navigate, Outlet } from "react-router-dom";
import LogNav from "../LogNav";
import { useSelector } from "react-redux";

function LogRegPage() {
  const isLogged = useSelector((state) => state.loggedLocal.value);
  if (isLogged.is) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="h-dvh flex items-center justify-center bg-red-700">
      <div className="w-3/4 sm:w-1/2 lg:w-1/3 shadow-2xl min-h-[480px] bg-white rounded-2xl p-1">
        <h1 className="text-center text-3xl font-semibold">
          Welcome to GoodEats
        </h1>
        <LogNav />
        <Outlet />
      </div>
    </div>
  );
}

export default LogRegPage;
