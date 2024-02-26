import {PayloadAction} from '@reduxjs/toolkit';
import {
  callGetAddress, getAddressError, getAddressSuccess
} from '../slice/getAddress';
import {GetAddressInfo} from '../../../types';
import {SagaReturnType, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosProps, requestApi} from '../../../apiConfig/axios';
import {AxiosResponse} from 'axios';

function* getAddress(
  action: PayloadAction<GetAddressInfo>,
): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'GET',
      url: `user/getAddress/${userPayload?.id}`,
      headers: {
        Authorization: `Bearer ${userPayload?.jwt}`,
      },
      params: userPayload.data,
    };

    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data} = response;
    if (data) {
      yield put(getAddressSuccess(response.data));
      console.log('success');
    } else {
      yield put(getAddressError(response.data));
      console.log('error');
    }
  } catch (error: any) {
    yield put(
      getAddressError({
        error:
          error?.response?.data?.message ||
          'Please check your internet connectivity and try agin after some time.',
      }),
    );
  }
}

export default function* watchGetAddress() {
  yield takeLatest(callGetAddress.type, getAddress);
}
