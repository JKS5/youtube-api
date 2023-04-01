import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  const { keyword } = useParams();
  useEffect(() => {
    setText(`${keyword || ""}`);
  }, [keyword]);

  return (
    <header className="w-full flex text-2xl border-b border-zinc-600 p-4 mb-4 ">
      <Link className="flex items-center " to="/">
        <BsYoutube className="text-brand text-4xl" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-600"
          type="text"
          placeholder="search..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="bg-gray-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
