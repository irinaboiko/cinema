import { combineReducers } from "redux";

import loginReducer from "../pages/LoginPage/reducers";
import moviesPageReducer from "../pages/MoviesPage/reducers";
import movieDetailsPageReducer from "../pages/MovieDetailsPage/reducers";

export const rootReducer = combineReducers({
  auth: loginReducer,
  moviesPage: moviesPageReducer,
  movieDetailsPage: movieDetailsPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
