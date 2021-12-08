import { combineReducers } from "redux";

import loginReducer from "../pages/LoginPage/reducers";
import moviesPageReducer from "../pages/MoviesPage/reducers";
import movieDetailsPageReducer from "../pages/MovieDetailsPage/reducers";
import adminPageReducer from "../pages/AdminPanelPage/reducers";
import signUpReducer from "../pages/SignUpPage/reducers";

export const rootReducer = combineReducers({
  auth: loginReducer,
  signUp: signUpReducer,
  moviesPage: moviesPageReducer,
  movieDetailsPage: movieDetailsPageReducer,
  adminPage: adminPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
