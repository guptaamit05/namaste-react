import { lazy, React, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Body,
  Header,
  Contact,
  CounterByRedux,
  UserInfoRedux,
  NotFound,
  Food,
  ProductsArt,
  Design,
} from "./index";
import UserProvider from "./context/UserProvider";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ProductFetchProvider from "./context/ProductFetchProvider";

const AppRouter = () => {
  const LaxyLoadAboutPage = lazy(() => import("./About"));
  return (
    <Provider store={store}>
      <UserProvider>
        <Suspense
          fallback={<div className="text-center text-4xl">Loading...</div>}
        >
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Body />} />

              <Route path="/about" element={<LaxyLoadAboutPage />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/Food" element={<Food />} />
              <Route path="/Design" element={<Design />} />

              <Route
                path="/ProductsArt"
                element={
                  <ProductFetchProvider>
                    <ProductsArt />
                  </ProductFetchProvider>
                }
              />

              <Route
                path="/counter-example-by-redux"
                element={<CounterByRedux />}
              ></Route>
              <Route
                path="/useinfo/:userId"
                element={<UserInfoRedux />}
              ></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
      </UserProvider>
    </Provider>
  );
};

export default AppRouter;
