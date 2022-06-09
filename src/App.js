import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Skill from './components/Skill/Skill';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Portfolio></Portfolio>
      <Skill></Skill>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
