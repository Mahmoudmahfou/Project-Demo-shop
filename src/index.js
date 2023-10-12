import App from "./App";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllShop from "./ShopPage/AllShop";
import AllAbout from "./AboutPage/AllAbout";
import ShopDetails from "./ShopDetails/ShopDetails";
import ShopCart from "./ShopCart/ShopCart";
import CheckOut from "./CheckOut/CheckOut";
import BlogDetails from "./BlogDetails/BlogDetails";
import AllBlog from "./BlogPage/AllBlog";
import Contact from "./Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <AllShop />,
  },
  {
    path: "about",
    element: <AllAbout />,
  },
  {
    path: "ShopDetails",
    element: <ShopDetails />,
  },
  {
    path: "ShopCart",
    element: <ShopCart />,
  },
  {
    path: "CheckOut",
    element: <CheckOut />,
  },
  {
    path: "BlogDetails",
    element: <BlogDetails />,
  },
  {
    path: "Blog",
    element: <AllBlog />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

