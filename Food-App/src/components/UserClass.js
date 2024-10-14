import React from "react";
import userImg from "../../user1.jpg";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        desc: "dummy desc",
        email: "example@example.com",
        post: "dummy post...",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/guptaamit05");
    const result = await data.json();
    this.setState({
      userInfo: result,
    });
  }

  // compnentDidUpdate(){
  //     console.log("did update....")
  // }

  // componentWillUnmount(){
  //     console.log("Will unmount...")
  // }

  render() {
    const { name, location, email, avatar_url } = this.state.userInfo;
    let { count } = this.state;
    return (
      <div className="flex p-10 bg-gray-100 flex-col justify-evenly items-center">
        <img className="rounded-full w-20 text-center" src={avatar_url} alt="John" />
        <div className="flex text-center flex-col justify-evenly items-center">
          <h2>{name}</h2>
          {/* <p className="title">{post}</p> */}
          <p>Location: {location}</p>
          <p>{email}</p>
          <p>
            <button
              className="button"
              onClick={() => {
                this.setState({ count: this.state.count + 1 });
              }}
            >
              Count Increase | Contact
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default UserClass;
