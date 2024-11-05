
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// {} obyektin parcalanmasi
import { Fragment } from 'react';

//router
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import FeedbackForm from './components/FeedbackForm';




function App() {
  return (
<Fragment>
  <BrowserRouter>
<Navbar/>
  <Routes>
    
<Route path='/' element={<Home/>}/> 

</Routes>
<FeedbackForm/>
</BrowserRouter>
</Fragment>
  );
}

export default App;
