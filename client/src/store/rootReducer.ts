import { combineReducers } from "redux";

import loginReducer from "../pages/LoginPage/reducers";
import moviesPageReducer from "../pages/MoviesPage/reducers";

export const rootReducer = combineReducers({
  auth: loginReducer,
  moviesPage: moviesPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
