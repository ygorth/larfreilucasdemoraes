import React from 'react';
import styled from 'styled-components';
import '../styles/geral.css';
import { Link } from 'react-router-dom';
import { Videos } from '../components/videos';
import ItemsConsumidos from '../components/ItemsConsumidos';
import Doe from '../components/Doe';

const Home = styled.section`
  display: grid;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
  color: #253d4a;
  font-weight: bold;
  
  h2 {
    font-family: 'Lobster', cursive;
    margin-bottom: 10px;
    font-size: 2rem;
    place-self: start;
  }

  h5 {
    font-family: 'Lobster', cursive;
    font-size: 3rem;
  }
  @media (max-width: 500px) {

  }
`;


const Text = styled.p`
  max-width: 112ch;
  margin: 5px;
  margin-top: 18px;
  font-weight: bold;
  text-align: justify;
  line-height: 1.4em;
  @media (max-width: 900px) {
    max-width: 70ch;
  }
`;
const TextDestaque = styled.aside`
  background: #a7c4d2;
  box-shadow: 9px 9px 18px #788d97, -9px -9px 18px #d6fbff;
  border-radius: 20px;
  max-width: 120ch;
  margin: 5px;
  margin-top: 18px;
  font-weight: bold;
  text-align: start;
  padding: 10px;
  line-height: 1.4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-items: center;

  h3{
    padding-top:10px;
    font-size: 1.5rem;
    white-space: nowrap;
  }
`;

const Destaque = styled.section`
  margin-top: 10px;
  display: flex;
  place-content: center;
  p {
    font-size: 1.2rem;
    font-family: 'Lobster', cursive;
  }
`;
const ContentText = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
  max-width: 100%;
`;
const Content = styled.div`
  padding-bottom: 20px;
  display: flex;
  place-content: center;
  border-radius: 0px;
  background: #e8ebed;

  box-shadow: 9px 9px 18px #c5c8c9, -9px 4px 18px #ffffff;

  @media (max-width: 900px) {
   
    flex-wrap: wrap;
    div {
      padding: 10px;
    }
  }
  @media (max-width: 400px) {
   

  }

`;
const Lin = styled.a`
  margin: 0px;
`;

const Inicio = () => {
  return (
    <>
      <Home className="paginas">
        <Content className="font">
          <ContentText>

            <h2>Sobre o Lar </h2>
            <Text>
              O Lar Frei Lucas de Moráes é uma instituição de caridade, que
              abriga idosos doentes, abandonados e totalmente dependentes de
              terceiros, e tem como objetivo assistir a essas pessoas que não
              contam mais com o apoio e o zelo das suas famílias.
            </Text>
            <Text>
              É uma instituição que vive, <strong>exclusivamente</strong>, da
              doação e interesse de pessoas e empresas que contribuem para a sua
              manutenção e subsistência.
            </Text>
            <Destaque>
              <p> Ajude-nos! Fome e doença não esperam... mobilize-se!</p>
            </Destaque>
            <Text>
              Sem a sua caridade o Lar não tem como cuidar destes idosos. Venha
              nos conhecer, dê-nos a alegria da sua visita.
            </Text>
            <Text>
              Nosso endereço é{' '}
              <strong>
                Rua Guilherme Marback, n° 22, Bonfim CEP 40.415-160 Salvador -
                BA{' '}
              </strong>
              ou clique{' '}
              <Lin
                href="https://www.google.com/maps/place/Lar+Frei+Lucas+de+Mor%C3%A1es/@-12.9269149,-38.5051637,16z/data=!4m6!3m5!1s0x7160f8aad4d64b7:0x5979ad4612615141!8m2!3d-12.9260467!4d-38.5060223!16s%2Fg%2F11f1wfzxtr?hl=pt-BR"
                target="_blank"
              >
                aqui
              </Lin>{' '}
              para ver no mapa.
            </Text>

            <Text>
              Os idosos do Lar Frei Lucas de Moráes retribuem de forma sincera
              através do seu agradecimento silencioso. Que Deus lhe retorne em
              bênçãos e prosperidade.
            </Text>
            <Text>
              Precisamos de contribuições em dinheiro, alimentos, roupas,
              produtos de higiene pessoal e de limpeza. Conheça a nossa
              história, as nossas necessidades. Clique em Saiba Mais para
              informações sobre doações!
            </Text>
            <Destaque>
              <Link className="link" to="/doacoes">
                Saiba Mais
              </Link>
            </Destaque>

            <TextDestaque>
              <h3>Área Médica</h3>
              <Text>
                O Lar necessita de profissionais nas áreas de geriatria,
                nutrição, enfermagem, assistência social e fisioterapia. Quem
                puder dedicar parte do seu tempo de forma voluntária, os idosos
                precisam urgentemente destes atendimentos. Procure-nos!
              </Text>

              <Link className="link " to="/contato">
                Contato
              </Link>
            </TextDestaque>


          </ContentText>

          <Doe />
        </Content>

           {/* a espera do frei passar os valores <ItemsConsumidos /> */}
        <Videos />
      </Home>
    </>
  );
};

export default Inicio;
