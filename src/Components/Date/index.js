import Time from './../Time'

import './style.css';

function Date(props){
  const {weekday, date, showtimes} = props;
  console.log(showtimes);
  return (
    <div className='Date'>
      <div className='day'> 
        {`${weekday} - ${date}`}
      </div>
      <div className='time'>
        {showtimes.map(({id, name})=> <Time id={id} time={name}/>) }
      </div>
    </div>
  );
}

export default Date;