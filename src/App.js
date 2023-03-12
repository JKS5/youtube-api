import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Videos from "./Pages/Videos";
import Root from "./Pages/Root";
import VideoDetail from "./Pages/VideoDetail";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:videoId", element: <VideoDetail /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
