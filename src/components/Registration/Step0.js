import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {
  checkClient,
  handleError,
  sendMessage,
} from '../../dataManagment/srvConn';
import LightBtn from './LightBtn';
import UZ from '../../assets/Drawer/UZ';
import RU from '../../assets/Drawer/RU';
import NumberFormat from 'react-number-format';
import {TouchableOpacity} from 'react-native';
import {LocalizationContext} from '../../utils/LocalizationContext';
import {strings} from '../../Constants/localization';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Title from './Title';

export default function Step0({
  mobile,
  setMobile,
  setStep,
  setGenerated,
  setMasked,
  setExist,
  navigation,
}) {
  const [loading, setLoading] = useState(false);
  const lacalization = useContext(LocalizationContext);

  function SMS() {
    setLoading(true);
    checkClient(mobile)
      .then((response) => {
        if (response !== 'No') setExist(response);
        else setExist('');
        let numbers = '';
        for (let i = 0; i <= 5; i++) {
          numbers += Math.floor(Math.random() * 10);
        }
        if (mobile == '998000000000') numbers = '123456';
        sendMessage({
          text: 'Ваш код подтверждения для Bonito Kids:' + numbers,
          number: mobile,
          from: 'bonito_kids',
        })
          .then(() => {
            setGenerated(numbers);
            setStep(1);
          })
          .catch(handleError);
      })
      .catch(handleError)
      .finally(() => setLoading(false));
  }

  function checkNumber(text) {
    if (text.length > 12) return;
    setMobile(text.replace('+', ''));
  }

  return (
    <>
      <Title text={strings.STEP0.TITLE} />

      <View style={styles.localizationWraper}>
        <TouchableOpacity
          style={styles.localizationItem}
          onPress={() => lacalization.setAppLanguage('uz')}>
          <UZ />
          <Text>Uzbek</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.localizationItem}
          onPress={() => lacalization.setAppLanguage('ru')}>
          <RU />
          <Text>Русский</Text>
        </TouchableOpacity>
      </View>

      <View style={{width: '100%'}}>
        <View style={styles.input}>
          <TextInput
            style={styles.hidden}
            defaultValue={mobile}
            onChangeText={checkNumber}
            keyboardType="numeric"
          />
          <NumberFormat
            value={mobile}
            customInput={TextInput}
            displayType="text"
            format="+### (##) ### ## ##"
            mask="_"
            onValueChange={(values) => {
              const {formattedValue} = values;
              setMasked(formattedValue);
            }}
            renderText={(formattedValue) => (
              <Text style={{position: 'absolute', left: 15}}>
                {formattedValue}
              </Text>
            )}
          />
        </View>

        <Text style={styles.subtitle}>{strings.STEP0.INPUT_TEXT}</Text>
      </View>

      <View style={styles.wraper}>
        <LightBtn
          title={strings.STEP0.SEE}
          onPress={() => navigation.navigate('Pre')}
        />
        <LightBtn onPress={SMS} title={strings.STEP0.SEND} loading={loading} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    justifyContent: 'center',
    fontSize: 14,
    marginBottom: 5,
    color: 'transparent',
  },
  hidden: {
    zIndex: 10,
    opacity: 0,
    paddingLeft: 15,
    width: '100%',
    height: '100%',
    letterSpacing: 5,
  },
  subtitle: {
    fontSize: widthPercentageToDP(5),
    alignSelf: 'flex-start',
    color: '#fff',
  },
  wraper: {
    marginTop: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  localizationWraper: {
    marginVertical: 17,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  localizationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'space-around',
  },
});
