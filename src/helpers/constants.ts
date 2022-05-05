import { Dimensions } from 'react-native';

export const { height: DEVICE_HEIGHT, width: DEVICE_WIDTH } =
  Dimensions.get('window');
export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } =
  Dimensions.get('screen');

export const STATUS_BAR = 20;
