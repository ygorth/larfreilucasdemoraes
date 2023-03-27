import React from 'react';
import styled from 'styled-components';
import comida from '../assets/comida.svg';
import frauda from '../assets/frauda.svg';
import roupa from '../assets/roupa.svg';
import medicamento from '../assets/medicamento.svg';

const Container = styled.div`
  padding-top: 20px;
  display: grid;
  place-content: center;
  place-items: center;

  h2 {
    text-align: center;
  }
`;

const Items = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  justify-self: center;
  place-content: center;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 0px 30px;
`;

const Card = styled.div`
  width: 250px;
  height: 280px;
  border-radius: 19px;
  background: #a7c4d2;
  box-shadow: 8px 8px 16px #697b84, -8px -8px 16px #e5ffff;
  display: grid;
  place-content: center;
  place-items: center;
  color: #253d4a;

  &:nth-child(odd) {
    background: #253d4a;

    color: #a7c4d2;
  }

  img {
    padding-top: 5px;
    max-width: 100%;
    display: block;
    width: 150px;
  }
`;
const Insumos = styled.p`
  display: inline-block;
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 10px;
`;

const Title2 = styled.h3`
  font-family: 'Lobster', cursive;
  padding-bottom: 5px;
  text-align: center;
  font-size: 2rem;
`;

const ItemsConsumidos = () => {
  return (
    <Container>
      <Title2>Nossos Custos Mensais</Title2>
      <Items>
        <Card>
          <img src={comida} alt="comida" /> 
          <Title2>3 toneladas</Title2>
          <Insumos>
            de alimentos <br></br> comsumidos por mês
          </Insumos>{' '}
        </Card>
        <Card>
          <img src={roupa} alt="comida" />
          <Title2>15 toneladas</Title2>
          <Insumos>
            de roupas <br></br>lavadas por mês
          </Insumos>
        </Card>
        <Card>
          <img src={medicamento} alt="comida" />
          <Title2>40 mil</Title2>
          <Insumos>
            reais em medicamentos/<br></br>insumos por mês
          </Insumos>
        </Card>
        <Card>
          <img src={frauda} alt="comida" />
          <h5>300</h5>
          <Insumos>
            fraudas descartáveis<br></br> por dia
          </Insumos>
        </Card>
      </Items>
      <p>*Valores aproximados</p>
    </Container>
  );
};

export default ItemsConsumidos;
