import React, { useState } from 'react';
import { StyleProp, ActivityIndicator } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
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

//* Download image with loader */

const FallbackImage = ({
  uri,
  loaderStyle,
  borderRadius,
  width = 100,
  height = 100,
  withOutBorder = false,
}: FallbackImageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isLoading ? 0 : 1, { duration: 300 }),
    transform: [{ scale: withTiming(isLoading ? 0.7 : 1, { duration: 300 }) }],
  }));

  return (
    <ReanimatedComponent
      width={width}
      height={height}
      source={{ uri }}
      style={[animatedStyle]}
      borderRadius={borderRadius}
      withOutBorder={withOutBorder}
      onLoadEnd={() => setIsLoading(false)}>
      {isLoading && (
        <LoaderContainer style={loaderStyle}>
          <ActivityIndicator color="#ffe100" />
        </LoaderContainer>
      )}
    </ReanimatedComponent>
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

const ReanimatedComponent = Reanimated.createAnimatedComponent(Icon);

const LoaderContainer = styled.View`
  position: absolute;
`;

export default FallbackImage;
