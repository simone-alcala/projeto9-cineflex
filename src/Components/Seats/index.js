import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Seat from './../Seat';
import Customer from './../Customer';
import Footer from './../Footer';
import Loading from './../Loading';

import './style.css';

function Seats(){
  
  const { sessionId } = useParams();
  const [seats, setSeats] = useState({});

    const [selectedSeats, setSelectedSeats] = useState([]);

  function getSelectedSeats(seat){
    setSelectedSeats([...selectedSeats,seat]);
  }
    
  useEffect(()=>{
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);
    promise.then(response => {setSeats(response.data)});
    promise.catch(error => {console.log(error.response)});
  },[]);

  return (
    Object.values(seats).length > 0 ?

      <div className='Seats'>
        <div className='title'>Selecione o(s) assento(s)</div>
        <div className='options'> 
          { seats.seats.map(({id,name,isAvailable})=> 
            <Seat id={id} name={name} isAvailable={isAvailable} isSelected={false} selectedSeats={getSelectedSeats} /> ) }         
        </div>
        <div className='labels'>
          <div><Seat isSelected={true} /><p>Selecionado</p></div>
          <div><Seat isAvailable={true} /><p>Disponível</p></div>
          <div><Seat isAvailable={false} /><p>Indisponível</p></div>
        </div>

        {selectedSeats.length > 0 ? selectedSeats.map((seat)=><Customer seat={seat}/> ) : <Customer />  }

        <div className='buy'>Reservar assento(s)</div>

        <Footer title={seats.movie.title} posterURL={seats.movie.posterURL} />  

      </div>
    : <Loading />
  );
}

export default Seats;