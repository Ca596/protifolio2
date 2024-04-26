import logo from './logo.svg';
import './App.css';
import Navbar from './Componentes/Section/NavBar';
import Presentation from './Componentes/Section/Presentation';
import Skills from './Componentes/Section/Skills';
import Project from './Componentes/Section/Project';
import Footer from './Componentes/Section/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
