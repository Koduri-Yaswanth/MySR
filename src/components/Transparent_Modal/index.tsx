import {Text, View, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {BottomModal} from '../../types';
import styles from './styles';
import CustomButton from '../Button';


const TransparentModal = ({visible, onClose, children}: any) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}>
        <View style={styles.container}>
          <View style={styles.modal}>{children}</View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const Bottom_Modal2 = ({
  visible,
  onPress,
  modalHeading,
  modalText,
  showConfirmLocation,
}: BottomModal) => {
  return (
    <TransparentModal visible={visible} onClose={() => {}}>
      <View style={styles.modal}>
        {showConfirmLocation && (
          <>
            <Text>{modalHeading}</Text>
            <Text>{modalText}</Text>
            <CustomButton title="Confirm Location" onPress={onPress} />
          </>
        )}
        {/* Add other components as needed */}
      </View>
    </TransparentModal>
  );
};

export default Bottom_Modal2;