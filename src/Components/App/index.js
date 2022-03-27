import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './../Header';
import Library from './../Library';
import Schedule from '../Schedule';
import Seats from '../Seats';
import Sucesso from '../Sucesso';

import './style.css';

function App(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Library /> } />
        <Route path='/filme/:movieId' element={ <Schedule /> } />
        <Route path='/sessao/:sessionId' element={ <Seats /> } />
        <Route path='/sucesso' element={ <Sucesso /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
