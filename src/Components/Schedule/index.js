import Date from './../Date';
import Footer from './../Footer';

import './style.css';

function Schedule(){
  return (
    <div className='Schedule'>
      <div className='title'> Selecione o horário </div>
      <Date />
      <Footer />
    </div>
  );
}

export default Schedule;