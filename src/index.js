import "./index.css";

import reportWebVitals from "./reportWebVitals";
// Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Components, Pages
import App from "./App";
import Videos from "./Pages/Videos";
import VideosDetail from "./Pages/VideosDetail";
import ErrorElement from "./Pages/ErrorElement";

const router = createBrowserRouter([
  {
    patch: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Videos /> },
      // 키워드의 검색없을때 인기 추천 비디오들
      { path: "videos", element: <Videos /> },
      // 비디오중 검색시 검색된 비디오들
      { path: "videos/:keyword", element: <Videos /> },
      // 비디오 클릭시 비디오 디테일
      { path: "videos/watch/:videoId", element: <VideosDetail /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
