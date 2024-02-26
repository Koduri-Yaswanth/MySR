import {RootState} from '../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  LoginInfo,
  LoginSuccess,
  LoginError,
  LoginPayload,
} from '../../../types';

export const initialState: LoginInfo = {
  isLoginLoading: false,
  loginSuccess: undefined,
  loginError: undefined,
  loginPayload: undefined,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    callLogin: (state, action: PayloadAction<LoginPayload>) => {
      console.log('Login SLICE');
      state.isLoginLoading = true;
      state.loginPayload = action.payload;
    },
    callLoginSuccess: (state, action: PayloadAction<LoginSuccess>) => {
      state.isLoginLoading = false;
      state.loginSuccess = action.payload;
    },
    callLoginError: (state, action: PayloadAction<LoginError>) => {
      state.isLoginLoading = false;
      state.loginError = action.payload;
    },
    clearLogin: state => {
      state.isLoginLoading = false;
      state.loginSuccess = undefined;
      state.loginError = undefined;
      state.loginPayload = undefined;
    },
  },
});
export const {callLogin, callLoginSuccess, callLoginError, clearLogin} =
  loginSlice.actions;

export const loginInfo = (state: RootState) => state.login;

const loginReducer = loginSlice.reducer;
export default loginReducer;
