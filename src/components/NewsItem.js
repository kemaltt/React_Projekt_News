import NewsList from "./NewsList";
import { useState, useEffect } from "react";

const NewsItem = () => {
  const key = "e4693504d6f040e68175eec732776d7c";
  const [input, setInput] = useState("");
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState("de");

  const handleInput = () => {
    let filteredNews = news.filter((news) =>
      news.title.toLowerCase().includes(input.toLowerCase())
    );
    setNews(filteredNews);
  };

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json.articles);
        let articles = json.articles;
        setNews(articles);
      });
  }, [country]);

  return (
    <div className="news_container">
      <h3>News App</h3>
      <div className="input_container">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search"
          value={input}
        />
        <button onClick={handleInput}>Search</button>
      </div>
      <select onChange={(e) => setCountry(e.target.value)} id="">
        <option selected>Select Country</option>
        <option value="de">de</option>
        <option value="us">us</option>
        <option value="tr">tr</option>
        <option value="gb">gb</option>
      </select>
      <div className="news_list">
        {news.map((article, i) => (
          <NewsList
            key={i}
            img={article.urlToImage}
            title={article.title}
            description={article.description}
            content={article.content}
            url={article.url}
            date={article.publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsItem;
