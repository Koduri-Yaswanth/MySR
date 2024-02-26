import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNetInfo from './context/app-net-info';
import EnvironmentProvider from '../src/context/use-environment.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './redux/store/index.tsx';
import AuthContext from './context/use-auth-context.tsx';
import SignUpDataProvider from './context/sign-up-context.tsx';
import AppNavigator from './navigation/index.tsx';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SignUpDataProvider>
        <AppNetInfo>
          <AuthContext>
            <EnvironmentProvider>
              <AppNavigator />
            </EnvironmentProvider>
          </AuthContext>
        </AppNetInfo>
      </SignUpDataProvider>
    </Provider>
  );
};

export default App;
