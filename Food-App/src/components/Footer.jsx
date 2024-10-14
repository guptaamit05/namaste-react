const Footer = () => {
    return (
      <div className="flex flex-col sm:flex-row bg-gray-500 relative bottom-0 justify-between items-center px-2 m-0">
        <div className="flex p-3 ">
          <p className="mx-1 ">
            <a href="#">Terms of use</a>
          </p>
          <p className="mx-1 ">|</p>
          <p className="mx-1 ">
            <a href="#">Privacy Policy</a>
          </p>
          <p className="mx-1">|</p>
          <p className=" mx-1">
            <a href="#">Disclaimer</a>
          </p>
        </div>
        <p className="mx-1 mb-1">2024 @ Food App</p>
      </div>
    );
  };
  export {Footer}