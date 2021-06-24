import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';
import MyStatusBar from './src/components/MyStatusBar';
import HistoryProduct from './src/screens/stack/HistoryProduct';
import Pre from './src/screens/stack/Pre';
import Product from './src/screens/stack/Product';
import Referal from './src/screens/stack/Referal';
import Registration from './src/screens/stack/Registration';
import Root from './src/screens/stack/Root';
import Success from './src/screens/stack/Success';
import {linking} from './src/utils/linking';

const Stack = createStackNavigator();

const App = () => {
  const [online, setOnline] = useState(true);
  const {user} = useSelector((state) => state.userState);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setOnline(state.isConnected);
    });

    SplashScreen.hide();
    return () => unsubscribe();
  }, []);

  return (
    <View style={{flex: 1}}>
      <MyStatusBar />
      {online ? (
        <NavigationContainer linking={linking}>
          <Stack.Navigator>
            {user ? (
              <>
                <Stack.Screen
                  options={{headerShown: false}}
                  name="Root"
                  component={Root}
                />
                <Stack.Screen
                  options={{headerShown: false}}
                  name="Success"
                  component={Success}
                />
                <Stack.Screen
                  options={{headerShown: false}}
                  name="Product"
                  component={Product}
                />
                <Stack.Screen
                  options={{headerShown: false}}
                  name="Referal"
                  component={Referal}
                />
                <Stack.Screen
                  options={{headerShown: false}}
                  name="HistoryProduct"
                  component={HistoryProduct}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  options={{headerShown: false}}
                  name="Registration"
                  component={Registration}
                />
                <Stack.Screen
                  options={{headerShown: false}}
                  name="Pre"
                  component={Pre}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 30,
          }}>
          Ошыбка с соеденением! проверьте ваше интернет подключение
        </Text>
      )}
      <FlashMessage position="top" />
    </View>
  );
};

export default App;
