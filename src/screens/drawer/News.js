import React from 'react';
import {View, Text} from 'react-native';
import {strings} from '../../Constants/localization';

export default function News() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{strings.NEWS.NONEWS}</Text>
    </View>
  );
}
