import React from 'react';
import styled from 'styled-components';
import '../styles/geral.css';
import telefone from '../assets/telefone.svg';
import email from '../assets/email.svg';
import local from '../assets/local.svg';
import aspas from '../assets/aspas.svg';
import face from '../assets/face.svg';
import insta from '../assets/insta.svg';
import { Google } from './Mapa';

const Container = styled.footer`
  color: #253d4a;
  z-index: 1;
  position: relative;
  background: #a7c4d2;
  padding: 50px 20px 15px 20px;
  display: grid;
  place-items: center;
  place-content: center;
  gap: 20px;

  h2 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 10px;
  }

 
`;

const ContainerFlex= styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
place-content: center;
place-items: center;
div{
  max-width: 350px;

}
`

const Contato = styled.div`
  display: flex;
  place-items: center;
  gap: 10px;
  z-index: 5;
`;

const Icons = styled.img`
  max-width: 30px;
`;

const Redes = styled.img`
  cursor: pointer;
  max-width: 30px;
  &:hover {
    animation: redes 1s infinite;
  }
`;
const Mapa = styled.img`
  max-width: 200px;
`;
const Aspas = styled.img`
  position: absolute;
  max-width: 200px;
  top: -100px;
  left: 10px;
  z-index: -1;
  @media (max-width: 1500px) {
      max-width: 150px;
  }
  @media (max-width: 1400px) {
      max-width: 100px;
      top: -50px ;
  }
`;
const Final = styled.p`
 
  text-align: center;
  z-index: 3;

 
`;

export const Footer = () => {


  return (
    <Container>
      <Aspas className='resposivo-detalhe aspas-f' src={aspas} />
     <ContainerFlex>
      <div>
        <h2>
          Lar Frei Lucas<br></br> de Moráes
        </h2>
        <p>
          Instituição de Caridade Lar Frei Lucas de Moráes © 2015 - Sem fins
          lucrativos.
        </p>
        <Contato>
          <Redes src={face} />
          <Redes src={insta} />
        </Contato>
      </div>
      <div>
        <h2>Contato</h2>
        <Contato>
          <Icons src={telefone} alt="telefone" />
          <p>(71) 3207-7033 | 3208-2763</p>
        </Contato>

        <Contato>
          <Icons src={email} alt="email" />
          <p> contato@larfreilucas.org.br</p>
        </Contato>
        <Contato>
          <Icons src={local} alt="local" />
          <p>
            R. Guilherme Marback, n° 22 - Bonfim, Salvador - BA, 40415-160,
            Brasil
          </p>
        </Contato>
      </div>
      <div>
        <a
          href="https://www.google.com/maps/place/Lar+Frei+Lucas+de+Mor%C3%A1es/@-12.9269149,-38.5051637,16z/data=!4m6!3m5!1s0x7160f8aad4d64b7:0x5979ad4612615141!8m2!3d-12.9260467!4d-38.5060223!16s%2Fg%2F11f1wfzxtr?hl=pt-BR"
          target="_blank"   rel="noopener noreferrer"
        >
          
          
        </a>
        {/* <Google/> */}
      </div>
      </ContainerFlex>

      <Final>
        Disclaimer: Este site foi construído e é mantido por voluntários que
        apoiam o trabalho desta Instituição.
      </Final>
    </Container>
    
  );
};
