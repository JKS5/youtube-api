import React from "react";

import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { error, isLoading, data } = useQuery(["channel", id], () =>
    youtube.channelImageURL(id)
  );

  return (
    <div>
      {error && <p>error!!</p>}
      {isLoading && <p>Loading!!</p>}
      {data && <img src={data} alt={name}></img>}
      <h1>{name}</h1>
    </div>
  );
}
