import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {strings} from '../../Constants/localization';
import {dateParser} from '../../utils/helpers';
import LightBtn from './LightBtn';

export default function Step2({date, setDate, name, setName, setStep}) {
  const [picker, showPicker] = useState(false);

  const onChange = (_, selectedDate) => {
    const currentDate = selectedDate || date;
    showPicker(!picker);
    setDate(currentDate);
  };

  return (
    <>
      <Text style={styles.title}>{strings.STEP2.TITLE}</Text>

      <TextInput
        style={styles.input}
        placeholder={strings.STEP2.NAME}
        placeholderTextColor="#9B9B9B"
        value={name}
        onChangeText={setName}
      />

      {Platform.OS === 'ios' ? (
        <View
          style={{
            width: '100%',
            height: 64,
            backgroundColor: '#efeff0',
            borderRadius: 4,
            justifyContent: 'space-between',
            fontSize: 14,
            marginBottom: 5,
            paddingLeft: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text>{strings.STEP2.DATE}</Text>
          <DateTimePicker
            locale="ru"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        </View>
      ) : (
        <>
          <TouchableOpacity
            style={styles.datePicker}
            onPress={() => showPicker(true)}>
            <Text style={{fontSize: 17}}>{strings.STEP2.DATE}</Text>
            <Text style={{fontSize: 17}}>{dateParser(date)}</Text>
          </TouchableOpacity>
          {picker && (
            <DateTimePicker
              locale="ru"
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="spinner"
              onChange={onChange}
            />
          )}
        </>
      )}

      <View style={styles.wraper}>
        <LightBtn title={strings.STEP1.PREV} onPress={() => setStep(0)} />
        <LightBtn title={strings.STEP1.NEXT} onPress={() => setStep(3)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: '600',
    marginVertical: 15,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 64,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingLeft: 20,
    justifyContent: 'center',
    fontSize: 14,
    marginBottom: 5,
  },
  datePicker: {
    width: '100%',
    height: 64,
    backgroundColor: '#F0F8F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 5,
    marginBottom: 5,
  },
  wraper: {
    marginTop: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
