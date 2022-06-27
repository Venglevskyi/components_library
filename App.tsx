// App.js
import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import FallbackImage from 'components/FallbackImage';
// import FadeComponent from 'components/Animations/FadeComponent';
// import ScrollAnimatedList from 'components/Animations/ScrollAnimatedList';
// import VisibleComponent from 'components/Animations/Shape';
// import BottomSheet from 'components/BottomSheet/BottomSheet';
// import CameraService from 'components/CameraService/CameraService';
import BottomTabs from 'components/MaterialBottomTab/MaterialBottomTab';
import { requestPermissions } from 'helpers/permissions';

// const imageUri = [
//   'https://reactnative.dev/img/tiny_logo.png',
//   'https://reactnative.dev/img/tiny_logo.png',
// ];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaContainer />
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

      {/* <CameraService /> */}

      <BottomTabs />
      <SafeAreaContainer style={{ backgroundColor: 'black' }} />
    </GestureHandlerRootView>
  );
};

const SafeAreaContainer = styled.SafeAreaView``;

// const ImageContainer = styled.View<{ isOneItem: boolean }>`
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: ${props =>
//     props.isOneItem ? 'flex-start' : 'space-around'};
// `;

export default App;
