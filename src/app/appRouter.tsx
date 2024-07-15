import { HeaderWidget } from "@widgets/HeaderWidget";

import { RouteObject, createBrowserRouter } from "react-router-dom";
import { MainPage } from "@pages/main";
import { Layout } from "@shared/ui";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "*",
    element: <MainPage />,
  },
];

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout headerSlot={<HeaderWidget />} />,
    children: routes,
  },
]);
