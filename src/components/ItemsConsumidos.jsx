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

`;

const Items = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
  justify-self: center;
  place-content: center;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 0px 30px;

  div {
    width: 250px;
    height: 270px;
    border-radius: 19px;
    background: #a7c4d2;
    box-shadow: 8px 8px 16px #697b84, -8px -8px 16px #e5ffff;
    display: grid;
    justify-content: center;
    place-items: center;
    color: #253d4a;
    p {
      text-align: center;
      font-size: 1.2rem;
      padding-bottom: 5px;
    }

    &:nth-child(odd) {
      background: #253d4a;
      color: #a7c4d2;
    }
  }

  img {
    padding-top: 5px;
    max-width: 100%;
    display: block;
    width: 150px;
  }
`;
const Insumos = styled.p``;

const ItemsConsumidos = () => {
  return (
    <Container>
      <h2>Nossos Custos Mensais</h2>
      <Items>
        <div>
          <img src={comida} alt="comida" /> <h2>3 toneladas</h2>
          <Insumos>
            de alimentos <br></br> comsumidos por mês
          </Insumos>{' '}
        </div>
        <div>
          <img src={roupa} alt="comida" />
          <h2>15 toneladas</h2>
          <Insumos>
            de roupas <br></br>lavadas por mês
          </Insumos>
        </div>
        <div>
          <img src={medicamento} alt="comida" />
          <h2>40 mil</h2>
          <Insumos>
            reais em medicamentos/<br></br>insumos por mês
          </Insumos>
        </div>
        <div>
          <img src={frauda} alt="comida" />
          <h5>300</h5>
          <Insumos>
            fraudas descartáveis<br></br> por dia
          </Insumos>
        </div>
      </Items>
    </Container>
  );
};

export default ItemsConsumidos;
