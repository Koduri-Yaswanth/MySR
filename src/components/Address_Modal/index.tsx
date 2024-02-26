import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {AddressModal} from '../../types';
import styles from './styles';
import Textinput from '../Textinput';
import CustomButton from '../Button';
import Icon from 'react-native-vector-icons/Feather';

const Address_Modal = ({visible, onPress}: AddressModal) => {
  const [type, setType] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.row}>
            <Text style={styles.text1}>Add Address</Text>
            <TouchableOpacity onPress={onPress}>
              <Icon name="x" size={30} style={styles.x} />
            </TouchableOpacity>
          </View>
          <Textinput
            placeholderText={'Type (Home/Office)'}
            onChangeText={setType}
            value={type}
          />
          <Textinput
            placeholderText={'Enter Address Line 2'}
            onChangeText={setAddressLine2}
            value={addressLine2}
          />
          <Textinput
            placeholderText={'Landmark'}
            onChangeText={setLandmark}
            value={landmark}
          />
          <Textinput
            placeholderText={'City'}
            onChangeText={setCity}
            value={city}
          />
          <Textinput
            placeholderText={'State'}
            onChangeText={setState}
            value={state}
          />
          <Textinput
            placeholderText={'Country'}
            onChangeText={setCountry}
            value={country}
          />
          <Textinput
            placeholderText={'Pincode'}
            onChangeText={setPincode}
            value={pincode}
          />
          <CustomButton title={'Save'} />
        </View>
      </View>
    </Modal>
  );
};

export default Address_Modal;
