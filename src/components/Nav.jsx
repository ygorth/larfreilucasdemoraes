import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import menu from '../assets/hamburger.png';
import fechar from '../assets/x.svg';
import { useState } from 'react';

const Nave = styled.div`
  padding: 8px;
  background: #a7c4d2;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 25px;
    align-items: center;
    position: relative;
    justify-content: center;
  }
  li a {
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    font-weight: bold;
    color: #264a5c;
    display: block;
    border-bottom: transparent 2px solid;
    padding: 6px;
    &:hover {
      border-bottom: #264a5c 2px solid;
    }
  }

  @media (max-width: 700px) {
    padding: 5px 10px;
    display: ${({ mobile }) => (mobile ? 'none' : 'block')};
    opacity: 1;
    transform: translateY(0px);
    animation: animar 0.3s forwards;

    @keyframes animar {
      from {
        opacity: 0;
        transform: translateY(-80px);
      }
      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    ul {
      opacity: 1;
      flex-direction: column;
      flex: 1;
      gap: 0px;
    }
  }
`;

const Botao = styled.button`
  display: none;
  border: 0;
  background: transparent;
  position: absolute;
  top: 10px;
  right: 8px;
  @media (max-width: 700px) {
    display: block;
  }

  img {
    max-width: 30px;
    cursor: pointer;
  }
`;

const Nav = () => {
  const [mobile, setMobile] = useState(1);

  function abrirFechar() {
    if (mobile === 1) {
      setMobile(0);
    } else {
      setMobile(1);
    }
  }

  console.log(mobile);

  return (
    <>
      <Nave mobile={mobile}>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/historia">História</Link>
          </li>
          <li>
            <NavLink to="/doacoes">Doações</NavLink>
          </li>
          <li>
            <Link to="/fotos">Fotos</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </Nave>
      <Botao onClick={abrirFechar}>
        <img src={mobile ? menu : fechar} />
      </Botao>
    </>
  );
};

export default Nav;
