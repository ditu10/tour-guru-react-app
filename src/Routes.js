import {createBrowserRouter} from "react-router-dom";

import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Category } from "./pages/Category";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    
    {
        path: "/categories",
        element: <Categories/>,
    },
    {
        path: "/categories/:slug",
        element: <Category/>,
    },
]);