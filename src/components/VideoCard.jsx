import React from "react";
import { formatAgo } from "../utils/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  const navigate = useNavigate();
  const moveToDetail = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  const isList = type === "list";
  return (
    <li className={isList ? "flex gap-1 m-2" : ""}>
      <img
        className={isList ? "w-60 mr-2" : "w-full"}
        src={thumbnails.medium.url}
        alt="thumnail"
        onClick={moveToDetail}
      ></img>
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
