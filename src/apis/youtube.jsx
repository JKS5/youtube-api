import axios from "axios";
//✅
export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
    // this.httpClient = axios.create({
    //   baseURL: "https://www.googleapis.com/youtube/v3",
    //   params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    // });
  }
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => {
        console.log(items);
        return items.map((item) => ({ ...item, id: item.id.videoId }));
      });
    // .then((res) => {
    //   console.log(res.data.items);
    //   return (res.data.map((items)=>{return {...items, {id:videoId}}})
    // });
  }
  async #mostPopular() {
    return this.apiClient
      .videos({
        params: { part: "snippet", maxResults: 25, chart: "mostPopular" },
      })
      .then((res) => res.data.items);
  }
}
