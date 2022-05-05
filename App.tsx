// App.js
import 'react-native-reanimated';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import FallbackImage from './src/components/FallbackImage';
// import FadeComponent from './src/components/Animations/FadeComponent';
// import ScrollAnimatedList from './src/components/Animations/ScrollAnimatedList';
// import VisibleComponent from './src/components/Animations/Shape';
// import BottomSheet from './src/components/BottomSheet/BottomSheet';

// const imageUri = [
//   'https://reactnative.dev/img/tiny_logo.png',
//   'https://reactnative.dev/img/tiny_logo.png',
// ];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        {/* <ImageContainer isOneItem={imageUri.length === 1}>
          {imageUri.map((item, index) => (
            <FallbackImage uri={item} key={index} />
          ))}
        </ImageContainer> */}

        {/* <ScrollAnimatedList /> */}

        {/* <FadeComponent /> */}

        {/* <BottomSheet /> */}

        {/* <VisibleComponent /> */}
      </SafeAreaContainer>
    </GestureHandlerRootView>
  );
};

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

// const ImageContainer = styled.View<{ isOneItem: boolean }>`
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: ${props =>
//     props.isOneItem ? 'flex-start' : 'space-around'};
// `;

export default App;
