const NewsList = ({ img, title, description, url, date }) => {
  return (
    <div className="news_card">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <p className="description">{description}</p>
      <p className="date">{date.slice(0, 10)}</p>
      <a className="read_more" href={url} target="_blank">
        Read More
      </a>
    </div>
  );
};

export default NewsList;
