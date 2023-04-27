import axios from "axios";
export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }
  async search(params) {
    return this.httpClient.get("search", params);
  }
  async videos(params) {
    return this.httpClient.get("videos", params);
  }
  async channels(params) {
    return this.httpClient.get("channels", params);
  }
}
// async search(keyword) {
//   return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
// }
// async #searchByKeyword(keyword) {
//   return this.httpClient
//     .get(`search`, {
//       params: { part: "snippet", maxResults: 25, type: "video", q: keyword },
//     })
//     .then((res) => res.data.items)
//     .then((items) => {
//       console.log(items);
//       return items.map((item) => ({ ...item, id: item.id.videoId }));
//     });
//   // .then((res) => {
//   //   console.log(res.data.items);
//   //   return (res.data.map((items)=>{return {...items, {id:videoId}}})
//   // });
// }
// async #mostPopular() {
//   return this.httpClient
//     .get(`videos`, {
//       params: { part: "snippet", maxResults: 25, chart: "mostPopular" },
//     })
//     .then((res) => res.data.items);
// }
