// App.js
import 'react-native-reanimated';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

// import styled from 'styled-components/native';

// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import FallbackImage from './src/components/FallbackImage';
// import FadeComponent from './src/components/Animations/FadeComponent';
import ScrollAnimatedList from './src/components/Animations/ScrollAnimatedList';

// const imageUri = [
//   'https://reactnative.dev/img/tiny_logo.png',
//   'https://reactnative.dev/img/tiny_logo.png',
// ];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {/* <ViewContainer isOneItem={imageUri.length === 1}>
        {imageUri.map((item, index) => (
          <FallbackImage uri={item} key={index} />
        ))}
      </ViewContainer> */}

      {/* <FadeComponent /> */}

      <ScrollAnimatedList />
    </>
  );
};

// const ViewContainer = styled.View<{ isOneItem: boolean }>`
//   flex: 1;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: ${props =>
//     props.isOneItem ? 'flex-start' : 'space-around'};
// `;

export default App;
