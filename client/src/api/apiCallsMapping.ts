import { AxiosResponse } from "axios";

import * as loginPageActions from "../pages/LoginPage/actions";
import * as loginPageAPI from "../pages/LoginPage/api";

import * as moviesPageActions from "../pages/MoviesPage/actions";
import * as moviesPageAPI from "../pages/MoviesPage/api";

import * as movieDetailsActions from "../pages/MovieDetailsPage/actions";
import * as movieDetailsAPI from "../pages/MovieDetailsPage/api";

import * as adminPageAction from "../pages/AdminPanelPage/actions";
import * as adminPageAPI from "../pages/AdminPanelPage/api";

type RequestFunctionType = (body: any) => Promise<AxiosResponse>;

type ActionRequestMapping = {
  [key: string]: RequestFunctionType;
};

const apiCallsMapping = (actionType: string): RequestFunctionType => {
  const mapping: ActionRequestMapping = {
    [loginPageActions.LOGIN_REQUEST.type]: loginPageAPI.signIn,

    [moviesPageActions.GET_MOVIES_REQUEST.type]: moviesPageAPI.getMovies,

    [movieDetailsActions.GET_MOVIE_DETAILS_REQUEST.type]:
      movieDetailsAPI.getMovieDetails,

    [adminPageAction.GET_ADMIN_MOVIES_REQUEST.type]:
      adminPageAPI.getAdminMovies,
    [adminPageAction.DELETE_MOVIE_REQUEST.type]: adminPageAPI.deleteMovie,
  };

  if (!mapping[actionType]) {
    throw new Error("Not mapped action!");
  }

  return mapping[actionType];
};

export default apiCallsMapping;
