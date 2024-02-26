import { GetAddressByLatLongError, GetAddressByLatLongInfo, GetAddressByLatLongPayload, GetAddressByLatLongSuccess } from "../../../types";
import {RootState} from '../../../redux/store/index';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const initialState: GetAddressByLatLongInfo = {
    isAddressLoading: false,
    getAddressByLatLongError: undefined,
    getAddressByLatLongPayload: undefined,
    getAddressByLatLongSuccess: undefined,
}

export const getAddressByLatLongSlice = createSlice({
  name: 'getAddressByLatLong',
  initialState,
  reducers: {
    callGetAddressByLatLong: (
      state,
      action: PayloadAction<GetAddressByLatLongPayload>,
    ) => {
      state.isAddressLoading = true;
      state.getAddressByLatLongPayload = action.payload;
    },
    callGetAddressByLatLongSuccess: (
      state,
      action: PayloadAction<GetAddressByLatLongSuccess>,
    ) => {
      state.isAddressLoading = false;
      state.getAddressByLatLongSuccess = action.payload;
    },
    callGetAddressByLatLongError: (
      state,
      action: PayloadAction<GetAddressByLatLongError>,
    ) => {
      state.isAddressLoading = false;
      state.getAddressByLatLongError = action.payload;
    },
    clearGetAddressByLatLong: state => {
      state.isAddressLoading = false;
      state.getAddressByLatLongError = undefined;
      state.getAddressByLatLongSuccess = undefined;
      state.getAddressByLatLongPayload = undefined;
    },
  },
});

export const {
  callGetAddressByLatLong,
  callGetAddressByLatLongSuccess,
  callGetAddressByLatLongError,
  clearGetAddressByLatLong,
} = getAddressByLatLongSlice.actions;

export const getAddressByLatLongInfo = (state: RootState) => state.getAddressByLatLong;

const getAddressByLatLongReducer = getAddressByLatLongSlice.reducer;
export default getAddressByLatLongReducer;
