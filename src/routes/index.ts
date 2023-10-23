import { Router } from "@tanstack/react-router";
import { IndexRoute, LoginRoute } from "./IndexRoute";
import { rootRoute } from "./RootRoute";

const routeTree = rootRoute.addChildren([IndexRoute, LoginRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export { router };
