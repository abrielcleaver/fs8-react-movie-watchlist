const fetch = require('node-fetch');
require('dotenv').config();


exports.handler = async (e) => {  
  const searchQuery = e.queryStringParameters.searchQuery;

  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`;
  try {
    const resp = await fetch(URL);
    const data = await resp.json();
    const json = JSON.stringify({ data });
    
    return { 
      statusCode: 200, 
      body: json
    };
  } catch (error) {
    // console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
