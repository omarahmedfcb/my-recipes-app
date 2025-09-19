import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import ScrollToTop from "../ScrollToTop";
import Footer from "../Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "../ScrollButton";

function MainPage() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <ScrollToTopButton />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainPage;
