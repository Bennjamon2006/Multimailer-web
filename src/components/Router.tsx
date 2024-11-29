import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const routes = [
  {
    path: "/",
    Component: lazy(() => import("./Home")),
  },
  {
    path: "/compose",
    Component: lazy(() => import("./Compose")),
  },
  {
    path: "/about",
    Component: lazy(() => import("./About")),
  },
  {
    path: "/contact",
    Component: lazy(() => import("./ContactPage")),
  },
  {
    path: "/join",
    Component: lazy(() => import("./Join")),
  },
];

export default function Router() {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}
