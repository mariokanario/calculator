import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home";
import Type from "../pages/Type";
import Adjust from "../pages/Adjust";
import Meter from "../pages/Meter";
import Result from "../pages/Result";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/type",
        element: <Type />,
    },
    {
        path: "/adjust",
        element: <Adjust />,
    },
    {
        path: "/meter",
        element: <Meter />,
    },
    {
        path: "/result",
        element: <Result />,
    },
]);
