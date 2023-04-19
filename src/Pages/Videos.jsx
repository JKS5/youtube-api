import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import FakeYoutube from "../apis/fakeYoutube";

export default function Videos() {
  const { keyword } = useParams();

  const {
    error,
    data: videos,
    isLoading,
  } = useQuery(["videos", keyword], () => {
    const youtube = new FakeYoutube();
    return youtube.search(keyword);
  });

  console.log({ videos });

  return (
    <div>
      <div>{keyword ? `${keyword} searched` : "popular"}</div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error!!!</div>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video}></VideoCard>
          ))}
        </ul>
      )}
      {/* {data &&data.map((data2) => <div key={data2.id}>{data2.snippet.title}</div>)} */}
      <div>Videos</div>
    </div>
  );
}

// import React from "react";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
// import VideoCard from "../components/VideoCard";

// export default function Videos() {
//   const { keyword } = useParams();

//   const { isLoading, error, data } = useQuery(["videos", keyword], async () => {
//     return axios
//       .get(`/videos/${keyword ? `searched` : `popular`}.json`)
//       .then((response) => {
//         return response.data.items;
//       });
//   });
//   console.log({ data });

//   return (
//     <div>
//       <div>{keyword ? `${keyword} searched` : "popular"}</div>
//       {isLoading && <div>Loading...</div>}
//       {error && <div>Error!!!</div>}
//       {data &&
//         data.map((video) => (
//           <VideoCard key={video.id} video={video}></VideoCard>
//         ))}
//       {/* {data &&data.map((data2) => <div key={data2.id}>{data2.snippet.title}</div>)} */}
//       <div>Videos</div>
//     </div>
//   );
// }
