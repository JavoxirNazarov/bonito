import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Background from '../../assets/registration-background.png';
import Step0 from '../../components/Registration/Step0';
import Step1 from '../../components/Registration/Step1';
import Step2 from '../../components/Registration/Step2';
import Step3 from '../../components/Registration/Step3';
import Step4 from '../../components/Registration/Step4';
import Step5 from '../../components/Registration/Step5';
import {strings} from '../../Constants/localization';
import {handleError} from '../../dataManagment/srvConn';
import {setUser} from '../../redux/reducers/user-reducer';
import {sendDate} from '../../utils/helpers';

export default function Registration({navigation}) {
  const dispatch = useDispatch();

  const [exist, setExist] = useState(true);

  // ====

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [mobile, setMobile] = useState('998');
  const [masked, setMasked] = useState('998');
  const [generated, setGenerated] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());

  // ============
  const [childs, setChilds] = useState([
    {name: '', date: new Date(), datePicker: false},
  ]);

  // ============

  function saveUser() {
    if (!name.trim()) {
      Alert.alert(strings.REG_ERROR.NAME);
      setStep(2);
    }
    {
      setLoading(true);
      const newUser = {
        Name: name,
        Birth: sendDate(date),
        Phone: mobile,
        IDbranch: '',
        Children: childs
          .filter((el) => el.name)
          .map((child) => {
            return {
              nameChild: child.name,
              birthChild: sendDate(child.date),
            };
          }),
      };

      sendDate('newclient', newUser)
        .then((uid) => dispatch(setUser({uid, ...newUser})))
        .catch(handleError)
        .finally(() => setLoading(false));
    }
  }

  function body() {
    switch (step) {
      case 0:
        return (
          <Step0
            setGenerated={setGenerated}
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            setMasked={setMasked}
            setExist={setExist}
            navigation={navigation}
          />
        );
      case 1:
        return (
          <Step1
            exist={exist}
            navigation={navigation}
            generated={generated}
            masked={masked}
            setStep={setStep}
          />
        );
      case 2:
        return (
          <Step2
            setStep={setStep}
            name={name}
            setName={setName}
            date={date}
            setDate={setDate}
          />
        );
      case 3:
        return (
          <Step3 setStep={setStep} childs={childs} setChilds={setChilds} />
        );
      case 4:
        return <Step4 setStep={setStep} />;
      case 5:
        return (
          <Step5 setStep={setStep} saveUser={saveUser} loading={loading} />
        );

      default:
        return (
          <Step0
            setGenerated={setGenerated}
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            setMasked={setMasked}
            setExist={setExist}
            navigation={navigation}
          />
        );
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.container}>
        {body()}
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#62b5d2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
});
