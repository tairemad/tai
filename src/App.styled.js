import { createGlobalStyle, styled, keyframes } from 'styled-components';
import bg from './assets/bg.png';

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const pulse = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(67, 236, 29, 0.4); }
  70%  { box-shadow: 0 0 0 10px rgba(67, 236, 29, 0); }
  100% { box-shadow: 0 0 0 0 rgba(67, 236, 29, 0); }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-weight: 200;
    letter-spacing: 2px;
    background: url(${bg}) no-repeat center center;
    background-size: cover;
    background-color: #1c1c1c;
  }
`;

export const Icons = styled.section`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
  gap: 8px;
`;

export const Link = styled.a`
  color: #fff;

  &:hover {
    color: #ffd200;
  }

  svg {
    display: block;
  }
`;

export const Container = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.section`
  padding: 25px 15px;
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-family: 'Leckerli One', cursive;
    font-size: 9.125vw;
    color: #ffd200;
    text-shadow: 2px 2px #fff;
    margin: 20px 0 0;
    animation: ${fadeInDown} 2s both 1s;
  }

  h3 {
    margin: 0;
    color: #000;
    font-family: 'PT Mono', monospace;
    display: inline-flex;
    font-size: 4vw;
    text-shadow: 4px 2px #ffd200;
    animation: ${fadeInUp} 3s both 2s;
  }
`;

export const Status = styled.section`
  display: flex;
  justify-content: center;

  p {
    margin: 0;
    color: #fff;
    display: flex;
    align-items: center;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 3px;
  }
`;

export const Pulse = styled.span`
  display: inline-flex;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #43ec1d;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(67, 236, 29, 0.4);
  animation: ${pulse} 2s infinite;
  margin-right: 5px;

  &:hover {
    animation: none;
  }
`;
