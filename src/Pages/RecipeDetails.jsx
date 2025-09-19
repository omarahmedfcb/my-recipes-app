import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Heart from "../Heart";
import Spinner from "../Spinner";

function RecipeDetails() {
  const { id } = useParams();
  const isLogged = useSelector((state) => state.loggedLocal.value);
  const favorites = useSelector((state) => state.favorites.value);
  const navigate = useNavigate();
  //fetching from dummy json
  let [myItemData, setMyItemData] = useState(null);
  const [loading, setLoading] = useState(true);
  let foundItem = favorites.some((ele) => ele.id == myItemData?.id);

  useEffect(() => {
    async function getMyRecipe() {
      try {
        setLoading(true);
        const res = await fetch("/recipes_with_premium.json");
        const data = await res.json();
        setMyItemData(data.recipes[Number(id) - 1]);
      } finally {
        setLoading(false);
      }
    }
    getMyRecipe();
  }, [id]);

  useEffect(() => {
    if (!myItemData) return;

    if (myItemData.premium && !isLogged.is) {
      toast.error("This recipe is premium. Please log in first.");
      navigate("/sign/in");
    } else if (myItemData.premium) {
      toast.error("This recipe requires a premium plan.");
      navigate("/");
    }
  }, [myItemData, isLogged, navigate]);
  let quick = [];
  if (myItemData) {
    quick = [
      { id: 1, text: "Prep Time", time: `${myItemData.prepTimeMinutes} min` },
      { id: 2, text: "Cook Time", time: `${myItemData.cookTimeMinutes} min` },
      { id: 3, text: "Servings", time: myItemData.servings },
      { id: 4, text: "Calories", time: myItemData.caloriesPerServing },
      { id: 5, text: "Difficulty", time: myItemData.difficulty },
      { id: 6, text: "Cuisine", time: myItemData.cuisine },
    ];
  }

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="relative">
      <div className=" sticky top-10 lg:top-16 z-[16] bg-white/80 backdrop-blur-md shadow-md">
        <div className="container w-9/10 mx-auto flex items-center justify-between px-6 py-4 ">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {myItemData.name}
          </h2>
          <Heart foundItem={foundItem} myItemData={myItemData} />
        </div>
      </div>
      <div className="container w-9/10 mx-auto py-16 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          <div className=" lg:sticky lg:top-34 z-[15] max-lg:mx-auto md:w-8/10 rounded-2xl overflow-hidden">
            <img src={myItemData.image} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {quick.map((ele) => (
                <div
                  key={ele.id}
                  className="bg-white rounded-xl shadow p-4 text-center border-l-8 border-cyan-500"
                >
                  <p className="text-sm text-gray-500">{ele.text}</p>
                  <p className="font-semibold">{ele.time}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-bold mb-4">Ingredients</h3>
              <ul className="flex flex-wrap gap-3">
                {myItemData.ingredients.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 bg-green-50 border border-green-200 text-green-800 rounded-full shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-bold mb-4">Instructions</h3>
              <div className="space-y-4">
                {myItemData.instructions.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 border items-center rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <span className="flex items-center justify-center py-1 px-3 rounded-full bg-green-600 text-white font-bold">
                      {index + 1}
                    </span>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
