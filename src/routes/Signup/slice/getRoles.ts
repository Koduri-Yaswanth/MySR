import {RootState} from '../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  GetallRolesError,
  GetallRolesInfo,
  GetallRolesSuccess,
} from '../../../types';

export const initialState: GetallRolesInfo = {
  isRolesLoading: false,
  getRolesSuccess: undefined,
  getRolesError: undefined,
};

export const getAllRolesSlice = createSlice({
  name: 'getAllRoles',
  initialState,
  reducers: {
    callGetAllRoles: (state) => {
      // console.log('API- SLICE');
      state.isRolesLoading = true;
    },
    getAllRolesSuccess: (state, action: PayloadAction<GetallRolesSuccess>) => {
      state.isRolesLoading = false;
      state.getRolesSuccess = action.payload;
    },
    getAllRolesError: (state, action: PayloadAction<GetallRolesError>) => {
      state.isRolesLoading = false;
      state.getRolesError = action.payload;
    },
  },
});
export const {callGetAllRoles, getAllRolesSuccess, getAllRolesError} =
  getAllRolesSlice.actions;

export const getAllRolesInfo = (state: RootState) => state.getAllRoles;

const getAllRolesReducer = getAllRolesSlice.reducer;
export default getAllRolesReducer;
