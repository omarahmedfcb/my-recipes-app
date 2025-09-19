import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Recipes() {
  let [myData, setMyData] = useState([]);
  let [filteredData, setFilteredData] = useState([]);
  let [searchedData, setSearchedData] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");

  async function getRecipes() {
    const res = await fetch("recipes_with_premium.json");
    const data = await res.json();
    setMyData(data.recipes);
    setFilteredData(data.recipes);
    setSearchedData(data.recipes);
  }

  useEffect(() => {
    getRecipes();
  }, []);

  function handleChange(e) {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    let newData = filteredData.filter((ele) =>
      ele.name.toLowerCase().includes(value)
    );
    setSearchedData(newData);
  }

  function handleCuisine(e) {
    let newData;
    const cuisine = e.target.value;
    setSearchTerm("");
    if (cuisine === "all") {
      newData = myData;
    } else {
      newData = myData.filter((ele) => ele.cuisine === cuisine);
    }
    setFilteredData(newData);
    setSearchedData(newData);
  }

  return (
    <section>
      <div className="container w-9/10 mx-auto flex flex-col items-center ">
        <div className="flex flex-col md:flex-row gap-4 mt-8 w-full md:w-2/3">
          <div className="flex border border-red-700 rounded-xl overflow-hidden grow">
            <input
              value={searchTerm}
              onChange={handleChange}
              type="text"
              className="px-2 grow outline-0"
              placeholder="Search recipes..."
            />
            <button className="bg-red-700 px-4 py-2 text-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>

          <select
            id="product-list"
            onChange={handleCuisine}
            className="px-4 py-2 rounded-xl border max-md:self-center border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-red-500 
               text-gray-700 bg-white cursor-pointer w-2/5 md:w-48"
          >
            <option value="all">All</option>
            <option value="Mexican">Mexican</option>
            <option value="Italian">Italian</option>
            <option value="Asian">Asian</option>
            <option value="Pakistani">Pakistani</option>
            <option value="American">American</option>
            <option value="Japanese">Japanese</option>
            <option value="Greek">Greek</option>
            <option value="Indian">Indian</option>
            <option value="Turkish">Turkish</option>
            <option value="Russian">Russian</option>
            <option value="Lebanese">Lebanese</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Moroccan">Moroccan</option>
            <option value="Thai">Thai</option>
            <option value="Brazilian">Brazilian</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-16 pt-8 gap-4">
          {searchedData.map((ele, index) => (
            <Recipe key={ele.id} item={ele} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recipes;
