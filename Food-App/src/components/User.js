import userImg from "../../user1.jpg";

const User = (props) => {
  const {name, post, desc, email,} = props;
  return (
    <div className="column">
      <div className="card">
        <img src={userImg} alt="Jane" />
        <div className="container">
          <h2>{name}</h2>
          <p className="title">{post}</p>
          <p>{desc}</p>
          <p>{email}</p>
          <p>
            <button className="button">Contact</button>
          </p>
        </div>
      </div>
    </div>
  );
};
export {User}