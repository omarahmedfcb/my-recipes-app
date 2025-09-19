import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import Heart from "./Heart";
import { useInView } from "react-intersection-observer";

function Recipe({ item, index }) {
  // const { ref, inView } = useInView({
  //   threshold: 0.2,
  //   rootMargin: "0px 0px -50px 0px",
  // });
  const favorites = useSelector((state) => state.favorites.value);
  let foundItem = favorites.some((ele) => ele.id == item.id);
  const isLogged = useSelector((state) => state.loggedLocal.value);

  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${(index % 4) * 100}ms` : "0ms" }}
      className={`group overflow-hidden rounded-xl shadow-2xl flex flex-col transform-gpu
                  transition-all duration-700 ease-out
                  ${
                    inView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-6 scale-95"
                  }`}
    >
      <div className="aspect-[4/4] relative  overflow-hidden">
        <div className="absolute z-10 inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
        <img
          className="group-hover:scale-110 transition-transform duration-300 absolute w-full h-full left-0 top-0 "
          src={item.image}
          alt={item.name}
        />
        <Heart
          foundItem={foundItem}
          myItemData={item}
          classes={"absolute top-3 right-3  z-[15]"}
        />
      </div>
      <div className="p-3 text-center flex flex-col items-center grow gap-4">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p>
          <span className="font-semibold text-red-700">Ingredients</span> :{" "}
          {item.ingredients.slice(0, 3).join(" , ")}...
        </p>
        <h5>Rating : {item.rating}</h5>

        <div className="mt-auto flex justify-between items-center self-stretch">
          <NavLink
            onClick={() =>
              !isLogged.is
                ? toast.error(
                    "This recipe is for premium plan, please sign in!"
                  )
                : item.premium
                ? toast.error("This recipe requires premium plan!")
                : null
            }
            to={!item.premium && `/recipe/${item.id}`}
            className="font-semibold px-3 py-1 transition-colors text-red-700  rounded-xl border border-red-700 hover:bg-red-700 hover:text-white"
          >
            Show Details
          </NavLink>
          <span
            className={`py-1 px-3 rounded-2xl text-white ${
              item.premium
                ? "bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 shadow-md"
                : "bg-green-700"
            }`}
          >
            {item.premium ? "Premium" : "Free"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
