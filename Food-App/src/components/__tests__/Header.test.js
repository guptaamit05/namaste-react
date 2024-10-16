import { Provider } from "react-redux";
import { Header } from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";


describe("Test cases of Header Comp", () => {
  it("Should render Header with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // const btn = screen.getByRole("button", {name:"Login"})  //finding login button
    const cart = screen.getByText("Cart (0 Items)")
    // expect(btn).toBeInTheDocument()
    expect(cart).toBeInTheDocument()
  });
});
