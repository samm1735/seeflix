import { getTrendingMovies } from '../services/tmdb';
import { transformMovies } from '../utils/tmdbTransformer';




const fallbackMovies = [
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "cover": "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    "rating": 8.71,
    "type": "movie"
  },
  {
    "id": 2,
    "title": "The Godfather",
    "cover": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "rating": 8.68,
    "type": "movie"
  },
  {
    "id": 3,
    "title": "The Godfather Part II",
    "cover": "https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
    "rating": 8.57,
    "type": "movie"
  },
  {
    "id": 4,
    "title": "Schindler's List",
    "cover": "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    "rating": 8.56,
    "type": "movie"
  },
  {
    "id": 5,
    "title": "12 Angry Men",
    "cover": "https://image.tmdb.org/t/p/w500/2QXLVh32JKaWTjFJU3n8aIxRK9P.jpg",
    "rating": 8.55,
    "type": "movie"
  },
  {
    "id": 6,
    "title": "¿Quieres ser mi hijo?",
    "cover": "https://image.tmdb.org/t/p/w500/9GuvODahvuFqdhuZ16aBLR4UJoP.jpg",
    "rating": 8.53,
    "type": "movie"
  },
  {
    "id": 7,
    "title": "Spirited Away",
    "cover": "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "rating": 8.53,
    "type": "movie"
  },
  {
    "id": 8,
    "title": "The Dark Knight",
    "cover": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "rating": 8.52,
    "type": "movie"
  },
  {
    "id": 9,
    "title": "Dilwale Dulhania Le Jayenge",
    "cover": "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    "rating": 8.51,
    "type": "movie"
  },
  {
    "id": 10,
    "title": "The Green Mile",
    "cover": "https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
    "rating": 8.50,
    "type": "movie"
  },
  {
    "id": 11,
    "title": "The Lord of the Rings: The Return of the King",
    "cover": "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    "rating": 8.49,
    "type": "movie"
  },
  {
    "id": 12,
    "title": "Parasite",
    "cover": "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "rating": 8.49,
    "type": "movie"
  }
];


export let trending_movies = [];


export const fetchTrendingMovies = async () => {
  try {
    const movies = await getTrendingMovies();
    trending_movies = transformMovies(movies.slice(0, 20));
    return trending_movies;
  } catch (error) {
    console.error('❌ Failed to fetch trending movies, using fallback data:', error);
    console.log('📦 Using fallback movies');
    trending_movies = fallbackMovies;
    return fallbackMovies;
  }
};


trending_movies = fallbackMovies;
