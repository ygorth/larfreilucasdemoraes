import React, { useEffect } from 'react';
import { Videos } from '../components/videos';
import styled from 'styled-components';

const Container = styled.section`
  margin-top: 0px;
  background: #e8ebed;
  box-shadow: 9px 9px 18px #c5c8c9, -9px 4px 18px #ffffff;
`;

const VideosPagina = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <Container className="paginas">
      <Videos />
    </Container>
  );
};

export default VideosPagina;
