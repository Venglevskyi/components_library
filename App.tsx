import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import styled from 'styled-components/native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import FallbackImage from './src/components/FallbackImage';

const App = () => {
  const imageUri = [
    'https://reactnative.dev/img/tiny_logo.png',
    'https://reactnative.dev/img/tiny_logo.png',
  ];
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ViewContainer isOneItem={imageUri.length === 1}>
        {imageUri.map(item => (
          <FallbackImage uri={item} />
        ))}
      </ViewContainer>
    </SafeAreaView>
  );
};

const ViewContainer = styled.View<{ isOneItem: boolean }>`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${props =>
    props.isOneItem ? 'flex-start' : 'space-around'};
`;

export default App;
