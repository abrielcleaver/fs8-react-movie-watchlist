import React, { useState } from 'react';
import MovieList from '../Components/Movie/MovieList';
import { searchMovies } from '../services/fetch-utils';

export default function SearchPage() {

  // call state 
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>SearchPage
      <form>
        <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        <button>Search</button>
      </form>
      <section>
        Is this what you&apos;re looking for? If not, try searching again!
        Your results:
        <MovieList />
      </section>
    </div>
  );
}
