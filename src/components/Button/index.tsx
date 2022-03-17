import React from 'react';
import styled from 'styled-components/native';
// import { StyleProp } from 'react-native';

type ButtonProps = {
  width: number | string;
  height: number;
  bgColor: string;
  fullWidth?: boolean;
  borderRadius?: number;

  onPress: () => void;
};

const Button = ({
  width,
  height = 48,
  borderRadius = 12,
  bgColor,
  onPress,
}: ButtonProps) => {
  return (
    <Container
      width={width}
      height={height}
      bgColor={bgColor}
      borderRadius={borderRadius}
      onPress={onPress}></Container>
  );
};

const Container = styled.TouchableOpacity<{
  height: number;
  width: number | string;
  bgColor: string;
  fullWidth?: boolean;
  borderRadius: number;
}>`
  background-color: ${props => props.bgColor};
  height: ${props => props.height}px;
  width: ${props => (props.fullWidth ? '100%' : props.width + 'px')};
  border-radius: ${props => props.borderRadius}px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: red;
`;

export default Button;
