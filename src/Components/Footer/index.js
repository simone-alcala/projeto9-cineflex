import './style.css';

function Footer(props){
  const { title, posterURL } = props;
  return (
    <footer className='Footer'>
      <div className='info'>
        <div> <img src={posterURL} alt={title} /> </div>
        {title} 
      </div>
    </footer>
  );
}

export default Footer;