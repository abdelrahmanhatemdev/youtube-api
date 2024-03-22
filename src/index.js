import React from "react";
import ReactDOM from "react-dom/client";
import {NotFound } from "./components";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root, {loader as rootLoader} from "./routes/Root";
import Category, {loader as categoryLoader} from "./routes/Category";
import Search, {loader as searchLoader} from "./routes/Search";
import Video, {loader as videoLoader} from "./routes/Video";


let router = createBrowserRouter([
    {
        path:'/',
        element: <Root/>, 
        errorElement: <NotFound/>, 
        loader:rootLoader, 
        children: [
            {
                path: "categories/:category", 
                element: <Category/>, 
                loader: categoryLoader
            }, 
            {
                path: "search/:search", 
                element: <Search/>, 
                loader: categoryLoader
            },
            {
                path: "menu/:menu", 
                element: <Search/>, 
                loader: categoryLoader
            },
            {
                path: "v/:videoId", 
                element: <Video/>, 
                loader: videoLoader
            },
        ]
    }
])

let root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

