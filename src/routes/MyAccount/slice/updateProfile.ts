import {RootState} from '../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  UpdateProfileError,
  UpdateProfileInfo,
  UpdateProfilePaylod,
  UpdateProfileSuccess,
} from '../../../types';

export const initialState: UpdateProfileInfo = {
  isUpdateProfileLoading: false,
  updateProfileSuccess: undefined,
  updateProfileError: undefined,
  updateProfilePayload: undefined,
};

export const updateProfileSlice = createSlice({
  name: 'updateProfile',
  initialState,
  reducers: {
    callUpdateProfile: (state, action: PayloadAction<UpdateProfilePaylod>) => {
      state.isUpdateProfileLoading = true;
      state.updateProfilePayload = action.payload;
    },
    updateProfileSuccess: (
      state,
      action: PayloadAction<UpdateProfileSuccess>,
    ) => {
      state.isUpdateProfileLoading = false;
      state.updateProfileSuccess = action.payload;
    },
    updateProfileError: (state, action: PayloadAction<UpdateProfileError>) => {
      state.isUpdateProfileLoading = false;
      state.updateProfileError = action.payload;
    },
    clearUpdateProfile: state => {
      state.isUpdateProfileLoading = false;
      state.updateProfileError = undefined;
      state.updateProfileSuccess = undefined;
      state.updateProfilePayload = undefined;
    },
  },
});

export const {
  callUpdateProfile,
  updateProfileSuccess,
  updateProfileError,
  clearUpdateProfile,
} = updateProfileSlice.actions;

export const updateProfileInfo = (state: RootState) => state.updateProfile;

const updateProfileReducer = updateProfileSlice.reducer;
export default updateProfileReducer;
