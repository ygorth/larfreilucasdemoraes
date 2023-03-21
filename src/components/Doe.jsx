import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../styles/geral.css';
import pix from '../assets/pix.svg';

export const Section = styled.section`
  padding: 10px;
  background: transparent;
  border-radius: 5px;
  color: #253d4a;
  padding-top: 30px;
  margin-right: 10px;

  ul li p {
    max-width: 40ch;
    background: rgba(0, 0, 0, 0.1);
    margin-bottom: 5px;
    border-radius: 3px;
    padding: 5px;
  }
  div {
  }
  h3 {
    margin-bottom: 5px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    place-content: center;
    place-items: center;
    flex-wrap: wrap;
    padding: 0px 10px;
  }
  li {
    border-radius: 16px;
    background: #e8ebed;
    box-shadow: 12px 12px 24px #ced1d3, -12px -12px 24px #ffffff;
    padding: 15px;
    list-style: none;
    width: 300px;
    height: min-content;
    justify-self: center;
    text-align: center;
  }

  li a {
    margin: 10px;
  }
`;

const Pix = styled.div`
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 20px;
  border-radius: 3px;
  place-items: center;
  justify-content: center;
  padding: 5px;

  img {
    width: 30px;
  }
`;
const Buttons = styled.div`

display: flex;
place-content: center;


`


const Doe = () => {
  return (
    <Section>
      <ul className="lista-doacoes">
        <li>
          <h3>Doações Urgentes!</h3>
          <p>Alimentos</p>
          <p>Fraldas geriátricas (M e G)</p>
          <p>Produtos de Limpeza</p>
          <p> Medicamentos</p>
          <h3> Hórarios de Visitas</h3>
          <p>
            Diariamente, inclusive sábados e domingos de 09h às 17h. Outros
            Horários, fale com Frei Florisvaldo em (71) 3207.7033.
          </p>
        </li>
        <li>
          <h3>Como Doar?</h3>
          <p>Para doações em dinheiro realizar depósito em:</p>
          <p> Caixa Econômica Federal</p>
          <p> Agência: 0991</p>
          <p> Operador: 003</p>
          <p> Conta Corrente: 1577-0</p>
          <Pix>
            <img src={pix} />
            <span>
              {' '}
              CNPJ | PIX:
              <br />
              14.411.214/0001-65
            </span>
          </Pix>
          <Buttons>
            <Link to="/doacoes" className="link ">
              Mais informações
            </Link>
            {/* <Link to="/doacoes" className="link ">
            ↴
               PayPal
            </Link> */}
          </Buttons>
        </li>
      </ul>
    </Section>
  );
};

export default Doe;
