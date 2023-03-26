import React,{useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import seta from '../assets/seta.svg';
import '../styles/slide.css';
import img1 from '../fotosGaleria/2015/6.jpg';
import img2 from '../fotosGaleria/2015/3.jpg';
import img3 from '../fotosGaleria/2015/1.jpg';
import img4 from '../fotosGaleria/2021/21.jpeg';
import img5 from '../fotosGaleria/2021/31.jpeg';
import img6 from '../fotosGaleria/2015/9.jpg';



const imagens = [
  [img1, img2, img3],
  [img4, img5, img6],
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
