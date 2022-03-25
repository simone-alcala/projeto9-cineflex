import Time from './../Time'

import './style.css';

function Date(props){
  const {id, weekday, date, showtimes } = props;
  
  return (
    <div key={id} className='Date'>
      <div className='day'> 
        {`${weekday} - ${date}`}
      </div>
      <div className='time'>
        {showtimes.map(({id, name})=> <Time id={id} time={name} />) }
      </div>
    </div>
  );
}

export default Date;