import React from "react";

import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { error, isLoading, data } = useQuery(
    ["channel", id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <div className="flex my-4 mb-8 items-center">
      {error && <p>error!!</p>}
      {isLoading && <p>Loading!!</p>}
      {data && (
        <img className="rounded-full w-10 h-10" src={data} alt={name}></img>
      )}
      <h1 className="text-lg font-medium ml-2">{name}</h1>
    </div>
  );
}
