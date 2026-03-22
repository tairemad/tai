import { Routes, Route } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ArticleIcon from '@mui/icons-material/Article';
import { GlobalStyle, Icons, Link, Container, Name, Status, Pulse } from './App.styled';
import NotFound from './NotFound';

function Home() {
  return (
    <>
      <Icons>
        <Link href="https://drive.google.com/file/d/15ZZQ_VZlnwnZQEvidA31cCIzNl2z9gWF/view?usp=sharing" target="_blank" tabIndex="1" rel="noopener noreferrer"><ArticleIcon /></Link>
        <Link href="https://www.linkedin.com/in/tairema" target="_blank" tabIndex="2" rel="noopener noreferrer"><LinkedInIcon /></Link>
        <Link href="https://github.com/tairemad" target="_blank" tabIndex="3" rel="noopener noreferrer"><GitHubIcon /></Link>
        <Link href="mailto:tai@tairemadailey.com" target="_blank" tabIndex="4" rel="noopener noreferrer"><AlternateEmailIcon /></Link>
      </Icons>
      <Container>
        <Name>
          <h1>Tairema Dailey</h1>
          <h3>Front-End Software Engineer</h3>
        </Name>
        <Status>
          <p><Pulse /> Available for Freelance Work Only</p>
        </Status>
      </Container>
    </>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
