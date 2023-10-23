import { Route } from "@tanstack/react-router";
import Home from "../pages/Home";
import { rootRoute } from "./RootRoute";
import Login from "../pages/Login";

export const IndexRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/",
	component: Home,
});

export const LoginRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/login",
	component: Login,
});
