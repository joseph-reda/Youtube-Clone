import React, { useEffect, useState, useCallback } from "react";
import me from "../asstes/me.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faShare,
  faBoxArchive,
} from "@fortawesome/free-solid-svg-icons";
import { API_KEY } from "../Data";
import moment from "moment";
import { useParams } from "react-router";

function PlayVideo() {
  const { videoId } = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);

  const fetchVideoData = useCallback(async () => {
    const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    const response = await fetch(videoDetailsUrl);
    const data = await response.json();
    setApiData(data.items[0]);
  }, [videoId]);

  const fetchOtherData = useCallback(async () => {
    if (apiData) {
      const channelDetailUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
      const response = await fetch(channelDetailUrl);
      const data = await response.json();
      setChannelData(data.items[0]);
    }
  }, [apiData]);

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [fetchOtherData]);

  return (
    <div className="playVideo">
      <div className="card">
        <iframe
          className="h-[500px] w-[100%] max-sm:h-[300px]"
          width="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 className="text-black font-medium text-[26px] my-1 leading-none mt-5">
          {apiData ? apiData.snippet.title : ""}
        </h2>
        <div className="flex justify-between items-center my-5 text-[#797979] text-[18px] max-sm:flex-col max-sm:gap-3 max-sm:items-start">
          <div className="left">
            <span>{apiData ? apiData.statistics.viewCount : ""}k Views .</span>
            <span className="ml-10">
              {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
            </span>
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex gap-2 items-center cursor-pointer">
              <FontAwesomeIcon icon={faThumbsUp} />
              <span>4K</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <FontAwesomeIcon icon={faThumbsDown} />
              <span>9</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <FontAwesomeIcon icon={faShare} />
              <span>Share</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <FontAwesomeIcon icon={faBoxArchive} />
              <span>Save</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="me flex gap-3 text-[#797979]">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : me}
          alt="icon"
          className="w-[50px] h-[50px] rounded-full cursor-pointer"
        />
        <div className="info">
          <h2 className="text-black font-bold text-[20px]">
            {apiData ? apiData.snippet.channelTitle : ""}
          </h2>
          <h4>
            {channelData
              ? `${channelData.statistics.subscriberCount} `
              : "Loading..."}
          </h4>
          <p className="mt-3 text-[17px] max-sm:hidden">
            {apiData ? apiData.snippet.description.slice(0, 150) : ""}
          </p>
        </div>
        <button className="w-[250px] h-[40px] p-2 bg-[#FF0000] font-bold text-white rounded-md">
          Subscribe
        </button>
      </div>
      <hr className="my-8" />
    </div>
  );
}

export default PlayVideo;
