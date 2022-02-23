import React from 'react';
import { useLocation } from 'react-router-dom';
import Movie from './Movie';
import ListItem from '../List/ListItem';

// on the search page, show a movie.
// on the listpage page, show a watchlist item
export default function MovieList({ 
  movies, 
  refreshWatchlist, 
  isOnWatchList,
}) {
  const location = useLocation();

  return (
    <div className='movie-list'>
      {
        movies.map((movie, i) => location.pathname.includes('search') 
          ? <Movie 
            key={movie.title + i} 
            movie={movie} 
            isOnWatchList={isOnWatchList} 
            refreshWatchList={refreshWatchlist} /> 
          : <ListItem 
            key={movie.title + i} 
            refreshWatchlist={refreshWatchlist}
            movie={movie} />
        )}
    </div>
  );
}