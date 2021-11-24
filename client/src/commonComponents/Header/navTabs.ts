import { ROUTES } from "../../router/routeNames";

export interface INavItems {
  title: string;
  path: string;
}

export const navTabs: INavItems[] = [
  { title: "Login", path: ROUTES.LOGIN },
  { title: "Movies", path: ROUTES.MOVIES },
  { title: "My Account", path: ROUTES.USER },
  { title: "Admin Panel", path: ROUTES.ADMIN },
];
