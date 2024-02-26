import React from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

// interface Props {
//   children: React.ReactChild | React.ReactChild[];
// }

export const Context = React.createContext (true);

const AppNetInfo = ({children}: any) => {
  const netInfo = useNetInfo();

  return (
    <Context.Provider value={netInfo.isConnected || false}>
      {!netInfo.isConnected && (
        <>
          <SafeAreaView>
            <View style={styles.barStyle}>
              <Text style={styles.labelStyle}>No Internet Connection</Text>
            </View>
          </SafeAreaView>
        </>
      )}
      {children}
    </Context.Provider>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    padding: 5,
    backgroundColor: '#FF1F26',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {color: '#ffffff'},
});

export default AppNetInfo;
