interface IRoutes {
  LOGIN: string;
  SIGNUP: string;
  USER: string;
  MOVIES: string;
  MOVIES_DETAILS: string;
  ADMIN: string;
  ADMIN_ADD_MOVIE: string;
}

export const ROUTES: IRoutes = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  USER: "/user",
  MOVIES: "/",
  MOVIES_DETAILS: "/movies/:id",
  ADMIN: "/admin",
  ADMIN_ADD_MOVIE: "/addMovie",
};
