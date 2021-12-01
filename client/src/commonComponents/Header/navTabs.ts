import { ROUTES } from "../../router/routeNames";

export interface INavItems {
  title: string;
  path: string;
}

export const navTabs: INavItems[] = [
  { title: "Movies", path: ROUTES.MOVIES },
  { title: "My Account", path: ROUTES.USER },
];
