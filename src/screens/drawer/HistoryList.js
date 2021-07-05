import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-elements';
import {useSelector} from 'react-redux';
import Background from '../../assets/Basket/Background.png';
import Header from '../../components/List/Header';
import {strings} from '../../Constants/localization';
import {handleError, makeGetRequest} from '../../dataManagment/srvConn';
import {toCurrency} from '../../utils/helpers';

export default function List({navigation}) {
  const {user} = useSelector((state) => state.userState);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    makeGetRequest(`listorders/${user.uid}`)
      .then((res) => setList(res))
      .catch(handleError)
      .finally(() => setLoading(false));
  }, [user]);

  return (
    <>
      <ImageBackground
        imageStyle={{resizeMode: 'cover'}}
        source={Background}
        style={styles.continer}>
        <ScrollView>
          <Header text={strings.HISTORY.HEADER} />
          <View style={styles.innerContainer}>
            {list.length ? (
              list.map((el, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    navigation.navigate('HistoryProduct', {id: el.УидЗаказа})
                  }>
                  <Card>
                    <Card.Title>{el.Дата}</Card.Title>
                    <Card.Divider />
                    <View style={styles.row}>
                      <Text style={{fontSize: 16}}>
                        {strings.HISTORY.ADRESS}
                      </Text>
                      <Text style={{fontSize: 16}}>{el.АдресДоставки}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={{fontSize: 16}}>{strings.HISTORY.DATE}</Text>
                      <Text style={{fontSize: 16}}>{el.ДатаОтгрузки}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={{fontSize: 16}}>{strings.HISTORY.SUMM}</Text>
                      <Text style={{fontSize: 16}}>
                        {toCurrency(el.СуммаДокумента)} {strings.SUMM}
                      </Text>
                    </View>
                  </Card>
                </TouchableOpacity>
              ))
            ) : loading ? (
              <ActivityIndicator
                color="blue"
                size="large"
                style={{marginTop: 40}}
              />
            ) : (
              <Text>{strings.HISTORY.EMPTY}</Text>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    marginBottom: 30,
  },
  row: {
    flex: 1,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
