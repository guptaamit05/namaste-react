import logo from "../../logo.png"

const Header = () => {
    return (
      <div className="header-section">
        <div className="logo-section">
          <img src={logo} alt="food restaurant img" />
        </div>
        <div className="nav-section">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;