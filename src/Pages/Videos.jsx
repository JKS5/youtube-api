import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function Videos() {
  const { keyword } = useParams();

  const { isLoading,isError,error, isSuccess, data } = useQuery('Videos', ()=>{
    fetch(`popular.json`)
  });

  console.log(keyword);
  return <div>Videos {keyword ? `${keyword}searched` : "popular"}</div>;
}
