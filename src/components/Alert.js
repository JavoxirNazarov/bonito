import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
export default function Alert({setShow, text}) {
  return (
    <AwesomeAlert
      titleStyle={{textAlign: 'center'}}
      show={!!text}
      showProgress={false}
      title={text}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      cancelText="Назад"
      cancelButtonColor="red"
      onCancelPressed={setShow}
      onDismiss={setShow}
    />
  );
}
