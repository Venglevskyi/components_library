import React, { useRef } from 'react';
import { ActivityIndicator, Pressable, View } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import styled from 'styled-components/native';

const CameraService = () => {
  const camera = useRef<Camera>();
  const devices = useCameraDevices();
  const device = devices.back;

  const makePhoto = async () => {
    try {
      const photo = await camera.current.takePhoto({
        flash: 'on',
      });
      console.log(photo.path);
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
            isActive={true}
            style={{ flex: 1 }}
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
