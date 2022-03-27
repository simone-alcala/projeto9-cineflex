import {useLocation,Link} from 'react-router-dom';

import './style.css';

function Sucesso(){
  const location = useLocation();
  return (
    
    <>
      <div className='Sucesso'>

        <div className='title'><strong>Pedido feito com sucesso!</strong></div>

        <div className='subtitle'><strong>Filme e sessão</strong></div>
        <div className='info'>{location.state.movie}</div>
        <div className='info'>{location.state.weekday} {location.state.date}</div>
        
        <div className='subtitle'><strong>Ingressos</strong></div>
        {location.state.seats.map( (seat) =>  <div className='info'>Assento {seat} </div> )}
        
        <div className='subtitle'><strong>Comprador</strong></div>
        <div className='info'>Nome: {location.state.customer.nome} </div>
        <div className='info'>CPF: {location.state.customer.cpf}</div>
      </div>
      <div className='button-home'>   
        <Link to={'/'}><div className='home'>Voltar para Home</div> </Link>
      </div>
    </>
  );
}

export default Sucesso;
