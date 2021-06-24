import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import MapBlock from './MapBlock';
import LightBtn from './LightBtn';
import {mapImages} from '../../assets/Map';
import {strings} from '../../Constants/localization';

export default function Step4({setStep}) {
  return (
    <>
      <Text style={styles.title}>{strings.STEP4.TITLE}</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{width: '100%'}}
        style={{width: '100%'}}
        data={mapImages}
        renderItem={({item}) => (
          <MapBlock place={item} onPress={() => setStep(5)} />
        )}
        keyExtractor={(_, index) => index.toString()}
      />

      <View style={styles.btnWraper}>
        <LightBtn title={strings.STEP1.PREV} onPress={() => setStep(3)} />
        <LightBtn title={strings.STEP1.NEXT} onPress={() => setStep(5)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: '600',
    marginVertical: 20,
  },

  btnWraper: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
