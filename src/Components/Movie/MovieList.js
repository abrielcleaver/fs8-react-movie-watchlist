import React from 'react';
import { useLocation } from 'react-router-dom';
import ListItem from '../List/ListItem';
import Movie from './Movie';

// on the search page, show a movie.
// on the Listpage page, show a watchList item
export default function MovieList({ 
  movies, 
  refreshWatchList, 
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
            refreshWatchList={refreshWatchList} /> 
          : <ListItem 
            key={movie.title + i} 
            refreshWatchList={refreshWatchList}
            movie={movie} />
        )}
    </div>
  );
}