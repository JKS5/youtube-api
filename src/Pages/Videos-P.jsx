// import React from "react";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import VideoCard from "../components/VideoCard";
// import axios from "axios";

// export default function Videos() {
//   const { keyword } = useParams();

//   const {
//     isLoading,
//     isError,
//     error,
//     isSuccess,
//     data: videos, //여기에 들어감.
//   } = useQuery(["vidoes", keyword], async () => {
//     return axios
//       .get(`/videos/${keyword ? "search" : "popular"}.json`)
//       .then((response) => {
//         console.log(response);
//         console.log(response.data);
//         return response.data.items;
//       });

//     // axios 안쓸때
//     // return fetch(`/videos/${keyword ? "search" : "popular"}.json`)
//     //   .then((response) => {
//     //     console.log(response);

//     //     return response.json();
//     //   })
//     //   .then((data) => data.items); // data의 items를 return 해서 위
//   });

//   console.log(keyword);
//   return (
//     <div>
//       <div>Videos {keyword ? `${keyword} searched!!` : "popular!"}</div>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Something is Wrong !!!!!!!!!!!</p>}
//       {videos && (
//         <ul>
//           {videos.map((video) => (
//             <VideoCard key={video.id} video={video} />
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
