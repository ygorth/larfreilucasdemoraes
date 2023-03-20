import React from 'react';
import styled from 'styled-components';
import '../styles/geral.css';
import { Link } from 'react-router-dom';
import { Videos } from '../components/videos';
import aspas from '../assets/aspas.svg';
import ItemsConsumidos from '../components/ItemsConsumidos';
import Doe from '../components/Doe';

const Home = styled.section`

  position: relative;
  display: grid;
  place-content: center;
  max-width: 100vw;
  margin-bottom: 50px;
  color:#253D4A ;
  h2 {
    font-family: 'Lobster', cursive;
    margin-bottom: 10px;
    font-size: 2rem;
    text-align: center;
  }



  h5 {
    font-family: 'Lobster', cursive;
    font-size: 3rem;
  }
`;

const Text = styled.p`
    max-width: 120ch;
    margin: 5px;
    margin-top: 15px;
    font-weight: bold;
    text-align: start;
    line-height: 1.4em;
`
const Destaque = styled.section`
  font-size: 1.2rem;
  font-family: 'Lobster', cursive;
`;

const Content = styled.div`
  max-width: 100vw;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(400px, 1500px) minmax(400px, 1000px);
  max-width: 100vw;
  border-radius: 0px;
  background: #e8ebed;
  box-shadow: 9px 9px 18px #c5c8c9, -9px 4px 18px #ffffff;
  div {
    padding: 30px 20px 20px 50px;
  }

  @media (max-width: 900px) {
    grid-template-columns:minmax(200px, 1100px);
   div{
    padding: 10px;
   }
  }

 
`;
const Lin = styled.a`
  margin: 0px;
`;

const Aspas = styled.img`
  position: absolute;
  max-width: 200px;
  top:500px;
  right: 10px;
  rotate: 175deg;
  @media (max-width: 1500px) {
      max-width: 150px;
      top: 560px;
  }
  @media (max-width: 1418px) {
      max-width: 100px;
      top: 650px;
  }
  @media (max-width: 1162px) {
      top: 750px;
  }
  @media (max-width: 1042px) {
      top: 800px;
  }
  @media (max-width: 900px) {
     display: none;
  }
`;

const Inicio = () => {
  const [screen, setScreen] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Home className="paginas">
        <Content className="font">
          <div>
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
              Ajude-nos! Fome e doença não esperam... mobilize-se!
            </Destaque>
            <Text>
              Sem a sua caridade o Lar não tem como cuidar destes idosos.
              <strong>Venha nos conhecer</strong>, dê-nos a alegria da sua
              visita.
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
            <h3>Área Médica</h3>
            <Text>
              O Lar necessita de profissionais nas áreas de geriatria, nutrição,
              enfermagem, assistência social e fisioterapia. Quem puder dedicar
              parte do seu tempo de forma voluntária, os idosos precisam
              urgentemente destes atendimentos. Procure-nos!
            </Text>
            <Link className="link " to="/contato">
              Contato
            </Link>
            <Text>
              Precisamos de contribuições em dinheiro, alimentos, roupas,
              produtos de higiene pessoal e de limpeza. Conheça a nossa
              história, as nossas necessidades. Clique em Saiba Mais para
              informações sobre doações!
            </Text>

            <Link className="link " to="/doacoes">
              Saiba Mais
            </Link>
          </div>
          <article>
            <Doe />
          </article>
        </Content>
        <Aspas className='resposivo-detalhe aspas-h' screen={screen} src={aspas} />
        
        {/*    a espera do frei passar os valores <ItemsConsumidos /> */}
        <Videos />
      </Home>
    </>
  );
};

export default Inicio;
