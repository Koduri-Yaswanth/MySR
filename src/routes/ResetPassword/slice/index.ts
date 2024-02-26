import {RootState} from '../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  ResetPasswordInfo,
  ResetPasswordSuccess,
  ResetPasswordError,
  ResetPasswordPayload,
} from '../../../types';

export const initialState: ResetPasswordInfo = {
  isResetPasswordLoading: false,
  resetPasswordSuccess: undefined,
  resetPasswordError: undefined,
  resetPasswordPayload: undefined,
};

export const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    callResetPassword: (state, action: PayloadAction<ResetPasswordPayload>) => {
      console.log('ResetPassword SLICE');
      state.isResetPasswordLoading = true;
      state.resetPasswordPayload = action.payload;
    },
    callResetPasswordSuccess: (
      state,
      action: PayloadAction<ResetPasswordSuccess>,
    ) => {
      state.isResetPasswordLoading = false;
      state.resetPasswordSuccess = action.payload;
    },
    callResetPasswordError: (
      state,
      action: PayloadAction<ResetPasswordError>,
    ) => {
      state.isResetPasswordLoading = false;
      state.resetPasswordError = action.payload;
    },
    clearResetPassword: state => {
      state.isResetPasswordLoading = false;
      state.resetPasswordSuccess = undefined;
      state.resetPasswordError = undefined;
      state.resetPasswordPayload = undefined;
    },
  },
});
export const {
  callResetPassword,
  callResetPasswordError,
  callResetPasswordSuccess,
  clearResetPassword,
} = resetPasswordSlice.actions;

export const resetPasswordInfo = (state: RootState) => state.resetPassword;

const resetPasswordReducer = resetPasswordSlice.reducer;
export default resetPasswordReducer;
