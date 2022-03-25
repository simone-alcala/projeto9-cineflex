import { Link } from "react-router-dom";

import './style.css';

function Time(props){
  const {id, time} = props;

  return (
    <Link to={`/sessao/${id}`}>
      <div key={id} className='Time'>
          {time}
      </div>
    </Link>
  );
}

export default Time;