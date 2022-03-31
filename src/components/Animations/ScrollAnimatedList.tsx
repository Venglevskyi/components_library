import React, { useRef, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MotiView } from 'moti';
import { faker } from '@faker-js/faker';
import styled from 'styled-components/native';

import { Dimensions, FlatList, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('screen');

faker.seed(10);

const data = [...Array(20).keys()].map(() => ({
  key: faker.datatype.uuid(),
  job: faker.company.companyName(),
}));

const _colors = {
  active: '#FCD259ff',
  inactive: '#FCD25900',
};
const _spacing = 10;

const ScrollAnimatedList = () => {
  const ref = useRef<FlatList>(null);

  const [itemIndex, setItemIndex] = useState<number>(0);
  const [viewPosition, setViewPosition] = useState<number>(0);

  const incrementIndex = () => {
    if (itemIndex === data.length - 1) {
      return;
    }
    setItemIndex(itemIndex + 1);
  };

  const decrementIndex = () => {
    if (itemIndex === 0) {
      return;
    }
    setItemIndex(itemIndex - 1);
  };

  useEffect(() => {
    ref.current?.scrollToIndex({
      index: itemIndex,
      animated: true,
      viewPosition,
      viewOffset: viewPosition === 0.5 || viewPosition === 1 ? 0 : _spacing,
    });
  }, [itemIndex, viewPosition]);

  return (
    <ViewContainer>
      <FlatList
        ref={ref}
        horizontal
        data={data}
        style={{ flexGrow: 0 }}
        initialScrollIndex={itemIndex}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: _spacing }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => setItemIndex(index)}>
              <MotiView
                animate={{
                  backgroundColor:
                    index === itemIndex ? _colors.active : _colors.inactive,
                  opacity: itemIndex === index ? 1 : 0.6,
                }}
                transition={{ type: 'timing', duration: 500 }}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  marginRight: _spacing,
                  padding: _spacing,
                  borderWidth: 2,
                  borderColor: _colors.active,
                  borderRadius: 12,
                }}>
                <TextWrapper>{item.job}</TextWrapper>
              </MotiView>
            </TouchableOpacity>
          );
        }}
      />
      <NavigationContainer>
        <ViewCentered>
          <TextWrapper offsetBottom>Scroll position</TextWrapper>
          <ButtonNavigation>
            <TouchableOpacity onPress={() => setViewPosition(0)}>
              <IconContainer offsetRight>
                <Icon name="align-left" size={24} color="#36303F" />
              </IconContainer>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setViewPosition(0.5)}>
              <IconContainer offsetRight>
                <Icon name="align-center" size={24} color="#36303F" />
              </IconContainer>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setViewPosition(1)}>
              <IconContainer>
                <Icon name="align-right" size={24} color="#36303F" />
              </IconContainer>
            </TouchableOpacity>
          </ButtonNavigation>
        </ViewCentered>

        <ViewCentered>
          <TextWrapper offsetBottom>Navigation</TextWrapper>
          <ButtonNavigation>
            <TouchableOpacity onPress={decrementIndex}>
              <IconContainer offsetRight>
                <Icon name="arrow-left" size={24} color="#36303F" />
              </IconContainer>
            </TouchableOpacity>
            <TouchableOpacity onPress={incrementIndex}>
              <IconContainer>
                <Icon name="arrow-right" size={24} color="#36303F" />
              </IconContainer>
            </TouchableOpacity>
          </ButtonNavigation>
        </ViewCentered>
      </NavigationContainer>
    </ViewContainer>
  );
};

const ViewContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.View<{ offsetRight?: boolean }>`
  padding: ${_spacing}px;
  background-color: #fcd259;
  border-radius: ${_spacing}px;
  ${props => props.offsetRight && `margin-right: ${_spacing}px`};
`;

const ButtonNavigation = styled.View`
  flex-direction: row;
  width: ${width / 2}px;
  justify-content: center;
`;

const NavigationContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: ${_spacing * 10}px;
`;

const TextWrapper = styled.Text<{ offsetBottom?: boolean }>`
  color: #36303f;
  font-weight: 700;
  ${props => props.offsetBottom && 'margin-bottom: 10px'};
`;

const ViewCentered = styled.View`
  align-items: center;
`;

export default ScrollAnimatedList;
