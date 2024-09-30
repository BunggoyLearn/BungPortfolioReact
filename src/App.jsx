import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bucket-app">
      <Header/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
