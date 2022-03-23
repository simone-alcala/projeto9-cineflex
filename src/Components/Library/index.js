import Movie from './../Movie'

import './style.css';

function Library(){
  return (
    <div className='Library'>
      <div className='title'>Selecione o filme</div>
      <div className='movies'>
        <Movie />
      </div>
    </div>
  );
}

export default Library;