import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {strings} from '../../Constants/localization';
import LightBtn from './LightBtn';
import Title from './Title';

export default function Step5({setStep, saveUser, loading}) {
  const [knowFrom, setKnowFrom] = useState([
    {way: strings.STEP5.WAY1, selected: false},
    {way: strings.STEP5.WAY2, selected: false},
    {way: strings.STEP5.WAY3, selected: false},
    {way: strings.STEP5.WAY4, selected: false},
    {way: strings.STEP5.WAY5, selected: false},
    {way: strings.STEP5.WAY6, selected: false},
  ]);

  function changeWay(i) {
    setKnowFrom(
      knowFrom.map((el, index) => {
        if (i !== index) return {...el, selected: false};
        else return {...el, selected: !el.selected};
      }),
    );
  }

  return (
    <>
      <Title text={strings.STEP5.TITLE} />

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{width: '100%'}}
        style={{width: '100%'}}
        data={knowFrom}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => changeWay(index)}
            style={styles.listItem}>
            <Text style={{fontSize: 18}}>{index + 1}</Text>
            <Text style={{fontSize: 18}}>{item.way}</Text>
            <CheckBox
              onPress={() => changeWay(index)}
              checked={item.selected}
              checkedColor="#2AA952"
            />
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => index.toString()}
        ListFooterComponent={() => (
          <View style={styles.btnWraper}>
            <LightBtn title={strings.STEP1.PREV} onPress={() => setStep(4)} />
            <LightBtn
              title={strings.STEP1.NEXT}
              onPress={saveUser}
              loading={loading}
            />
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  btnWraper: {
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
