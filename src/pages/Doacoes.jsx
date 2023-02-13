import React from 'react';
import styled from 'styled-components';
import icon from '../assets/iconelista.svg';
import pix from '../assets/pix.svg';

const Doacao = styled.section`
color:#253D4A ;
  max-width: 100vw;
  margin: 0px auto;
  font-size: 1.1rem;
  h2 {
    font-family: 'Lobster', cursive;
    margin-bottom: 10px;
    font-size: 2rem;
  }

  p {
    max-width: 200ch;
    margin-bottom: 5px;
    font-weight: 500;
    text-align: center;
  }

  ul {
    position: relative;
    padding: 15px 50px;
    margin: 20px 0px;
    list-style: none;
    border-radius: 16px;
    background: #a7c4d2;
    box-shadow: 9px 9px 18px #788d97, -9px -9px 18px #d6fbff;
  }
  li {
    font-weight: bold;
  }

  span {
    font-family: Arial, Helvetica, sans-serif;
  }

  img {
    width: 20px;
  }
`;
const Pix = styled.div`
  display: flex;
  gap: 5px;
  place-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  border-radius: 0px;
  background: #e8ebed;
  box-shadow: 9px 9px 18px #c5c8c9, -9px 4px 18px #ffffff;
  padding: 25px 0px;
`;

const Info = styled.div`
background: #253D4A;
top: 140px;
margin-bottom: 10px;
z-index: 1;
padding: 5px 15px;
border-radius: 15px;
color: #a7c4d2;

`

const Doacoes = () => {
  return (
    <Doacao className="paginas">
      <Content>
        <h2>Depósitos em conta bancária</h2>
        <p>
          Atualmente o Lar não tem ajuda governamental para pagar os diversos
          custos associados a sua manutenção,<br/> tais como: ajuda de custo dos
          voluntários, aluguel, luz, água, telefone, impostos, medicamentos,
          manutenção da<br/> casa e outros custos. Esta instituição depende
          exclusivamente de sua doação para continuar existindo.
        </p>
        
        
        <ul>   
        <Info>Informações para doação:</Info>
          <li>
            <span>Caixa Econômica Federal</span>
          </li>
          <li>
            <span>Agência:</span> 0991
          </li>
          <li>
            <span>Operador:</span> 003
          </li>
          <li>
            <span>Conta Corrente:</span> 1577-0
          </li>
          <br></br>
          <li>
            <Pix>
              <img src={pix} />
              <span>CNPJ | PIX:</span> 14.411.214/0001-65
            </Pix>
          </li>
        </ul>

        <h2>Visitas</h2>
        <p>
          Sua visita ao nosso Lar é uma forma de doação, tais valores, como
          carinho, atenção e amor ao próximo não<br/> podem ser comprados e são
          extremamente importantes para as pessoas que hoje vivem neste Lar
          longe de suas famílias.
        </p>
        <p>
          O Lar está sempre limpo e organizado para receber novas visitas. Venha
          nos conhecer!
        </p>
        <h3>Hórarios de Visitas:</h3>
        <p>
          Diariamente, inclusive sábados e domingos de 09h às 17h.<br/> Outros
          Horários, fale com Frei Florisvaldo em (71) 3207.7033.
        </p>

        <h2>Alimentos</h2>
        <p>
          <strong>Verduras e Legumes</strong>: Batata, cenoura, chuchu, quiabo,
          beterraba, abóbora tomate, cebola, couve, alho.
        </p>
        <p>
          <strong>Farináceos</strong>: Pão-francês, leite-em-pó integral, aveia,
          farinha de arroz, açúcar, biscoitos, maizena, café, Mucilon/Neston,
          Cream-cracker.
        </p>
        <p>
          <strong>Grãos e Óleos</strong>: Soja, Arroz, feijão, macarrão, farinha
          de mandioca, óleo e sal.
        </p>
        <p>
          <strong>Frutas</strong>: Da estação e variadas.
        </p>

        <h2>Higiene Pessoal</h2>
        <p>
          Fraldas geriátricas, desodorante spray, sabonete, colônia, hidratante
          suave para o corpo,<br/> talco, escovas-de-dentes macias, pasta-de-dente,
          cotonetes, shampoo.
        </p>
        <p>
          Lençóis, toalhas de banho, roupas pessoais masculina/feminina, pijamas
          e camisolas, cobertores, travesseiros.
        </p>

        <h2>Produtos de Limpeza</h2>
        <p>
          Alvejante, sabão-em-pó, desinfetante, álcool, detergente pra louça,
          sabão-barra, amaciante,<br/> papel-higiênico, lenços umedecidos, sacos-lixo
          100L, panos de limpeza, rodo,<br/> vassoura, esponja para lavar pratos,
          bombril e sapólio.
        </p>

        <h2>Medicamentos</h2>
        <p>
          Algodão em bolas, esparadrapo micropore grande, ataduras,
          iodo(antisséptico),<br/> luvas cirúrgicas tam M, pomadas para assadura e
          gaze.
        </p>

        <h2>Utensílios para cozinha</h2>
        <p>Liquidificador industrial e bujão de gás 13 kgs.</p>
      </Content>
    </Doacao>
  );
};

export default Doacoes;
