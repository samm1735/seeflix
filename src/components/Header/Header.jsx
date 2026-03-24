import MediaList from "../MediaList/MediaList";

import "./header.css";

import {top_shows} from "../../data/top_shows";
import {trending_movies} from "../../data/trending_movies";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">

        <section className="hero">
            <div className="top">
                <h1>Welcome to Seeflix</h1>
                <p>Your ultimate destination for streaming movies and TV shows.</p>
                <Link to="/media" className="cta-button">Browse Media</Link>
            </div>
            <div className="lists">
                <MediaList title={"Trending Movies"} items={trending_movies}/>
                <MediaList title={"Top TV Shows"} items={top_shows}/>
            </div>
        </section>
      
    </header>
  )
}

export default Header
