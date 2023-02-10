import React from 'react';
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Div = styled.div`
  width: 270px;
  height: 160px;
  border-radius: 10px;
`;

export const Google = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAfPMHDRLd0mDitVqNU7fAFuZfhwWsGpec',
  });

  return (
    <Div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: '270px',
            height: '160px',
            borderRadius: '10px',
          }}
          center={{ lat: -12.926041, lng: -38.505997 }}
          zoom={15}
        ></GoogleMap>
      ) : (
        <></>
      )}
    </Div>
  );
};
