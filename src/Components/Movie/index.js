import { Link } from 'react-router-dom';

import './style.css';

function Movie(props){

  const {id, title, posterURL, overview, releaseDate } = props;
  
  return (
    <Link to={`/filme/${id}`}>
      <div key={id} className='Movie'>
        <abbr title={`${overview} \n Released ${new Date(releaseDate).toLocaleString('pt-BR',{dateStyle: 'short'})}`}>
          <img src={posterURL} alt={title}/>
        </abbr>
      </div>
    </Link>
  );
}

export default Movie;