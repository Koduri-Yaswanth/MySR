import {TextInput, Text, View, Pressable} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import icons from '../../assets/icon';
import SVGIcon from '../../components/SVGIcon';

export interface MobileTextProps {
  onChangeText?: any;
  phoneNumber?: string;
  type?: number;
}

const MobileText = ({
  onChangeText = () => {},
  phoneNumber,
  type = 2,
}: MobileTextProps) => {
  const reference = useRef<TextInput>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!visible) {
      reference.current?.focus();
    }
  }, [visible]);

  return (
    <View style={styles.padding}>
      <Pressable
        onPress={() => {
          setVisible(false);
        }}
        style={[styles.style, type === 2 && {borderColor: 'gray'}]}>
        <SVGIcon style={styles.flagIcon} icon={icons.countryFlag} />
        <Text style={[styles.code, type === 2 && {color: 'gray'}]}>+ 91</Text>
        <View
          style={[styles.spacer, type === 2 && {backgroundColor: 'gray'}]}
        />

        <Pressable
          onPress={() => {
            setVisible(false);
          }}
          style={styles.placeholder}>
          <TextInput
            ref={reference}
            onFocus={() => {
              setVisible(false);
            }}
            onBlur={() => {
              setVisible(true);
            }}
            editable={type === 1 || type === 3}
            onChangeText={text => onChangeText(text)}
            value={phoneNumber}
            keyboardType="number-pad"
            maxLength={10}
            placeholderTextColor={'gray'}
            style={[styles.input, type === 2 && {color: 'gray'}]}
          />

          {visible &&
            (phoneNumber?.length === 0 || phoneNumber === undefined) &&
            type !== 2 && (
              <View style={styles.row}>
                <Text style={styles.placeholder1}>
                  {'Enter Mobile No'}
                  {type === 1 && <Text style={styles.red}>{' ' + '*'}</Text>}
                </Text>
              </View>
            )}
        </Pressable>
      </Pressable>
    </View>
  );
};

export default MobileText;