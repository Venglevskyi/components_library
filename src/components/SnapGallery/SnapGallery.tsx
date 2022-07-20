import React, { useEffect, useState } from 'react';
import { ImageBackground, ActivityIndicator } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

import { DEVICE_WIDTH, DEVICE_HEIGHT } from 'helpers/constants';
import { getImages } from '../../api/api';

type ImageProps = {
  item: { largeImageURL: string };
  index: number;
};

const ITEM_WIDTH = DEVICE_WIDTH * 0.8;

const SnapGallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const request = async () => {
    const { hits } = await getImages();
    setImages(hits);
  };

  const renderItem = ({ item, index }: ImageProps) => {
    return (
      <ImageWrapper withShadow key={index}>
        <ImageComponent
          source={{ uri: item.largeImageURL }}
          onLoadEnd={() => setIsLoading(false)}>
          <MaterialCommunityIcons name="heart" color="white" size={26} />
        </ImageComponent>
        {isLoading && (
          <LoaderContainer>
            <ActivityIndicator color="#ffe100" />
          </LoaderContainer>
        )}
      </ImageWrapper>
    );
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <Container>
      <Carousel
        data={images}
        useScrollView
        itemWidth={ITEM_WIDTH}
        renderItem={renderItem}
        sliderWidth={DEVICE_WIDTH}
        contentContainerCustomStyle={{ alignItems: 'center' }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ImageWrapper = styled.View<{ withShadow?: boolean }>`
  width: ${ITEM_WIDTH}px;
  ${props =>
    props.withShadow &&
    `elevation: 10;
    shadow-radius: 6px;
    shadow-color: '#000';
    shadow-opacity: 0.5;
    shadow-offset: 0px 6px;
    z-index: 2;`};
`;

const ImageComponent = styled(ImageBackground)`
  height: ${DEVICE_HEIGHT / 1.5}px;
  padding: 16px;
  align-items: flex-end;
  justify-content: flex-end;
`;

const LoaderContainer = styled.View`
  position: absolute;
  background-color: 'rgba(0,0,0, 0.3)';
  width: 100%;
  height: 100%;
  z-index: 2;
  justify-content: center;
  align-items: center;
`;

export default SnapGallery;
