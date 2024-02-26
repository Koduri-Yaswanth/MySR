import {Text, View, Modal} from 'react-native';
import React, {useState} from 'react';
import {BottomModal} from '../../types';
import styles from './styles';
import CustomButton from '../Button';
import Address_Modal from '../Address_Modal';

const Bottom_Modal = ({
  visible,
  onPress,
  modalHeading,
  modalText,
  showConfirmLocation,
  ShowUseCurrentLocation,
  showSelectFromMap,
  showAddAddress,
  showModalHeading,
  showModalText,
  modalHeight,
  onAddressPress,
}: BottomModal) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView, {height: modalHeight}]}>
          <View style={styles.separotor}></View>
          {showModalHeading && (
            <Text style={styles.modalHeading}>{modalHeading}</Text>
          )}
          {showModalText && <Text style={styles.modalText}>{modalText}</Text>}
          {showConfirmLocation && (
            <CustomButton title="Confirm Location" onPress={onPress} />
          )}
          {ShowUseCurrentLocation && (
            <CustomButton title="Use Current Location" onPress={onPress} />
          )}
          {showSelectFromMap && (
            <CustomButton title="Select from Map" onPress={onPress} />
          )}
          {showAddAddress && (
            <CustomButton title="Add Address" onPress={onAddressPress} />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default Bottom_Modal;
