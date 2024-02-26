import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeIndex from './Home';
import HistoryIndex from './History';
import mysettings from './MySettings';
import Icon from 'react-native-vector-icons/Feather.js';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons.js';
import styles from './styles';

const Tab = createMaterialBottomTabNavigator();

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

const Mainscreen = () => {
  const [pressedTab, setPressedTab] = useState('HomeIndex');

  const handleTabPress = (tabName: any) => {
    setPressedTab(tabName);
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeIndex"
      barStyle={{backgroundColor: '#F1C40F'}}
      shifting={true}
      backBehavior='none'

  
      >
      <Tab.Screen
        name="HomeIndex"
        
        component={HomeIndex}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#1B2E72',

          tabBarIcon: () =>
            pressedTab === 'HomeIndex' ? (
              <View
                style={{
                  borderWidth: 1,
                  backgroundColor: '#1B2E72',
                  width: 120,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  borderRadius: 5,
                }}>
                <Icon2 name="home" size={30} color={'#F1C40F'} />
                <Text style={{color: '#F1C40F', marginLeft: 10}}>Home</Text>
              </View>
            ) : (
              <Icon2 name="home" size={30} color={'#1B2E72'} />
            ),
        }}
        listeners={{
          tabPress: () => handleTabPress('HomeIndex'),
        }}
      />

      <Tab.Screen
        name="History_index"
        component={HistoryIndex}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: () =>
            pressedTab === 'History_index' ? (
              <View
                style={{
                  borderWidth: 1,
                  backgroundColor: '#1B2E72',
                  width: 120,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  borderRadius: 5,
                }}>
                <Icon2 name="history" size={30} color={'#F1C40F'} />
                <Text style={{color: '#F1C40F', marginLeft: 10}}>History</Text>
              </View>
            ) : (
              <Icon2 name="history" size={30} color={'#1B2E72'} />
            ),
        }}
        listeners={{
          tabPress: () => handleTabPress('History_index'),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={mysettings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () =>
            pressedTab === 'Settings' ? (
              <View
                style={{
                  borderWidth: 1,
                  backgroundColor: '#1B2E72',
                  width: 120,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  borderRadius: 5,
                }}>
                <Icon name="settings" size={30} color={'#F1C40F'} />
                <Text style={{color: '#F1C40F', marginLeft: 10}}>History</Text>
              </View>
            ) : (
              <Icon name="settings" size={29} color={'#1B2E72'} />
            ),
        }}
        listeners={{
          tabPress: () => handleTabPress('Settings'),
        }}
      />
    </Tab.Navigator>
  );
};

export default Mainscreen;
