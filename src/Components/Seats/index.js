import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Seat from './../Seat';
import Footer from './../Footer';
import Loading from './../Loading';

import './style.css';

function Seats(){
  
  const { sessionId } = useParams();
  const [seats, setSeats] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [customer, setCustomer] = useState( {nome: '', cpf: ''});
  const navigate = useNavigate();

  function getSelectedSeats(seat){
    if (selectedSeats.some(( idSeat ) => idSeat.id === seat.id) ) {        
      setSelectedSeats( selectedSeats.filter((s) => s.id!==seat.id ) );
    } else {
      setSelectedSeats([...selectedSeats,seat]);
    }  
  }

  function validateCPF(e){
    //Peguei o código de https://medium.com/trainingcenter/mascara-de-cpf-com-react-javascript-a07719345c93
    return e.target.value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  function clearData(){
    setSeats({});
    setSelectedSeats([])
    setCustomer({});
  }
   
  function bookSeat(e){
    e.preventDefault();

    if (selectedSeats.length === 0){
      alert("Selecione o(s) assento(s)");
      return;
    }

    const seatsId = [];
    const seatsName = [];

    for (let item of selectedSeats){
      seatsId.push(item.id);
      seatsName.push(item.name);
    }

    const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', {
			ids: seatsId,
      name: customer.nome,
      cpf: customer.cpf,
		});

    promise.then((response) => {
      
      navigate('/sucesso', { state: {customer: customer, 
                                     seats: seatsName, 
                                     movie: seats.movie.title,
                                     weekday:seats.day.weekday,
                                     date:seats.day.date
                                     } }) ;
      clearData();
    });

    promise.catch((error) => {
      console.log(error);
      alert('Ocorreu um problema.')
    });

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
            <Seat id={id} name={name} isAvailable={isAvailable} isSelected={false} selectedSeats={getSelectedSeats} click={true}/> ) } 
        </div>
        <div className='labels'>
          <div><Seat isSelected={true}   click={false} /><p>Selecionado</p></div>
          <div><Seat isAvailable={true}  click={false}/><p>Disponível</p></div>
          <div><Seat isAvailable={false} click={false}/><p>Indisponível</p></div>
        </div>

        <form onSubmit={bookSeat}>

          <div className='Customer'>
      
            <label >Nome do comprador:</label>
            <input type='text' placeholder='Digite seu nome...' value={customer.nome} required
                   onChange={(e) => setCustomer({...customer,nome: e.target.value})}  />

            <label >CPF do comprador:</label>
            <input type='text' placeholder='Digite seu CPF...' value={customer.cpf} required
                   onChange={(e) => setCustomer({...customer,cpf: validateCPF(e)})}  
                   />

          </div>

          <button type='submit' className='buy'>Reservar assento(s)</button>
        
        </form>
        
        <Footer title={seats.movie.title} posterURL={seats.movie.posterURL} weekday={seats.day.weekday} date={seats.day.date}/>  

      </div>
    : <Loading />
  );
}

export default Seats;