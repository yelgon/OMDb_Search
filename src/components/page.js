import React, { useState, useEffect } from "react";
import Post from "./post";

export default function Page(props) {
  const [page, setPage] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `https://www.omdbapi.com/?s=${props.movie}&page=${props.pageNumber}&apikey=6e81707`
      );
      let json = await response.json();
      setPage(json.Search);
    }

    fetchData();
  }, [props.movie, props.pageNumber]);

  return (
    <div>
      <Post movies={page ? page : []} />
    </div>
  );
}
