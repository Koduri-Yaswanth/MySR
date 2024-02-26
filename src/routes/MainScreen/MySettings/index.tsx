import {Text, TouchableOpacity, View, Modal} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles.ts';
import Custom_Modal from '../../../components/Custom_Modal/index.tsx';
import SVGIcon from '../../../components/SVGIcon/index.tsx';
import icons from '../../../assets/icon.ts';
import Icon from 'react-native-vector-icons/Feather.js';
import Icon2 from 'react-native-vector-icons/Ionicons.js';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons.js';
import {clearLogin} from '../../Login/slice/index.ts';
import {useDispatch} from 'react-redux';

const Mysettings = ({navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalHeading, setModalHeading] = useState('');
  const [modalText, setModalText] = useState('');

  const dispatch = useDispatch();

  const handleYesPress = () => {
    navigation.navigate('Login');
    setModalVisible(false);
    dispatch(clearLogin());
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleMyAccount = () => {
    navigation.navigate('MyAccount');
  };

  const handleNotifications = () => {
    navigation.navigate('Notifications');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 30, marginBottom: -20}}>
        <View style={styles.rowView}>
          <Icon3 name="account-circle-outline" size={50} color={'#1B2E72'} />
          <Text style={styles.text1}>My Settings</Text>
        </View>
        <Text style={styles.text2}>
          You can change your account settings with following given options.
        </Text>
      </View>

      <TouchableOpacity onPress={handleMyAccount}>
        <View style={styles.box}>
          <View style={{flexDirection: 'row'}}>
            <Icon3 name="account" size={30} color={'#2C2C2C'} />
            <Text style={styles.text3}>My Account</Text>
            <SVGIcon icon={icons.longArrow} style={styles.vectorIcon} />
          </View>
          <Text>Here, You can update your account details</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNotifications}>
        <View style={styles.box}>
          <View style={{flexDirection: 'row'}}>
            <Icon2 name="notifications" size={30} color={'#2C2C2C'} />
            <Text style={styles.text3}>Notifications</Text>
            <SVGIcon icon={icons.longArrow} style={styles.vectorIcon} />
          </View>
          <Text>Click here to see your all notification</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setModalHeading('Logout');
          setModalText('Are you sure you want to logout?');
          setModalVisible(true);
        }}
        style={styles.box}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="log-out" size={30} color={'#2C2C2C'} />
          <Text style={styles.text3}>Logout</Text>
        </View>
        <Text>Click here to sign out</Text>
      </TouchableOpacity>

      <Custom_Modal
        visible={modalVisible}
        onRightButton={handleClose}
        onLeftButton={handleYesPress}
        modalHeading={modalHeading}
        modalText={modalText}
        showRightButton
        showLeftButton
        leftButtonText={'Yes'}
        rightButtonText={'No'}
      />
    </SafeAreaView>
  );
};

export default Mysettings;
