import { useState } from 'react';

import './style.css';

function Seat(props){
  const {id, name, isAvailable, isSelected , selectedSeats , click} = props;

  const [selected, setSelected] = useState(false);

  function setSeatProperties(status, seatId, seatName){
    setSelected(status);
    selectedSeats({id: seatId.id,name: seatName.name, });
  }

  return (

    click ? 

    (selected || isSelected ?
      <div key={name} className='Seat selected' onClick={()=>setSeatProperties(!selected, {id},{name})}>{name}</div>  : ( isAvailable ?

      <div key={name} className='Seat available'  onClick={()=> setSeatProperties(true, {id},{name})  }>{name}</div> : 
      
      <div key={name} className='Seat unavailable' onClick={()=> alert('Esse assento não está disponível')}>{name}</div> ))

    : 
        (selected || isSelected ?
        <div key={'selected'} className='Seat selected' ></div>  : ( isAvailable ?

        <div key={'available'} className='Seat available'  ></div> : 
        
        <div key={'unavailable'} className='Seat unavailable' ></div> ))
  );
}

export default Seat;