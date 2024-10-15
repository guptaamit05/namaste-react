// import { User } from "../index";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <>
        <div className="flex flex-col justify-center items-center  p-2 about-section h-60 bg-gray-300 ">
          <h1 className="text-4xl pb-5">About Us Page</h1>
          <UserContext.Consumer>
            {(user) => (
              <h4 className="font-bold">Logged User: {user.loggedUser}</h4>
            )}
          </UserContext.Consumer>
          <p className="">Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>

        <h2 className="text-center mt-7">Our Team</h2>
        <div className="flex justify-evenly items-center flex-wrap m-10">
          {/* <User
          name={"John Carter"}
          post={"CEO & Founder"}
          desc={"Some text that describes me lorem ipsum ipsum lorem"}
          email={"jane@example.com"}
        /> */}
          <UserClass
            name={"Peter Parker"}
            post={"Designer"}
            desc={"Some text that describes me lorem ipsum ipsum lorem"}
            email={"peter@example.com"}
          />
          <UserClass
            name={"Harry Moris"}
            post={"Developer"}
            desc={"Some text that describes me lorem ipsum ipsum lorem"}
            email={"hary@example.com"}
          />
        </div>
      </>
    );
  }
}

// const About = () => {
//   return (
//     <div className="body-section">
//       <div className="about-section">
//         <h1>About Us Page</h1>
//         <p>Some text about who we are and what we do.</p>
//         <p>
//           Resize the browser window to see that this page is responsive by the
//           way.
//         </p>
//       </div>

//       <h2 className="center">Our Team</h2>
//       <div className="row">
//         <User name={"John Carter"} post={"CEO & Founder"} desc={"Some text that describes me lorem ipsum ipsum lorem"} email={"jane@example.com"} />
//         <UserClass  name={"Peter Parker"} post={"Designer"} desc={"Some text that describes me lorem ipsum ipsum lorem"} email={"peter@example.com"}  />
//         <UserClass  name={"Harry Moris"} post={"Developer"} desc={"Some text that describes me lorem ipsum ipsum lorem"} email={"hary@example.com"}  />
//       </div>
//     </div>
//   );
// };

export default About;
