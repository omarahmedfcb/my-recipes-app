import { clearFavorites, setFavorites } from "../Redux/favoritesSlice";
import { loggedIn, loggedOut } from "../Redux/loggedLocalSlice";

const loggedLocalMiddleware = (store) => (next) => (action) => {
  if (loggedOut.match(action)) {
    const stateBefore = store.getState();
    const userBefore = stateBefore.loggedLocal.value.user;

    if (userBefore) {
      localStorage.setItem(
        `favorites_${userBefore}`,
        JSON.stringify(stateBefore.favorites.value)
      );
    }
    const result = next(action);
    store.dispatch(clearFavorites());
    return result;
  }

  if (loggedIn.match(action)) {
    const result = next(action);
    const userId = action.payload;
    const savedFavorites =
      JSON.parse(localStorage.getItem(`favorites_${userId}`)) || [];

    store.dispatch(setFavorites(savedFavorites));
    return result;
  }
  return next(action);
};

export default loggedLocalMiddleware;
