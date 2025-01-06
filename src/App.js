import './App.css';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import About from './About';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function App() {
  return (
    <>
      {/* Navigation bar */}
      <nav >
        
        <div className="right">
          {/* Fixed offset value */}
          <AnchorLink offset={100} href="#home">Home</AnchorLink>
          <AnchorLink offset={100} href="#about">About</AnchorLink>
          <AnchorLink offset={100} href="#Resume">Resume</AnchorLink>
          <AnchorLink offset={100} href="#Contact">Contact</AnchorLink>
        </div>
      </nav>

      {/* Sections */}
      <section id="home">
        <Portfolio />
      </section>

      <section id="Resume">
        <Resume />
      </section>

      <section id="About">
        <About />
      </section>

      <section id="Contact">
          <Contact />
        </section>
    </>

  );
}

export default App;

