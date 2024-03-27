import React from "react";
import ReactDOM from "react-dom/client";
import {NotFound } from "./components";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root, {loader as rootLoader} from "./components/Root";
import Category, {loader as categoryLoader} from "./components/Category";
import Search, {loader as searchLoader} from "./components/Search";
import Video, {loader as videoLoader} from "./components/Video";
import Menu from "./components/Menu";


let router = createBrowserRouter([
    {
        path:'/',
        element: <Root/>, 
        errorElement: <NotFound/>, 
        loader:rootLoader, 
        children: [
            {
                path: "category/:category", 
                element: <Category/>, 
                loader: categoryLoader
            }, 
            {
                path: "search/:search", 
                element: <Search/>, 
                loader: searchLoader
            },
            {
                path: "menu/:menu", 
                element: <Menu/>, 
                loader: searchLoader
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

