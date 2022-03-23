import './style.css';


function Customer(){
  return (
    <div className='Customer'>

      <label >Nome do comprador:</label>
      <input placeholder='Digite seu nome...'/>

      <label >CPF do comprador:</label>
      <input placeholder='Digite seu CPF...'/>

    </div>
  );
}

export default Customer;
