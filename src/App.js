import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAt, faFile } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <>
      <section className="icons">
        <a href="https://drive.google.com/file/d/15ZZQ_VZlnwnZQEvidA31cCIzNl2z9gWF/view?usp=sharing" target="_blank" tabindex="1" rel="noopener noreferrer" className="links"><FontAwesomeIcon icon={faFile} size="lg" className="svg" /></a>
        <a href="https://www.linkedin.com/in/tairema" target="_blank" tabindex="2" rel="noopener noreferrer" className="links"><FontAwesomeIcon icon={faLinkedinIn} size="lg" className="svg" /></a>
        <a href="https://github.com/tairemad" target="_blank" tabindex="3" rel="noopener noreferrer" className="links"><FontAwesomeIcon icon={faGithub} size="lg" className="svg" /></a>
        <a href="mailto:tai@tairemadailey.com" target="_blank" tabindex="4" rel="noopener noreferrer" className="links"><FontAwesomeIcon icon={faAt} size="lg" className="svg" /></a>
      </section>
      <section className="container">
        <section className="name">
          <h1>Tairema Dailey</h1>
          <h3>Front-End Software Engineer</h3>
        </section>
        <section className="status">
          <p><span className="pulse"></span> Available for Freelance Work Only</p>
        </section>
      </section>
  </>
  );
}

export default App;
