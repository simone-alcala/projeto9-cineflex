import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Date from './../Date';
import Footer from './../Footer';
import Loading from './../Loading';

import './style.css';

function Schedule(){

  const { movieId } = useParams();
  
  const [schedule, setSchedule] = useState({});

  useEffect(()=>{
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);
    promise.then(response => {setSchedule(response.data)});
    promise.catch(error => {console.log(error.response)});
  },[]);


  return (  

    Object.values(schedule).length > 0 ?
      <div className='Schedule'>
        <div className='title'> Selecione o horário </div>
        {schedule.days.map(({id, weekday, date, showtimes}) => 
          <Date id={id} weekday={weekday} date={date} showtimes={showtimes}  /> )}
        <Footer title={schedule.title} posterURL={schedule.posterURL} />       
      </div>
    : <Loading />
  );
}

export default Schedule;