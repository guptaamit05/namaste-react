import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/Constant';
import {VideoCard} from "./VideoCard"
import { Link } from 'react-router-dom';
const VideoContainer = () => {

  const [yVideo, setyVideo] = useState([]);
  useEffect(()=>{
    getAllVideos();
  }, [])
  const getAllVideos =  async () =>{

    const data = await fetch(API_URL);
    const resutl = await data.json()
    // console.log(resutl.items)
    setyVideo(resutl.items);
  }
  return (
    <div className='flex flex-wrap'>
      {yVideo.map((video)=> <Link key={video.id} to={"/watch?v="+video.id}><VideoCard  info={video} /></Link> )}
    </div>
  )
}

export default VideoContainer