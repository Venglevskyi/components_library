import React, { useReducer } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { MotiView } from 'moti';

const Shape = () => {
  return (
    <MotiView
      from={{
        opacity: 0,
        translateY: 250,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        type: 'timing',
      }}
      style={styles.shape}
    />
  );
};

const VisibleComponent = () => {
  const [visible, toggle] = useReducer(s => !s, true);

  return (
    <Pressable onPress={toggle} style={styles.container}>
      {visible && <Shape />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 250,
    width: '100%',
    borderRadius: 25,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#9c1aff',
  },
});

export default VisibleComponent;
