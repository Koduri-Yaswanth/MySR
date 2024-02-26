import {StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import React, {useState} from 'react';
import {CustomModal} from '../../types';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Custom_Modal = ({
  visible,
  onRightButton,
  onLeftButton,
  modalHeading,
  modalText,
  showLeftButton,
  showRightButton,
  showOkButton,
  leftButtonText,
  rightButtonText,
  onOkPress,
  IconName,
  showIcon,
  singleButtonText,
}: CustomModal) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRightButton}>
      <View style={styles.centeredView}>
        <View style={showIcon ? styles.modalView1 : styles.modalView2}>
          <View style={{flexDirection: 'column'}}>
            {showIcon && <Icon name={IconName} size={35} style={styles.icon} />}
            <Text style={styles.modalText1}>{modalHeading}</Text>
          </View>
          <Text style={styles.modalText2}>{modalText}</Text>
          <View style={styles.buttonsContainer}>
            {showLeftButton && (
              <TouchableOpacity
                onPress={onLeftButton}
                style={styles.leftButton}>
                <Text style={styles.leftButtonText}>{leftButtonText}</Text>
              </TouchableOpacity>
            )}
            {showRightButton && (
              <TouchableOpacity
                onPress={onRightButton}
                style={styles.rightButton}>
                <Text style={styles.rightButtonText}>{rightButtonText}</Text>
              </TouchableOpacity>
            )}
            {showOkButton && (
              <TouchableOpacity onPress={onOkPress} style={styles.leftButton}>
                <Text style={styles.leftButtonText}>
                  {singleButtonText}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Custom_Modal;
