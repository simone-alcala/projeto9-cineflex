import './style.css';


function Customer(props){
  const {seat} = props;
  console.log(seat);
  return (
    <div className='Customer'>

      <div >Dados do comprador do assento {seat} </div>
      
      <label >Nome do comprador:</label>
      <input placeholder='Digite seu nome...'/>

      <label >CPF do comprador:</label>
      <input placeholder='Digite seu CPF...'/>

    </div>
  );
}

export default Customer;
