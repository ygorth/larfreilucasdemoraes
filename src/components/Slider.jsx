import React,{useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import seta from '../assets/seta.svg';
import '../styles/slide.css';
import img1 from '../fotos/img1e1.png';
import img2 from '../fotos/img2e2.png';
import img3 from '../fotos/img3e3.png';
import img4 from '../fotos/img4e4.png';
import img5 from '../fotos/img5e5.png';
import img6 from '../fotos/img6e6.png';
import img7 from '../fotos/img7.png';
import img8 from '../fotos/img8.png';
import img9 from '../fotos/img9.png';
import img10 from '../fotos/img10.png';
import img11 from '../fotos/img11.png';
import img12 from '../fotos/img12.png';


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
