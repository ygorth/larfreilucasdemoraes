import React from 'react';
import styled from 'styled-components';
import insta from '../assets/insta.svg';
import face from '../assets/face.svg';
import ave from '../assets/ave.svg';
import local from '../assets/local.svg';
import '../styles/geral.css';
import { Link } from 'react-router-dom';

//test
const BannerP = styled.main`
  font-family: 'Lobster', cursive;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #a7c4d2;
  margin: 0 auto;
  position: relative;
  place-items: center;
  a {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    color: #253d4a;
    transition: 0.3s;
    padding-top: 10px;
    &:hover {
      color: #43677a;
    }
  }

  
  img {
    display: block;
    max-width: 40px;
    cursor: pointer;

    &:hover {
      animation: redes 1s infinite;
    }
    @keyframes redes {
      0% {
        transform: scale(1);
      }
      30% {
        transform: scale(1.2);
        transform: rotate(20deg);
      }
      80% {
        transform: scale(1);
        transform: rotate(-20deg);
      }
      100% {
        transform: scale(1.2);
      }
    }
  }

  div {
    display: flex;
    background: #a7c4d2;
    gap: 10px;
    padding: 0px 10px;
    z-index: 10;
    place-items: center;
  }


`;
const Title = styled.h1`

margin: 10px 0px;
a{

    font-family: 'Lobster', cursive;
    padding: 10px 120px;
    padding-bottom: 15px;
    font-size: 2.5rem;
    color: #253d4a;
    background: #a7c4d2;
    
    &::before {
      padding: 0;
      margin: 0;
      content: url(${ave});
      height: 100%;
      width: 100%;
      position: absolute;
      top: -15px;
      left: 0px;
      z-index: 2;
    }
  }

  @media (max-width: 1500px) {
   
   a{
     max-width: 40ch;
   }
 }
 @media (max-width: 1250px) {
   a {
     font-size: 2.5rem;
     padding: 10px 10px 10px 100px;
   }
 
 }

 @media (max-width: 800px) {
   a {
     font-size: 2rem;
     padding: 10px 10px;
   }
   a:before {
     display: none;
   }
 }
`
const ContainerNav = styled.div`
  display: flex;
    flex-wrap: wrap;
    background: #a7c4d2;
    gap: 10px;
    padding: 0px 10px;
    z-index: 10;
    place-items: center;
    @media (max-width: 1038px){
      margin-right: 80px;
    }
    
`
const Banner = () => {
  return (
    <BannerP className="responsivo-nav-title">
      <Title className="responsivo-title"><Link to={'/'}>Lar Frei Lucas de Moráes</Link></Title>
      <ContainerNav>
        <div>
          <a
            href="https://www.google.com/maps/place/Lar+Frei+Lucas+de+Mor%C3%A1es/@-12.9269149,-38.5051637,16z/data=!4m6!3m5!1s0x7160f8aad4d64b7:0x5979ad4612615141!8m2!3d-12.9260467!4d-38.5060223!16s%2Fg%2F11f1wfzxtr?hl=pt-BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={local} alt="" />
          </a>

          <a
            className="responsive-local"
            href="https://www.google.com/maps/place/Lar+Frei+Lucas+de+Mor%C3%A1es/@-12.9269149,-38.5051637,16z/data=!4m6!3m5!1s0x7160f8aad4d64b7:0x5979ad4612615141!8m2!3d-12.9260467!4d-38.5060223!16s%2Fg%2F11f1wfzxtr?hl=pt-BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            R. Guilherme Marback, n° 22 - Bonfim, Salvador - BA, 40415-160,
            Brasil
          </a>
        </div>
        <div>
        <a
          href="https://www.facebook.com/larfreilucas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={face} alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/larfreilucas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insta} alt="instagram" />
        </a>
        </div>
      </ContainerNav>
    </BannerP>
  );
};

export default Banner;
