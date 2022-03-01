import React, { useState } from 'react';
import { StyleProp, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

type FallbackImageProps = {
  uri: string;
  width?: number;
  height?: number;
  loaderSize?: number;
  borderRadius?: number;
  withOutBorder?: boolean;
  imageStyle?: StyleProp<any>;
  loaderStyle?: StyleProp<any>;
};

const FallbackImage = ({
  uri,
  imageStyle,
  loaderStyle,
  borderRadius,
  width = 40,
  height = 40,
  withOutBorder = false,
}: FallbackImageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Icon
      width={width}
      height={height}
      source={{ uri }}
      style={imageStyle}
      borderRadius={borderRadius}
      withOutBorder={withOutBorder}
      onLoadEnd={() => setIsLoading(false)}>
      {isLoading && (
        <LoaderContainer style={loaderStyle}>
          <ActivityIndicator color="#ffe100" />
        </LoaderContainer>
      )}
    </Icon>
  );
};

const Icon = styled.ImageBackground<{
  width: number;
  height: number;
  borderRadius?: number;
  withOutBorder: boolean;
}>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: ${props =>
    props.withOutBorder ? 0 : props.borderRadius ? props.borderRadius : 12}px;
  align-items: center;
  justify-content: center;
`;

const LoaderContainer = styled.View`
  position: absolute;
`;

export default FallbackImage;
