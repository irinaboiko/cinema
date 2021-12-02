interface IRoutes {
  LOGIN: string;
  USER: string;
  MOVIES: string;
  MOVIES_DETAILS: string;
  ADMIN: string;
}

export const ROUTES: IRoutes = {
  LOGIN: "/login",
  USER: "/user",
  MOVIES: "/",
  MOVIES_DETAILS: "/movies/:id",
  ADMIN: "/admin",
};
