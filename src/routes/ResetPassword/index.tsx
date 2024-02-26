import {SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
// import Logo from '../../assets/resetpassword.svg';
import BackIcon from '../../components/BackIcon/index.tsx';
import CustomButton from '../../components/Button/index.tsx';
import Textinput from '../../components/Textinput/index.tsx';
import styles from './styles.ts';
import * as RootNavigation from '../../navigation/rootNavigation.tsx';
import SVGIcon from '../../components/SVGIcon/index.tsx';
import icons from '../../assets/icon.ts';
import {useDispatch} from 'react-redux';
import {callResetPassword} from './slice/index.ts';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const hanlebackpress = () => {
    RootNavigation.navigate('Login');
  };

  const handleSendEmail = () => {
    const payload = {
      email: email,
    };
    console.log('ResetPassword API-CALL');
    dispatch(callResetPassword(payload));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 20}}>
        <BackIcon onPress={hanlebackpress} />
        <SVGIcon
          style={{width: 320, height: 350}}
          icon={icons.forgetPasswordEl}
        />
      </View>
      <Text style={styles.text}>Forgot Password?</Text>

      <Textinput
        placeholderText={'Enter Email ID*'}
        onChangeText={setEmail}
        value={email}
      />

      <CustomButton
        title={'Send New Password to Email'}
        onPress={handleSendEmail}
      />
    </SafeAreaView>
  );
};

export default ResetPassword;
