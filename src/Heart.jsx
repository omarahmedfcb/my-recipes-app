import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleFavorites } from "./Redux/favoritesSlice";
import toast from "react-hot-toast";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

function Heart({ foundItem, myItemData, classes }) {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.loggedLocal.value);

  if (!isLogged.is) {
    return;
  }
  return (
    <FontAwesomeIcon
      className={`${classes} text-xl cursor-pointer transition-colors z-[15]
              ${foundItem ? "text-red-600" : "text-gray-400"}
              bg-white/80 rounded-full p-2 shadow-md`}
      onClick={() => {
        dispatch(toggleFavorites(myItemData));
        !foundItem && toast.success("Recipe added to favorites!");
      }}
      icon={faHeart}
    />
  );
}

export default Heart;
