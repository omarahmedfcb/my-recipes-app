import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";

function CTA() {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });
  return (
    <section
      ref={ref}
      className={`py-20 bg-gray-100 text-red-700 transition-all duration-700 ${
        inView
          ? "opacity-100 translate-x-0 scale-100"
          : "opacity-0 -translate-x-6 scale-95"
      }`}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Savor the Taste?
        </h2>
        <p className="mb-8 text-lg md:text-xl max-w-xl mx-auto">
          Order your favorite meals now and enjoy fresh, delicious food
          delivered to your door.
        </p>
        <NavLink
          to={"/products"}
          className="bg-white text-red-700 px-8 py-4 border-2 border-red-700 rounded-3xl font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Order Now
        </NavLink>
      </div>
    </section>
  );
}

export default CTA;
