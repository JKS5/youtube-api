import axios from "axios";

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.relatedVideoId
      ? axios.get(`/videos/related.json`)
      : axios.get(`/videos/search.json`);
  }
  async videos() {
    return axios.get(`/videos/popular.json`);
  }
  async channels() {
    return axios.get(`/videos/channel.json`);
  }
}
// constructor() {}

// async search(keyword) {
//   return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
// }
// async #searchByKeyword(keyword) {
//   return axios
//     .get(`/videos/search.json`)
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
//   return axios.get(`/videos/popular.json`).then((res) => res.data.items);
// }
