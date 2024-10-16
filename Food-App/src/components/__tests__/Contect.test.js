import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Page test cases", () => {
  test("Should test the Contact Component", () => {   
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should check button exist on dom or not", () => {   //  it is alias of test. It is just another name of test...
    render(<Contact />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });
});
