import RadioButtonRN from 'radio-buttons-react-native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Background from '../../assets/registration-background.png';
import {strings} from '../../Constants/localization';
import {knowLocation} from '../../utils/LocationPermission';
import LightBtn from '../Registration/LightBtn';

const {width} = Dimensions.get('screen');

export default function OrderModal({
  adress,
  setAdress,
  comment,
  setComment,
  setPlastik,
  modalVisible,
  setModalVisible,
  makeOrder,
  loading,
  marked,
  setMarked,
}) {
  const [region, setRegion] = useState({
    latitude: 41.2995,
    longitude: 69.2401,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    knowLocation(setRegion, setMarked);
  }, []);

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <ImageBackground source={Background} resizeMode="cover" style={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <ScrollView contentContainerStyle={styles.container}>
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                height: 300,
                width,
                marginBottom: 20,
                position: 'relative',
              }}>
              <MapView
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                followUserLocation={true}
                userLocationPriority="high"
                showsMyLocationButton={true}
                minZoomLevel={15}
                zoomTapEnabled={false}
                onRegionChange={(reg) => {}}
                onPress={(e) => {
                  const {latitude, longitude} = e.nativeEvent.coordinate;
                  setMarked(e.nativeEvent.coordinate);
                  setRegion((prev) => ({...prev, latitude, longitude}));
                }}
                region={region}
                style={{
                  ...StyleSheet.absoluteFillObject,
                }}>
                {marked.latitude && (
                  <Marker
                    draggable
                    coordinate={marked}
                    onDragEnd={(e) => {
                      const {latitude, longitude} = e.nativeEvent.coordinate;
                      setMarked(e.nativeEvent.coordinate);
                      setRegion((prev) => ({...prev, latitude, longitude}));
                    }}
                  />
                )}
              </MapView>
            </View>

            <Text
              style={{marginVertical: 20, textAlign: 'center', fontSize: 16}}>
              {strings.ORDER.DATE}
            </Text>

            <TextInput
              style={styles.input}
              placeholder={strings.ORDER.ADRESS}
              placeholderTextColor="#9B9B9B"
              value={adress}
              onChangeText={setAdress}
              numberOfLines={4}
            />

            <View style={{width: '100%', marginBottom: hp('7%')}}>
              <Text>{strings.ORDER.TYPE_LABEL}</Text>
              <RadioButtonRN
                boxActiveBgColor="#ccc"
                data={[
                  {
                    label: strings.ORDER.TYPE1,
                    value: false,
                  },
                  {
                    label: strings.ORDER.TYPE2,
                    value: true,
                  },
                ]}
                initial={1}
                selectedBtn={({value}) => setPlastik(value)}
              />
            </View>

            <TextInput
              style={styles.input}
              placeholder={strings.ORDER.COMMENT}
              placeholderTextColor="#9B9B9B"
              value={comment}
              onChangeText={setComment}
              numberOfLines={5}
              maxLength={150}
              multiline={true}
            />
            <LightBtn
              containerStyle={{width: '100%', height: 60}}
              onPress={makeOrder}
              title={strings.ORDER.SUBMIT}
              loading={loading}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    height: hp('10%'),
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    fontSize: 14,
    marginBottom: hp('7%'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  datePicker: {
    width: '100%',
    height: hp('10%'),
    borderRadius: 4,
    backgroundColor: '#F0F8F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 5,
    marginVertical: 28,
  },
});
