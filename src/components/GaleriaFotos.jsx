import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import '../styles/geral.css';
import fechar from '../assets/fechargaleria.svg';
import seta from '../assets/setagaleria.svg';
import img1 from '../fotosGaleria/1.jpg';
import img2 from '../fotosGaleria/2.jpg';
import img3 from '../fotosGaleria/3.jpg';
import img4 from '../fotosGaleria/4.jpg';
import img5 from '../fotosGaleria/5.jpg';
import img6 from '../fotosGaleria/6.jpg';
import img7 from '../fotosGaleria/7.jpg';
import img8 from '../fotosGaleria/8.jpg';
import img9 from '../fotosGaleria/2a.jpg';
import img10 from '../fotosGaleria/5a.jpg';
import img11 from '../fotosGaleria/10a.jpg';
import img12 from '../fotosGaleria/15a.jpg';
import img13 from '../fotosGaleria/20a.jpg';
import img14 from '../fotosGaleria/25a.jpg';
import img15 from '../fotosGaleria/30a.jpg';
import img16 from '../fotosGaleria/33a.jpg';
import img17 from '../fotosGaleria/35a.jpg';
import img18 from '../fotosGaleria/40a.jpg';
import img19 from '../fotosGaleria/45a.jpg';
import img20 from '../fotosGaleria/50a.jpg';
import Doe from './Doe';
import styled from 'styled-components';

const Doar = styled.div`
padding-top: 20px;
display: grid;
place-content: center;
`

const Container = styled.div`
  margin:  0 auto;
  width: 80vw;
  padding: 50px 30px;

  img {
    width: 100%;
    display: block;
    cursor: pointer;
  }
`;

const View = styled.div`
  top: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  align-items: center;
  justify-items: center;
  gap: 10px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 15;
`;
// rgba(0, 0, 0, 0.6)
const ImgZoom = styled.img`
  width: auto;
  max-width: 90%;
  max-height: 90%;
`;

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

const GaleriaFotos = () => {
  const [data, setData] = useState({ img: '', i: 0 });

  function viewImage(img, i) {
    setData({ img, i });
  }

  function imgAction(action) {
    let i = data.i;
    if (action === 'next-img') {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === 'prev-img') {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: '', i: 0 });
    }
  }

  return (
    <>
    <Doar>
    <Doe/>
    </Doar>
      {data.img && (
        <View>
          <button
            className="btns-galeria"
            onClick={() => imgAction('prev-img')}
          >
            <img className="seta-galeria" src={seta} alt="icon seta" />
          </button>
          <img src={data.img} />
          <button className="fechar-galeria" onClick={() => imgAction('')}>
            <img src={fechar} alt="icon fechar" />
          </button>

          <button
            className="btns-galeria"
            onClick={() => imgAction('next-img')}
          >
            <img src={seta} alt="icon seta" />
          </button>
        </View>
      )}
      <Container>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={image}
                src={image}
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </>
  );
};

export default GaleriaFotos;
