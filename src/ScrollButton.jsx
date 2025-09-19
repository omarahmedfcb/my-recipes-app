import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-xl cursor-pointer bg-red-700 text-white shadow-lg shadow-black/40 hover:shadow-xl hover:-translate-y-0.5 transition-all"
      >
        <FontAwesomeIcon className="text-xl" icon={faArrowUp} />
      </button>
    )
  );
}

export default ScrollToTopButton;
