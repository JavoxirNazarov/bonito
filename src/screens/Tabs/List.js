import React, {useEffect, useMemo, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import Background from '../../assets/Basket/Background.png';
import Alert from '../../components/Alert';
import Block from '../../components/List/Block';
import Header from '../../components/List/Header';
import OrderModal from '../../components/List/OrderModal';
import {strings} from '../../Constants/localization';
import {order} from '../../dataManagment/srvConn';
import {clearAll} from '../../redux/reducers/products-reducer';
import {calculateCost, isEmpty, toCurrency} from '../../utils/helpers';
import {knowLocation} from '../../utils/LocationPermission';

export default function List({navigation}) {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.productsState);
  const {user} = useSelector((state) => state.userState);
  //

  const [loading, setLoading] = useState(false);
  const [errortext, setErrorText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  //
  const [adress, setAdress] = useState('');
  const [region, setRegion] = useState({
    latitude: 41.2995,
    longitude: 69.2401,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [marked, setMarked] = useState({});
  const [comment, setComment] = useState('');
  const [plastik, setPlastik] = useState(false);

  function makeOrder() {
    if (!adress.trim()) {
      setModalVisible(false);
      setErrorText(
        strings.getLanguage() === 'ru'
          ? 'напишите адресс'
          : 'Adressni kiriting',
      );
      return;
    }
    if (isEmpty(marked)) {
      setModalVisible(false);
      setErrorText(
        strings.getLanguage() === 'ru'
          ? 'Выберите локацию'
          : 'Lokatsiyani tanlang',
      );
      knowLocation(setRegion, setMarked);
      return;
    }
    const body = {
      Adress: adress,
      uidclient: user.uid,
      plastik,
      comment,
      Products: products,
      latitude: marked.latitude ? marked.latitude : '',
      longitude: marked.longitude ? marked.longitude : '',
    };

    setLoading(true);
    order(body)
      .then(() => {
        navigation.navigate('Success');
        dispatch(clearAll());
      })
      .catch(() => {
        setErrorText('произошла ошибка');
      })
      .finally(() => {
        setLoading(false);
        setModalVisible(false);
        setMarked({});
        setAdress('');
        setComment('');
      });
  }

  useEffect(() => {
    knowLocation(setRegion, setMarked);
  }, []);

  const totalCost = useMemo(() => {
    const result = products.reduce((acc, currVal) => {
      return acc + currVal.ЦенаСоСкидкой * currVal.amount;
    }, 0);

    return toCurrency(result);
  }, [products]);

  return (
    <>
      <OrderModal
        adress={adress}
        setAdress={setAdress}
        comment={comment}
        setComment={setComment}
        setPlastik={setPlastik}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        makeOrder={makeOrder}
        loading={loading}
        marked={marked}
        setMarked={setMarked}
        region={region}
        setRegion={setRegion}
      />
      <Alert setShow={() => setErrorText('')} text={errortext} />

      <ImageBackground
        imageStyle={{resizeMode: 'cover'}}
        source={Background}
        style={styles.continer}>
        <ScrollView>
          <Header text={strings.LIST.HEADER} canClear />

          <View style={styles.innerContainer}>
            {products.length ? (
              products.map((el, i) => <Block key={i} index={i} product={el} />)
            ) : (
              <Text
                style={{marginVertical: 50, fontSize: 20, textAlign: 'center'}}>
                {strings.LIST.EMPTY}
              </Text>
            )}

            <View style={styles.totalCost}>
              <Text style={styles.text}>{strings.LIST.TOTAL}:</Text>
              <Text style={styles.cost}>
                {totalCost} {strings.SUMM}
              </Text>
            </View>

            <TouchableOpacity
              disabled={!products.length}
              style={styles.orderBtnWraper}
              onPress={() => {
                if (calculateCost(products) < 150000) {
                  setErrorText(
                    strings.getLanguage() === 'ru'
                      ? 'Минимальный заказ от 150000 сум'
                      : 'Minimal zakaz 150000 sum',
                  );
                  return;
                }
                setModalVisible(true);
              }}>
              <LinearGradient
                colors={['#FF9472', '#F2709C']}
                style={styles.orderBtn}>
                <Text style={styles.orderText}>{strings.LIST.SUBMIT}</Text>
              </LinearGradient>
            </TouchableOpacity>
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
    alignItems: 'center',
    marginBottom: 80,
  },
  totalCost: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  text: {
    color: '#38344E',
    fontSize: 14,
  },
  cost: {
    fontWeight: 'bold',
    color: '#2B2C47',
    fontSize: 18,
  },
  orderBtnWraper: {
    width: '90%',
    height: 56,
    marginVertical: heightPercentageToDP(3),
  },
  orderBtn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0078',
    borderRadius: 50,
  },
  orderText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
