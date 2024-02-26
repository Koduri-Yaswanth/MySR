import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Homefeed from './Home-feed';
import Homedonatenow from './Home-donatenow';
import SearchIcon from 'react-native-vector-icons/Feather';
import MicrophoneIcon from 'react-native-vector-icons/FontAwesome';
import Custom_Modal from '../../../components/Custom_Modal';
import styles from './styles';
import {GetAddressByLatLongSuccess} from '../../../types';
import {getAddressByLatLongInfo} from '../../AddAddress/slice/getAddressByLatLong';
import {useAppSelector} from '../../../redux/hooks';

const Tab = createMaterialTopTabNavigator();

const CustomTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <SafeAreaView style={styles.tabBarContainer}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({type: 'tabPress', target: route.key});
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.tabItem, isFocused && styles.activeTabItem]}>
            <Text style={styles.tabText}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

const HomeIndex = ({navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    if (!modalVisible) {
      return;
    }
    setModalVisible(true);
  }, [modalVisible]);

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('AddAddress');
  };

  const {getAddressByLatLongSuccess} = useAppSelector(getAddressByLatLongInfo);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <TextInput
          placeholder="Search anything"
          placeholderTextColor="#1B2E72"
          style={styles.searchbox}
        />
        <SearchIcon name="search" size={20} style={styles.searchIcon} />
        <MicrophoneIcon
          name="microphone"
          size={20}
          style={styles.microphoneIcon}
        />
      </View>
      <Tab.Navigator
        initialRouteName="home-feed"
        tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen
          name="Home-feed"
          component={Homefeed}
          options={{
            tabBarLabel: 'Feed',
          }}
        />

        <Tab.Screen
          name="Donate Now"
          component={Homedonatenow}
          options={{
            tabBarLabel: 'Donate Now',
            tabBarLabelStyle: {color: 'red'},
            
          }}
        />
      </Tab.Navigator>
      <Custom_Modal
        visible={modalVisible}
        onOkPress={closeModal}
        modalHeading={'Add Address'}
        modalText={
          'It seems you did not enter your address. Please click on "ok" to get to the add address screen'
        }
        showOkButton
        singleButtonText={'Ok'}
      />
    </View>
  );
};

export default HomeIndex;
