import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Reanimated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const ReanimatedComponent = Reanimated.createAnimatedComponent(View);

//* Component appearance animation */

const FadeComponent = () => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);
  const translateY = useSharedValue(500);

  const reanimatedStyle = useAnimatedStyle(
    () => ({
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }, { scale: scale.value }],
    }),
    [],
  );

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 2000 });
    scale.value = withTiming(2, { duration: 2000 });
    translateY.value = withTiming(0, { duration: 2000 });
  });

  return (
    <View style={styles.container}>
      <ReanimatedComponent style={[styles.block, reanimatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: { width: 100, height: 100, backgroundColor: 'blue' },
});

export default FadeComponent;
