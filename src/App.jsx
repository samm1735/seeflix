import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Media from "./pages/Media";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { fetchTopShows } from "./data/top_shows";
import { fetchTrendingMovies } from "./data/trending_movies";

function App() {

  const [, forceUpdate] = useState({});

  useEffect(() => {
    Promise.all([
      fetchTopShows(),
      fetchTrendingMovies()
    ]).then(() => {
      forceUpdate({});
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;