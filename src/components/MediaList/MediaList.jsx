import "./MediaList.css";
import MediaCard from "../MediaCard/MediaCard";

const MediaList = ({ title, items }) => {
  return (
    <section className="media-list-container">
      <div className="list-header">
        <h2 className="list-title">{title}</h2>
        <div className="list-controls">
            <button className="control-btn">{"<"}</button>
            <button className="control-btn">{">"}</button>
        </div>
      </div>
      <div className="media-grid">
        {items.map((item, index) => (
          <MediaCard 
            key={index} 
            title={item.title} 
            cover={item.cover} 
            rating={item.rating}
            type={item.type} 
          />
        ))}
      </div>
    </section>
  );
};

export default MediaList;