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
import { MobileContext } from './context/MobileContext';

const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
  padding: ${({ pad }) => (!pad ? '50px' : '0px')} 30px;

  img {
    width: 100%;
    display: block;
    cursor: pointer;
    border-radius: 10px;
  }

  h2 {
    font-family: 'Lobster', cursive;
    padding: 5px 0;

    margin: 15px;
    font-size: 3rem;
    color: #253d4a;
    background: #a7c4d2;
    border-radius: 10px;
    text-align: center;
  }

  @media (max-width: 540px) {
  
    h2 {
      font-size: 1.6rem;
    }
  }
`;
const ContainerDiv = styled.div``;

const GaleriaFotos = () => {
  const [data, setData] = useState({ img: '', i: 0 });
  const [galery, setGalery] = useState([]);
  const [pad, setPad] = useState(false);
  const [screen, setScreen] = useState(window.innerWidth);
  const [valueScroll, setValueScroll] = useState(425)
  const { mobile} = React.useContext(MobileContext);

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(()=>{
    
    if(screen < 500){
      !mobile ? setValueScroll(400) : setValueScroll(250)
    }
  },[screen])



  const viewImage = (img, i, imgAno) => {
    setData({ img, i });
    setGalery(imgAno);
    window.scrollTo({ top: valueScroll, left: 0 });
    setPad(true);
  };

  const imgAction = (action) => {
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
  };

  const renderImages = (images, year) => (
    <ContainerDiv>
      <h2>{year}</h2>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {images.map((image, i) => (
            <div key={image}>
              <img src={image} onClick={() => viewImage(image, i, images)} />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </ContainerDiv>
  );

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
      <Container pad={pad} className='test'>
        {!data.img && renderImages(images_2021, '2021')}
        {!data.img && renderImages(images_2018, '2018')}
        {!data.img && renderImages(images_2015, '2015')}
        {!data.img && renderImages(images_2012, '2012')}
      </Container>
    </>
  );
};

export default GaleriaFotos;
