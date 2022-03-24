import axios from 'axios';
import { useState, useEffect } from 'react';


import Movie from './../Movie';
import Loading from './../Loading';

import './style.css';

function Library(){

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
    promise.then(response =>{setMovies(response.data)});
    promise.catch(error =>{console.log(error.response)});
  },[]);

  return (
    movies.length > 0 ?
      <div className='Library'>
        <div className='title'>Selecione o filme</div>
        <div className='movies'>
          { movies.map( ({id, title, posterURL, overview, releaseDate }) =>  
            <Movie id={id} title={title} posterURL={posterURL} overview={overview} releaseDate={releaseDate} />  )}
        </div>
      </div> 
    : <Loading />
  );
}

export default Library;