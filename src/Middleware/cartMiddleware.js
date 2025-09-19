import { addToCart, clearCart } from "../Redux/favoritesSlice";

const cartMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (addToCart.match(action)) {
    store.dispatch(clearCart());
  }
  return result;
};

export default cartMiddleware;
