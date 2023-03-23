import React, { useEffect } from 'react';
import styled from 'styled-components';
import icon from '../assets/iconelista.svg';
import pix from '../assets/pix.svg';
import Doe from '../components/Doe';

const Doacao = styled.section`
  color: #253d4a;
  margin: 0px auto;
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  max-width: 99vw;
  background: #e8ebed;
  box-shadow: 9px 9px 18px #c5c8c9, -9px 4px 18px #ffffff;
  padding: 25px 0px;

  padding-bottom: 100px;
  h2 {
    font-family: 'Lobster', cursive;
    margin-bottom: 10px;
    font-size: 2rem;
  }

  @media (max-width: 900px) {
    margin: 0 5px;
  }
`;
const Pix = styled.div`
  display: flex;
  gap: 5px;
  place-items: center;
`;

const Lista = styled.ul`
  position: relative;
  padding: 15px 50px;
  margin: 20px 0px;
  list-style: none;
  align-self: center;
  border-radius: 16px;
  background: #a7c4d2;
  box-shadow: 9px 9px 18px #788d97, -9px -9px 18px #d6fbff;
  width: 400px;

  li {
    font-weight: bold;
  }

  span {
    font-family: Arial, Helvetica, sans-serif;
  }

  img {
    width: 20px;
  }
  @media (max-width: 500px) {
    width: 300px;
    padding: 15px;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: start;
  max-width: 100vw;
  gap: 50px;
  border-radius: 0px;
  margin: 0 auto;

  @media (max-width: 900px) {
    place-content: center;
    place-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const ContentItems = styled.div`
  margin: 0 15px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-weight: bold;
  max-width: 112ch;
  margin: 5px;
  margin-top: 18px;
  text-align: justify;
  line-height: 1.5em;
`;
const Info = styled.div`
  background: #253d4a;
  top: 140px;
  margin-bottom: 10px;
  z-index: 1;
  padding: 5px 15px;
  border-radius: 15px;
  color: #a7c4d2;
`;

const Doacoes = () => {
  useEffect(()=>{
    window.scrollTo({top:0, left:0})
  },[])


  return (
    <Doacao className="paginas">
      <Content>
        <ContentItems>
          <h2>Depósitos em conta bancária</h2>
          <Text>
            Atualmente o Lar não tem ajuda governamental para pagar os diversos
            custos associados a sua manutenção, tais como: ajuda de custo dos
            voluntários, aluguel, luz, água, telefone, impostos, medicamentos,
            manutenção da casa e outros custos. Esta instituição depende
            exclusivamente de sua doação para continuar existindo.
          </Text>

          <Lista>
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
          </Lista>

          <h2>Visitas</h2>
          <Text>
            Sua visita ao nosso Lar é uma forma de doação, tais valores, como
            carinho, atenção e amor ao próximo não podem ser comprados e são
            extremamente importantes para as pessoas que hoje vivem neste Lar
            longe de suas famílias.
          </Text>
          <Text>
            O Lar está sempre limpo e organizado para receber novas visitas.
            Venha nos conhecer!
          </Text>
          <h3>Hórarios de Visitas:</h3>
          <Text>
            Diariamente, inclusive sábados e domingos de 09h às 17h. Outros
            Horários, fale com Frei Florisvaldo em (71) 3207.7033.
          </Text>

          <h2>Alimentos</h2>
          <Text>
            <strong>Verduras e Legumes</strong>: Batata, cenoura, chuchu,
            quiabo, beterraba, abóbora tomate, cebola, couve, alho.
          </Text>
          <Text>
            <strong>Farináceos</strong>: Pão-francês, leite-em-pó integral,
            aveia, farinha de arroz, açúcar, biscoitos, maizena, café,
            Mucilon/Neston, Cream-cracker.
          </Text>
          <Text>
            <strong>Grãos e Óleos</strong>: Soja, Arroz, feijão, macarrão,
            farinha de mandioca, óleo e sal.
          </Text>
          <Text>
            <strong>Frutas</strong>: Da estação e variadas.
          </Text>

          <h2>Higiene Pessoal</h2>
          <Text>
            Fraldas geriátricas, desodorante spray, sabonete, colônia,
            hidratante suave para o corpo, talco, escovas-de-dentes macias,
            pasta-de-dente, cotonetes, shampoo.
          </Text>
          <Text>
            Lençóis, toalhas de banho, roupas pessoais masculina/feminina,
            pijamas e camisolas, cobertores, travesseiros.
          </Text>

          <h2>Produtos de Limpeza</h2>
          <Text>
            Alvejante, sabão-em-pó, desinfetante, álcool, detergente pra louça,
            sabão-barra, amaciante, papel-higiênico, lenços umedecidos,
            sacos-lixo 100L, panos de limpeza, rodo, vassoura, esponja para
            lavar pratos, bombril e sapólio.
          </Text>

          <h2>Medicamentos</h2>
          <Text>
            Algodão em bolas, esparadrapo micropore grande, ataduras,
            iodo(antisséptico),
            <br /> luvas cirúrgicas tam M, pomadas para assadura e gaze.
          </Text>

          <h2>Utensílios para cozinha</h2>
          <Text>Liquidificador industrial e bujão de gás 13 kgs.</Text>
        </ContentItems>
        <Doe />
      </Content>
    </Doacao>
  );
};

export default Doacoes;
