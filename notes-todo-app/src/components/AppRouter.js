import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Body, About, Header, Contact, CounterByRedux, UserInfoRedux,NotFound, Food } from "./index";
import UserProvider from "./context/UserProvider";
import { store } from "./redux/store";
import { Provider } from "react-redux";


const AppRouter = () => {
  return (
    <Provider store={store}>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Food" element={<Food />} />

            <Route
              path="/counter-example-by-redux"
              element={<CounterByRedux />}
            ></Route>
            <Route path="/useinfo/:userId" element={<UserInfoRedux />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </Provider>
  );
};

export default AppRouter;
