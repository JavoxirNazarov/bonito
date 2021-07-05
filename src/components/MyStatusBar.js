import React from 'react';
import {View, StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default function MyStatusBar() {
  const height = getStatusBarHeight(false);
  return (
    <View style={{backgroundColor: '#806ED8', height}}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="transparent"
      />
    </View>
  );
}
