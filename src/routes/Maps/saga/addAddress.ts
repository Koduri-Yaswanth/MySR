import {PayloadAction} from '@reduxjs/toolkit';
import {
  callAddAddress,
  addAddressError,
  addAddressSuccess
} from '../slice/addAddress';
import { AddAddressInfo } from '../../../types';
import {SagaReturnType, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosProps, requestApi} from '../../../apiConfig/axios';
import {AxiosResponse} from 'axios';

function* addAddress(
  action: PayloadAction<AddAddressInfo>,
): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'GET',
      url: `user/addAddress`,
    };

    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data} = response;
    if (data) {
      yield put(addAddressSuccess(response.data));
      console.log('success');
    } else {
      yield put(addAddressError(response.data));
      console.log('error');
    }
  } catch (error: any) {
    yield put(
      addAddressError({
        error:
          error?.response?.data?.message ||
          'Please check your internet connectivity and try agin after some time.',
      }),
    );
  }
}

export default function* watchAddAddressRequest() {
  yield takeLatest(callAddAddress.type, addAddress);
}
