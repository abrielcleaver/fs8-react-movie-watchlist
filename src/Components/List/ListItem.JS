import React from 'react';
import { watchMovie } from '../../services/fetch-utils';

export default function ListItem({ movie, refreshWatchList }) {
  async function handleClick() {
      // on click, change this movie from not watched to watched
    await watchMovie(movie.id);

    await refreshWatchList();
  }

  return (
    <div 
      onClick={handleClick}
      className='movie-item watchlist-item'>
      <h1> {movie.watched ? '✅' : '👀'}</h1>
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <em>{movie.description}</em>
      <p>
        <img src={movie.poster ? `https://image.tmdb.org/t/p/original${movie.poster}` : 'https://www.placebear.com/200/300'} />
      </p>
    </div>
  );
}
