import {RootState} from '../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  EmailExistsInfo,
  EmailExistsSuccess,
  EmailExistsError,
  EmailExistsProp,
} from '../../../types';

export const initialState: EmailExistsInfo = {
  isEmailLoading: false,
  emailSuccess: undefined,
  emailError: undefined,
  payload: undefined,
};

export const emailExistsSlice = createSlice({
  name: 'emailExists',
  initialState,
  reducers: {
    callEmailExists: (state, action: PayloadAction<EmailExistsProp>) => {
      state.isEmailLoading = true;
      state.payload = action.payload;
    },
    emailExistsSuccess: (state, action: PayloadAction<EmailExistsSuccess>) => {
      state.isEmailLoading = false;
      state.emailSuccess = action.payload;
    },
    emailExistsError: (state, action: PayloadAction<EmailExistsError>) => {
      state.isEmailLoading = false;
      state.emailError = action.payload;
    },
    clearEmailExists: (state) => {
      state.isEmailLoading = false;
      state.emailError = undefined;
      state.emailSuccess = undefined;
      state.payload = undefined;
    },
  },
});

export const {
  callEmailExists,
  emailExistsSuccess,
  emailExistsError,
  clearEmailExists,
} = emailExistsSlice.actions;

export const emialExistsInfo = (state: RootState) => state.emailExists;

const emailExistsReducer = emailExistsSlice.reducer;
export default emailExistsReducer;
