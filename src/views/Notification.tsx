import React, { useState } from 'react';
import { Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Reanimated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import styled from 'styled-components/native';

import Section from 'components/Section/Section';
import { IS_IOS } from 'helpers/constants';

//? If need StyckyHeader pass props in Section Component "withHeader, isStickyHeader"

const Notifications = () => {
  const [isAnimatedHeader, setIsAnimatedHeader] = useState<boolean>(false);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isAnimatedHeader ? 0 : 1, { duration: 300 }),
    transform: [
      { translateY: withTiming(isAnimatedHeader ? -50 : 0, { duration: 300 }) },
    ],
  }));
  return (
    <>
      <ReanimatedComponent withShadow style={[animatedStyle]}>
        <Icon name="arrow-left" size={24} color="#36303F" />
        <Text>Notification</Text>
        <Icon name="calendar-week" size={24} color="#36303F" />
      </ReanimatedComponent>
      <Section
        isScrolled
        clientTop={IS_IOS ? 50 : 30}
        centerContentHorizontally
        setIsAnimatedHeader={setIsAnimatedHeader}>
        <Text>Notifications</Text>
        <ContentContainer />
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </Section>
    </>
  );
};

const ContentContainer = styled.View`
  height: 1800px;
  width: 100px;
  background-color: white;
`;

const HeaderContainer = styled.View<{ withShadow: boolean | undefined }>`
  position: absolute;
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 12px;
  background-color: white;
  ${props =>
    props.withShadow &&
    `elevation: 10;
    shadow-radius: 8px;
    shadow-color: '#000';
    shadow-opacity: 0.3;
    shadow-offset: 0px 2.22px;
    z-index: 2;`};
`;

const ReanimatedComponent = Reanimated.createAnimatedComponent(HeaderContainer);

export default Notifications;
