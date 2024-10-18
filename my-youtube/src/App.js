import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

/**
 * Header
 *  logo
 *  some links
 * Sidebar
 *  links
 * Body
 *  Video Card
 *
 **/

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children:[
      {
      path:"/",
      element:<MainContainer />
      },
      {
        path:"/watch",
        element:<WatchPage />
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <>
        <Head />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </>
    </Provider>
  );
}

export default App;
