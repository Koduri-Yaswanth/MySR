/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
// @ts-ignore

import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects';
import {AxiosProps, requestApi} from '../../../apiConfig/axios';
import {ResetPasswordInfo} from '../../../types';
import {
  callResetPassword,
  callResetPasswordSuccess,
  callResetPasswordError,
} from '../slice';

function* resetPassword(action: PayloadAction<ResetPasswordInfo>): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'POST',
      url: `user/forgot-password`,
      params: userPayload,
    };

    console.log('ResetPassword SAGA');

    const response: AxiosResponse = yield call(requestApi, requestParams);

    console.log('ResetPassword RES');
    console.log('-----------------------------');

    const {data} = response;
    if (data) {
      yield put(callResetPasswordSuccess(response.data));
    } else {
      yield put(callResetPasswordError(response.data));
    }
  } catch (error) {
    yield put(
      callResetPasswordError({
        error:
          error?.response?.data?.message ||
          'Please check your internet connectivity and try agin after some time.',
      }),
    );
  }
}

export default function* watchResetPasswordRequest() {
  yield takeLatest(callResetPassword, resetPassword);
}
