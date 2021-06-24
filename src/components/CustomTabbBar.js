import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomTabbBat({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <ImageBackground
      source={require('../assets/tabbar.png')}
      resizeMode="cover"
      imageStyle={{height: '100%', width: '100%'}}
      style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              ...styles.tab,
              paddingRight: route.name == 'Catalog' ? 20 : 0,
              paddingLeft: route.name == 'List' ? 20 : 0,
            }}>
            {options.tabBarIcon()}
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity
        style={{
          position: 'absolute',
          zIndex: 1100,
          top: -15,
          elevation: 2,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
        }}
        onPress={() => navigation.navigate('Main')}>
        <LinearGradient
          style={styles.centerBtn}
          start={{x: 0.0, y: 0.5}}
          end={{x: 0.5, y: 1.0}}
          colors={['#FF9472', '#F2709C']}>
          <View
            style={{
              borderRadius: 50,
              borderWidth: 1,
              borderColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <MaterialCommunityIcons
              name="currency-usd"
              size={20}
              color="#fff"
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 84,
    zIndex: 100,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    elevation: 0,
    borderTopWidth: 0,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    padding: 0,
    overflow: 'visible',
  },
  tab: {
    paddingTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerBtn: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
