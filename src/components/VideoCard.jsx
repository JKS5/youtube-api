import React from "react";
import useUploadDate from "../Hooks/useUploadDate";

export default function VideoCard({ video }) {
  const uploadDate = useUploadDate(video.snippet.publishedAt);
  return (
    <div>
      <img src={video.snippet.thumbnails.default.url} alt="thumnail"></img>
      <p>{video.snippet.title}</p>
      <p>{video.snippet.channelTitle}</p>
      <p>{uploadDate}</p>
    </div>
  );
}
