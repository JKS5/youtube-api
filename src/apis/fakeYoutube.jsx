import axios from "axios";

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  async #searchByKeyword(keyword) {
    return axios
      .get(`/videos/searched.json`)
      .then((res) => res.data.items)
      .then((items) => {
        items.map((item) => ({ ...item, id: item.id.videoId }));
      });
    // .then((res) => {
    //   console.log(res.data.items);
    //   return (res.data.map((items)=>{return {...items, {id:videoId}}})
    // });
  }
  async #mostPopular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
