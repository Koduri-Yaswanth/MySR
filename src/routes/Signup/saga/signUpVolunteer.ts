/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
// @ts-ignore

import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects';
import {AxiosProps, requestApi} from '../../../apiConfig/axios';
import {SignUpInfo} from '../../../types';
import {
  callSignUp,
  signUpSuccessRequest,
  signUpErrorRequest,
} from '../slice/signUpVolunteer';

function* signUp(action: PayloadAction<SignUpInfo>): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'POST',
      url: `user/volunteer`,
      params: userPayload,
    };

    console.log('SignUp SAGA');

    const response: AxiosResponse = yield call(requestApi, requestParams);

    console.log('SignUp RES' + response);
    console.log('-----------------------------');

    const {data} = response;
    if (data) {
      yield put(signUpSuccessRequest(response.data));
    } else {
      yield put(signUpErrorRequest(response.data));
    }
  } catch (error) {
    yield put(
      signUpErrorRequest({
        error:
          error?.response?.data?.message ||
          'Please check your internet connectivity and try agin after some time.',
      }),
    );
  }
}

export default function* watchSignUpRequest() {
  yield takeLatest(callSignUp, signUp);
}
