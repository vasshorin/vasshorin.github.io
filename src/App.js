import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import about from './components/about/About';
import Skills from './components/skills/Skills';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <>
    <Header />
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Portfolio />
    </main>
    </>
  );
}

export default App;
