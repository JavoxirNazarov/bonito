import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {strings} from '../../Constants/localization';
import {dateParser} from '../../utils/helpers';
import LightBtn from './LightBtn';
import Title from './Title';

export default function Step3({childs, setChilds, setStep}) {
  function addChild() {
    setChilds([...childs, {name: '', date: new Date(), datePicker: false}]);
  }

  function openPicker(index) {
    setChilds(
      childs.map((child, i) => {
        if (i !== index) return child;
        else
          return {
            ...child,
            datePicker: !child.datePicker,
          };
      }),
    );
  }

  function changeDate(childDate, selectedDate, index) {
    const currentDate = selectedDate || childDate;

    setChilds(
      childs.map((child, i) => {
        if (i !== index) return child;
        else
          return {
            ...child,
            date: currentDate,
            datePicker: false,
          };
      }),
    );
  }

  function changeName(name, index) {
    setChilds(
      childs.map((child, i) => {
        if (i !== index) return child;
        else
          return {
            ...child,
            name,
          };
      }),
    );
  }

  return (
    <>
      <Title text={strings.STEP3.TITLE} />

      <ScrollView
        style={{width: '100%'}}
        contentContainerStyle={{width: '100%'}}
        showsVerticalScrollIndicator={false}>
        <>
          {childs.map((child, i) => (
            <View style={styles.childBlock} key={i}>
              <View style={styles.inputBlock}>
                <TextInput
                  style={styles.input}
                  placeholder={strings.STEP3.NAME}
                  placeholderTextColor="#2D2D2D"
                  value={child.name}
                  onChangeText={(text) => changeName(text, i)}
                />
              </View>

              {Platform.OS === 'ios' ? (
                <View style={styles.IOSDateContainer}>
                  <Text>{strings.STEP3.DATE}</Text>
                  <DateTimePicker
                    locale="ru"
                    value={child.date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={(_, selectedDate) => {
                      changeDate(child.date, selectedDate, i);
                    }}
                  />
                </View>
              ) : (
                <>
                  {child.datePicker && (
                    <DateTimePicker
                      locale="ru"
                      testID="dateTimePicker"
                      value={child.date}
                      mode="date"
                      display="spinner"
                      onChange={(_, selectedDate) => {
                        changeDate(child.date, selectedDate, i);
                      }}
                    />
                  )}
                  <View style={styles.inputBlock}>
                    <Text style={styles.inputLabel}>{strings.STEP3.DATE}</Text>
                    <TouchableOpacity
                      onPress={() => openPicker(i)}
                      style={styles.input}>
                      <Text>{dateParser(child.date)}</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          ))}
          <View style={{alignItems: 'center'}}>
            <Icon
              name="account-multiple-plus"
              type="material-community"
              color="red"
              size={25}
              raised
              onPress={addChild}
            />
          </View>
          <View style={styles.wraper}>
            <LightBtn title={strings.STEP1.PREV} onPress={() => setStep(2)} />
            <LightBtn title={strings.STEP1.NEXT} onPress={() => setStep(4)} />
          </View>
        </>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  childBlock: {
    width: '100%',
    height: 240,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
    marginBottom: 17,
    marginTop: 5,
  },
  inputBlock: {
    width: '100%',
    marginBottom: 16,
  },
  inputLabel: {
    color: '#B5B5B5',
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 54,
    backgroundColor: '#efeff0',
    borderRadius: 4,
    justifyContent: 'center',
    fontSize: 14,
    paddingLeft: 10,
  },
  IOSDateContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#efeff0',
    borderRadius: 4,
    justifyContent: 'space-between',
    fontSize: 14,
    marginBottom: 5,
    paddingLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  datePicker: {
    width: '100%',
    height: 40,
    backgroundColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 5,
  },
  btnWraper: {
    width: 141,
    height: 41,
    borderRadius: 11,
    overflow: 'hidden',
  },
  btn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0078',
  },
  btnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  wraper: {
    marginTop: 'auto',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  overlayStyle: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#00000066',
    textAlign: 'center',
  },
  headerStyle: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#CDCDCD',
    borderBottomWidth: 1,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 10,
  },
});
