import React,{useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import seta from '../assets/seta.svg';
import '../styles/slide.css';
import img1 from '../fotosGaleria/2021/33.jpeg';
import img2 from '../fotosGaleria/2021/30.jpeg';
import img3 from '../fotosGaleria/2021/31.jpeg';
import img4 from '../fotosGaleria/2021/29.jpeg';
import img5 from '../fotosGaleria/2021/28.jpeg';
import img6 from '../fotosGaleria/2021/27.jpeg';
import img7 from '../fotosGaleria/2021/26.jpeg';
import img8 from '../fotosGaleria/2021/25.jpeg';
import img9 from '../fotosGaleria/2021/24.jpeg';
import img10 from '../fotosGaleria/2021/23.jpeg';
import img11 from '../fotosGaleria/2021/21.jpeg';
import img12 from '../fotosGaleria/2021/20.jpeg';


const imagens = [
  [img1, img2, img3],
  [img4, img5, img6],
  [img7, img8, img9],
  [img10, img11, img12],
];


const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);



  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {imagens.map((i) => (
          <div key={i} className="embla__slide">
            {i.map((item) => (
              <div key={item}>
                <img src={item} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="embla__prev embla__button" onClick={scrollPrev}>
        <img src={seta} alt="seta" />
      </button>
      <button className="embla__next embla__button" onClick={scrollNext}>
        <img src={seta} alt="seta" />
      </button>
    </div>
  );
};

export default Slider;
