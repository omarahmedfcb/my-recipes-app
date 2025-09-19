import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import RecipeDetails from "./Pages/RecipeDetails";
import Products from "./Pages/Products";
import NotFound from "./NotFound";
import Favorites from "./Pages/Favorites";
import MainPage from "./Pages/MainPage";
import LogRegPage from "./Pages/LogRegPage";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <HashRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/sign" element={<LogRegPage />}>
          <Route index element={<Navigate to="in" replace />} />
          <Route path="in" element={<LogIn />} />
          <Route path="up" element={<Register />} />
        </Route>
        <Route path="/" element={<MainPage />}>
          <Route path="" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
