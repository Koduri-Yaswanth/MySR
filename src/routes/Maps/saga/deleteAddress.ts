import {PayloadAction} from '@reduxjs/toolkit';
import {
  callDeleteAddress,
  deleteAddressError,
  deleteAddressSuccess,
} from '../slice/deleteAddress';
import {DeleteAddressInfo} from '../../../types';
import {SagaReturnType, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosProps, requestApi} from '../../../apiConfig/axios';
import {AxiosResponse} from 'axios';

function* deleteAddress(
  action: PayloadAction<DeleteAddressInfo>,
): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: 'DELETE',
      url: `user/deleteAddress/${userPayload.addressId}}`,
    };

    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data} = response;
    if (data) {
      yield put(deleteAddressSuccess(response.data));
      console.log('success');
    } else {
      yield put(deleteAddressError(response.data));
      console.log('error');
    }
  } catch (error: any) {
    yield put(
      deleteAddressError({
        error:
          error?.response?.data?.message ||
          'Please check your internet connectivity and try agin after some time.',
      }),
    );
  }
}

export default function* watchDeleteAddressRequest() {
  yield takeLatest(callDeleteAddress.type, deleteAddress);
}
