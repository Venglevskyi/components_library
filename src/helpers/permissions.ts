import {
  checkMultiple,
  PERMISSIONS,
  requestMultiple,
} from 'react-native-permissions';

enum PermissionsStatus {
  denied = 'denied',
  unavailable = 'unavailable',
  limited = 'limited',
  granted = 'granted',
  blocked = 'blocked',
}

const MULTIPLE_PERMISSIONS_LIST = [
  PERMISSIONS.IOS.CAMERA,
  // PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  PERMISSIONS.IOS.MICROPHONE,
  // PERMISSIONS.IOS.PHOTO_LIBRARY,
  // PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  PERMISSIONS.ANDROID.CAMERA,
  // PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  // PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  PERMISSIONS.ANDROID.RECORD_AUDIO,
  // PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
];

export const requestPermissions = () =>
  checkMultiple(MULTIPLE_PERMISSIONS_LIST).then((data: any) => {
    const permissionsData = Object.keys(data);
    const deniedPermissions = [];

    permissionsData.forEach((permission: string) => {
      if (data[permission] === PermissionsStatus.denied) {
        deniedPermissions.push(permission);
      }
    });

    if (permissionsData.length === deniedPermissions.length) {
      requestMultiple(MULTIPLE_PERMISSIONS_LIST);
    }
  });
