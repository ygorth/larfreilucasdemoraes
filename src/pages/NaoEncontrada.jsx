import React from 'react';
import error from '../assets/notfound.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1300px;
display: grid;
place-items: center;
  img {
    justify-self: center;
    max-width: 600px;
  }


  @media (max-width: 600px) {
    img {
      max-width: 200px;
    }
  }
`;

const NaoEncontrada = () => {
  return (
    <Container>
      <img src={error} alt="pagina não encontrada" />
      <Link to='/' className='link'>Voltar</Link>
    </Container>
  );
};

export default NaoEncontrada;
