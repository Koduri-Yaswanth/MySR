import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import styles from './styles.ts';
import SVGIcon from '../../components/SVGIcon/index.tsx';
import icons from '../../assets/icon.ts';

const Welcome = ({navigation}) => {
  const handlepress = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'flex-start', width: 328}}>
        <Text style={styles.welcome}>Welcome,</Text>
        <Text style={styles.text1}>Login or create account to continue</Text>
      </View>

      <SVGIcon style={styles.img} icon={icons.welcomeEl} />

      <TouchableOpacity onPress={handlepress}>
        <Text style={styles.text2}>Have an email account?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;
