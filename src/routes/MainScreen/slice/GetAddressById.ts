import {RootState} from '../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  GetAddressByIdError,
  GetAddressByIdInfo,
  GetAddressByIdPayload,
  GetAddressByIdSuccess,
} from '../../../types';

export const initialState: GetAddressByIdInfo = {
  isGetAddressByIdLoading: false,
  getAddressByIdSuccess: undefined,
  getAddressByIdError: undefined,
  getAddressByIdPayload: undefined,
};

export const getAddressByIdSlice = createSlice({
  name: 'getAddresssById',
  initialState,
  reducers: {
    callGetAddressById: (
      state,
      action: PayloadAction<GetAddressByIdPayload>,
    ) => {
      state.isGetAddressByIdLoading = true;
      state.getAddressByIdPayload = action.payload;
    },
    callGetAddressByIdSuccess: (
      state,
      action: PayloadAction<GetAddressByIdSuccess>,
    ) => {
      state.isGetAddressByIdLoading = false;
      state.getAddressByIdSuccess = action.payload;
    },
    callGetAddressByIdError: (
      state,
      action: PayloadAction<GetAddressByIdError>,
    ) => {
      state.isGetAddressByIdLoading = false;
      state.getAddressByIdError = action.payload;
    },
    clearGetAddressById: state => {
      state.isGetAddressByIdLoading = false;
      state.getAddressByIdError = undefined;
      state.getAddressByIdSuccess = undefined;
      state.getAddressByIdPayload = undefined;
    },
  },
});

export const {
  callGetAddressById, callGetAddressByIdError, callGetAddressByIdSuccess, clearGetAddressById
} = getAddressByIdSlice.actions;

export const getAddressByIdInfo = (state: RootState) => state.getAddressById;

const getAddressByIdReducer = getAddressByIdSlice.reducer;
export default getAddressByIdReducer;
