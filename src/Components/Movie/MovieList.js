import React from 'react';
import { useLocation } from 'react-router-dom';
import Movie from './Movie';
import ListItem from '../List/ListItem.js';

// on the SearchPage, show a movie.
// on the WatchListPage, show a watchList item

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