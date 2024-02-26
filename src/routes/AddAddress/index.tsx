import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles.ts';
import BackIcon from '../../components/BackIcon/index.tsx';
import LoationIcon from 'react-native-vector-icons/MaterialIcons.js';
import Icon from 'react-native-vector-icons/AntDesign.js';
import HomeIcon from 'react-native-vector-icons/Entypo.js';

const AddAddress = ({navigation}: any) => {
  const handlemaps = () => {
    navigation.navigate('Maps');
  };

  const handlebackpress = () => {
    navigation.navigate('Mainscreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
        <BackIcon onPress={handlebackpress} />
        <Text style={styles.text1}>Address</Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 40}}>
        <LoationIcon name="my-location" size={30} style={styles.img3} />
        <View style={{flexDirection: 'column', marginLeft: 15}}>
          <Text style={styles.text2}>Use Current Location</Text>
          <Text style={styles.text3}>
            Flat number 20, B ward, SP Apartment, AS Road, Pune, Maharashtra,
            India
          </Text>
        </View>
      </View>

      <View style={styles.seperator} />

      <TouchableOpacity onPress={handlemaps}>
        <View
          style={{
            flexDirection: 'row',
            width: 330,
            height: 49,
            justifyContent: 'space-evenly',
          }}>
          <Icon name="plus" size={30} />
          <Text style={styles.text4}>Add Address</Text>
          <Icon name="arrowright" size={30} />
        </View>
      </TouchableOpacity>

      <View style={styles.seperator} />

      <Text style={styles.text5}>Saved Address</Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginBottom: 25,
          alignItems: 'center',
        }}>
        <HomeIcon name="home" size={30} style={styles.img3} />
        <View style={{flexDirection: 'column', marginTop: 10, marginLeft: 15}}>
          <Text style={styles.text2}>Home</Text>
          <Text style={styles.text3}>
            Flat number 20, B ward, SP Apartment, AS Road, Pune, Maharashtra,
            India
          </Text>
        </View>
      </View>

      <View style={styles.seperator} />
    </SafeAreaView>
  );
};

export default AddAddress;
