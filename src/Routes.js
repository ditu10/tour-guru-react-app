import {createBrowserRouter} from "react-router-dom";

import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Category } from "./pages/Category";
import { Destination } from "./pages/Destination";


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
    {
        path: "/destination/:slug",
        element: <Destination/>,
    },
]);