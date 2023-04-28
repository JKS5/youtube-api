import React from "react";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    error,
    data: videos,
    isLoading,
  } = useQuery(["videos", keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error!!!</div>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl-grid-cols5 gap-2 gap=y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video}></VideoCard>
          ))}
        </ul>
      )}
    </div>
  );
}
