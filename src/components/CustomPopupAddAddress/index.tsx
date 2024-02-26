import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import Button from '../Button';
import Textinput from '../Textinput';
import Icon from 'react-native-vector-icons/Entypo';

export interface CustomPopupProps {
  title: string;
  buttonTitle?: string;
  closeModal: any;
  firstLane: string | undefined;
  lastLane: string | undefined;
  city: string | undefined;
  state: string | undefined;
  country: string | undefined;
  zipCode: string | undefined;
  addressType: string | undefined;
  setFirstLane: (e: any) => void;
  setLastLane: (e: any) => void;
  setCity: (e: any) => void;
  setState: (e: any) => void;
  setZipCode: (e: any) => void;
  setCountry: (e: any) => void;
  setAddressType: (e: any) => void;
  screenData: object | undefined;
  deleteAddress: any;
  onClose: any;
  update?: any;
}
const CustomPopupAddAddress = ({
  title,
  buttonTitle,
  closeModal,
  firstLane,
  lastLane,
  city,
  state,
  country,
  zipCode,
  addressType,
  setFirstLane,
  setLastLane,
  setCity,
  setCountry,
  setZipCode,
  setState,
  setAddressType,
  screenData,
  deleteAddress,
  onClose,
}: CustomPopupProps) => {
  const {t} = useTranslation();
  const [isDisable, setIsDisable] = useState(true);
  useEffect(() => {
    if (
      firstLane !== undefined &&
      firstLane !== '' &&
      lastLane !== undefined &&
      lastLane !== '' &&
      addressType !== undefined &&
      addressType !== '' &&
      city !== undefined &&
      city !== '' &&
      state !== undefined &&
      state !== '' &&
      country !== undefined &&
      country !== '' &&
      zipCode !== undefined &&
      zipCode !== ''
    ) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [
    isDisable,
    firstLane,
    lastLane,
    addressType,
    city,
    state,
    country,
    zipCode,
  ]);

  return (
    <View style={styles.mainView}>
      <View style={styles.close}>
        <Icon
          name="cross"
          size={25}
          onPress={onClose}
          color={'#1B2E72'}
        />
      </View>
      <Text style={styles.mainTitle}>{title}</Text>
      <View style={styles.spacer} />
      <Textinput
        placeholderText={'Enter Address Type (Office/Home)'}
        value={addressType}
        onChangeText={(e: any) => {
          setAddressType(e);
        }}
      />
      <Textinput
        placeholderText={'Enter Address Line 1'}
        value={firstLane}
        onChangeText={setFirstLane}
      />
      <Textinput
        placeholderText={'Enter Address Line 2'}
        value={lastLane}
        onChangeText={setLastLane}
      />
      <Textinput placeholderText={'City'} value={city} onChangeText={setCity} />
      <Textinput
        placeholderText={'State'}
        value={state}
        onChangeText={setState}
      />
      <Textinput
        placeholderText={'Pincode'}
        value={zipCode}
        onChangeText={setZipCode}
      />
      <Textinput
        placeholderText={'Country'}
        value={country}
        onChangeText={setCountry}
      />
      <View style={styles.spacer} />

      <Button onPress={closeModal} title={buttonTitle} isDisable={isDisable} />

      <View style={styles.spacer} />
      {screenData !== undefined && (
        <Button
          onPress={deleteAddress}
          title={'Delete Address'}
          isDisable={false}
        />
      )}
    </View>
  );
};

export default CustomPopupAddAddress;
