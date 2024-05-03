import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/home';
import Innhold from './pages/innhold';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Innhold/>} />
          <Route path='/home' element={<Home/>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
