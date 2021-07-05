import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {useCallback, useContext} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Share,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import CatalogIcon from '../assets/Drawer/Catalog';
import overlay from '../assets/Drawer/overlay.png';
import StockIcon from '../assets/Drawer/StockIcon';
import Logo from '../assets/Logo';
import {strings} from '../Constants/localization';
import {clearUser} from '../redux/reducers/user-reducer';
import UZ from '../assets/Drawer/UZ';
import RU from '../assets/Drawer/RU';
import {LocalizationContext} from '../utils/LocalizationContext';
import NewsIcon from '../assets/Drawer/News';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default function CustomDrawer(props) {
  const dispatch = useDispatch();
  const {balance} = useSelector((state) => state.balanceState);
  const {stocks} = useSelector((state) => state.stocksState);
  const {user} = useSelector((state) => state.userState);
  const lacalization = useContext(LocalizationContext);

  const logOut = useCallback(() => {
    dispatch(clearUser());
    props.navigation.closeDrawer();
  }, []);

  const shareLink = useCallback(async () => {
    await Share.share({
      message: 'http://srv.lavina.uz/bonito/?referal=' + balance.Code,
    });
  }, [balance]);

  const customItems = [
    {
      Icon: <NewsIcon />,
      label: strings.DWAWER.STOCKS,
      onPress: () => props.navigation.navigate('Stocks'),
    },
    {
      Icon: <CatalogIcon />,
      label: strings.DWAWER.CATALOG,
      onPress: () => props.navigation.navigate('Catalog'),
    },
    {
      Icon: <MaterialCommunityIcons name="share" size={18} color="#0C6452" />,
      label: strings.DWAWER.SHARE,
      onPress: shareLink,
    },
    {
      Icon: <MaterialCommunityIcons name="logout" size={18} color="#0C6452" />,
      label: strings.DWAWER.EXIT,
      onPress: logOut,
    },
  ];

  return (
    <LinearGradient colors={['#67E196', '#06AFAA']} style={styles.gradient}>
      <ImageBackground style={{flex: 1}} source={overlay}>
        <DrawerContentScrollView
          {...props}
          showsVerticalScrollIndicator={false}>
          <View style={styles.wraper}>
            <Logo style={{marginVertical: widthPercentageToDP(5)}} />

            {!!stocks.length && (
              <ImageBackground
                resizeMode="cover"
                imageStyle={styles.image}
                source={{uri: `data:image/png;base64,${stocks[0].картинка}`}}
                style={styles.newsBlock}>
                <View style={styles.blockIcon}>
                  <StockIcon />
                </View>

                <LinearGradient
                  colors={['#FF9472', '#F2709C']}
                  style={styles.textBlock}>
                  <View>
                    <Text style={styles.title}>{stocks[0].Заголовок}</Text>
                    <Text style={styles.title}>{stocks[0].текст}</Text>
                  </View>
                </LinearGradient>

                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Stocks')}
                  style={styles.button}>
                  <Text style={styles.btnText}>Смотреть все акции</Text>
                </TouchableOpacity>
              </ImageBackground>
            )}
          </View>

          <DrawerItemList {...props} />

          {customItems.map((el, i) => (
            <DrawerItem
              key={i}
              {...props}
              icon={() => <View style={styles.icon}>{el.Icon}</View>}
              style={{width: '80%'}}
              label={el.label}
              onPress={el.onPress}
            />
          ))}

          <View style={styles.localizationContaner}>
            <TouchableOpacity
              style={styles.localizationItem}
              onPress={() => {
                lacalization.setAppLanguage('uz');
                props.navigation.closeDrawer();
              }}>
              <UZ />
              <Text style={styles.localizationItemText}>Uzbek</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.localizationItem}
              onPress={() => {
                lacalization.setAppLanguage('ru');
                props.navigation.closeDrawer();
              }}>
              <RU />
              <Text style={styles.localizationItemText}>Русский</Text>
            </TouchableOpacity>
          </View>

          {user && user.Referal ? null : (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Referal');
                props.navigation.closeDrawer();
              }}
              style={styles.referalBtn}>
              <Text>{strings.DWAWER.REFERAL}</Text>
            </TouchableOpacity>
          )}
        </DrawerContentScrollView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 29,
    height: 29,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
  },
  gradient: {
    width: '100%',
    height: '100%',
    backgroundColor: '#06AFAA',
    borderTopRightRadius: 10,
    justifyContent: 'center',
  },
  wraper: {
    width: '100%',
    alignItems: 'center',
  },
  newsBlock: {
    width: '80%',
    height: 150,
    position: 'relative',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 11,
  },
  blockIcon: {
    height: 24,
    width: 24,
    borderRadius: 50,
    backgroundColor: '#F8593B',
    position: 'absolute',
    right: -9,
    top: -9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    width: '100%',
    height: '44%',
    marginTop: 'auto',
    borderRadius: 11,
    opacity: 0.9,
    flexDirection: 'row',
    padding: 8,
  },
  sum: {fontSize: 16, color: '#FFFFFF'},
  prevSum: {fontSize: 13, color: '#FFFFFF', textDecorationLine: 'line-through'},
  title: {fontSize: 11, color: '#FFFFFF'},
  button: {
    position: 'absolute',
    bottom: -15,
    backgroundColor: '#fff',
    width: 140,
    height: 30,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#32C3A9',
    fontSize: 10,
  },
  referalBtn: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  localizationContaner: {
    marginVertical: 17,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
  },
  localizationItem: {
    width: '42%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  localizationItemText: {
    fontSize: widthPercentageToDP(3.5),
  },
});
