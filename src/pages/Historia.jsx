import React from 'react';
import styled from 'styled-components';
import icon from '../assets/iconelista.svg';
import Doe from '../components/Doe';

const History = styled.section`
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
    padding: 0 10px;
  }

  ul {
    padding: 0 10px;
    list-style-image: url(${icon});
  }
`;
const Content = styled.div`
  display: flex;
  align-items: start;
  gap: 15px;
  max-width: 100vw;
  border-radius: 0px;
  margin: 0 auto;
  gap: 50px;
  place-content: center;
  strong {
    color: black;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
  }
  @media (max-width: 700px) {
    flex-wrap: wrap;
    margin: 0 5px;
  }
`;

const ContentText = styled.div`
  margin: 0 15px;
`;
const Text = styled.p`
  font-weight: bold;
  max-width: 112ch;
  margin: 5px;
  margin-top: 18px;
  text-align: justify;
  line-height: 1.5em;
`;
const Lista = styled.ul`
margin-bottom: 10px;
li{
  margin-top: 10px;
}

strong{
  font-family: Arial, Helvetica, sans-serif;

}

`


const Historia = () => {
  return (
    <History className="paginas">
      <Content className="font">
        <ContentText>
          <h2>Quem foi Frei Lucas de Moráes</h2>
          <Text>
            O nome da Instituição é uma homenagem ao{' '}
            <strong>Sr. Lucas Souza Castro Vieira de Moráes</strong>, frei
            franciscano que, durante décadas, defendeu os idosos, doentes e os
            menos favorecidos, combatendo a pobreza no estado do Ceará.
          </Text>
          <h2>Quem é o Frei Florisvaldo Santos Silva e qual a Sua Missão</h2>
          <Text>
            Eu me chamo Frei Florisvaldo e estive junto ao Frei Franciscano,
            auxiliando-o durante alguns anos através de trabalhos religiosos
            àqueles que precisavam, nas ruas, lares, hospitais e nos presídios.
          </Text>
          <Text>
            Sou natural de Jacobina, onde vivi e me dediquei a obras de
            caridade. O encontro com o Frei Lucas de Moráes aconteceu através do
            convite de transferência feito pelo Pe.Alfredo Hasler, natural
            também de Jacobina. Desde então me mudei para a sede de Fortaleza
            para trabalhar nas obras de caridade junto ao Frei Lucas de Moráes,
            Reitor da Congregação, tendo-o acompanho e auxiliado naquele
            trabalho durante cinco anos.
          </Text>
          <Text>
            Antes de me mudar para Fortaleza, tive a oportunidade de participar
            do movimento jovem, tornando-me presidente do JUNAC - Jovens Unidos
            no Amor de Cristo, em Jacobina.
          </Text>
          <Text>
            Com a experiência de Fortaleza, surgiu o desejo de fazer algo direto
            pelas outras pessoas, realizando as obras com o olhar que aprendi a
            ter na vivência com os desassistidos. Por isso decidi voltar e
            iniciar a minha própria caminhada.
          </Text>
          <Text>
            Ao retornar a Salvador, recebi uma herança, com a qual comprei uma
            Kombi e com ela arrecadava alimentos nas feiras livres e nos
            mercados e distribuía para casas de caridade.
          </Text>
          <Text>
            Em minha trajetória conheci a triste realidade dos idosos pobres,
            acamados e ignorados, foi assim que senti a necessidade de criar um
            asilo que os acolhesse. Com este olhar e sentimento, fundei o{' '}
            <strong>Lar Frei Lucas de Moráes</strong>, que atende os idosos que
            já tiveram a sua própria história e hoje sobrevivem da total
            caridade e assistência de pessoas que não conhecem, concedendo-lhes
            uma condição de vida mais digna. Todos vivem, e dependem, cem por
            cento, da ajuda privada e pública.
          </Text>

          <h2>O início do Lar</h2>
          <Text>
            A Instituição de Caridade Lar Frei Lucas de Moráes foi fundada em 25
            de maio de 2010 por mim,{' '}
            <strong>Frei Florisvaldo Santos Silva</strong>, e tem como alicerce
            que toda obra de auxílio é fundamentada nas leis de Deus, e deve
            trazer escrito, na sua bandeira, o seguinte provérbio:
          </Text>
          <Text>
            <strong>
              <em>
                &#8220;Amai a Deus acima de todas as coisas, amai ao próximo
                como a ti mesmo, fazei o bem o quanto te for possível e não
                olheis a quem, porque, se a semeadura é livre, a colheita é
                obrigatória.
              </em>
            </strong>
          </Text>
          <h2>Quais os objetivos do Lar</h2>
          <Text>
            Auxiliar e assistir as pessoas idosas, carentes, doentes e
            abandonadas, que se encontram incapazes de se autodeterminarem, que
            não contam com o apoio e o zelo das suas famílias, amparando-as no
            amor do Senhor Jesus, fortalecendo-lhes o corpo e o espírito,
            através dos cuidados necessários. Através do lar desejo trazer a
            esperança e a vontade de viver àqueles que ainda podem tê-las, e
            senti-las, porque velhice não é doença, e sim o resultado da
            caminhada de um ser humano ao longo da sua vida.
          </Text>
          <Text>
            Desenvolver cuidados básicos, atividades lúdicas, atividades
            sócio-recreativas, aproveitando o seu potencial e prevenindo do seu
            isolamento, de acordo com seus interesses e limitações.
          </Text>
          <Text>
            Também é buscada a melhoria na qualidade de vida dos idosos,
            levantamento do estado de saúde geral do paciente, orientação do
            idoso, acompanhamento caso a caso, atender pessoas carentes
            encaminhadas pelo estado ou prefeitura através de convênios,
            articulação e intercâmbio com instituições, através de parcerias ou
            convênios firmados com empresas privadas, que nos possibilitem a
            regularidade dos recursos.
          </Text>
          <h2>O Público Alvo</h2>
          <Text>
            Idosos carentes portadores de deficiência, com faixa etária acima de
            60 anos, em regime de semi-internato e em situação de risco social.
          </Text>
          <h2>As Metas Principais</h2>
          <Text>
            Buscar parcerias junto a pessoas-físicas, empresas privadas, órgãos
            federais, estaduais, municipais, e que proporcionem sustentabilidade
            à instituição, permitindo-lhe o seu funcionamento, tanto
            administrativo, quanto humano, pois todas as contas e as
            necessidades material, alimentar e médica são pagas com a ajuda
            irrestrita das pessoas e das empresas.
          </Text>
          <Text>
            Melhorar a qualidade de vida dos idosos internos, promovendo
            conforto, atendimento médico, psicológico e espiritual adequado a
            cada um.
          </Text>
          <Text>
            Melhorar a estrutura física do imóvel, ampliando-o e mantendo-o,
            visando sempre ao bem-estar dos idosos.
          </Text>
          <h2>As Necessidades</h2>
          <Text>
            A falta de uma receita própria dificulta a execução das atividades
            internas necessárias, para gerar recursos que sejam satisfatórios
            para realizar as seguintes necessidades da instituição:
          </Text>
          <Lista>
            <li>
              <strong>A</strong>. Contratação de profissionais nas áreas de
              geriatria, nutrição, enfermagem, assistência social e
              fisioterapia;
            </li>

            <li>
              <strong>B</strong>. Comprar equipamentos de cozinha;
            </li>
            <li>
              <strong>C</strong>. Comprar equipamentos para área de saúde;
            </li>
            <li>
              <strong>D</strong>. Comprar móveis e eletrodomésticos;
            </li>
            <li>
              {' '}
              <strong>E</strong>. Comprar um veículo para a coleta de doações e
              transporte de pacientes;
            </li>
            <li>
              <strong>F</strong>. Comprar fardamentos para os voluntários;
            </li>
            <li>
              {' '}
              <strong>G</strong>. Pagamento dos voluntários, aluguel, luz, água,
              telefone, impostos, entre outros;
            </li>
            <li>
              <strong>H</strong>. Compra de alimentos, medicamentos, materiais
              de higiene pessoal e de limpeza, rouparia, etc;
            </li>
            <li>
              <strong>J</strong>. Manutenção e melhorias do local.
            </li>
          </Lista>
          <h2>Os Princípios</h2>
          <Text>
            A Instituição tem como determinação o respeito aos idosos, o
            cuidado, a higiene e a manutenção do local, o tratamento carinhoso e
            respeitoso pelos seus atendentes, a alimentação apropriada a cada
            condição e tudo o que puder ser feito para melhorar e dar mais
            conforto a cada um deles e conforme as suas necessidades específicas
            de saúde.
          </Text>
          <Text>
            Também prezamos a gratidão no recebimento das doações, pois são
            elas, pequenas ou grandes, que mantém a chama da assistência viva
            para dar continuidade a este trabalho dedicado.
          </Text>
          <h2>A Estrutura Física</h2>
          <Text>
            O Lar Frei Lucas está situado em imóvel alugado, localizado no
            bairro da Ribeira (Salvador, Bahia) e possui carências em sua
            estrutura física, impedindo melhores condições de atendimento.
          </Text>
          <h2>O Atendimento Nutricional</h2>
          <Text>
            São servidas cinco refeições por dia, conforme a necessidade de cada
            idoso.
          </Text>
          <h2>Para os Transportes</h2>
          <Text>
            A instituição necessita de um veículo para fazer a coleta de doações
            e transporte de pacientes.
          </Text>
          <Text>
            <em>
              A Instituição de Caridade Lar Frei Lucas de Moráes agradece a
              todos que contribuem, de todas as formas e instâncias, para com a
              sua manutenção e continuidade.
            </em>
          </Text>
          <Text>
            <em>
              Suas ações são bem-vistas aos olhos de Deus, e retornarão
              positivamente em suas vidas.
            </em>
          </Text>
          <Text>
            <em>Um abraço fraterno.</em>
          </Text>
          <Text>
            <strong>
              <em>Frei Florisvaldo Santos Silva</em>
            </strong>
          </Text>
        </ContentText>
        <Doe />
      </Content>
    </History>
  );
};

export default Historia;
