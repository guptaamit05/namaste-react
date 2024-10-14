const ShimmerFakeUIForMenu = () => {
  return (
    <>
      <h1 className="text-center text-4xl"></h1>
      <div className="border-r-4 p-2 mb-5 mt-10 cursor-pointer bg-gray-200">
        <div className="pt-3 pb-3 ">
          <h3 className="text-lg"></h3>
        </div>
        <div className="mt-2 mb-2 flex justify-between items-center">
          <div className="p-1 w-[80%]">
            <h3></h3>
            <span></span>
            <p></p>
          </div>
          <div className="text-end"></div>
        </div>
      </div>
    </>
  );
};
export default ShimmerFakeUIForMenu;
