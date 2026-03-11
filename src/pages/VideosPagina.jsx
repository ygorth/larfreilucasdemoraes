import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const videosData = [
  {
    id: 1,
    videoId: 'seTOJ2ney20',
    title: 'Bahia Meio Dia - Globo - Dia das Mães 2019!',
  },
  {
    id: 2,
    videoId: 'mkAMexgbRYo',
    title: 'Balanço Geral - no Lar Frei Lucas de Moráis!',
  },
  {
    id: 3,
    videoId: 'Ej4XwxnBs-U',
    title: 'Por que ajudar? Conheça o Lar Frei Lucas de Moráis!',
  },
  {
    id: 4,
    videoId: 'epaqZwHFQhk',
    title: 'Matéria na Instituição Lar Frei Lucas de Moráes pela TV Aratu',
  },
  {
    id: 5,
    videoId: 'cJ3kiHzBPkQ',
    title: '2025 - Lar de Caridade Frei Lucas falamos com Ana',
  },
  {
    id: 6,
    videoId: 'Uo96DV7ym1s',
    title: '2025 - Nosso querido Francisco cantando',
  },
];

const Container = styled.section`
  margin-top: 0px;
  background: #e8ebed;
  box-shadow: 9px 9px 18px #c5c8c9, -9px 4px 18px #ffffff;
  padding-bottom: 40px;
`;

const Title = styled.h2`
  font-family: 'Lobster', cursive;
  font-size: 2rem;
  color: #253d4a;
  margin: 0 auto;
  padding: 20px 20px 10px;
  text-align: center;
`;

const PlayerWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 30px;
  padding: 0 16px;
  box-sizing: border-box;
`;

const PlayerTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #253d4a;
  margin: 12px 0 0;
  text-align: center;
`;

const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 */
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 8px 8px 20px #b0bec5, -4px -4px 12px #ffffff;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

const Card = styled.button`
  background: ${({ active }) => (active ? '#253d4a' : '#a7c4d2')};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  padding: 0;
  overflow: hidden;
  box-shadow: ${({ active }) =>
    active
      ? '0 4px 16px rgba(37,61,74,0.4)'
      : '4px 4px 12px #8fa8b4, -4px -4px 12px #c9e0ea'};
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: left;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(37, 61, 74, 0.25);
  }

  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    display: block;
  }

  span {
    display: block;
    padding: 8px 10px;
    font-size: 0.85rem;
    font-weight: bold;
    color: ${({ active }) => (active ? '#e8ebed' : '#253d4a')};
    line-height: 1.3;
  }
`;

const VideosPagina = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const current = videosData[selected];

  return (
    <Container className="paginas">
      <Title>Vídeos no Lar Frei Lucas de Moráes</Title>

      <PlayerWrapper>
        <IframeContainer>
          <iframe
            src={`https://www.youtube.com/embed/${current.videoId}?autoplay=1`}
            title={current.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </IframeContainer>
        <PlayerTitle>{current.title}</PlayerTitle>
      </PlayerWrapper>

      <Grid>
        {videosData.map((v, i) => (
          <Card key={v.id} active={i === selected} onClick={() => setSelected(i)}>
            <img
              src={`https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg`}
              alt={v.title}
            />
            <span>{v.title}</span>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default VideosPagina;
