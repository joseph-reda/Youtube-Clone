import React, { useEffect, useState } from "react";
import { API_KEY } from "../Data";
import { Link } from "react-router-dom";

import "../App";

function Recommended({ categoryId }) {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const data_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
      const response = await fetch(data_url);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setApiData(data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className="flex flex-col gap-5">
      {apiData.length > 0 ? (
        apiData.map((item, index) => (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="recommended flex gap-2  items-center justify-center max-sm:flex-col"
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt="video"
              className="rounded"
            />
            <div>
              <div className="info max-sm:flex-col">
                <h2 className="text-black font-medium text-[16px] leading-none">
                  {item.snippet.title}
                </h2>
                <h4 className="font-bold">{item.snippet.channelTitle}</h4>
                <span>{item.statistics.viewCount} Views .</span>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Recommended;
