import { lazy, Suspense, useState, useEffect } from "react";
import reactDom from "react-dom/client";
import { Footer, Header, Body, Error, RestaurantMenu } from "./index";
import About from "./components/About";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

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
  const [uName, setUName] = useState("");

  useEffect(() => {
    const d = "Rajesh Patidar";
    setUName(d);
  }, []);

  return (
    <UserContext.Provider value={{ loggedUser: uName }}>
      <div className="absolute app h-screen w-full">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
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
