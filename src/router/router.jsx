import {
    createBrowserRouter, createHashRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Type from "../pages/Type";
import Adjust from "../pages/Adjust";
import Meter from "../pages/Meter";
import Result from "../pages/Result";
import PdfView from "../pages/PdfView";

export const router = createHashRouter([
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
    {
        path: "/pdfView",
        element: <PdfView />,
    },
]);
