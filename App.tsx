import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
  View,
} from 'react-native';
import Reanimated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import FallbackImage from './src/components/FallbackImage';

const ReanimatedComponent = Reanimated.createAnimatedComponent(View);

type ContextType = {
  translateX: number;
  translateY: number;
};

const App = () => {
  // const imageUri = [
  //   'https://reactnative.dev/img/tiny_logo.png',
  //   'https://reactnative.dev/img/tiny_logo.png',
  // ];
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const progress = useSharedValue(1);
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: event => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  // const reanimatedStyle = useAnimatedStyle(
  //   () => ({ opacity: progress.value, transform: [{ scale: scale.value }] }),
  //   [],
  // );

  const rStylePanGesture = useAnimatedStyle(
    () => ({
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    }),
    [],
  );

  useEffect(() => {
    // progress.value = withTiming(0, { duration: 3000 });
    // scale.value = withSpring(2);
  });

  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        {/* <ViewContainer isOneItem={imageUri.length === 1}>
        {imageUri.map((item, index) => (
          <FallbackImage uri={item} key={index} />
        ))}
      </ViewContainer> */}
      </SafeAreaView>
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <ReanimatedComponent style={[styles.block, rStylePanGesture]} />
        </PanGestureHandler>
      </View>
    </>
  );
};

const ViewContainer = styled.View<{ isOneItem: boolean }>`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${props =>
    props.isOneItem ? 'flex-start' : 'space-around'};
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: { width: 100, height: 100, backgroundColor: 'blue' },
});

export default App;
