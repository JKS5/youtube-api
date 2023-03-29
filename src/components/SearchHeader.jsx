import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";

export default function SearchHeader() {
  const [text, setText] = useState("");
  const { keyword } = useParams();
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header>
      <Link to="/">
        <BsYoutube />
        Youtube
      </Link>
      <form onSubmit={search}>
        <input
          type="text"
          placeholder="search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
