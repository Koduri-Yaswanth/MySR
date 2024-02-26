import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Backicon} from '../../types';
import icons from '../../assets/icon';
import SVGIcon from '../SVGIcon';
import styles from './styles';

const BackIcon = ({onPress}: Backicon) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <SVGIcon style={styles.buttonSvg} icon={icons.backButton} />
    </TouchableOpacity>
  );
};

export default BackIcon;
