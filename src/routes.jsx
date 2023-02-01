/* eslint-disable react/react-in-jsx-scope */
import React, { Suspense, lazy } from "react";
import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Error from "./pages/Error";
import Room from "./pages/Room";
const RoomDetail = lazy(() => import("./pages/RoomDetail"));
const Home = lazy(() => import("./pages/Home"));

const createRouter = import.meta.env.IS_ELECTRON
  ? createHashRouter
  : createBrowserRouter;

export const router = createRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
    errorElement: (
      <Suspense>
        <Error />
      </Suspense>
    ),
  },
  {
    path: "/room/:id",
    element: (
      <Suspense>
        <RoomDetail />
      </Suspense>
    ),
  },
  {
    path: "/room",
    element: <Room />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);
