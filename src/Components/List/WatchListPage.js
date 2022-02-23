import React, { useState } from 'react';
import { getWatchList } from '../../services/fetch-utils';
import MovieList from '../Movie/MovieList';

export default function WatchListPage() {
  const [movies, setMovies] = useState([]);

  async function refreshWatchList() {
    const myWatchList = await getWatchList();
    
    setMovies(myWatchList);
  }
  return (
    <div>
        Watch list Page
      <div>
        <h2>My Movie Watch List</h2>
        <MovieList movies={movies} refreshWatchList={refreshWatchList} />
      </div>
    </div>
  );
}
