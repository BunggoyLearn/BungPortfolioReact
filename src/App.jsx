import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Display from './components/Display';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="Porfolio">
      <Header/>
      <Routes>
        <Route index path='/' element={< Home />}/>
        <Route path='/About' element={<AboutMe/>}/>
        <Route path='/Display' element={<Display/>}/>
        <Route path='/Contact' element={<ContactMe/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
