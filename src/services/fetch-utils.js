import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();

}

// signs an new user in and puts an auth token in local storage in the browser
export async function signUp(email, password){
  const resp = await client.auth.signUp({ email, password });
  
  return resp.user;
}

// signs an existing user in and puts an auth token in local storage in the browser
export async function signIn(email, password){
  const resp = await client.auth.signIn({ email, password });

  return resp.user;
}

// removes the token from local storage and redirects the user home
export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function searchMovies(query) {
  const resp = await fetch(`/.netlify/functions/movies-endpoint?searchQuery=${query}`);

  const json = await resp.json();


  return json.data.results;
}

export async function getWatchList() {
  // console.log('pillow');
  const resp = await client.
    from('watchlist')
    .select()
    .order('id');

  return checkError(resp);
}

export async function addToWatchList(movie) {
  const resp = await client.
    from('watchlist')
    .insert(movie);

  return checkError(resp);
}

export async function watchMovie(id) {
  const resp = await client.
    from('watchlist')
    .update({ watched: true })
    .match({ id })
    .single();

  return checkError(resp);
}
