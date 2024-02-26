import {PayloadAction} from '@reduxjs/toolkit';
import {
  callUpdateProfile,
  updateProfileError,
  updateProfileSuccess,
} from '../slice/updateProfile';
import {UpdateProfileInfo} from '../../../types';
import {SagaReturnType, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosProps, requestApi} from '../../../apiConfig/axios';
import {AxiosResponse} from 'axios';

function* updateProfile(
  action: PayloadAction<UpdateProfileInfo>,
): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'PATCH',
      url: `user/${userPayload?.id}`,
      headers: {
        Authorization: `Bearer ${userPayload?.jwt}`,
        'Content-Type': 'multipart/form-data',
      },
      params: userPayload?.data,
    };
    
    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data} = response;
    if (data) {
      yield put(updateProfileSuccess(response.data));
      console.log('success');
    } else {
      yield put(updateProfileError(response.data));
      console.log('error');
    }
  } catch (error: any) {
    yield put(
      updateProfileError({
        error:
          error?.response?.data?.message ||
          'Please check your internet connectivity and try agin after some time.',
      }),
    );
  }
}

export default function* watchUpdateProfileRequest() {
  yield takeLatest(callUpdateProfile.type, updateProfile);
}
