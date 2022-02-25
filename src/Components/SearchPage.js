import React, { useState, useEffect } from 'react';
import MovieList from '../Components/Movie/MovieList';
import { getWatchList, searchMovies } from '../services/fetch-utils';

export default function SearchPage() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [watchlist, setWatchlist] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
  
    const movies = await searchMovies(searchQuery);

    setResults(movies);
  }

  async function refreshWatchList() {
    const myWatchList = await getWatchList();
    
    setWatchlist(myWatchList);
  }

  useEffect(() => {
    refreshWatchList();
  
  }, []);
  
  function isOnWatchList(api_id) {
    const match = watchlist.find(item => Number(item.api_id) === Number(api_id));

    return Boolean(match);
  }
  

  return (
    <div>SearchPage
      <form onSubmit={handleSearch}>
        <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        <button>Search</button>
      </form>
      <section>
        Is this what you&apos;re looking for? If not, try searching again!
       
        <MovieList movies={results} isOnWatchList={isOnWatchList} refreshWatchList={refreshWatchList} />
      </section>
    </div>
  );
}
