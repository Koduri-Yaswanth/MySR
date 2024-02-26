import {PayloadAction} from '@reduxjs/toolkit';
import {
  callGetProfile, getProfileError, getProfileSuccess
} from '../slice/getProfile';
import {GetProfileInfo} from '../../../types';
import {SagaReturnType, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosProps, requestApi} from '../../../apiConfig/axios';
import {AxiosResponse} from 'axios';

function* getProfile(
  action: PayloadAction<GetProfileInfo>,
): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'GET',
      url: `user/${userPayload.userId}`,
      headers: {
        Authorization: `Bearer ${userPayload?.jwt}`,
      },
    };

    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data} = response;
    if (data) {
      yield put(getProfileSuccess(response.data));
      console.log('success');
    } else {
      yield put(getProfileError(response.data));
      console.log('error');
    }
  } catch (error: any) {
    yield put(
      getProfileError({
        error:
          error?.response?.data?.message ||
          'Please check your internet connectivity and try agin after some time.',
      }),
    );
  }
}

export default function* watchGetProfileRequest() {
  yield takeLatest(callGetProfile.type, getProfile);
}
