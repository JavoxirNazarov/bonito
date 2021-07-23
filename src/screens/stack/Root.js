import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainIcon from '../../assets/Drawer/Main';
import MapIcon from '../../assets/Drawer/Map';
import CustomDrawer from '../../components/CustomDrawer';
import Home from '../drawer/Home';
import Map from '../drawer/Map';
import Abaut from '../drawer/Abaut';
import {useDispatch, useSelector} from 'react-redux';
import {getStocksThunk} from '../../redux/thunks/stocks-thumks';
import {getBalanceThunk} from '../../redux/thunks/balance-thunks';
import {strings} from '../../Constants/localization';
import OrdersIcon from '../../assets/Drawer/List';
import HistoryList from '../drawer/HistoryList';
import {checkUpdateNeeded} from '../../utils/helpers';

const Drawer = createDrawerNavigator();

export default function Root() {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.userState);
  useEffect(() => {
    if (user) {
      dispatch(getBalanceThunk(user));
      dispatch(getStocksThunk());
      checkUpdateNeeded();
    }
  }, [user]);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerStyle={{
        backgroundColor: 'transparent',
        paddingTop: '12%',
        width: '70%',
      }}
      drawerContentOptions={{
        labelStyle: {
          color: '#fff',
        },
        activeBackgroundColor: 'transparent',
        contentContainerStyle: {alignItems: 'center'},
        itemStyle: {
          width: '80%',
          marginVertical: 0,
        },
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <View style={styles.icon}>
              <MainIcon />
            </View>
          ),
        }}
        name={strings.DWAWER.MAIN}
        component={Home}
      />

      <Drawer.Screen
        name={strings.DWAWER.MAP}
        component={Map}
        options={{
          unmountOnBlur: true,
          drawerIcon: () => (
            <View style={styles.icon}>
              <MapIcon />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={strings.DWAWER.ABAUT}
        component={Abaut}
        options={{
          unmountOnBlur: true,
          drawerIcon: () => (
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="information-outline"
                size={18}
                color="#0C6452"
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={strings.DWAWER.HISTORY}
        component={HistoryList}
        options={{
          unmountOnBlur: true,
          drawerIcon: () => (
            <View style={styles.icon}>
              <OrdersIcon />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
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
});
