import {RootState} from '../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  PhoneExistsInfo,
  PhoneExistsSuccess,
  PhoneExistsError,
  PhoneExistsProp,
} from '../../../types';

export const initialState: PhoneExistsInfo = {
  isPhoneLoading: false,
  phoneSuccess: undefined,
  phoneError: undefined,
  payload: undefined,
};

export const phoneExistsSlice = createSlice({
  name: 'phoneExists',
  initialState,
  reducers: {
    callPhoneExists: (state, action: PayloadAction<PhoneExistsProp>) => {
      console.log('PhoneExists SLICE');
      state.isPhoneLoading = true;
      state.payload = action.payload;
    },
    phoneExistsSuccess: (state, action: PayloadAction<PhoneExistsSuccess>) => {
      state.isPhoneLoading = false;
      state.phoneSuccess = action.payload;
    },
    phoneExistsError: (state, action: PayloadAction<PhoneExistsError>) => {
      state.isPhoneLoading = false;
      state.phoneError = action.payload;
    },
    clearPhoneExists: state => {
      state.isPhoneLoading = false;
      state.phoneError = undefined;
      state.phoneSuccess = undefined;
      state.payload = undefined;
    },
  },
});

export const {
  callPhoneExists, phoneExistsError,phoneExistsSuccess,clearPhoneExists
} = phoneExistsSlice.actions;

export const phoneExistsInfo = (state: RootState) => state.phoneExists;

const phoneExistsReducer = phoneExistsSlice.reducer;
export default phoneExistsReducer;
