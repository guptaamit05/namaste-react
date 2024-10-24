import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/navSlice";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setsearchParams] = useSearchParams();
  // console.log(searchParams.get("v"))

  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div className=" flex flex-col w-full">
    <div className="px-5 py-2 flex ">
      <div>
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full">
            <LiveChat />
        </div>
    </div>
    <div className="py-5 px-5 ">
        <h2 className="font-bold text-3xl ">Comments</h2>
    </div>
    </div>
  );
};

export default WatchPage;