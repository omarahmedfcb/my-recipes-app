import { NavLink } from "react-router-dom";

function HomeHero() {
  return (
    <section className="relative flex items-center aspect-[9/12] sm:aspect-[16/10] md:aspect-[16/8]">
      <video
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover "
      >
        <source src="hero4.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 w-full h-full bg-black/50"></div>
      <div className="container w-9/10 mx-auto relative z-10 flex flex-col items-center gap-8">
        <h1 className="text-6xl md:text-7xl font-black text-center text-white">
          Welcome to GoodEats
        </h1>
        <p className="mt-4 text-lg md:text-xl text-center text-gray-200">
          Savor the taste of freshly prepared meals, made with love.
        </p>
        <div className="flex gap-4">
          <NavLink
            to={"/products"}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow-md transition-colors"
          >
            Order Now
          </NavLink>
          <a
            href="#"
            className="bg-white hover:bg-gray-300 text-red-700 px-6 py-3 rounded-xl shadow-md transition-colors"
          >
            Book a table
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
