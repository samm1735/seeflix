/* eslint-disable react-hooks/purity */

import "./media.css";

import MediaList from "../components/MediaList/MediaList";
import { top_shows } from "../data/top_shows";
import { trending_movies } from "../data/trending_movies";

const Media = () => {
 
  //  const allMedia = [...top_shows, ...trending_movies];
  const allMedia = [...top_shows, ...trending_movies]
  .sort(() => Math.random() - 0.5);

  return (
    <div className="media-page">
      <h1>Browse Our Catalogue</h1>
      <MediaList title="All Media" items={allMedia} />
    </div>
  );
};

export default Media;