import { useNavigate } from 'react-router-dom';
import notFoundImg from './assets/404.jpg';
import { Wrapper, Image } from './NotFound.styled';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate('/')}>
      <Image src={notFoundImg} alt="404 - Page not found" />
    </Wrapper>
  );
}

export default NotFound;
