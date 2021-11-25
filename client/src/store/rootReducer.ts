import { combineReducers } from "redux";

import loginReducer from "../pages/LoginPage/reducers";

export const rootReducer = combineReducers({ auth: loginReducer });

export type RootState = ReturnType<typeof rootReducer>;
