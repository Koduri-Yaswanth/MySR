import {RootState} from '../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
    AddAddressInfo,
    AddAddressSuccess,
    AddAddressError,
    AddAddressPayload,
} from '../../../types';

export const initialState: AddAddressInfo = {
  isAddAddressLoading: false,
  addAddressSuccess: undefined,
  addAddressError: undefined,
  addAddressPayload: undefined,
};

export const addAddressSlice = createSlice({
  name: 'addAddress',
  initialState,
  reducers: {
    callAddAddress: (state, action: PayloadAction<AddAddressPayload>) => {
      state.isAddAddressLoading = true;
      state.addAddressPayload = action.payload;
    },
    addAddressSuccess: (state, action: PayloadAction<AddAddressSuccess>) => {
      state.isAddAddressLoading = false;
      state.addAddressSuccess = action.payload;
    },
    addAddressError: (state, action: PayloadAction<AddAddressError>) => {
      state.isAddAddressLoading = false;
      state.addAddressError = action.payload;
    },
    clearAddAddress: state => {
      state.isAddAddressLoading = false;
      state.addAddressError = undefined;
      state.addAddressSuccess = undefined;
      state.addAddressPayload = undefined;
    },
  },
});

export const {callAddAddress, addAddressSuccess, addAddressError, clearAddAddress} =
  addAddressSlice.actions;

export const addAddressInfo = (state: RootState) => state.addAddress;

const addAddressReducer = addAddressSlice.reducer;
export default addAddressReducer;
