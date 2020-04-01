import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebookSquare, faTwitterSquare, faGithubSquare, faFacebookF, faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faEnvelope, faDownload, faAt } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <section className="icons">
        <a href="https://twitter.com/tairemadailey" target="_blank" rel="noopener noreferrer" className="links"><FontAwesomeIcon icon={faTwitter} size="lg" className="svg"/></a>
        <a href="https://www.facebook.com/tairemadailey" target="_blank" rel="noopener noreferrer" className="links"><FontAwesomeIcon icon={faFacebookF} size="lg" className="svg" /></a>
        <a href="https://www.linkedin.com/in/tairema" target="_blank" rel="noopener noreferrer" className="links"><FontAwesomeIcon icon={faLinkedinIn} size="lg" className="svg" /></a>
        <a href="https://github.com/tairemad" target="_blank" rel="noopener noreferrer" className="links"><FontAwesomeIcon icon={faGithub} size="lg" className="svg" /></a>
        <a href="mailto:tai@tairemadailey.com" target="_blank" rel="noopener noreferrer" className="links"><FontAwesomeIcon icon={faAt} size="lg" className="svg" /></a>
      </section>
      <section className="container">
        <section className="name">
          <h1>Tairema Dailey</h1>
          <h3>Front-End Developer</h3>
        </section>
    </section>
  </React.Fragment>
  );
}

export default App;
