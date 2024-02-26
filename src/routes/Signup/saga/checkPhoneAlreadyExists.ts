import {PayloadAction} from '@reduxjs/toolkit';
import {
  callPhoneExists,
  phoneExistsError,
  phoneExistsSuccess,
} from '../slice/checkPhoneAlreadyExists';
import {PhoneExistsInfo} from '../../../types';
import {SagaReturnType, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosProps, requestApi} from '../../../apiConfig/axios';
import {AxiosResponse} from 'axios';

function* phoneExists(
  action: PayloadAction<PhoneExistsInfo>,
): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'GET',
      url: `user/phoneNumber/exists?phoneNumber=${userPayload.phoneNumber}`,
    };

    console.log('PhoneExists SAGA');

    const response: AxiosResponse = yield call(requestApi, requestParams);

    console.log('PhoneExists RESPONSE');
    console.log("''''''''''''''''''''''''''''''''");

    const {data} = response;
    if (data) {
      yield put(phoneExistsSuccess(response.data));
      console.log('success');
    } else {
      yield put(phoneExistsError(response.data));
      console.log('error');
    }
  } catch (error: any) {
    yield put(
      phoneExistsError({
        error:
          error?.response?.data?.message ||
          'Please check your internet connectivity and try agin after some time.',
      }),
    );
  }
}

export default function* watchPhoneExistsRequest() {
  yield takeLatest(callPhoneExists.type, phoneExists);
}
