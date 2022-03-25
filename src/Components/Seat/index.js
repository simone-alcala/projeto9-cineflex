import { useState } from 'react';

import './style.css';

function Seat(props){
  const {id, name, isAvailable, isSelected , selectedSeats } = props;

  const [selected, setSelected] = useState(false);

  function setSeatProperties(status, seat){
    setSelected(status);
    selectedSeats(seat.name);
  }

  return (
    selected || isSelected ?
      <div key={id} className='Seat selected' onClick={()=>setSeatProperties(!selected,{name})}>{name}</div>  : ( isAvailable ?

      <div key={id} className='Seat available'  onClick={()=> setSeatProperties(true,{name})  }>{name}</div> : 
      
      <div key={id} className='Seat unavailable' onClick={()=> alert('Esse assento não está disponível')}>{name}</div> )
      
  );
}

export default Seat;