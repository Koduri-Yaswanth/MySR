import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects';
import {AxiosProps, requestApi} from '../../../apiConfig/axios';
import {LoginInfo} from '../../../types';
import {callLogin, callLoginSuccess, callLoginError} from '../slice';

function* login(action: PayloadAction<LoginInfo>): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'POST',
      url: `user/login`,
      params: userPayload,
    };

    console.log('Login SAGA');

    const response: AxiosResponse = yield call(requestApi, requestParams);

    console.log('Login RESPONSE');
    console.log('-----------------------------');

    const {data} = response;
    if (data) {
      yield put(callLoginSuccess(response.data));
    } else {
      yield put(callLoginError(response.data));
    }
  } catch (error) {
    yield put(
      callLoginError({
        error:
          error?.response?.data?.message ||
          'Please check your internet connectivity and try agin after some time.',
      }),
    );
  }
}

export default function* watchLoginRequest() {
  yield takeLatest(callLogin.type, login);
}
