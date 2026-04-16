import { TMDB_IMAGE_BASE_URL } from './Constants';

export const transformTVShow = (show) => {
  return {
    id: show.id,
    title: show.name,
    cover: show.poster_path ? `${TMDB_IMAGE_BASE_URL}${show.poster_path}` : null,
    rating: show.vote_average,
    type: "tv_show"
  };
};

export const transformMovie = (movie) => {
  return {
    id: movie.id,
    title: movie.title,
    cover: movie.poster_path ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}` : null,
    rating: movie.vote_average,
    type: "movie"
  };
};

export const transformTVShows = (shows) => {
  return shows.map(transformTVShow);
};

export const transformMovies = (movies) => {
  return movies.map(transformMovie);
};