// import './App.css';
import First from "./firstsection/first";
import About from './AboutMe/About'
import Skills from './Skills/skills'
import Portfolio from "./portfolio/portfolio";
import Footer from './Footer/footer';

function App() {
  return (
    <div className="App container-fluid m-0">
      
      <First/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Footer/>

    </div>
  );
}

export default App;
