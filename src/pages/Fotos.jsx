import React from 'react';
import GaleriaFotos from '../components/GaleriaFotos';
import styled from 'styled-components';

const Container = styled.section`
  margin-top: 0px;
  background: #e8ebed;
  box-shadow: 9px 9px 18px #c5c8c9, -9px 4px 18px #ffffff;
`;
const Fotos = () => {
  return (
    <Container className="paginas">
      <GaleriaFotos />
    </Container>
  );
};

export default Fotos;
