import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import { Contact, About, DiceHome, FoodHome, FirebaseHome } from "./index.js";
import ContactProvider from "./firebase-contact-app/context/ContactProvider.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/dice-game" element={<DiceHome />} />
          <Route path="/food-app" element={<FoodHome />} />
          <Route
            path="/contact-app"
            element={
              <ContactProvider>
                <FirebaseHome />
              </ContactProvider>
            }
          />
          <Route
            path="*"
            element={<div className="text-2xl text-center"> Not Found or You do not have permission.</div>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
