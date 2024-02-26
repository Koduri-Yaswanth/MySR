import {RootState} from '../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
    DeleteAddressInfo,
    DeleteAddressPayload,
    DeleteAddressSuccess,
    DeleteAddressError
} from '../../../types';

export const initialState: DeleteAddressInfo = {
  isDeleteAddressLoading: false,
  deleteAddressSuccess: undefined,
  deleteAddressError: undefined,
  deleteAddressPayload: undefined,
};

export const deleteAddressSlice = createSlice({
  name: 'deleteAddress',
  initialState,
  reducers: {
    callDeleteAddress: (
      state,
      action: PayloadAction<DeleteAddressPayload>,
    ) => {
      state.isDeleteAddressLoading = true;
      state.deleteAddressPayload = action.payload;
    },
    deleteAddressSuccess: (
      state,
      action: PayloadAction<DeleteAddressSuccess>,
    ) => {
      state.isDeleteAddressLoading = false;
      state.deleteAddressSuccess = action.payload;
    },
    deleteAddressError: (state, action: PayloadAction<DeleteAddressError>) => {
      state.isDeleteAddressLoading = false;
      state.deleteAddressError = action.payload;
    },
    clearDeleteAddress: state => {
      state.isDeleteAddressLoading = false;
      state.deleteAddressError = undefined;
      state.deleteAddressSuccess = undefined;
      state.deleteAddressPayload = undefined;
    },
  },
});

export const {
  callDeleteAddress, deleteAddressError, clearDeleteAddress, deleteAddressSuccess
} = deleteAddressSlice.actions;

export const deleteAddressInfo = (state: RootState) => state.deleteAddress;

const deleteAddressReducer = deleteAddressSlice.reducer;
export default deleteAddressReducer;
