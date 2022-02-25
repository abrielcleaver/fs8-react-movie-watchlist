import React from 'react';
import { addToWatchList } from '../../services/fetch-utils';

export default function Movie({ 
  movie, 
  isOnWatchList, 
  refreshWatchList,
}) {
  const haveWatched = isOnWatchList(movie.id);

  async function handleClick() {
    if (!haveWatched) {
      const watchListItem = {
        title: movie.title,
        api_id: movie.id,
        description: movie.overview,
        poster_img: movie.poster_path,
        release_date: movie.release_date,
      };

      await addToWatchList(watchListItem);
      await refreshWatchList();
    }
  }
  return (
    <div onClick={handleClick}
      className={`movie-item ${haveWatched ? 'watched' : '' }`} >
      <h1>{haveWatched && '❤️'}</h1>
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
      <p>{movie.overview}</p>
      <p>
        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'https://www.placebear.com/200/300'} />
      </p>
    </div>
  );
}
