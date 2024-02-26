import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {InputText} from '../../types';
import styles from './styles';

const Textinput = ({
  placeholderText,
  onChangeText,   
  value,
  secureTextEntry,
  editable
}: InputText) => {
  return (
    <TextInput
      style={styles.textip}
      placeholder={placeholderText}
      placeholderTextColor="#6D6A6A"
      onChangeText={text => onChangeText(text)}
      value={value}
      secureTextEntry={secureTextEntry}
      editable={editable}/>
  );
};


export default Textinput;
