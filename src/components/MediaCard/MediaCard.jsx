import "./MediaCard.css";

const MediaCard = ({ title, cover, rating, type }) => {
  return (
    <div className={`media-card ${type}`}>
      <div className="media-cover">
        <img src={cover} alt={title} />
        {rating && <span className="media-rating">{rating}</span>}
      </div>
      <h4 className="media-title">{title}</h4>
      {type && (
        <span className={`media-badge ${type}`}>
          {type === "movie" ? "MOVIE" : "TV SHOW"}
        </span>
      )}
    </div>
  );
};

export default MediaCard;