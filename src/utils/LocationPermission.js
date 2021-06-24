import {PermissionsAndroid, Platform, Alert} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export async function knowLocation(setLocation, setMarked) {
  let hasPermission = true;
  if (Platform.OS === 'android') {
    hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (!hasPermission) {
      const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      hasPermission = status === PermissionsAndroid.RESULTS.GRANTED;
    }

    if (hasPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          const {latitude, longitude} = position.coords;
          if (latitude && longitude) {
            setLocation((prev) => ({...prev, latitude, longitude}));
            setMarked({latitude, longitude});
          }
        },
        (error) => {
          Alert.alert(error.code.toString(), error.message);
        },
        {
          enableHighAccuracy: true,
          forceRequestLocation: true,
          timeout: 10000,
          maximumAge: 10000,
        },
      );
    }
  } else {
    Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        if (latitude && longitude) {
          setLocation((prev) => ({...prev, latitude, longitude}));
          setMarked({latitude, longitude});
        }
      },
      (error) => {
        Alert.alert(error.code.toString(), error.message);
      },
      {
        enableHighAccuracy: true,
        forceRequestLocation: true,
        timeout: 10000,
        maximumAge: 10000,
      },
    );
  }
}
