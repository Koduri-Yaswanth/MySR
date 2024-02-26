import {PayloadAction} from '@reduxjs/toolkit';
import {
  callGetAddressByLatLong,
  callGetAddressByLatLongError,
  callGetAddressByLatLongSuccess,
} from '../slice/getAddressByLatLong';
import {GetAddressByLatLongInfo} from '../../../types';
import {SagaReturnType, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosProps, requestApi} from '../../../apiConfig/axios';
import {AxiosResponse} from 'axios';

function* getAddressByLatLong(
  action: PayloadAction<GetAddressByLatLongInfo>,
): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'POST',
      url: `donation/getAddressFromLatlong`,
      params: userPayload.data,
    };

    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data} = response;
    if (data) {
      yield put(callGetAddressByLatLongSuccess(response.data));
      console.log('success');
    } else {
      yield put(callGetAddressByLatLongError(response.data));
      console.log('error');
    }
  } catch (error: any) {
    yield put(
      callGetAddressByLatLongError({
        error:
          error?.response?.data?.message ||
          'Please check your internet connectivity and try agin after some time.',
      }),
    );
  }
}

export default function* watchGetAddressByLatLong() {
  yield takeLatest(callGetAddressByLatLong.type, getAddressByLatLong);
}
