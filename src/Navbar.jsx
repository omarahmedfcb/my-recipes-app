import { useEffect, useState } from "react";
import NavNorm from "./NavNorm";
import NavMob from "./NavMob";
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigation = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Products", to: "/products" },
    { id: 3, name: "About", to: "/about" },
    { id: 4, name: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <NavNorm
        isScrolled={isScrolled}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
        className="z-20"
      />
      <NavMob
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
        mobileMenuOpen={mobileMenuOpen}
        className="z-20"
      />
    </>
  );
}

export default Navbar;
