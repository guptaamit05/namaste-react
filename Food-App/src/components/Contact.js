const Contact = () => {
  return (
    <div className=" h-screen body-section ">
      <h2 className="text-center text-2xl mt-10">Contact Us Section....</h2>
      <form className="flex flex-col justify-center items-center">
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="p-2 px-3 m-2 border bg-gray-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
