import React from 'react';
import styled from 'styled-components';
import '../styles/geral.css';
import { Link } from 'react-router-dom';
import comida from '../assets/comida.svg';
import frauda from '../assets/frauda.svg';
import roupa from '../assets/roupa.svg';
import medicamento from '../assets/medicamento.svg';
import { Videos } from '../components/videos';
import aspas from '../assets/aspas.svg';
import ItemsConsumidos from '../components/ItemsConsumidos';
import Doe from '../components/Doe';

const Home = styled.section`
  position: relative;
  display: grid;
  max-width: 100vw;
  margin-bottom: 50px;
  color:#253D4A ;
  h2 {
    font-family: 'Lobster', cursive;
    margin-bottom: 10px;
    font-size: 2rem;
  }

  p {
    max-width: 100ch;
    margin: 5px;
    font-weight: bold;
    text-align: start;
  }

  h5 {
    font-family: 'Lobster', cursive;
    font-size: 3rem;
  }
`;

const Destaque = styled.section`
  font-size: 1.2rem;
  font-family: 'Lobster', cursive;
`;

const Content = styled.div`

  display: grid;
  grid-template-columns: minmax(400px, 1100px) minmax(400px, 800px);
  max-width: 100vw;
  border-radius: 0px;
  background: #e8ebed;
  box-shadow: 9px 9px 18px #c5c8c9, -9px 4px 18px #ffffff;

  @media (max-width: 900px) {
    grid-template-columns:minmax(400px, 1100px);
  }

  div {
    padding: 30px 20px 20px 40px;
  }
`;
const Lin = styled.a`
  margin: 0px;
`;

const Aspas = styled.img`
  position: absolute;
  max-width: 200px;
  top: 400px;
  right: 10px;
  rotate: 175deg;
`;

const Inicio = () => {
  return (
    <>
      <Home className="paginas">
        <Content className="font">
          <div>
            <h2>Sobre o Lar </h2>
            <p>
              O Lar Frei Lucas de Moráes é uma instituição de caridade, que
              abriga idosos doentes, abandonados e totalmente dependentes de
              terceiros, e tem como objetivo assistir a essas pessoas que não
              contam mais com o apoio e o zelo das suas famílias.
            </p>
            <p>
              É uma instituição que vive, <strong>exclusivamente</strong>, da
              doação e interesse de pessoas e empresas que contribuem para a sua
              manutenção e subsistência.
            </p>
            <Destaque>
              Ajude-nos! Fome e doença não esperam... mobilize-se!
            </Destaque>
            <p>
              Sem a sua caridade o Lar não tem como cuidar destes idosos.
              <strong>Venha nos conhecer</strong>, dê-nos a alegria da sua
              visita.
            </p>
            <p>
              Nosso endereço é{' '}
              <strong>
                Rua Guilherme Marback, n° 22, Bonfim CEP 40.415-160 Salvador -
                BA{' '}
              </strong>
              ou clique{' '}
              <Lin
                href="https://www.google.com/maps/d/u/0/embed?mid=z9A4pj7GenjU.k5eqXEvnKf0s"
                target="_blank"
              >
                aqui
              </Lin>{' '}
              para ver no mapa.
            </p>

            <p>
              Os idosos do Lar Frei Lucas de Moráes retribuem de forma sincera
              através do seu agradecimento silencioso. Que Deus lhe retorne em
              bênçãos e prosperidade.
            </p>
            <h3>Área Médica</h3>
            <p>
              O Lar necessita de profissionais nas áreas de geriatria, nutrição,
              enfermagem, assistência social e fisioterapia. Quem puder dedicar
              parte do seu tempo de forma voluntária, os idosos precisam
              urgentemente destes atendimentos. Procure-nos!
            </p>
            <a className="link ">Contato</a>
            <p>
              Precisamos de contribuições em dinheiro, alimentos, roupas,
              produtos de higiene pessoal e de limpeza. Conheça a nossa
              história, as nossas necessidades. Clique em Saiba Mais para
              informações sobre doações!
            </p>

            <Link className="link " to="/doacoes">
              Saiba Mais
            </Link>
          </div>
          <article>
            <Doe />
          </article>
        </Content>
        <Aspas src={aspas} />
        <ItemsConsumidos />
        <Videos />
      </Home>
    </>
  );
};

export default Inicio;
