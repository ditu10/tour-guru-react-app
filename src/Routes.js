import {createBrowserRouter} from "react-router-dom";

import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Category } from "./pages/Category";
import { Destination } from "./pages/Destination";
import { Tours } from "./pages/Tours";
import { TourDetails } from "./pages/TourDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/categories/:slug",
    element: <Category />,
  },
  {
    path: "/destinations/:slug",
    element: <Destination />,
  },
  {
    path: "/tours",
    element: <Tours/>,
  },
  {
    path: "/tour/:slug",
    element: <TourDetails />,
  },
]);