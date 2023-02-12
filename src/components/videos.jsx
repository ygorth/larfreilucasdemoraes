import React, { useState } from 'react';
import styled from 'styled-components';
import '../styles/geral.css';

const Video = styled.div`
  display: flex;
  gap: 25px;
  place-content: center;
  background: transparent;
  padding: 10px 0px;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    padding: 5px;
    border-radius: 15px;
    background: #a7c4d2;
    box-shadow: 8px 8px 16px #697b84, -8px -8px 16px #e5ffff;
  }


`;

const Title = styled.h2`
  font-family: 'Lobster', cursive;
  font-size: 2rem;
  color: #253d4a;
  margin: 0 auto;
  padding: 0px 20px;
`;
const Materia = styled.h3`
  text-align: center;
  max-width: ${({ tamanho }) => (tamanho < 500 ? '30ch' : '50ch')};
  font-size: 0.87rem;
  padding: 5px;
  transition: 0.3s;
`;

   const Video1 = styled.iframe`
   border: 0px;
   border-radius: 10px;
   height: 450px;
   width: ${({ tamanho }) => tamanho + 'px'};
   transition: 0.3s;

     
  @media (max-width: 1200px) {
 
    height: 300px;
 
    
}
`;



export const Videos = () => {
  const [videos, setVideos] = useState([240, 240, 240, 240]);
  


  function handleVideo(index) {
    const screenWidth = window.innerWidth;
    const newVideos = videos.map((video, i) => {
      if (i === index) {
        return video === 240 ? (screenWidth < 700 ? 320 : (screenWidth < 1200 ? 400 : 600)) : 240;
      }
      return video === 600 || video === 400 || video === 300 ? 240 : video;
    });
  
    setVideos(newVideos);
  }

  return (
    <>
      <Title>Matérias sobre o lar Frei Lucas de Moráes</Title>
      <Video>
        {[
          {
            id: 1,
            src: 'https://www.youtube.com/embed/seTOJ2ney20',
            title: 'Bahia Meio Dia - Globo - Dia das Mães 2019!',
          },
          {
            id: 2,
            src: 'https://www.youtube.com/embed/mkAMexgbRYo',
            title: 'Balanço Geral - no Lar Frei Lucas de Moráis!',
          },
          {
            id: 3,
            src: 'https://www.youtube.com/embed/Ej4XwxnBs-U',
            title: 'Por que ajudar? Conheça o Lar Frei Lucas de Moráis!',
          },
          {
            id: 4,
            src: 'https://www.youtube.com/embed/epaqZwHFQhk',
            title:
              'Matéria na Instituição Lar Frei Lucas de Moráes pela TV Aratu',
          },
        ].map((video, index) => (
          <div key={video.id} >
            <Video1 src={video.src} tamanho={videos[index]} />
            <Materia tamanho={videos[index]}>{video.title}</Materia>
            <button className="link" onClick={() => handleVideo(index)}>
              {videos[index] < 500 ? 'Zoom +' : 'Zoom -'}
            </button>
          </div>
        ))}
      </Video>
    </>
  );
};


