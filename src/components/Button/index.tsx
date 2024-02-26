import {StyleSheet, Text, TouchableOpacity, Animated} from 'react-native';
import React, {useState} from 'react';
import {Button} from '../../types';
import styles from './styles';
import {ColorProperties} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const CustomButton = ({title, onPress, isDisable}: Button) => {
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.98,
      duration: 1,
      useNativeDriver: true,
    }).start(); 
  };

  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 10,
      useNativeDriver: true,
    }).start();
  };

  const cardButtonStyle = {
    transform: [{scale: scaleValue}],
  };

  return (
    <Animated.View style={[cardButtonStyle]}>
      <TouchableOpacity
        onPress={!isDisable ? onPress : () => {}}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}>
        <Text style={[isDisable ? styles.disableButton : styles.button]}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CustomButton;
