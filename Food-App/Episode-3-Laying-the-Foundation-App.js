import React from "react";
import ReactDOM from "react-dom/client";

// React Element: It is an object, when we render this element onto dom it becomes html.
/** 
 * JSX:  It is a JS Syntex . It is different from react. It makes developers life easy.
   It is not html, it is like HTML.syntax or XML syntax. It looks like html..
 */
//  For multi line of h1 tag we have to use () brackets...
const RElement = (
  <h1>
    Hello world
    <span>Colors</span>
  </h1>
);
const Title = () => <h1>This is is Title...</h1>
const HeadingComponent = () =><h2> <Title />Namaste React by Functional Component....</h2>

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<HeadingComponent />);
