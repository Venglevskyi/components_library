import React, { useCallback, useMemo, useRef } from 'react';
import { Text } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import { DEVICE_HEIGHT, STATUS_BAR } from '../../helpers/constants';
import styled from 'styled-components/native';

const BottomSheetComponent = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['40%', DEVICE_HEIGHT - STATUS_BAR], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <Container>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose>
        <BottomSheetView>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: grey;
`;

export default BottomSheetComponent;
