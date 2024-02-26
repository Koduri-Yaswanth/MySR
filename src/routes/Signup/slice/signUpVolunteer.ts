import {RootState} from '../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  SignUpUserInfo,
  SignUpError,
  SignUpSuccess,
  SignUpNGOPayload
} from '../../../types';

export const initialState: SignUpUserInfo = {
  isSignUpLoading: false,
  signUpSuccess: undefined,
  signUpError: undefined,
  signUpPayload: undefined,
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    callSignUp: (state, action: PayloadAction<SignUpNGOPayload>) => {
      console.log('SignUp SLICE');
      state.isSignUpLoading = true;
      state.signUpPayload = action.payload;
    },
    signUpSuccessRequest: (state, action: PayloadAction<SignUpSuccess>) => {
      state.isSignUpLoading = false;
      state.signUpSuccess = action.payload;
    },
    signUpErrorRequest: (state, action: PayloadAction<SignUpError>) => {
      state.isSignUpLoading = false;
      state.signUpError = action.payload;
    },
  },
});
export const {callSignUp, signUpSuccessRequest, signUpErrorRequest} =
  signUpSlice.actions;

export const signUpInfo = (state: RootState) => state.signUp;

const signUpReducer = signUpSlice.reducer;
export default signUpReducer;
