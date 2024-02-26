import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles.ts';
import CustomButton from '../../components/Button/index.tsx';
import Textinput from '../../components/Textinput/index.tsx';
import SVGIcon from '../../components/SVGIcon/index.tsx';
import icons from '../../assets/icon.ts';
import Icon from 'react-native-vector-icons/Feather.js';
import {useDispatch} from 'react-redux';
import {callLogin, loginInfo} from './slice/index.ts';
import {useAuthContext} from '../../context/use-auth-context';
import {useAppSelector} from '../../redux/hooks/index.ts';
import * as RootNavigation from '../../navigation/rootNavigation';
import routes from '../index.ts';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {isLoginLoading, loginSuccess, loginError} = useAppSelector(loginInfo);

  const dispatch = useDispatch();
  const {updateAuthData} = useAuthContext();

  const showpassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleforgotpassword = () => {
    navigation.navigate('ResetPassword');
  };

  const handlelogin = () => {
    const payload = {
      email: email,
      password: password,
    };
    dispatch(callLogin(payload));
  };

  const handlesignup = () => {
    navigation.navigate('Signup');
  };

  // useEffect(() => {
  //   if (loginSuccess !== undefined && loginSuccess?.jwt) {
  //     const payload = {
  //       jwt: loginSuccess.jwt,
  //       userId: loginSuccess.userId,
  //       roleName: loginSuccess.roleName,
  //     };
  //     updateAuthData(payload);
  //     navigation.navigate('Mainscreen');
  //   } else if (loginError !== undefined) {
  //     Alert.alert('Error Username Password');
  //   }
  // }, [loginSuccess, loginError, updateAuthData]);

  useEffect(() => {
    if (loginSuccess !== undefined && loginSuccess?.jwt) {
      const {jwt, userId, roleName} = loginSuccess;
      const authData = {jwt, userId, roleName};
      updateAuthData(authData);
      navigation.navigate('Mainscreen');
      setEmail('');
      setPassword('');
    } else if (loginError) {
      Alert.alert('Error', 'Invalid username or password');
    }
  }, [loginSuccess, loginError, navigation, updateAuthData]);

  return (
    <SafeAreaView style={styles.container}>
      <SVGIcon style={styles.img} icon={icons.loginEl} key={'icon'} />
      <Text style={styles.text1}>Login</Text>

      <Textinput
        placeholderText={'Enter Email ID*'}
        onChangeText={(text: string) => setEmail(text)}
        value={email}
      />
      <View style={styles.rowIcon}>
        <Textinput
          placeholderText={'Enter Password*'}
          secureTextEntry={!passwordVisible}
          onChangeText={(text: string) => setPassword(text)}
          value={password}
        />
        <Icon
          name={passwordVisible ? 'eye' : 'eye-off'}
          size={22}
          style={styles.eyeIcon}
          color={'#6C6A6A'}
          onPress={showpassword}
        />
      </View>

      <TouchableOpacity onPress={handleforgotpassword}>
        <Text style={styles.text2}>Forgot Password?</Text>
      </TouchableOpacity>

      <CustomButton title={'Login'} onPress={handlelogin} />

      <TouchableOpacity onPress={handlesignup}>
        <Text style={styles.text3}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>

      <View
        style={{
          width: 328,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        {/* <View style={styles.seperator} />
        <Text style={styles.text4}>Login with</Text>
        <View style={styles.seperator}></View> */}
      </View>
    </SafeAreaView>
  );
};

export default Login;
