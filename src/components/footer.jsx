import React from 'react';
import styled from 'styled-components';
import '../styles/geral.css';
import telefone from '../assets/telefone.svg';
import email from '../assets/email.svg';
import localmapa from '../assets/mapa.png';
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

img{
  width: 200px;
  border-radius: 8px;
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
const Mapa = styled.iframe`
  max-width: 220px;
  max-height:150px;
  border-radius: 8px;
  

`;

// const Mapa = styled.img`
//   max-width: 220px;
//   max-height:150px;
//   border-radius: 8px;
// `;

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
         
        {/*  apigoogle <Google/> */}

        {/* imagem  <a href="https://www.google.com/maps/place/Lar+Frei+Lucas+de+Mor%C3%A1es/@-12.926047,-38.506022,14z/data=!4m6!3m5!1s0x7160f8aad4d64b7:0x5979ad4612615141!8m2!3d-12.9260467!4d-38.5060223!16s%2Fg%2F11f1wfzxtr?hl=pt-BR" target="_blank"rel="noreferrer" > <Mapa src={localmapa}/></a> */}
        <Mapa
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.402438063098!2d-38.5051637!3d-12.9269149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160f8aad4d64b7%3A0x5979ad4612615141!2sLar%20Frei%20Lucas%20de%20Mor%C3%A1es!5e0!3m2!1spt-BR!2sbr!4v1676651134887!5m2!1spt-BR!2sbr"
        referrerPolicy="no-referrer-when-downgrade"
      ></Mapa>

      </div>
      </ContainerFlex>

      <Final>
        Este site foi desenvolvido por: Luciano R. Martinello  e é mantido por voluntários que
        apoiam o trabalho desta Instituição.
      </Final>
    </Container>
    
  );
};
