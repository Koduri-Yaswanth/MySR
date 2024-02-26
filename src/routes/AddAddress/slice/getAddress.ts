import {
  GetAddressInfo,
  GetAddressPayload,
  GetAddressSuccess,
  GetAddressError,
} from '../../../types';
import {RootState} from '../../../redux/store/index';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const initialState: GetAddressInfo = {
  isAddressLoading: false,
  getAddressPayload: undefined,
  getAddressSuccess: undefined,
  getAddressError: undefined,
};

export const getAddressSlice = createSlice({
  name: 'getAddress',
  initialState,
  reducers: {
    callGetAddress: (state, action: PayloadAction<GetAddressPayload>) => {
      state.getAddressPayload = action.payload;
      state.isAddressLoading = true;
    },
    getAddressSuccess: (state, action: PayloadAction<GetAddressSuccess>) => {
      state.getAddressSuccess = action.payload;
      state.isAddressLoading = false;
    },
    getAddressError: (state, action: PayloadAction<GetAddressError>) => {
      state.getAddressError = action.payload;
      state.isAddressLoading = false;
    },
    clearGetAddress: state => {
      state.isAddressLoading = false;
      state.getAddressPayload = undefined;
      state.getAddressSuccess = undefined;
      state.getAddressError = undefined;
    },
  },
});

export const {callGetAddress, getAddressSuccess, getAddressError, clearGetAddress} =
  getAddressSlice.actions;

export const getAddressInfo = (state: RootState) => state.getAddress;

const getAddressReducer = getAddressSlice.reducer;
export default getAddressReducer;
