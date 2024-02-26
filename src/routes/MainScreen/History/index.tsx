import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import history from './History';
import historyreq from './History-req';

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

const HistoryIndex = () => {
  return (
    <Tab.Navigator
      initialRouteName="history"
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="History"
        component={history}
        options={{
          tabBarLabel: 'History',
        }}
      />

      <Tab.Screen
        name="History-Req"
        component={historyreq}
        options={{
          tabBarLabel: 'Requests',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#F1C40F',
    width: 355,
    height: 50,
    marginTop: 55,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  tabItem: {
    flex: 1,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 5,
  },
  activeTabItem: {
    backgroundColor: '#1B2E72',
    borderColor: '#F1C40F',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HistoryIndex;
