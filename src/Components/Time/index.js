import './style.css';

function Time(props){
  const {id, time} = props;
  return (
    <div key={id} className='Time'>
        {time}
    </div>
  );
}

export default Time;