import { AxiosResponse } from "axios";

import * as loginPageActions from "../pages/LoginPage/actions";
import * as loginPageAPI from "../pages/LoginPage/api";

import * as signUpPageActions from "../pages/SignUpPage/actions";
import * as signUpPageAPI from "../pages/SignUpPage/api";

import * as moviesPageActions from "../pages/MoviesPage/actions";
import * as moviesPageAPI from "../pages/MoviesPage/api";

import * as movieDetailsActions from "../pages/MovieDetailsPage/actions";
import * as movieDetailsAPI from "../pages/MovieDetailsPage/api";

import * as adminPageAction from "../pages/AdminPanelPage/actions";
import * as adminPageAPI from "../pages/AdminPanelPage/api";

import * as adminAddMoviePageActions from "../pages/AdminAddMoviePage/actions";
import * as adminAddMoviePageAPI from "../pages/AdminAddMoviePage/api";

import * as userPageActions from "../pages/UserPage/actions";
import * as userPageAPI from "../pages/UserPage/api";

type RequestFunctionType = (body: any) => Promise<AxiosResponse>;

type ActionRequestMapping = {
  [key: string]: RequestFunctionType;
};

const apiCallsMapping = (actionType: string): RequestFunctionType => {
  const mapping: ActionRequestMapping = {
    [loginPageActions.LOGIN_REQUEST.type]: loginPageAPI.signIn,

    [signUpPageActions.SIGN_UP_REQUEST.type]: signUpPageAPI.signUp,

    [moviesPageActions.GET_MOVIES_REQUEST.type]: moviesPageAPI.getMovies,

    [movieDetailsActions.GET_MOVIE_DETAILS_REQUEST.type]:
      movieDetailsAPI.getMovieDetails,

    [adminPageAction.GET_ADMIN_MOVIES_REQUEST.type]:
      adminPageAPI.getAdminMovies,
    [adminPageAction.DELETE_MOVIE_REQUEST.type]: adminPageAPI.deleteMovie,

    [adminAddMoviePageActions.ADD_MOVIE_REQUEST.type]:
      adminAddMoviePageAPI.addMovie,

    [userPageActions.GET_USER_MOVIES_COLLECTION_REQUEST.type]:
      userPageAPI.getUserMoviesCollection,
  };

  if (!mapping[actionType]) {
    throw new Error("Not mapped action!");
  }

  return mapping[actionType];
};

export default apiCallsMapping;
