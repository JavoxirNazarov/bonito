import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../Tabs/Main';
import Catalog from '../Tabs/Catalog';
import List from '../Tabs/List';
import CustomTabbBar from '../../components/CustomTabbBar';
import Stocks from '../Tabs/Stocks';
import CatalogIcon from '../../assets/CatalogIcon';
import UserIcon from '../../assets/UserIcon';
import BasketIcon from '../../assets/BasketIcon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      lazy={true}
      tabBar={(props) => <CustomTabbBar {...props} />}>
      <Tab.Screen
        options={{
          tabBarIcon: () => <UserIcon />,
        }}
        name="Main"
        component={Main}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <CatalogIcon />,
        }}
        name="Catalog"
        component={Catalog}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <BasketIcon />,
        }}
        name="List"
        component={List}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="gift-outline"
              size={21}
              color="#806ED8"
            />
          ),
        }}
        name="Stocks"
        component={Stocks}
      />
    </Tab.Navigator>
  );
}
