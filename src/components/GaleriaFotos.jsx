import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import '../styles/geral.css';
import '../styles/galeriafotos.css';
import fechar from '../assets/fechargaleria.svg';
import seta from '../assets/setagaleria.svg';
import seta2 from '../assets/seta.svg';
import setarigth from '../assets/setarigth.svg';
import styled from 'styled-components';
import {
  images_2012,
  images_2015,
  images_2018,
  images_2021,
} from '../fotosGaleria/imports';

const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
  padding: ${({ data }) => (!data ? '50px' : '0px')} 30px;

  img {
    width: 100%;
    display: block;
    cursor: pointer;
    border-radius: 10px;
  }

  h2 {
    font-family: 'Lobster', cursive;
    padding: 10px 0;
    font-size: 3rem;
    color: #253d4a;
    background: #a7c4d2;
    border-radius: 10px;
    text-align: center;
  }

  @media (max-width: 540px) {
    padding: ${({ data }) => (!data ? '50px' : '0px')} 10px;
    h2 {
      
      font-size: 1.6rem;
    }
  }
`;
const ContainerDiv = styled.div``;

const GaleriaFotos = () => {
  const [data, setData] = useState({ img: '', i: 0 });
  const [galery, setGalery] = useState(images_2012);
  const [pad, setPad] = useState(false);

  function viewImage(img, i, imgAno) {
    setData({ img, i });
    setGalery(imgAno);

    setPad(true);
  }

  function imgAction(action) {
    let i = data.i;

    if (action === 'next-img') {
      setData({ img: galery[i + 1], i: i + 1 });
    }
    if (action === 'prev-img') {
      setData({ img: galery[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: '', i: 0 });
      setPad(false);
    }
  }

  return (
    <>
      {data.img && (
        <div className="responsivo-galeria">
          <button
            className="btns-galeria"
            onClick={() => imgAction('prev-img')}
          >
            <img className="seta-galeria " src={seta} alt="icon seta" />
          </button>
          <img className="img-galeria" src={data.img} />
          <button className="fechar-galeria" onClick={() => imgAction('')}>
            <img src={fechar} alt="icon fechar" />
          </button>

          <button
            className="btns-galeria "
            onClick={() => imgAction('next-img')}
          >
            <img src={seta} alt="icon seta" />
          </button>
          <div className="mobile-setas">
            <button
              className="btns-mobile-galeria"
              onClick={() => imgAction('prev-img')}
            >
              <img src={seta2} alt="icon seta" />
            </button>
            <button
              className="btns-mobile-galeria"
              onClick={() => imgAction('next-img')}
            >
              <img src={setarigth} alt="icon seta" />
            </button>
          </div>
        </div>
      )}

      <Container data={pad}>
        {!data.img && (
          <ContainerDiv>
            <h2>2021</h2>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="20px" >
                {images_2021.map((image, i) => (
                  <img
                    key={image}
                    src={image}
                    onClick={() => viewImage(image, i, images_2021)}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </ContainerDiv>
        )}
        {!data.img && (
          <ContainerDiv>
            <h2>2018</h2>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="20px">
                {images_2018.map((image, i) => (
                  <img
                    key={image}
                    src={image}
                    onClick={() => viewImage(image, i, images_2018)}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </ContainerDiv>
        )}
        {!data.img && (
          <ContainerDiv>
            <h2>2015</h2>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="20px">
                {images_2015.map((image, i) => (
                  <div key={image}>
                    <img
                      src={image}
                      onClick={() => viewImage(image, i, images_2015)}
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </ContainerDiv>
        )}
        {!data.img && (
          <ContainerDiv>
            <h2>2012</h2>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="20px">
                {images_2012.map((image, i) => (
                  <div key={image}>
                    <img
                      src={image}
                      onClick={() => viewImage(image, i, images_2012)}
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </ContainerDiv>
        )}
      </Container>
    </>
  );
};

export default GaleriaFotos;
