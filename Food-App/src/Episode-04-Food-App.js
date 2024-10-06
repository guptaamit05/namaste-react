import react from "react";
import reactDom from "react-dom/client";
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = reactDom.createRoot(document.querySelector(".root"));

root.render(<AppLayout />);
