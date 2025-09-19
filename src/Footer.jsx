import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 max-sm:text-center">
      <div className="container mx-auto w-9/10 flex flex-col items-center md:flex-row justify-between sm:items-start gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">GoodEats</h2>
          <p className="text-gray-400">Fresh meals, made with love.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li>
              <NavLink href="#" className="hover:text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/products"} className="hover:text-white">
                Menu
              </NavLink>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold mb-1">Contact</h3>
          <p className="text-gray-400">
            <FontAwesomeIcon icon={faLocationDot} /> 123 GoodEats Street, Food
            City
          </p>
          <p className="text-gray-400">
            <FontAwesomeIcon icon={faPhone} /> Phone: +20 123 456 789
          </p>
          <p className="text-gray-400">
            <FontAwesomeIcon icon={faEnvelope} /> Email: info@goodeats.com
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-gray-400 text-xl">
            <a href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-white"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="hover:text-white"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="hover:text-white"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} GoodEats. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
