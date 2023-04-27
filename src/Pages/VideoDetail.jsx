import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
export default function VideoDetail() {
  const location = useLocation();
  const { video } = location.state;

  const {
    title,
    publishedAt,
    channelId,
    description,
    channelTitle,
    thumbnails,
  } = video.snippet;
  return (
    <section>
      <article>
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
        ></iframe>
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          {/* <p>{description}</p> */}
          <pre>{description}</pre>
        </div>
        VideoDetail!
      </article>
      <section>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
