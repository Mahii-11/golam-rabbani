import Home from "./pages/Home"
import AppLayout from "./layout/AppLayout"
import { createBrowserRouter, RouterProvider } from "react-router"
import { MediaGallery } from "./pages/MediaGallery";



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      
        {
          path: "/media",
          element: <MediaGallery />
        },

        
    ]
  }

])







export default function App() {
  return <RouterProvider router={router} />;
}
