import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { API_KEY } from "../Data.js";

function Feed({ category }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="grid justify-center gap-10 p-5 items-center max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-3 grid-cols-4">
      {data.map((item) => (
        <Link
          key={item.id}
          to={`video/${item.snippet.categoryId}/${item.id}`}
          className="card text-[#797979] text-[17px] w-[320px]"
        >
          <img
            src={item.snippet.thumbnails.default.url}
            alt="img"
            className="w-[310px] h-[200px] rounded-md"
          />
          <h2 className="text-black font-medium text-[19px] my-1 leading-none">
            {item.snippet.title}
          </h2>
          <h4 className="font-bold">{item.snippet.channelTitle}</h4>
          <span className="mr-3">{item.statistics.viewCount}k Views .</span>
          <span>{moment(item.snippet.publishedAt).fromNow()}</span>
        </Link>
      ))}
    </div>
  );
}

export default Feed;
