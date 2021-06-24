import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  BackHandler,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import Background from '../../assets/Basket/Background.png';
import {strings} from '../../Constants/localization';
import {makeGetRequest, PostReferal} from '../../dataManagment/srvConn';
import {setUser} from '../../redux/reducers/user-reducer';

export default function Referal({navigation, route}) {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.userState);
  const id = route.params?.id;
  const [text, setText] = useState(id ? id : '');
  const [search, setSearch] = useState({});

  useEffect(() => {
    if (text) check();
  }, []);

  function check() {
    makeGetRequest('checkreferal/' + text).then((res) => {
      if (res) setSearch(res);
    });
  }

  function choose() {
    if (!search.Имя || !search.Номер) {
      showMessage({
        message: strings.REFERAL.ERR,
        position: 'center',
        type: 'warning',
      });
      return;
    }
    const body = {
      ID: text,
      UID: user.uid,
    };

    PostReferal(body).then((res) => {
      if (res && res == 'спасибо') {
        showMessage({
          message: 'Успешно!',
          position: 'center',
          type: 'info',
        });

        dispatch(setUser({...user, Referal: text}));

        navigation.navigate('Root');
      }
    });
  }
  return (
    <ImageBackground
      imageStyle={{resizeMode: 'cover'}}
      source={Background}
      style={styles.continer}>
      <TextInput
        style={styles.input}
        placeholder={strings.REFERAL.CODE}
        placeholderTextColor="#9B9B9B"
        value={text}
        onChangeText={setText}
      />

      <View style={styles.infoBlock}>
        <Text style={{fontSize: 16}}>{strings.REFERAL.NAME}:</Text>
        <Text style={{fontSize: 16}}>
          {search.Имя ? search.Имя : strings.REFERAL.NOREF}
        </Text>
      </View>
      <View style={styles.infoBlock}>
        <Text style={{fontSize: 16}}>{strings.REFERAL.PHONE}:</Text>
        <Text style={{fontSize: 16}}>
          {search.Номер ? search.Номер : strings.REFERAL.NOREF}
        </Text>
      </View>

      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          marginVertical: 25,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={check} style={styles.btn}>
          <Text style={styles.text}>{strings.REFERAL.CHECK}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={choose} style={styles.btn}>
          <Text style={styles.text}>{strings.REFERAL.CHOSE}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  input: {
    width: '90%',
    height: 64,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingLeft: 20,
    justifyContent: 'center',
    fontSize: 14,
    marginVertical: 25,
  },
  btn: {
    height: 42,
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 59,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
  },
  text: {
    color: '#32C3A9',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoBlock: {
    backgroundColor: '#fff',
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 20,
    marginVertical: 25,
  },
});
