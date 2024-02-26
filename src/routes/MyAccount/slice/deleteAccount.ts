import {RootState} from '../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  DeleteProfileInfo,
  DeleteError,
  DeleteSuccess,
  DeletePayload,
} from '../../../types';

export const initialState: DeleteProfileInfo = {
    isDeleteLoading: false,
    deleteProfileSuccess: undefined,
    deleteProfileError: undefined,
    deleteProfilePayload: undefined,
};

export const deleteProfileSlice = createSlice({
  name: 'deleteProfile',
  initialState,
  reducers: {
    callDeleteProfile: (state, action: PayloadAction<DeletePayload>) => {
      state.isDeleteLoading = true;
      console.log('Delete SLICE')
    },
    callDeleteSuccess: (state, action: PayloadAction<DeleteSuccess>) => {
      state.isDeleteLoading = false;
      state.deleteProfileSuccess = action.payload;
    },
    callDeleteError: (state, action: PayloadAction<DeleteError>) => {
      state.isDeleteLoading = false;
      state.deleteProfileError = action.payload;
    },
    callClearDeleteProfile: state => {
      state.isDeleteLoading = false;
      state.deleteProfileError = undefined;
      state.deleteProfileSuccess = undefined;
    },
  },
});

export const {
  callDeleteProfile,
  callDeleteError,
  callDeleteSuccess,
  callClearDeleteProfile,
} = deleteProfileSlice.actions;

export const deleteProfileInfo = (state: RootState) => state.deleteProfile;

const deleteReducer = deleteProfileSlice.reducer;
export default deleteReducer