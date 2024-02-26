import {
    GetLatLongByAddressError,
    GetLatLongByAddressInfo,
    GetLatLongByAddressPayload,
    GetLatLongByAddressSuccess,
} from '../../../types';
import {RootState} from '../../../redux/store/index';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const initialState: GetLatLongByAddressInfo = {
  isAddressLoading: false,
  getLatLongByAddressError: undefined,
  getLatLongByAddressPayload: undefined,
  getLatLongByAddressSuccess: undefined,
};

export const getLatLongByAddressSlice = createSlice({
  name: 'getLatLongByAddress',
  initialState,
  reducers: {
    callGetLatLongByAddress: (
      state,
      action: PayloadAction<GetLatLongByAddressPayload>,
    ) => {
      state.isAddressLoading = true;
      state.getLatLongByAddressPayload = action.payload;
    },
    callGetLatLongByAddressSuccess: (
      state,
      action: PayloadAction<GetLatLongByAddressSuccess>,
    ) => {
      state.isAddressLoading = false;
      state.getLatLongByAddressSuccess = action.payload;
    },
    callGetLatLongByAddressError: (
      state,
      action: PayloadAction<GetLatLongByAddressError>,
    ) => {
      state.isAddressLoading = false;
      state.getLatLongByAddressError = action.payload;
    },
    clearGetLatLongByAddress: state => {
      state.isAddressLoading = false;
      state.getLatLongByAddressError = undefined;
      state.getLatLongByAddressSuccess = undefined;
      state.getLatLongByAddressPayload = undefined;
    },
  },
});

export const {
  callGetLatLongByAddress,
  callGetLatLongByAddressSuccess,
  callGetLatLongByAddressError,
  clearGetLatLongByAddress,
} = getLatLongByAddressSlice.actions;

export const getLatLongByAddressInfo = (state: RootState) =>
  state.getLatLongByAddress;

const getLatLongByAddressReducer = getLatLongByAddressSlice.reducer;
export default getLatLongByAddressReducer;
