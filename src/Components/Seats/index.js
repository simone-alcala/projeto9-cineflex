
import Seat from './../Seat';
import Customer from './../Customer';
import Footer from './../Footer';

import './style.css';

function Seats(){
  return (
    <div className='Seats'>
      <div className='title'>Selecione o(s) assento(s)</div>
      <div className='options'> <Seat /> </div>
      <div className='labels'>
        <div><Seat /><p>Selecionado</p></div>
        <div><Seat /><p>Disponível</p></div>
        <div><Seat /><p>Indisponível</p></div>
      </div>

      <Customer />

      <div className='buy'>Reservar assento(s)</div>

      <Footer />  
    </div>
  );
}

export default Seats;