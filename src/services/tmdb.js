import { TMDB_API_KEY, TMDB_BASE_URL } from '../utils/Constants';


const fetchFromTMDB = async (endpoint, params = {}) => {
    
  if (!TMDB_API_KEY) {
    console.error('❌ TMDB_API_KEY is missing or undefined!');
    throw new Error('TMDB_API_KEY is required');
  }
  
  const queryParams = new URLSearchParams({
    api_key: TMDB_API_KEY,
    ...params
  });
  
  const url = `${TMDB_BASE_URL}${endpoint}?${queryParams}`;
  
  try {
    const response = await fetch(url);
     
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API Error Response:', errorText);
      throw new Error(`TMDB API error: ${response.status} - ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Fetch error:', error.message);
    throw error;
  }
};

export const getTopRatedTVShows = async (page = 1) => {
  
  const data = await fetchFromTMDB('/tv/top_rated', { page });
  
  return data.results;
};

export const getTrendingMovies = async (page = 1) => {
  const data = await fetchFromTMDB('/trending/movie/week', { page });
  return data.results;
};

// Alternative: Get top rated movies
export const getTopRatedMovies = async (page = 1) => {
  const data = await fetchFromTMDB('/movie/top_rated', { page });
  return data.results;
};