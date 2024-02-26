import {PayloadAction} from '@reduxjs/toolkit';
import {
  callGetLatLongByAddress,
  callGetLatLongByAddressError,
  callGetLatLongByAddressSuccess,
} from '../slice/getLatLongByAddress';
import {GetLatLongByAddressInfo} from '../../../types';
import {SagaReturnType, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosProps, requestApi} from '../../../apiConfig/axios';
import {AxiosResponse} from 'axios';

function* getLatLongByAddress(
  action: PayloadAction<GetLatLongByAddressInfo>,
): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'POST',
      url: `donation/getLatlongFromAddress`,
      params: userPayload,
    };

    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data} = response;
    if (data) {
      yield put(callGetLatLongByAddressSuccess(response.data));
      console.log('success');
    } else {
      yield put(callGetLatLongByAddressError(response.data));
      console.log('error');
    }
  } catch (error: any) {
    yield put(
      callGetLatLongByAddressError({
        error:
          error?.response?.data?.message ||
          'Please check your internet connectivity and try agin after some time.',
      }),
    );
  }
}

export default function* watchGetLatLongByAddress() {
  yield takeLatest(callGetLatLongByAddress.type, getLatLongByAddress);
}
