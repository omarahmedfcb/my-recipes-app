import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { toggleFavorites } from "../Redux/favoritesSlice";
import toast from "react-hot-toast";

function Favorites() {
  const isLogged = useSelector((state) => state.loggedLocal.value);
  const favorites = useSelector((state) => state.favorites.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!isLogged.is) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="container w-9/10 mx-auto">
        <h1 className="text-7xl font-black text-center pt-16">
          Check your Favorites
        </h1>
      </div>
      <div className="container w-9/10 sm:w-6/10 mx-auto py-16">
        <div className="flex flex-col divide-y divide-red-700/10 border-2 border-red-700/10 px-4">
          {/* <div className="grid grid-cols-[15%_30%_20%_20%] items-center gap-8 py-8 font-semibold">
            <div></div>
            <h4>Recipe Name</h4>
          </div> */}
          {favorites.map((ele) => (
            <div
              key={ele.id}
              className="sm:grid sm:grid-cols-[30%_60%] lg:grid-cols-[15%_80%] items-center gap-8 py-8"
            >
              <div className="relative max-lg:rounded-2xl overflow-hidden ">
                {ele.premium && (
                  <span
                    className={
                      " absolute left-[50%] translate-x-[-50%] bottom-3 py-1 px-3 rounded-2xl text-white  bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 shadow-md "
                    }
                  >
                    Premium
                  </span>
                )}
                <img
                  className="w-full h-full max-sm:h-40 max-sm:object-cover"
                  src={ele.image}
                  alt=""
                />
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3  items-center gap-8">
                <h4 className="max-lg:col-span-2 text-center font-semibold">
                  {ele.name}
                </h4>
                <button
                  onClick={() => {
                    dispatch(toggleFavorites(ele));
                  }}
                  className="px-3 py-1 hover:border-2 border-red-700 transition-colors hover:bg-white rounded-xl hover:text-red-700 text-white bg-red-700 cursor-pointer"
                >
                  Remove
                </button>
                <button
                  onClick={() => {
                    ele.premium
                      ? toast.error("This recipe requires premium plan!")
                      : navigate(`/recipe/${ele.id}`);
                  }}
                  className="px-3 py-1 border-2 border-red-700 transition-colors bg-white rounded-xl text-red-700 hover:text-white hover:bg-red-700 cursor-pointer"
                >
                  See Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favorites;
