import React from 'react';
import './Portfolio.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Portfolio() {
  // If you want to apply styles directly, you can add styles to myStyle
  const myStyle = {

  };

  return (
    <div style={myStyle}>
      <div className="container">




        <div className="box">
          <h1>I’m Rubina <span>Adhikari(Hello)</span></h1>
          <p>
            I am a web developer with experience in HTML, CSS, and JavaScript. I enjoy creating
            beautiful and responsive websites.
          </p>
          <div class="About">
            <AnchorLink offset={100} href="#contact">Hire me</AnchorLink>
          </div>
          <section id="AboutMe">
          </section>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
