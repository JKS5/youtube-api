export async function search(keyword) {
  return axios
    .get(`/videos/${keyword ? "searched" : "popular"}.json`)
    .then((response) => {
      console.log(response.data.items);
      return response.data.items;
    });
}
