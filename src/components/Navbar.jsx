import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";
import he from "he";
export default function Navbar() {
  const [text, setText] = useState("");
  const [resp, setResp] = useState("");
  const nagivate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    nagivate(`/videos/${text}`);
    fetch(`/data/List_by_Keyword_${text}.json`)
      .then((res) => {
        console.log(res);
        return res.json(res);
      })
      .then((data) => {
        const videoList = data.items.map((item) => ({
          publishedAt: item.snippet.publishedAt,
          title: he.decode(item.snippet.title),
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high.url,
        }));
        console.log(videoList);
        console.log(data);
        console.log(data.items);
        setResp(videoList);
      })
      .catch((e) => console.log("에러 발생"))
      .finally(() => console.log(`로딩중`));
    setText("");
  };
  return (
    <div>
      <Link to="/">Home Button iCON</Link>
      <Link to="/videos">bunch of videos if you click go to that detail</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search Videos:"
          value={text}
          onChange={handleChange}
        />
        <button>
          <HiMagnifyingGlass />
        </button>
      </form>
      <p>
        {resp
          ? resp.map((item) => (
              <li>
                {item.thumbnail}
                {item.publishedAt}
                {item.title}
                {item.description}
              </li>
            ))
          : ""}
      </p>
    </div>
  );
}
