import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {strings} from '../../Constants/localization';
import LightBtn from './LightBtn';

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
      <Text style={styles.title}>{strings.STEP5.TITLE}</Text>

      {knowFrom.map((el, i) => (
        <TouchableOpacity
          onPress={() => changeWay(i)}
          style={styles.listItem}
          key={i}>
          <Text style={{fontSize: 19}}>{i + 1}</Text>
          <Text style={{fontSize: 19}}>{el.way}</Text>
          <CheckBox
            onPress={() => changeWay(i)}
            checked={el.selected}
            checkedColor="#2AA952"
            uncheckedColor="transparent"
          />
        </TouchableOpacity>
      ))}

      <View style={styles.btnWraper}>
        <LightBtn title={strings.STEP1.PREV} onPress={() => setStep(4)} />
        <LightBtn
          title={strings.STEP1.NEXT}
          onPress={saveUser}
          loading={loading}
        />
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
    textAlign: 'center',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  btnWraper: {
    marginTop: 35,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
