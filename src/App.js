import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import about from './components/about/About';
import Skills from './components/skills/Skills';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
    <Header />
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
    </>
  );
}

export default App;
