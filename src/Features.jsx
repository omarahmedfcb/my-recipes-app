import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { NavLink } from "react-router-dom";

function Features() {
  let [myData, setMyData] = useState([]);
  async function getRecipes() {
    const res = await fetch("recipes_with_premium.json");
    const data = await res.json();
    setMyData(data.recipes.slice(0, 6));
  }

  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <section className="py-16">
      <div className="container w-9/10 mx-auto flex flex-col items-center">
        <h2 className="text-3xl text-center md:text-4xl font-bold mb-4">
          Our Signature Dishes
        </h2>
        <p className="text-gray-700 mb-12 text-center">
          Freshly prepared meals your taste buds will love.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {myData.map((ele) => (
            <Recipe item={ele} />
          ))}
        </div>
        <NavLink
          to={"/products"}
          className="inline-block bg-red-600 hover:bg-red-700 mx-auto text-white px-6 py-3 rounded-3xl mt-8 shadow-md transition-colors"
        >
          View More...
        </NavLink>
      </div>
    </section>
  );
}

export default Features;
