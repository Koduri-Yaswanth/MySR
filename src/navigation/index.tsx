import AddAddress from '../routes/AddAddress/index.tsx';
import Login from '../routes/Login/index.tsx';
import Signup from '../routes/Signup/index.tsx';
import Mainscreen from '../routes/MainScreen/index.tsx';
import MyAccount from '../routes/MyAccount/index.tsx';
import ResetPassword from '../routes/ResetPassword/index.tsx';
import Welcome from '../routes/Welcome/index.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './rootNavigation.tsx';
import {useAuthContext} from '../context/use-auth-context.tsx';
import {useCallback, useEffect, useState} from 'react';
import {getStorageItem} from '../hooks/use-async-storage.ts';
import {keys} from '../constants/async-storage-keys.ts';
import {ActivityIndicator} from 'react-native';
import Mysettings from '../routes/MainScreen/MySettings/index.tsx';
import Maps from '../routes/Maps/index.tsx';
import routes from '../routes/index.ts';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {authData} = useAuthContext();
  const [accessToken, setAccessToken] = useState();
  const [loading, setLoading] = useState(true);

  const _getAsyncStorageData = useCallback(async () => {
    const userLoginData = await getStorageItem(keys.userLoginData);
    if (userLoginData?.jwt) {
      setAccessToken(userLoginData?.jwt);
    } else {
      setAccessToken(undefined);
    }
    setLoading(false);
  }, [accessToken]);
  useEffect(() => {
    _getAsyncStorageData();
  }, [authData?.jwt, accessToken, _getAsyncStorageData]);
  return (
    <BottomSheetModalProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Maps">
          <Stack.Screen name={routes.Welcome} component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name={'ResetPassword'} component={ResetPassword} />
          <Stack.Screen name="Mainscreen" component={Mainscreen} />
          <Stack.Screen name="MyAccount" component={MyAccount} />
          <Stack.Screen name="MySettings" component={Mysettings} />
          <Stack.Screen name="Maps" component={Maps} />
          <Stack.Screen name="AddAddress" component={AddAddress} />
          {/* <Stack.Screen name="Demo" component={Demo} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
};

export default AppNavigator;
