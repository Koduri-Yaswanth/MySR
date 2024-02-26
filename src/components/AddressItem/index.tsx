import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Icons from 'react-native-vector-icons/MaterialIcons';

export const AddressItem = ({
  title,
  subTitle,
  icon,
  color,
  fontSize = 16,
}: any) => {
  return (
    <View style={styles.currentLocation}>
      <View style={styles.imageCurrentLocation}>
        <Icons
          name={icon}
          color={'black'}
          // style={styles.imageLocation}
          size={35}
        />
      </View>
      <View style={styles.nameCol}>
        <Text style={[styles.titleAddress, {fontSize: fontSize}]}>{title}</Text>
        <Text
          style={[
            styles.subTitleAddress,
            {
              color: color === 1 ? 'gray' : '#1B2E72',
              fontSize: fontSize === 16 ? 15 : fontSize - 4,
            },
          ]}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
};
