import {PayloadAction} from '@reduxjs/toolkit';
import {
  callUpdateAddress, updateAddressError, updateAddressSuccess
} from '../slice/updateAddress';
import {UpdateAddressInfo} from '../../../types';
import {SagaReturnType, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosProps, requestApi} from '../../../apiConfig/axios';
import {AxiosResponse} from 'axios';

function* updateAddress(
  action: PayloadAction<UpdateAddressInfo>,
): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'PATCH',
      url: `user/updateAddress/${userPayload?.id}`,
      headers: {
        Authorization: `Bearer ${userPayload?.jwt}`,
      },
      params: userPayload.data,
    };

    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data} = response;
    if (data) {
      yield put(updateAddressSuccess(response.data));
      console.log('success');
    } else {
      yield put(updateAddressError(response.data));
      console.log('error');
    }
  } catch (error: any) {
    yield put(
      updateAddressError({
        error:
          error?.response?.data?.message ||
          'Please check your internet connectivity and try agin after some time.',
      }),
    );
  }
}

export default function* watchUpdateAddress() {
  yield takeLatest(callUpdateAddress.type, updateAddress);
}
