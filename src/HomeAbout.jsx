import {
  faHouse,
  faLeaf,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";

function HomeAbout() {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });
  return (
    <section
      ref={ref}
      className={`py-8 transition-all duration-700 ${
        inView
          ? "opacity-100 translate-x-0 scale-100"
          : "opacity-0 translate-x-6 scale-95"
      }`}
    >
      <div className="container w-9/10 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="content flex flex-col gap-16 md:w-1/2">
          <div className=" text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-700">
              At GoodEats, we believe in fresh, locally sourced ingredients
              crafted with care. Every dish is prepared to delight your taste
              buds and bring people together.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <FontAwesomeIcon
                icon={faLeaf}
                className="text-red-600 w-12 h-12"
              />
              <span className="text-gray-700 font-medium">
                Fresh Ingredients
              </span>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2">
              <FontAwesomeIcon
                icon={faTruckFast}
                className="text-red-600 w-12 h-12"
              />
              <span className="text-gray-700 font-medium">Fast Delivery</span>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2">
              <FontAwesomeIcon
                icon={faHouse}
                className="text-red-600 w-12 h-12"
              />
              <span className="text-gray-700 font-medium">Cozy Atmosphere</span>
            </div>
          </div>
        </div>
        <div className="md:w-4/10">
          <img
            src="https://cdn.dummyjson.com/recipe-images/20.webp"
            alt="Our Chef"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
