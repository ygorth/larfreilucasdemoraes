import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Slider from './components/Slider';

import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Doe from './components/Doe';
import { Footer } from './components/footer';





function App() {
  return (
    <>
      {/* <Banner />
      <Slider />
      <Nav /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
