import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import {strings} from '../../Constants/localization';
import {handleError, makeGetRequest} from '../../dataManagment/srvConn';
import {setUser} from '../../redux/reducers/user-reducer';
import LightBtn from './LightBtn';

export default function Step1({generated, setStep, masked, exist}) {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  function check() {
    if (input === generated) {
      if (exist) {
        makeGetRequest(`getclient/${exist}`)
          .then((res) => dispatch(setUser({uid: exist, ...res})))
          .catch(handleError);
      } else {
        setStep(2);
      }
    } else {
      showMessage({
        message: 'Не правильно',
        type: 'danger',
      });
    }
  }

  return (
    <>
      <Text style={styles.title}>{strings.STEP1.TITLE}</Text>
      <View style={{width: '100%'}}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#9B9B9B"
          placeholder="XXXXXX"
          keyboardType="numeric"
          defaultValue={input}
          onChangeText={setInput}
        />
        <Text style={styles.subtitle}>
          {strings.STEP1.INPUT_TEXT}
          {'\n'}
          {masked}
        </Text>
      </View>

      <View style={styles.wraper}>
        <LightBtn title={strings.STEP1.PREV} onPress={() => setStep(0)} />
        <LightBtn title={strings.STEP1.NEXT} onPress={check} />
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
  subtitle: {
    fontSize: 18,
    alignSelf: 'flex-start',
    color: '#fff',
  },
  wraper: {
    marginTop: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
