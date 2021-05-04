import React, { useEffect, useState } from "react";
import NewSingle from "./NewSingle";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_API_KEY}`;
    getTopheadlines(url)
  }, [])

  const getTopheadlines = url => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => console.log(error));
  }

  const renderItems = () => {
    return articles.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  return (
    <div className="row">{renderItems()}</div>
  );
}

export default NewsList;
