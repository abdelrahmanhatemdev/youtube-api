import React from "react";
import ReactDOM from "react-dom/client";
import {ErrorPage } from "./components";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root, {loader as rootLoader} from "./components/Root";
import Home, {loader as homeLoader} from "./components/Home";
import Category, {loader as categoryLoader} from "./components/Category";
import Search, {loader as searchLoader} from "./components/Search";
import Video, {loader as videoLoader} from "./components/Video";
import Shorts, {loader as shortsLoader} from "./components/Shorts";
import Short, {loader as shortLoader} from "./components/Short";
import History, {loader as historyLoader} from "./components/History";
import Setting, {loader as settingLoader} from "./components/Setting";

let router = createBrowserRouter([
    {
        path:'/',
        element: <Root/>, 
        errorElement: <ErrorPage/>, 
        loader:rootLoader, 
        children: [
            {
                path: "/", 
                element: <Home/>, 
                loader: homeLoader
            },
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
                path: "v/:videoId", 
                element: <Video/>, 
                loader: videoLoader
            },
            {
                path: "shorts", 
                element: <Shorts/>, 
                loader: shortsLoader
            },
            {
                path: "shorts/:short", 
                element: <Short/>, 
                loader: shortLoader
            },
            {
                path: "history", 
                element: <History/>, 
                loader: historyLoader
            },
            {
                path: "/setting", 
                element: <Setting/>, 
                loader: settingLoader
            }
            
           
        ]
    }
], {
    basename: "/youtube-api"
})

let root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

