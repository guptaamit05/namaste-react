import { lazy, Suspense } from "react";
import reactDom from "react-dom/client";
import { Footer, Header, Body, Error, RestaurantMenu } from "./index";
import About from "./components/About";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

/**
 * header
    logo
    navbar
  body
    search section
    cards
      Image
      name, Star rating, price etc.
  footer
    links
*/

// Lazy Loading.....
const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {
  return (
    <div className="absolute app h-screen w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>   
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:restId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = reactDom.createRoot(document.querySelector(".root"));

root.render(<RouterProvider router={appRouter} />);
