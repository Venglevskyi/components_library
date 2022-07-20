import React, { useRef } from 'react';
import { ActivityIndicator } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/native';
import styled from 'styled-components/native';

// import { scanQRCodes } from 'helpers/functions';

const CameraService = () => {
  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.back;
  const isFocused = useIsFocused();

  const makePhoto = async () => {
    try {
      const photo = await camera?.current?.takePhoto();
      console.log(photo?.path);
    } catch (e) {}
  };

  return (
    <>
      {device == null ? (
        <Container>
          <ActivityIndicator size="large" color="#00ff00" />
        </Container>
      ) : (
        <>
          <Camera
            ref={camera}
            photo={true}
            device={device}
            style={{ flex: 1 }}
            isActive={isFocused}
          />
          <ButtonContainer onPress={makePhoto}>
            <SnapButton />
          </ButtonContainer>
        </>
      )}
    </>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  align-items: center;
  justify-content: center;
`;

const SnapButton = styled.View`
  width: 78px;
  height: 78px;
  border-radius: ${78 / 2}px;
  border-width: 8px;
  border-color: white;
`;

export default CameraService;
