import {RootState} from '../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  GetProfileError,
  GetProfileInfo,
  GetProfilePayload,
  GetProfileSuccess,
} from '../../../types';

export const initialState: GetProfileInfo = {
  isProfileLoading: false,
  profileSuccess: undefined,
  profileError: undefined,
  profilePayload: undefined,
};

export const getProfileSlice = createSlice({
  name: 'getProfile',
  initialState,
  reducers: {
    callGetProfile: (state, action: PayloadAction<GetProfilePayload>) => {
      state.isProfileLoading = true;
      state.profilePayload = action.payload;
    },
    getProfileSuccess: (state, action: PayloadAction<GetProfileSuccess>) => {
      state.isProfileLoading = false;
      state.profileSuccess = action.payload;
    },
    getProfileError: (state, action: PayloadAction<GetProfileError>) => {
      state.isProfileLoading = false;
      state.profileError = action.payload;
    },
    clearProfile: state => {
      state.isProfileLoading = false;
      state.profileError = undefined;
      state.profileSuccess = undefined;
      state.profilePayload = undefined;
    },
  },
});

export const {
  callGetProfile, getProfileError, getProfileSuccess, clearProfile
} = getProfileSlice.actions;

export const getProfileInfo = (state: RootState) => state.getProfile;

const getProfileReducer = getProfileSlice.reducer;
export default getProfileReducer;
